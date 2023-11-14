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
  async function createServicesOrProductsSection() {
    // Charger les polices nécessaires
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    // Créer un titre pour la section
    const sectionTitle = figma.createText();
    sectionTitle.characters = "Nos Services";
    sectionTitle.fontSize = 24;
    sectionTitle.x = 50;
    sectionTitle.y = 20;
  
    const items = ["Service 1", "Service 2", "Service 3"]; // Remplacer par les noms des services ou produits
    let yOffset = sectionTitle.y + sectionTitle.height + 20;
  
    // Boucle pour créer des cartes pour chaque service/produit
    items.forEach((item, index) => {
      const card = figma.createFrame();
      card.resize(200, 100);
      card.x = 50;
      card.y = yOffset;
  
      // Ajouter un titre ou une brève description
      const text = figma.createText();
      text.characters = item;
      text.fontSize = 14;
      text.x = 10;
      text.y = 10;
      card.appendChild(text);
  
      // Ajouter une image ou un icône ici si nécessaire
      // ...
  
      yOffset += card.height + 20; // Mettre à jour l'offset Y pour la prochaine carte
    });
  
    figma.closePlugin(); // Fermer le plugin après la création des éléments
  }
  
  createServicesOrProductsSection();
};
