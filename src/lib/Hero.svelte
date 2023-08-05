<script >

     const scrollTo = () => {
        const element = document.getElementById("myElement");
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };
</script>
<div class="relative  lg:bg-white/90 lg:bg-gradient-to-r from-transparent via-white to-transparent backdrop-blur-sm dark:bg-surface-900 dark:bg-opacity-95 dark:lg:bg-opacity-90 dark:from-transparent dark:via-surface-900 dark:to-transparent">
    <div class="relative text-center container pt-52 lg:pt-40 xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 ">
        <div class="text-sm  flex items-center  gap-1 rounded bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 variant-ghost-error">
            Limited Time Discounts Available Now!<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
        </div>
        <h1 class="text-4xl font-black text-black mb-4 dark:text-white">
            Welcome to Heaven Marketplace!
        </h1>
        <h2 class="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
            Tired of scam-filled experiences? In the search for reputable shops? Discover the most trustworthy, exceptional shops within our verified community at Heaven Marketplace! Start exploring the best now.
        </h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
            <a href="/buy" class="inline-flex justify-center items-center space-x-2  font-semibold rounded-lg px-7 py-3.5 leading-6 variant-filled-primary btn">
                <span>Get Started</span>
                <svg class="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
            </a>
            <button on:click={scrollTo} class="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700 btn">
                <span >Available Stores</span>
            </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-down mx-auto animate-bounce stroke-primary-500"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg>
    </div>
    <!-- END Hero Content -->
</div>