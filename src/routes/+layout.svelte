<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
    import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    // Most of your app wide CSS should be put in this file
    import '../app.postcss';
    import {AppShell} from '@skeletonlabs/skeleton';
    import { Toast } from '@skeletonlabs/skeleton';
</script>

<Toast />
<AppShell slotPageHeader="fixed variant-glass top-0 z-50 w-full">
    <svelte:fragment slot="pageHeader">
        <header id="page-header" class="relative flex flex-none items-center py-8">
            <!-- Main Header Content -->
            <div class="flex flex-col text-center md:flex-row md:items-center justify-between w-full space-y-4 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div>
                    <a href="/"
                       class="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                        <svg class="hi-mini hi-cube-transparent inline-block w-5 h-5 text-pink-600 transition group-hover:scale-110 dark:text-pink-400"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <span>Heavens Marketplace</span>
                    </a>
                </div>
                <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:spac  e-y-0 md:space-x-10">
                    <nav class="space-x-3 md:space-x-6">
                        <a href="/  " class="relative group inline-block dark:hover:text-primary-400 transition duration-300">
                            Home
                            <span class="w-full bg-primary-400 absolute bottom-0 left-0 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 h-0.5"></span>
                        </a>
                        <a href="/buy" class="relative group inline-block dark:hover:text-primary-400 transition duration-300">
                            Reedem/Buy
                            <span class="w-full bg-primary-400 absolute bottom-0 left-0 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 h-0.5"></span>
                        </a>

                        <a href="https://t.me/gotzgfx" class="relative group inline-block dark:hover:text-primary-400 transition duration-300">
                            Telegram
                            <span class="w-full bg-primary-400 absolute bottom-0 left-0 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 h-0.5"></span>
                        </a>
                    </nav>

                </div>
            </div>
            <!-- END Main Header Content -->
        </header>
    </svelte:fragment>
    <slot/>
    <svelte:fragment slot="pageFooter">
        <!-- Footer Section: Simple with Social -->
        <footer id="page-footer" class="">
            <div class="flex flex-col lg:flex-row-reverse space-y-5 lg:space-y-0 text-center text-sm container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-16">
                <nav class="lg:w-1/3 lg:text-right space-x-4">
                    <a href="javascript:void(0)" class="text-gray-400 hover:text-[#1da1f2]">
                        <svg class="bi bi-discord inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                    </a>

                    <a href="/" class="text-gray-400 hover:text-[#405de6]">
                        <svg class="bi bi-telegram inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                    </a>

                </nav>
                <nav  class="lg:w-1/3  lg:text-center space-x-2 sm:space-x-4">
                    <a href="https://t.me/gotzgfx"
                       class="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50">
                        Telegram
                    </a>
                    <a href="https://t.me/gotzgfx"
                       class="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50">
                        Want website?
                    </a>

                </nav>
                <div class="lg:w-1/3 lg:text-left text-gray-500 dark:text-gray-400/80">
                    <span class="font-medium">Heavens Marketplace</span> ©
                </div>
            </div>
        </footer>
        <!-- END Footer Section: Simple with Social -->
    </svelte:fragment>
</AppShell>
