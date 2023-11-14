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
  async function createBubbleChart() {
    const data = [[40, 70, 20], [60, 40, 30], [80, 20, 40]]; // Format [x, y, rayon de la bulle]
  
    data.forEach(([x, y, radius]) => {
      const bubble = figma.createEllipse();
      bubble.resize(radius * 2, radius * 2);
      bubble.x = x;
      bubble.y = 100 - y;
      bubble.fills = [{ type: 'SOLID', color: { r: Math.random(), g: Math.random(), b: Math.random() } }];
      bubble.opacity = 0.6; // Définir l'opacité ici
  
      // Ajouter des axes et des étiquettes si nécessaire
    });
  }
  
  createBubbleChart();
  
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
