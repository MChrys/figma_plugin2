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
  async function createAboutSection() {
    const titleText = "À Propos de l'Entreprise";
    const aboutText = "Ici, une description de l'entreprise, son histoire, sa mission, et ses valeurs...";
  
    // Charger la police pour les textes
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    // Créer le titre
    const title = figma.createText();
    title.x = 100; // Position X du titre
    title.y = 50; // Position Y du titre
    title.characters = titleText;
    title.fontSize = 24; // Taille de la police pour le titre
  
    // Créer le texte descriptif
    const description = figma.createText();
    description.x = 100; // Position X de la description
    description.y = title.y + title.height + 20; // Position Y de la description
    description.characters = aboutText;
    description.fontSize = 14; // Taille de la police pour la description
  
    // Ajouter des images ou des icônes ici si nécessaire
    // Par exemple, une image représentant l'entreprise
    // ...
  
    figma.closePlugin(); // Fermer le plugin après la création des éléments
  }
  
  createAboutSection();
  

  // Make sure to close the plugin when you're done. Otherwise the plugin will

};
