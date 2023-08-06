<script>
	import Hero from '$lib/Hero.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import Card from '$lib/Card.svelte';
	export let data;
</script>

<!-- Hero Section: Image Cover with Header Actions Dark -->
<div
	class="dark bg-cover bg-bottom"
	style="background-image: url('https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg');"
>
	<Hero />
</div>
<div
	id="myElement"
	class=" py-20 xl:max-w-7xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 items-center justify-center mx-auto"
>
	{#each data.allShopEntries as card}
		<Card cardData={card} />
	{/each}
</div>
