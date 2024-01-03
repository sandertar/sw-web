const fs = require('fs');

const rootDir = './coverage';

async function main() {
  const summary = fs.readFileSync(`${rootDir}/summary.txt`, "utf8").split('\n').slice(2, -2).join("\n");
  const coverage = fs.readFileSync(`${rootDir}/coverage.txt`, "utf8").split('\n').slice(1, -2).map((line) => "|" + line + "|").join("\n");
  fs.writeFileSync(`${rootDir}/report.md`, `
  **Coverage summary**
  \n
  ${summary}
  \n
  ${coverage}`)
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
