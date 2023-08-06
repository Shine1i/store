<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { IShopData } from './database';
	export let cardData: Partial<IShopData>;
	// or hsv or hex


</script>


<!--h-[530px]-->
<div
		id="card"
		style="background-color: {cardData.color};"
	class="card  relative min-h-[535px] p-1 max-h-[535px] w-96 card-hover overflow-hidden rounded-lg"
>
	<header>
		<img src={cardData.banner} class="bg-black/50 p-1 w-full aspect-[21/9] rounded-t-lg" alt="Post" />
	</header>
	<div class="p-4 space-y-4">
		<h3 class="h3 flex gap-2 items-center w-[336px] line-clamp-1" data-toc-ignore>
			<Avatar src={cardData.shopImage} width="w-11" /><slot name="title" class="line-clamp-1"
				>{cardData.shopName}</slot
			>
		</h3>
		<article class="whitespace-pre-wrap w-[330px]">
			{cardData.shopDescription}
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<div class="flex-auto flex justify-between items-center">
			<a href={'https://' + cardData.websiteUrl} class="btn variant-filled-primary"
				><slot name="button">Visit Now</slot></a
			>
		</div>
	</footer>
</div>


