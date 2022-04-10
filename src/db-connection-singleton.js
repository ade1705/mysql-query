import sqlite3 from "sqlite3";
import { open } from 'sqlite';


class DBConnector {
  static connection = null;

  static createConnection = async () => {
    DBConnector.connection = await open({
      filename: 'test.db',
      driver: sqlite3.Database
    });
  };
}

export default DBConnector;
