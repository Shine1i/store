import { connect } from 'mongoose';
import type { PageServerLoad } from './$types';
import { ShopModel, type IShopData } from '$lib/database';

export const load = (async () => {
	await connect(
		'mongodb+srv://admin:xZznAB65eCngdGpi@cluster0.m1xypq1.mongodb.net/?retryWrites=true&w=majority'
	);
	const allShopEntries = (await ShopModel.find({}))
		.map((shop) => {
			return {
				banner: shop.banner,
				websiteUrl: shop.websiteUrl,
				shopName: shop.shopName,
				shopImage: shop.shopImage,
				shopDescription: shop.shopDescription,
				expireDate: shop.expireDate
			} as IShopData;
		})
		.filter((shop) => shop.expireDate > new Date());
	return { allShopEntries };
}) satisfies PageServerLoad;
