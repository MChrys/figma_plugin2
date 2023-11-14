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
  async function createLegalAndPrivacySection() {
    // Charger la police "Inter Regular"
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    // Créer un cadre pour le texte
    const legalFrame = figma.createFrame();
    legalFrame.resize(600, 400); // Ajuster la taille selon le contenu
    legalFrame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]; // Fond blanc
  
    // Ajouter le texte des mentions légales et de la politique de confidentialité
    const legalText = figma.createText();
    legalText.fontName = { family: "Inter", style: "Regular" };
    legalText.characters = "Mentions Légales et Politique de Confidentialité\n\n" +
                            "Voici où vous inclurez les informations juridiques requises pour votre entreprise ou site web. " +
                            "Assurez-vous de couvrir les aspects nécessaires comme la conformité au RGPD pour les utilisateurs européens, etc.";
    legalText.fontSize = 14;
    legalText.x = 20;
    legalText.y = 20;
    legalText.resize(560, 360); // Laisser une marge à l'intérieur du cadre
    legalFrame.appendChild(legalText);
  
    // Positionner le cadre dans votre espace de travail Figma
    legalFrame.x = 100;
    legalFrame.y = 100;

    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
  }
  
  createLegalAndPrivacySection();
  

  // Make sure to close the plugin when you're done. Otherwise the plugin will

};
