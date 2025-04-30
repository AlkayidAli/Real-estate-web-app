import mysql from 'mysql2/promise';
import 'dotenv/config';

export async function connect() {
	const connection = await mysql.createConnection({
		host: process.env.GLOBAL_DB_HOST,
		user: process.env.GLOBAL_DB_USER,
		password: process.env.GLOBAL_DB_PASSWORD,
		database: process.env.GLOBAL_DB_NAME
	});

	return connection;
}
