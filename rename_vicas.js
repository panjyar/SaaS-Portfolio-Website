const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const replacements = [
  // CSS Variables
  { regex: /--vicas-/g, replacement: '--darshanai-' },
  
  // URLs and Paths
  { regex: /\/products\/vicas/g, replacement: '/products/darshanai' },
  { regex: /vicasinfo\.livnsense\.com/g, replacement: 'darshanaiinfo.livnsense.com' }, // in case there are image domains
  { regex: /vicasbg\.mp4/g, replacement: 'darshanaibg.mp4' },
  
  // Text Replacements
  { regex: /VICAS™/g, replacement: 'DarshanAI™' },
  { regex: /VICAS/g, replacement: 'DarshanAI' },
  { regex: /Vicas/g, replacement: 'DarshanAI' },
  { regex: /ViCAS/g, replacement: 'DarshanAI' },
  { regex: /vicas/gi, replacement: 'darshanai' } // fallback for anything else
];

// Special care for file/folder name updates in imports
const importReplacements = [
  { regex: /WhyVicasExists/g, replacement: 'WhyDarshanAIExists' },
  { regex: /ProblemInVicas/g, replacement: 'ProblemInDarshanAI' },
  { regex: /VicasHero/g, replacement: 'DarshanAIHero' },
  { regex: /VicasAIArchitectureDiagram/g, replacement: 'DarshanAIAIArchitectureDiagram' },
  { regex: /why-vicas/g, replacement: 'why-darshanai' },
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Do exact case replacements first
  content = content.replace(/WhyVicasExists/g, 'WhyDarshanAIExists');
  content = content.replace(/ProblemInVicas/g, 'ProblemInDarshanAI');
  content = content.replace(/VicasHero/g, 'DarshanAIHero');
  content = content.replace(/VicasAIArchitectureDiagram/g, 'DarshanAIArchitectureDiagram');
  content = content.replace(/why-vicas/g, 'why-darshanai');
  
  // Replace VICAS
  content = content.replace(/VICAS™/g, 'DarshanAI™');
  content = content.replace(/VICAS/g, 'DarshanAI');
  content = content.replace(/ViCAS/g, 'DarshanAI');
  content = content.replace(/Vicas/g, 'DarshanAI');
  
  // Variables and paths
  content = content.replace(/--vicas-hero-green/g, '--darshanai-hero-primary'); // specific rename for color
  content = content.replace(/--vicas-/g, '--darshanai-');
  content = content.replace(/\/products\/vicas/g, '/products/darshanai');
  
  // remaining 'vicas' (lowercase)
  content = content.replace(/vicas/g, 'darshanai');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(tsx|ts|css|json)$/.test(file)) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(directory);
console.log('Replacement complete.');
