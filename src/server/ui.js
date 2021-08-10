export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Logic Sheet Test') // edit me!
    // .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('About me', 'openAboutSidebar')
    .addItem('Logic Sheet', 'openLogicSheet');

  menu.addToUi();
};

// export const openDialog = () => {
//   const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
//     .setWidth(600)
//     .setHeight(600);
//   SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
// };

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};

export const openLogicSheet = () => {
  const html = HtmlService.createHtmlOutputFromFile('logic-sheet-ui');
  SpreadsheetApp.getUi().showSidebar(html);
};
