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
// Exemple de code pour un diagramme à barres simple
async function createBarChart() {
  const data = [4, 8, 15, 16, 23, 42]; // Données exemple
  const barWidth = 10;
  const barSpacing = 5;

  data.forEach((value, index) => {
    const barHeight = value * 10; // Exemple de calcul de la hauteur de la barre
    const bar = figma.createRectangle();
    bar.resize(barWidth, barHeight);
    bar.x = index * (barWidth + barSpacing);
    bar.y = 100 - barHeight; // Ajuster en fonction de la hauteur maximale
    bar.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 0.7 } }];
  });

  // Ajouter d'autres éléments comme les étiquettes des axes si nécessaire
  figma.closePlugin();
}
createBarChart();


};
