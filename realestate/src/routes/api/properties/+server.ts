import { connect } from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const location = url.searchParams.get('location') || 'Houston, TX';
		const status = url.searchParams.get('status') || 'forSale';

		const [city, state] = location.split(',').map((item) => item.trim());

		const connection = await connect();

		try {
			const query = `
                SELECT id, city, state, street_address, price, rent_price, photo_1, photo_2, photo_3, photo_4
                FROM properties
                WHERE city = ? AND state = ?
            `;

			const [rows] = await connection.execute(query, [city, state]);

			return json(rows);
		} finally {
			await connection.end();
		}
	} catch (error) {
		return json({ error: 'Failed to fetch properties' }, { status: 500 });
	}
};
