import { connect } from 'mongoose';
import type { PageServerLoad } from './$types';
import { ShopModel, type IShopData } from '$lib/database';

export const load = (async () => {


	





	await connect(
		'mongodb+srv://joshedwards20003:iVYnC4k00ECWexfI@cluster0.lzs0uhw.mongodb.net/?retryWrites=true&w=majority'
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
