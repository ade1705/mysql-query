import mysqlPromise from "mysql2/promise.js";

class DBConnector {
  static connection = null;

  static createConnection = async () => {
    DBConnector.connection = await mysqlPromise.createConnection(process.env.CONNECTION_STRING);
  };
}

export default DBConnector;
