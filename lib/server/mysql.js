import mysql from 'mysql2';

let pool = null;

const connect = () => {
  if (!pool) {
    pool = mysql
      .createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      })
      .promise();
  }

  return pool;
};

connect();

const query = async (sql, values) => {
  try {
    const [rows] = await pool.execute(sql, values);

    return [null, rows];
  } catch (error) {
    return [error, null];
  }
};

export { query };
