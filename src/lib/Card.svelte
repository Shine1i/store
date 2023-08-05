<script>
    import {Avatar} from "@skeletonlabs/skeleton";

    export let imgSrc = '';
    export let shopImg = '';
    export let avatarSrc = '';
    export let title = '';
    export let author = '';
    export let websiteUrl = '';
    export let shopDescription = '';
</script>
<!--h-[530px]-->
<div class="card  glass relative w-96   card-hover rounded-lg" >
    <header>
        <img src={imgSrc} class="bg-black/50 w-full aspect-[21/9] rounded-t-lg " alt="Post" />
    </header>
    <div class="p-4 space-y-4 ">
        <h3 class="h3 flex gap-2 items-center" data-toc-ignore>
            <Avatar src={shopImg} width="w-11" /><slot name="title">{title}</slot>
        </h3>
        <article class=" pr-20">
           <p>{shopDescription}</p>
        </article>
    </div>
    <hr class="opacity-50" />
    <footer class="p-4 flex justify-start items-center space-x-4">
        <Avatar src={avatarSrc} width="w-8" />
        <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold">By <slot name="author">{author}</slot></h6>
            <a href="https://{websiteUrl}" class="btn variant-filled-primary"><slot name="button">Visit Now</slot></a>
        </div>
    </footer>
</div>
<style>
    .glass{
        border: none;
        -webkit-backdrop-filter: blur(var(--glass-blur,40px));
        backdrop-filter: blur(var(--glass-blur,40px));
        background-color: transparent;
        background-image: linear-gradient(135deg,rgb(255 255 255/var(--glass-opacity,15%)) 0,transparent 100%),linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,transparent 25%);
        box-shadow: 0 0 0 1px rgb(255 255 255/var(--glass-border-opacity,10%)) inset,0 0 0 2px rgb(0 0 0/5%);
        text-shadow: 0 1px rgb(0 0 0/var(--glass-text-shadow-opacity,5%));
    }
</style>