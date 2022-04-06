import app from './app.js';
import dbConnectionSingleton from './db-connection-singleton.js';

const port = process.env.PORT || 5000;
app.listen(port, () => {
  dbConnectionSingleton.createConnection()
    .then(() => console.log('connection successful'))
    .catch((error) => console.log({ error }));
  console.log(`Listening: http://localhost:${port}`);
});
