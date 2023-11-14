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
  async function createOnlineStoreSection() {
    // Charger la police "Inter Regular"
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    const products = [
      { name: "Produit 1", price: "20€", imageId: "imageNodeId1" },
      { name: "Produit 2", price: "30€", imageId: "imageNodeId2" },
      // Ajouter d'autres produits ici
    ];
  
    let xOffset = 0;
    const cardWidth = 150;
    const cardHeight = 200;
    const spacing = 20;
  
    products.forEach((product, index) => {
      const card = figma.createFrame();
      card.resize(cardWidth, cardHeight);
      card.x = xOffset;
      card.y = 50;
      card.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }];
  
      // Vérifier et ajouter l'image du produit
      const imageNode = figma.getNodeById(product.imageId) as RectangleNode;
      if (imageNode && imageNode.type === "RECTANGLE" && Array.isArray(imageNode.fills) && imageNode.fills[0].type === 'IMAGE') {
        const image = imageNode.clone();
        image.resize(cardWidth, cardHeight - 60);
        image.x = 0;
        image.y = 0;
        card.appendChild(image);
      }
  
      // Ajouter le nom du produit
      const productName = figma.createText();
      productName.fontName = { family: "Inter", style: "Regular" };
      productName.characters = product.name;
      productName.fontSize = 14;
      productName.x = 10;
      productName.y = cardHeight - 50;
      card.appendChild(productName);
  
      // Ajouter le prix du produit
      const productPrice = figma.createText();
      productPrice.fontName = { family: "Inter", style: "Regular" };
      productPrice.characters = product.price;
      productPrice.fontSize = 12;
      productPrice.x = 10;
      productPrice.y = cardHeight - 30;
      card.appendChild(productPrice);
  
      xOffset += cardWidth + spacing;
    });
    figma.closePlugin();
  }
  
  createOnlineStoreSection();
  
  
  
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
