<script lang="ts">
	import Card from '$lib/Card.svelte';
	import type { IShopData } from '$lib/database';
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	let cardData: Partial<IShopData> = {
		banner: '',
		shopName: '',
		shopDescription: '',
		websiteUrl: '',
		shopImage: ''
	};
	const t: ToastSettings = {
		message: 'Successfully added your store to Heavens Marketplace.',
		background: 'variant-filled-error',
		timeout: 10000
	};
</script>

<main class="flex w-full pt-32 justify-center items-center flex-col lg:flex-row">
	<section>
		<form class="p-5 md:p-10 space-y-6 w-[550px] px-20 pt-20 lg:px-0 lg:pt-16 rounded-lg">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div class="space-y-1">
					<label for="password" class="font-medium">Order id</label>
					<input
						required
						class="input rounded-md py-3"
						title="Input (password)"
						type="password"
						id="password"
						placeholder="a31ae-******"
						bind:value={cardData.key}
					/>
				</div>
				<div class="space-y-1">
					<label for="image" class="font-medium">Banner/Gif</label>
					<input
						required
						id="image"
						bind:value={cardData.banner}
						class="input rounded-md py-3"
						title="Input (text)"
						type="text"
						placeholder="https://i.imgur.com/***"
					/>
				</div>
			</div>

			<div class="space-y-1">
				<label for="website" id="" class="font-medium">Website</label>

				<div class=" rounded-md input-group input-group-divider grid-cols-[auto_1fr_auto]">
					<div class="input-group-shim">https://</div>
					<input
						required
						bind:value={cardData.websiteUrl}
						class="py-3"
						id="website"
						type="text"
						placeholder="www.example.com"
					/>
				</div>
			</div>
			<div class="space-y-1 flex gap-2 items-center w-full">
				<div class="space-y-1 w-full">
					<label for="image" class="font-medium">Shop Image</label>
					<input
						required
						bind:value={cardData.shopImage}
						id="image"
						class="input rounded-md py-3"
						title="Input (text)"
						type="text"
						placeholder="https://i.imgur.com/***"
					/>
				</div>
				<div class="space-y-1 w-full">
					<label for="image" class="font-medium">Shop-Name</label>
					<input
						required
						bind:value={cardData.shopName}
						id="image"
						class="input rounded-md py-3"
						title="Input (text)"
						type="text"
						placeholder="Yougame Store..."
					/>
				</div>
			</div>
			<div class="space-y-1">
				<label for="message" class="font-medium">Shop Description</label>

				<textarea
					bind:value={cardData.shopDescription}
					class="textarea placeholder:opacity-40 rounded-md"
					rows="5"
					minlength="80"
					maxlength="255"
					placeholder="⏰ Our Service Range ⏰
🇨🇭 Encrypted VPS/ Windows RDP
🇨🇭 Encrypted NVME VPS
🇨🇭 Linux VPS Storage
🇨🇭 Dedicated Web Hosting"
				/>
			</div>
			<button
				on:click={() => {
					try {
						fetch('api/order', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(cardData)
						})
							.then((res) => res.json())
							.then((data) => {
								if (data.success) {
									t.message = 'Successfully added your store to Heavens Marketplace.';
									t.background = 'variant-filled-success';
									t.timeout = 5000;
									toastStore.trigger(t);
									goto('/');
								} else {
									t.message = 'Something went wrong please try again';
									t.background = 'variant-filled-error';
									t.timeout = 5000;
									toastStore.trigger(t);
								}
							});
					} catch {
						console.log('err');
					}
				}}
				type="submit"
				class="w-full inline-flex justify-center items-center space-x-2 font-semibold rounded-lg px-8 py-4 leading-6 variant-filled-primary btn"
			>
				<svg
					class="hi-mini hi-paper-airplane inline-block w-5 h-5 opacity-50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					><path
						d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
					/></svg
				>
				<span>Submit Store</span>
			</button>
		</form>
	</section>

	<div class="p-6">
		<h2 class="h3">Card Preview</h2>
		<Card {cardData} />
	</div>
</main>
<!-- END Contact Form -->
