<script lang="ts">
    let { project, onOpen } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="glass-card group cursor-pointer flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 relative border-t-2 border-transparent hover:border-t-neonCyan/60"
    onclick={() => onOpen(project)}
>
    <!-- WIP Badge -->
    {#if project.status === "wip"}
        <div
            class="absolute top-4 right-4 z-10 px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 rounded-full backdrop-blur-md"
        >
            🚧 WIP
        </div>
    {/if}

    <div
        class="h-40 w-full rounded-xl bg-gray-900 mb-4 overflow-hidden relative border border-white/5"
    >
        <!-- Overlay gradient -->
        <div
            class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 group-hover:opacity-50 transition-opacity"
        ></div>
        <div
            class="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-110 transition-transform duration-700"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"
                ></polyline><line x1="12" y1="22.08" x2="12" y2="12"
                ></line></svg
            >
        </div>
    </div>

    <h3
        class="text-xl font-bold text-white mb-2 group-hover:text-neonCyan transition-colors"
    >
        {project.title}
    </h3>

    <p class="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
        {project.shortDescription}
    </p>

    <div class="flex flex-wrap gap-1.5 mt-auto">
        {#each project.tags.slice(0, 3) as tag}
            <span
                class="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:border-neonCyan/30 group-hover:text-neonCyan/80 transition-colors"
            >
                {tag}
            </span>
        {/each}
        {#if project.tags.length > 3}
            <span
                class="text-[10px] font-medium px-2 py-0.5 rounded-full border border-transparent text-gray-500"
            >
                +{project.tags.length - 3}
            </span>
        {/if}
    </div>
</div>
