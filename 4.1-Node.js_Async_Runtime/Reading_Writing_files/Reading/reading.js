const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./reading.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()