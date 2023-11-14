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
  async function createScatterPlot() {
    const data = [[5, 20], [15, 30], [25, 40], [35, 50]]; // Paires de données (x, y)
    
    data.forEach(([x, y]) => {
      const point = figma.createEllipse();
      point.resize(5, 5);
      point.x = x * 10; // Multiplier pour l'échelle
      point.y = 100 - y; // Ajuster l'axe Y
      point.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.3, b: 0.2 } }];
    });
  
    // Ajouter des axes et des étiquettes si nécessair
    figma.closePlugin();
  }
  createScatterPlot();
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
