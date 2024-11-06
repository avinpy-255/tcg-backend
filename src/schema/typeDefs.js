const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Attack {
    name: String
    damage: String
    energyCost: String
  }

  type Card {
    id: String
    name: String
    type: String
    hp: String
    weakness: String
    attacks: [Attack]
    cardImage: String
    bigImage: String
  }

  type Query {
    getCards: [Card]
    getSmallImage: [String]
    getBigImage: [String]
    getAttacks: [[Attack]]
    getWeakness: [String]
  }
`;

module.exports = typeDefs