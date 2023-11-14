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
  async function createFAQSection() {
    // Charger la police "Inter Regular"
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  
    const faqData = [
      { question: "Comment retourner un produit ?", answer: "Vous pouvez retourner un produit dans les 30 jours..." },
      { question: "Comment suivre ma commande ?", answer: "Utilisez le numéro de suivi dans votre email de confirmation..." },
      // Ajouter d'autres questions et réponses ici
    ];
  
    let yOffset = 0;
    const spacing = 10;
    const frameHeight = 60; // Hauteur de chaque cadre de FAQ
  
    faqData.forEach((faq, index) => {
      // Créer un cadre pour la question et la réponse
      const faqFrame = figma.createFrame();
      faqFrame.resize(300, frameHeight);
      faqFrame.x = 50;
      faqFrame.y = yOffset;
      faqFrame.fills = [{ type: 'SOLID', color: { r: 0.95, g: 0.95, b: 0.95 } }]; // Couleur de fond légère
  
      // Ajouter la question
      const question = figma.createText();
      question.fontName = { family: "Inter", style: "Regular" };
      question.characters = faq.question;
      question.fontSize = 14;
      question.x = 10;
      question.y = 10;
      faqFrame.appendChild(question);
  
      // Ajouter la réponse
      const answer = figma.createText();
      answer.fontName = { family: "Inter", style: "Regular" };
      answer.characters = faq.answer;
      answer.fontSize = 12;
      answer.x = 10;
      answer.y = 30;
      faqFrame.appendChild(answer);
  
      yOffset += frameHeight + spacing;
    });
    figma.closePlugin();
    // Grouper les questions et les réponses pour une meilleure organisation
  }
  createFAQSection();
  
  

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.

};
