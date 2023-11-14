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
figma.ui.onmessage = msg => {
  async function createLineChart() {
    const data = [5, 20, 15, 30, 10]; // Points de données exemple
    const spacing = 50; // Espacement entre les points
    let path = `M 0 ${100 - data[0]}`; // Commencer par le premier point
  
    data.forEach((value, index) => {
      if (index > 0) {
        // Ajouter seulement les points suivants
        path += ` L ${index * spacing} ${100 - value}`;
      }
    });
  
    const line = figma.createVector();
    line.vectorPaths = [{
      windingRule: "EVENODD",
      data: path
    }];
    line.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 1 } }];
    line.strokeWeight = 2;
  
    // Positionner et ajouter d'autres éléments si nécessaire
  }
  createLineChart();
  figma.closePlugin();


};

