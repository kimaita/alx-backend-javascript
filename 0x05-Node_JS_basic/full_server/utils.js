const fs = require('fs').promises;

function parseData(data) {
  const lines = data.split('\n').slice(1);
  const stats = {};

  lines.forEach((line) => {
    if (line.length) {
      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[3];
      // eslint-disable-next-line no-prototype-builtins
      if (stats.hasOwnProperty(field)) {
        stats[field].push(firstName);
      } else {
        stats[field] = [firstName];
      }
    }
  });
  return stats;
}

export default async function readDatabase(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  return parseData(data);
}
