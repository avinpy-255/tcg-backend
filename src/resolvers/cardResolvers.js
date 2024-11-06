const { readFileSync } = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/tcg.json');
const tcgData = JSON.parse(readFileSync(dataPath, 'utf8'));

const cardResolver = {
  Query: {
    getCards: () => tcgData,
    getSmallImage: () => tcgData.map(card => card.cardImage),
    getBigImage: () => tcgData.map(card => card.bigImage),
    getAttacks: () => tcgData.map(card => card.attacks),
    getWeakness: () => tcgData.map(card => card.weakness),
  },
};

module.exports = cardResolver;
