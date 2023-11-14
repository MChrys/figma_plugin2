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
  async function createAndPositionPieChartParts() {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    const center = { x: 100, y: 100 }; // Centre du graphique
    const radius = 50; // Rayon du graphique
    const data = [25, 25, 25, 25]; // Pourcentage pour chaque part (quarts de cercle)
    let startAngle = 0;
  
    data.forEach((value, index) => {
      // Créer un cercle complet pour chaque part
      const circle = figma.createEllipse();
      circle.resize(radius * 2, radius * 2);
      circle.fills = [{ type: 'SOLID', color: { r: Math.random(), g: Math.random(), b: Math.random() } }];
  
      // Calculer l'angle de fin pour chaque part
      const endAngle = startAngle + (value / 100) * 360;
  
      // Positionner le cercle pour créer une part
      circle.arcData = { startingAngle: startAngle, endingAngle: endAngle, innerRadius: 0 };
      circle.x = center.x - radius;
      circle.y = center.y - radius;
  
      startAngle = endAngle;
  
      // Ajouter des étiquettes pour chaque part (facultatif)
      const text = figma.createText();
      text.fontName = { family: "Inter", style: "Regular" };
      text.characters = `${value}%`;
      text.fontSize = 8;
      text.x = center.x + Math.cos((startAngle - (value / 200) * 360) * Math.PI / 180) * radius - 10;
      text.y = center.y + Math.sin((startAngle - (value / 200) * 360) * Math.PI / 180) * radius - 10;
    });
    figma.closePlugin();
  }
  
  createAndPositionPieChartParts();
  
  
  
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
