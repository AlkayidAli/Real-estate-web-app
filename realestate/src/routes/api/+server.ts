import { connect } from '$lib/server/db';
import { json, type RequestHandler } from '@sveltejs/kit';

async function checkPropertiesExist(location: string, status: string): Promise<boolean> {
	const [city, state] = location.split(',').map((item) => item.trim());

	const connection = await connect();
	try {
		const query = `
            SELECT COUNT(*) AS count
            FROM properties
            WHERE city = ?
        `;
		const [rows] = await connection.execute(query, [city]);
		const count = (rows as any)[0].count;
		return count > 0;
	} finally {
		await connection.end();
	}
}

export const GET: RequestHandler = async ({ url }) => {
	try {
		const location = url.searchParams.get('location') || 'Houston, TX';
		const status = url.searchParams.get('status') || 'forSale';

		const connection = await connect();

		try {
			const query = `
                SELECT id, city, state, street_address, price, rent_price, photo_1, photo_2, photo_3, photo_4
                FROM properties
                WHERE city = ? AND state = ?
            `;

			const [rows] = await connection.execute(query, [location, status]);
			return json(rows);
		} finally {
			await connection.end();
		}
	} catch (error) {
		return json({ error: 'Failed to fetch properties' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const requestData = await request.json();
		const location = requestData.location || 'Houston, TX';
		const status = requestData.status || 'forSale';

		const propertiesExist = await checkPropertiesExist(location, status);

		if (propertiesExist) {
			return json({ message: 'Properties already exist in the database.' });
		}

		const apiUrl = new URL(
			`https://zillow-com4.p.rapidapi.com/properties/search?location=${location}&status=${status}&sort=relevance&sortType=asc&priceType=listPrice&listingType=agent`
		);

		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': import.meta.env.VITE_PROPERTIES_API_KEY,
				'x-rapidapi-host': 'zillow-com4.p.rapidapi.com'
			}
		};

		const response = await fetch(apiUrl.toString(), options);

		if (!response.ok) {
			return json(
				{ error: `API request failed with status ${response.status}` },
				{ status: response.status }
			);
		}

		const result = await response.json();

		const properties = result.data?.map((prop: any) => ({
			id: prop.zpid,
			city: prop.address?.city ?? null,
			state: prop.address?.state ?? null,
			street_address: prop.address?.streetAddress ?? null,
			price: prop.estimates?.zestimate ?? null,
			rent_price: prop.estimates?.rentZestimate ?? null,
			photo_1: prop.media?.allPropertyPhotos?.highResolution[0] ?? null,
			photo_2: prop.media?.allPropertyPhotos?.highResolution[1] ?? null,
			photo_3: prop.media?.allPropertyPhotos?.highResolution[2] ?? null,
			photo_4: prop.media?.allPropertyPhotos?.highResolution[3] ?? null
		}));

		const connection = await connect();

		try {
			const query = `
                INSERT INTO properties (id, city, state, street_address, price, rent_price, photo_1, photo_2, photo_3, photo_4)
                SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                WHERE NOT EXISTS (
                    SELECT 1
                    FROM properties
                    WHERE city = ? AND state = ? AND street_address = ?
                )
            `;

			for (const property of properties) {
				await connection.execute(query, [
					property.id,
					property.city,
					property.state,
					property.street_address,
					property.price,
					property.rent_price,
					property.photo_1,
					property.photo_2,
					property.photo_3,
					property.photo_4
				]);
			}
		} finally {
			await connection.end();
		}

		return json({ message: 'Data inserted successfully' });
	} catch (error) {
		return json({ error: 'Failed to fetch or insert data' }, { status: 500 });
	}
};
