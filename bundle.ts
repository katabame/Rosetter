// CSS
let bundled_css = "";

for (const entry of Deno.readDirSync("./css/")) {
  if (entry.isFile) {
    bundled_css += `/* ${entry.name} */\n`;
    const css = Deno.readTextFileSync(`./css/${entry.name}`);
    bundled_css += css;
    bundled_css += "\n\n";
  }
}

const minified_css = bundled_css
  .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
  .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
  .replace(/;}/g, "}")
  .replace(/\/\*.*?\*\//g, "")
  .replace(/\/\/.*?/g, "");

Deno.writeTextFileSync("./bundled.css", minified_css);

// JS
let bundled_js = "";

for (const entry of Deno.readDirSync("./js/")) {
  if (entry.isFile) {
    bundled_js += `/* ${entry.name} */\n`;
    const js = Deno.readTextFileSync(`./js/${entry.name}`);
    bundled_js += js;
    bundled_js += "\n\n";
  }
}

Deno.writeTextFileSync("./bundled.js", bundled_js);
