import { Schema, model, connect } from 'mongoose';
const shopSchema = new Schema<IShopData>({
	banner: { type: String, required: true },
	websiteUrl: { type: String, required: true },
	shopName: { type: String, required: true },
	shopImage: { type: String, required: true },
	shopDescription: { type: String, required: true },
	expireDate: { type: Date, required: true },
	key: { type: String, required: true }
});
export const ShopModel = model<IShopData>('Shop', shopSchema);

export const redeemedKeySchema = new Schema<IRedeemedKey>({
	key: { type: String, required: true }
});
export const RedeemedKeyModel = model<IRedeemedKey>('RedeemedKey', redeemedKeySchema);

export interface IRedeemedKey {
	key: string;
}

export interface IShopData {
	banner: string;
	websiteUrl: string;
	shopName?: string;
	shopImage?: string;
	shopDescription: string;
	expireDate: Date;
	key: string;
	color:string;
}
export enum Time {
	None,
	Seven,
	Thirty,
	Sixty
}
