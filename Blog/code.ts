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
  async function createBlogSection() {
    const numberOfArticles = 5; 
    const articleSize = { width: 200, height: 120 };
    const spacing = 20; 
    let yOffset = 0; // Définir un offset de départ pour la position Y
  
    // Charger la police pour tous les éléments de texte
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    // Boucle pour créer chaque article
    for (let i = 0; i < numberOfArticles; i++) {
      const image = figma.createRectangle();
      image.resize(articleSize.width, articleSize.height);
      image.y = yOffset; // Utilisez yOffset pour la position Y
      // ... (autres configurations de l'image)
  
      const title = figma.createText();
      title.x = 0;
      title.y = image.y + articleSize.height + 5; 
      title.characters = "Titre de l'Article"; 
  
      const description = figma.createText();
      description.x = 0;
      description.y = title.y + title.height + 5;
      description.characters = "Description courte de l'article...";
  
      // Mettre à jour yOffset pour le prochain élément
      yOffset += articleSize.height + title.height + description.height + spacing + 10; 
    }
  
    figma.closePlugin(); // Fermer le plugin après la création des éléments
  }
  
  createBlogSection();
  
  
  
  // Vous pouvez grouper ces éléments ou les ajouter à un frame pour un meilleur contrôle
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  //figma.closePlugin();
};
