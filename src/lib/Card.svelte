<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { IShopData } from './database';
	export let cardData: Partial<IShopData>;
</script>

<!--h-[530px]-->
<div class="card glass relative w-96 card-hover rounded-lg">
	<header>
		<img src={cardData.banner} class="bg-black/50 w-full aspect-[21/9] rounded-t-lg" alt="Post" />
	</header>
	<div class="p-4 space-y-4">
		<h3 class="h3 flex gap-2 items-center" data-toc-ignore>
			<Avatar src={cardData.shopImage} width="w-11" /><slot name="title">{cardData.shopName}</slot>
		</h3>
		<article class=" pr-20">
			<p>{cardData.shopDescription}</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<div class="flex-auto flex justify-between items-center">
			<a href="https://{cardData.websiteUrl}" class="btn variant-filled-primary"
				><slot name="button">Visit Now</slot></a
			>
		</div>
	</footer>
</div>

<style>
	.glass {
		border: none;
		-webkit-backdrop-filter: blur(var(--glass-blur, 40px));
		backdrop-filter: blur(var(--glass-blur, 40px));
		background-color: transparent;
		background-image: linear-gradient(
				135deg,
				rgb(255 255 255 / var(--glass-opacity, 15%)) 0,
				transparent 100%
			),
			linear-gradient(
				var(--glass-reflex-degree, 100deg),
				rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,
				transparent 25%
			);
		box-shadow: 0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%)) inset,
			0 0 0 2px rgb(0 0 0/5%);
		text-shadow: 0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%));
	}
</style>
