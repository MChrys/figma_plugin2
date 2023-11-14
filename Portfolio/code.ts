// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  const numberOfItems = 10; // Nombre total d'éléments dans la galerie
  const itemsPerRow = 3; // Nombre d'éléments par ligne
  const itemSize = { width: 80, height: 120 }; // Taille de chaque élément en format portrait
  const spacing = 10; // Espacement entre les éléments
  const cornerRadius = 8; // Rayon de l'arrondissement des coins
  
  // Boucle pour créer et positionner chaque élément
  for (let i = 0; i < numberOfItems; i++) {
    const row = Math.floor(i / itemsPerRow); // Calcule la rangée actuelle
    const col = i % itemsPerRow; // Calcule la colonne actuelle
  
    // Crée un rectangle pour chaque élément
    const rect = figma.createRectangle();
    rect.resize(itemSize.width, itemSize.height);
    rect.x = col * (itemSize.width + spacing); // Position X basée sur la colonne
    rect.y = row * (itemSize.height + spacing); // Position Y basée sur la rangée
    rect.cornerRadius = cornerRadius; // Arrondit les coins
  
    // Appliquer une couleur ou une image (exemple avec une couleur)
    rect.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.6, b: 0.7 } }];
  
    // Ajouter d'autres propriétés si nécessaire (ombres, etc.)
  }
  
  // Vous pouvez grouper ces éléments ou les ajouter à un frame pour un meilleur contrôle
  
  
  // Vous pouvez grouper ces éléments ou les ajouter à un frame pour un meilleur contrôle
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
