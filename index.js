const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const apolloServer = require('./src/config/apolloServer');

async function startServer() {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(cors());

  // Starting the Apollo server and applying middleware
  await apolloServer.start();
  app.use('/graphql', expressMiddleware(apolloServer));

  // Starting the Express server
  const PORT = 8000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/graphql`));
}

startServer();
