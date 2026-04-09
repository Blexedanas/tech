const parser = require('@babel/parser');
const fs = require('fs');

const filename = process.argv[2];
const code = fs.readFileSync(filename, 'utf-8');

try {
  parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  console.log('No syntax errors found by Babel.');
} catch (e) {
  console.log(`Syntax Error at ${e.loc.line}:${e.loc.column}`);
  console.log(e.message);
  
  const lines = code.split('\n');
  const start = Math.max(0, e.loc.line - 3);
  const end = Math.min(lines.length, e.loc.line + 3);
  for (let i = start; i < end; i++) {
    console.log(`${i + 1}: ${lines[i]}`);
    if (i + 1 === e.loc.line) {
        console.log(' '.repeat(e.loc.column + 3) + '^');
    }
  }
}
