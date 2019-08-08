// Custom Script to generate file structure for a new project
var fs = require('fs');


// File Path Variables
// If changing file paths - UPDATE in gulpfile.js
const cssDir = './css';
const cssFile = './css/main.css';

const emailDir = "./email"; 
const index = "./email/index.html";

const pugIncludesDir = "./pug-includes"; // Can be used for partial pug files
const pugDir = "./pug";
const pugIndex = "./pug/index.pug";

const scssDir = "./scss";
const mainScss = "./scss/main.scss";

// Generate CSS Dir
if (!fs.existsSync(cssDir)){
    fs.mkdirSync(cssDir);
    fs.closeSync(fs.openSync(cssFile, 'a'));
}
// Generate Email Dir
if (!fs.existsSync(emailDir)){
    fs.mkdirSync(emailDir);
    fs.closeSync(fs.openSync(index, 'a'));
}
// Generate Pug Includes
if (!fs.existsSync(pugIncludesDir)){
    fs.mkdirSync(pugIncludesDir);
}
// Generate Main Pug
if (!fs.existsSync(pugDir)){
    fs.mkdirSync(pugDir);
    fs.closeSync(fs.openSync(pugIndex, 'a'));
}
// Generate SCSS
if (!fs.existsSync(scssDir)){
    fs.mkdirSync(scssDir);
    fs.closeSync(fs.openSync(mainScss, 'a'));
}