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
  async function createRadarChart() {
    const data = [3, 2, 5, 4, 3]; // Valeurs pour chaque axe
    const numberOfAxes = data.length;
    const center = { x: 100, y: 100 };
    const radius = 80;
    let path = '';
  
    data.forEach((value, index) => {
      const angle = (Math.PI * 2 / numberOfAxes) * index;
      const x = center.x + Math.cos(angle) * radius * (value / 5);
      const y = center.y + Math.sin(angle) * radius * (value / 5);
      path += index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    });
  
    path += ' Z'; // Fermer le chemin
    const radar = figma.createVector();
    radar.vectorPaths = [{ windingRule: "NONZERO", data: path }];
    radar.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.6, b: 0.8, a: 0.5 } }];
    radar.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    radar.strokeWeight = 1;
  
    // Ajouter des axes et des étiquettes si nécessaire
    figma.closePlugin();
  }
  createRadarChart();
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
