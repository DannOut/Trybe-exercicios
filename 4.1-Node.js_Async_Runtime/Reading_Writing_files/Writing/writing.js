const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./writing.txt', "Um silva era só o que dizia");
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`erro ao escrever o arquivo: ${err.message}`);
  }
}

main();