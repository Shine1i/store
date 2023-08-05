<script>
    import Card from "$lib/Card.svelte";
     let imgSrc = '';
     let shopImg = '';
     let title = '';
     let author = '';
     let websiteUrl = '';
     let avatarSrc = '';
     let shopDescription = '';

//      https://i.imgur.com/kf1HT9i.jpg
</script>
<main class="flex w-full pt-32 justify-center items-center flex-col lg:flex-row">
<section>
    <form onsubmit="return false;" class="p-5 md:p-10 space-y-6 w-[550px] px-20 pt-20 lg:px-0 lg:pt-16  rounded-lg ">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-1">
                <label for="password" class="font-medium">API-key</label>
                <input  class="input rounded-md py-3" title="Input (password)" type="password" id="password" placeholder="A31EA-******" />
            </div>
            <div class="space-y-1 ">
                <label for="image" class="font-medium">Banner/Gif</label>
                <input id="image" bind:value={imgSrc} class="input rounded-md py-3" title="Input (text)" type="text" placeholder="https://i.imgur.com/***" />
            </div>
        </div>

        <div class="space-y-1">
            <label for="website" id="" class="font-medium">Website</label>

            <div class=" rounded-md input-group input-group-divider grid-cols-[auto_1fr_auto]">
                <div class="input-group-shim">https://</div>
                <input bind:value={websiteUrl}  class="py-3" id="website" type="text" placeholder="www.example.com" />
            </div>

        </div>
        <div class="space-y-1 flex gap-2 items-center w-full">

            <div class="space-y-1 w-full">
                <label for="image" class="font-medium">Shop Image</label>
                <input bind:value={shopImg} id="image"  class="input rounded-md py-3" title="Input (text)" type="text" placeholder="https://i.imgur.com/***" />
            </div><div class="space-y-1 w-full ">
            <label  for="image" class="font-medium">Shop-Name</label>
            <input bind:value={title} id="image"  class="input rounded-md py-3" title="Input (text)" type="text" placeholder="Yougame Store..." />
        </div>

        </div>
        <div class="space-y-1">
            <label for="message" class="font-medium">Shop Description</label>

            <textarea  bind:value={shopDescription}   class="textarea placeholder:opacity-40 rounded-md" rows="5" placeholder="⏰ Our Service Range ⏰
🇨🇭 Encrypted VPS/ Windows RDP
🇨🇭 Encrypted NVME VPS
🇨🇭 Linux VPS Storage
🇨🇭 Dedicated Web Hosting" />
        </div>
        <button disabled type="submit" class="w-full inline-flex justify-center items-center space-x-2  font-semibold rounded-lg px-8 py-4 leading-6 variant-filled-primary btn">
            <svg class="hi-mini hi-paper-airplane inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"/></svg>
            <span>Submit Store</span>
        </button>

    </form>
</section>

    <div class="p-6">
        <h2 class="h3">Card Preview</h2>
    <Card {imgSrc} {author} {shopImg} {shopDescription} {avatarSrc} {title} {websiteUrl}>
    </Card>
    </div>

</main>
<!-- END Contact Form -->