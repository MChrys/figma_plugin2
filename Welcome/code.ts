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
  async function createHomePageWithTitlesAndDetails() {
    // Charger les polices nécessaires
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    // Créer la barre de navigation
    const navbar = figma.createFrame();
    navbar.resize(600, 50);
    navbar.x = 0;
    navbar.y = 0;
    navbar.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.6, b: 0.8 } }];
    
    // Ajouter des éléments de menu à la navbar
    const menuItems = ["Accueil", "À Propos", "Services", "Contact"];
    menuItems.forEach((item, index) => {
      const text = figma.createText();
      text.characters = item;
      text.x = 20 + (index * 100); // Espacement entre les éléments de menu
      text.y = 15;
      navbar.appendChild(text);
    });
    // Créer l'en-tête
    const header = figma.createFrame();
    header.resize(600, 300);
    header.x = 0;
    header.y = navbar.height;
  
    // Ajouter un titre à l'en-tête
    const headerTitle = figma.createText();
    headerTitle.characters = "Bienvenue sur Notre Site Web!";
    headerTitle.fontSize = 24;
    headerTitle.x = 20;
    headerTitle.y = 20;
    header.appendChild(headerTitle);
  
    // Ajouter du texte Lorem Ipsum à l'en-tête
    const headerLorem = figma.createText();
    headerLorem.characters = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";
    headerLorem.fontSize = 14;
    headerLorem.x = 20;
    headerLorem.y = headerTitle.y + headerTitle.height + 10;
    header.appendChild(headerLorem);
  
    // Créer le contenu principal
    const mainContent = figma.createFrame();
    mainContent.resize(600, 300);
    mainContent.x = 0;
    mainContent.y = header.y + header.height;
  
    // Ajouter un titre au contenu principal
    const mainTitle = figma.createText();
    mainTitle.characters = "Découvrez Nos Services";
    mainTitle.fontSize = 20;
    mainTitle.x = 20;
    mainTitle.y = 20;
    mainContent.appendChild(mainTitle);
  
    // Ajouter du texte Lorem Ipsum au contenu principal
    const mainLorem = figma.createText();
    mainLorem.characters = "Pellentesque habitant morbi tristique senectus et netus...";
    mainLorem.fontSize = 14;
    mainLorem.x = 20;
    mainLorem.y = mainTitle.y + mainTitle.height + 10;
    mainContent.appendChild(mainLorem);
  
    // Créer le pied de page
    const footer = figma.createFrame();
    footer.resize(600, 100);
    footer.x = 0;
    footer.y = mainContent.y + mainContent.height;
    footer.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
  
    // Ajouter des informations de contact au footer
    const contactInfo = "Contactez-nous: info@example.com | Tel: 123-456-7890";
    const contactText = figma.createText();
    contactText.characters = contactInfo;
    contactText.fontSize = 12;
    contactText.x = 20;
    contactText.y = 40;
    footer.appendChild(contactText);
  
    figma.closePlugin(); // Fermer le plugin après la création des éléments
  }
  
  createHomePageWithTitlesAndDetails();
  
  
  
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will

};
