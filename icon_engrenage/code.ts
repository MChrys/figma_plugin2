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
  function createGearIcon() {
    const gearSize = 48; // Taille globale de l'engrenage
    const toothWidth = 6; // Largeur des dents
    const toothLength = gearSize / 2; // Longueur des dents
    const toothCount = 6; // Nombre de dents
    const centerCircleRadius = 12; // Rayon du cercle central
  
    const gearCenter = { x: 100, y: 100 }; // Centre de l'engrenage
  
    // Créer les dents de l'engrenage
    const teeth = [];
    for (let i = 0; i < toothCount; i++) {
      const tooth = figma.createRectangle();
      tooth.resize(toothWidth, toothLength);
      tooth.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
      // Positionner et faire pivoter chaque dent
      const angle = (Math.PI * 2 / toothCount) * i;
      tooth.x = gearCenter.x + Math.cos(angle) * centerCircleRadius - toothWidth / 2;
      tooth.y = gearCenter.y + Math.sin(angle) * centerCircleRadius - toothLength / 2;
      tooth.rotation = (360 / toothCount) * i;
      teeth.push(tooth);
    }
  
    // Créer le cercle central de l'engrenage
    const centerCircle = figma.createEllipse();
    centerCircle.resize(centerCircleRadius * 2, centerCircleRadius * 2);
    centerCircle.x = gearCenter.x - centerCircleRadius;
    centerCircle.y = gearCenter.y - centerCircleRadius;
    centerCircle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
    // Grouper les dents et le cercle central
    const gear = figma.group([centerCircle, ...teeth], figma.currentPage);
    gear.name = "Gear Icon";
  
    // Positionner l'icône dans l'espace de travail
    gear.x = gearCenter.x - gearSize / 2;
    gear.y = gearCenter.y - gearSize / 2;
    figma.closePlugin();
  }
  
  createGearIcon();
  
  
  

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
