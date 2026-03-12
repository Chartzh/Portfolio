<script lang="ts">
    let { certificate, onOpen, featured = false } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="glass p-5 rounded-xl cursor-pointer hover:bg-white/10 hover:border-electricBlue/30 hover:shadow-[0_0_15px_rgba(79,172,254,0.15)] transition-all duration-300 flex flex-col gap-4 group border-l-2 border-transparent hover:border-l-neonCyan/60 relative overflow-hidden {featured
        ? 'ring-1 ring-neonCyan/30 shadow-[0_0_20px_rgba(0,242,254,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-neonCyan/5 before:to-transparent before:pointer-events-none'
        : ''}"
    onclick={() => onOpen(certificate)}
>
    <!-- Featured Glow indicator -->
    {#if featured}
        <div
            class="absolute top-0 right-0 w-32 h-32 bg-neonCyan/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"
        ></div>
    {/if}

    <div class="flex items-start gap-4 w-full relative z-10">
        <div
            class="w-12 h-12 rounded-lg bg-gradient-to-br from-electricBlue/20 to-neonCyan/10 border border-electricBlue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform {featured
                ? 'shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : ''}"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-electricBlue {featured ? 'text-neonCyan' : ''}"
                ><path d="M22 8.08L22 15L12 21L2 15L2 8.08"></path><path
                    d="M12 2L22 8.08L12 14.16L2 8.08z"
                ></path></svg
            >
        </div>

        <div class="overflow-hidden flex-grow pt-1">
            <h3
                class="text-white font-semibold text-sm sm:text-base group-hover:text-electricBlue transition-colors leading-tight line-clamp-2"
                title={certificate.title}
            >
                {certificate.title}
            </h3>
            <p class="text-gray-400 text-xs sm:text-sm mt-1.5 truncate">
                {certificate.issuer}
            </p>
        </div>

        <div
            class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 mt-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-400"
                ><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg
            >
        </div>
    </div>

    <!-- Additional Details (Date & ID) -->
    {#if certificate.credentialId || certificate.issuedDate}
        <div
            class="pt-3 border-t border-white/5 flex flex-col gap-1 w-full text-xs text-gray-500 relative z-10 mt-auto"
        >
            {#if certificate.issuedDate}
                <div class="flex justify-between items-center w-full">
                    <span class="opacity-60">Issued:</span>
                    <span class="text-gray-300 font-medium"
                        >{certificate.issuedDate}</span
                    >
                </div>
            {/if}
            {#if certificate.credentialId}
                <div class="flex justify-between items-center w-full">
                    <span class="opacity-60">Credential ID:</span>
                    <span
                        class="text-gray-400 font-mono truncate max-w-[150px] sm:max-w-[180px]"
                        title={certificate.credentialId}
                        >{certificate.credentialId}</span
                    >
                </div>
            {/if}
        </div>
    {/if}
</div>
