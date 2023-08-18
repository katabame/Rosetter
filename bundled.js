/* injectCSS.js */
async function injectCSS() {
  const url = chrome.runtime.getURL("bundled.css");

  await fetch(url).then(async (css) => {
    console.log(css.text);
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(await css.text());
    document.adoptedStyleSheets = [sheet];
  });
}

injectCSS();


