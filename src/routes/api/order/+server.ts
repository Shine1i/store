import { RedeemedKeyModel, Time, type IShopData, ShopModel } from '$lib/database';
import { json } from '@sveltejs/kit';
import { connect } from 'mongoose';

export async function POST({ request }) {
	await connect(
		'mongodb+srv://joshedwards20003:iVYnC4k00ECWexfI@cluster0.lzs0uhw.mongodb.net/?retryWrites=true&w=majority'
	);
	const { key, banner, websiteUrl, shopName, shopImage, shopDescription, color } =
		await request.json();

	// Check if the purchase key has already been redeemed
	const existingRedeemedKey = await RedeemedKeyModel.findOne({ key: key });
	if (existingRedeemedKey) {
		return json({ error: 'The key has already been used.' });
	}

	const data = await fetch('https://dev.sellix.io/v1/orders/' + key, {
		headers: {
			Authorization: 'Bearer 9EnsU4QMiUPfHovOFzI7STKmH1hScKMw1acHVgotg6RrYWGnO7R11t1NriNbMkBI'
		}
	});

	const dataJson = await data.json();
	if (dataJson.status == 404) return json({ error: 'Invalid key.' });
	const productId = dataJson.data.order.product_id as string;
	const paymentStatus = dataJson.data.order.status as string;
	let timeToExpire = Time.None;
	if (paymentStatus == 'COMPLETED') {
		switch (productId) {
			case '64cd1bd026181':
				timeToExpire = Time.Seven;
				break;
			case '64cd1c247ac11':
				timeToExpire = Time.Thirty;
				break;
			case '64cd1c47c9f9d':
				timeToExpire = Time.Sixty;
				break;
		}
		console.log(timeToExpire);

		if (timeToExpire != Time.None) {
			const shopData = {
				banner: banner,
				websiteUrl: websiteUrl,
				shopName: shopName,
				shopImage: shopImage,
				shopDescription: shopDescription,
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				expireDate: getDateBasedOnTime(timeToExpire)!,
				key: key,
				color: color
			} satisfies IShopData;
			const newShop = new ShopModel(shopData);
			const newKey = new RedeemedKeyModel({ key: key });
			await newShop.save();
			await newKey.save();
			return json({ success: true });
		} else {
			return json({ error: 'Invalid product ID.' });
		}
	} else return json({ error: 'Payment not completed.' });
}

function addDaysToDate(date: Date, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function getDateBasedOnTime(time: Time): Date | null {
	const currentDate = new Date();

	switch (time) {
		case Time.Seven:
			return addDaysToDate(currentDate, 7);
		case Time.Thirty:
			return addDaysToDate(currentDate, 30);
		case Time.Sixty:
			return addDaysToDate(currentDate, 60);
		default:
			return null;
	}
}
