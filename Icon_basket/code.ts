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
  function createShoppingCartIcon() {
    const iconSize = 24; // Taille de l'icône
  
    // Créer le corps du panier
    const body = figma.createPolygon();
    body.pointCount = 4;
    body.resize(iconSize, iconSize / 2);
    body.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
    // Ajouter une poignée
    const handle = figma.createEllipse();
    handle.resize(iconSize / 4, iconSize / 4);
    handle.x = iconSize / 4;
    handle.y = -iconSize / 8;
    handle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
    // Grouper les éléments
    const group = figma.group([body, handle], figma.currentPage);
    group.name = "Shopping Cart Icon";
  
    // Positionner l'icône dans l'espace de travail
    group.x = 100;
    group.y = 100;
    figma.closePlugin();
  }
  
  createShoppingCartIcon();
  

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
