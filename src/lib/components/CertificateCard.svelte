<script lang="ts">
    let { certificate, onOpen } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="glass p-4 rounded-xl cursor-pointer hover:bg-white/10 hover:border-electricBlue/30 hover:shadow-[0_0_15px_rgba(79,172,254,0.15)] transition-all duration-300 flex items-center gap-4 group border-l-2 border-transparent hover:border-l-neonCyan/60"
    onclick={() => onOpen(certificate)}
>
    <div
        class="w-12 h-12 rounded-lg bg-gradient-to-br from-electricBlue/20 to-neonCyan/10 border border-electricBlue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
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
            class="text-electricBlue"
            ><path d="M22 8.08L22 15L12 21L2 15L2 8.08"></path><path
                d="M12 2L22 8.08L12 14.16L2 8.08z"
            ></path></svg
        >
    </div>

    <div class="overflow-hidden">
        <h3
            class="text-white font-semibold text-sm truncate group-hover:text-electricBlue transition-colors"
        >
            {certificate.title}
        </h3>
        <p class="text-gray-400 text-xs truncate">{certificate.issuer}</p>
    </div>

    <div
        class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0"
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
