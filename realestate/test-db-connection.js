import 'dotenv/config';
import mysql from 'mysql2/promise';

async function testConnection() {
	try {
		const connection = await mysql.createConnection({
			host: process.env.GLOBAL_DB_HOST,
			user: process.env.GLOBAL_DB_USER,
			password: process.env.GLOBAL_DB_PASSWORD,
			database: process.env.GLOBAL_DB_NAME
		});
		console.log('Connected to the database successfully!');
		await connection.end();
	} catch (error) {
		console.error('Failed to connect to the database:', error);
	}
}

testConnection();
