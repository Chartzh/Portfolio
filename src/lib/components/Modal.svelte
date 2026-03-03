<script lang="ts">
    import { fade, scale } from "svelte/transition";
    import { backOut } from "svelte/easing";

    let {
        isOpen = $bindable(false),
        title,
        description,
        image,
        tags = [],
        link = "",
        type = "project",
    } = $props();

    function closeModal() {
        isOpen = false;
    }

    // Close on escape key
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") closeModal();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm"
        transition:fade={{ duration: 200 }}
        onclick={closeModal}
    >
        <!-- Modal Content -->
        <div
            class="glass-card w-full max-w-2xl relative overflow-hidden"
            onclick={(e) => e.stopPropagation()}
            in:scale={{ duration: 300, easing: backOut, start: 0.9 }}
            out:scale={{ duration: 200, start: 0.95 }}
        >
            <!-- Close Button -->
            <button
                class="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-neonCyan/20 text-white/90 hover:text-neonCyan transition-all border border-white/10 hover:border-neonCyan/50"
                onclick={closeModal}
                aria-label="Close modal"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><line x1="18" y1="6" x2="6" y2="18"></line><line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                    ></line></svg
                >
            </button>

            <!-- Image Area -->
            <div
                class="w-full h-64 bg-gray-900 rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center group"
            >
                <!-- Decoration -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-10"
                ></div>
                {#if image}
                    <img
                        src={image}
                        alt={title}
                        class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                {:else}
                    <div
                        class="text-neonCyan/50 flex flex-col items-center gap-2 z-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                            ></rect><circle cx="8.5" cy="8.5" r="1.5"
                            ></circle><polyline points="21 15 16 10 5 21"
                            ></polyline></svg
                        >
                        <span class="text-sm font-medium tracking-wider"
                            >{type === "project"
                                ? "PROJECT PREVIEW"
                                : "CERTIFICATE"}</span
                        >
                    </div>
                {/if}
            </div>

            <!-- Content Area -->
            <div class="space-y-4">
                <h3 class="text-2xl font-bold text-white">{title}</h3>

                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    {description}
                </p>

                {#if tags.length > 0}
                    <div class="flex flex-wrap gap-2 pt-2">
                        {#each tags as tag}
                            <span
                                class="px-2 py-1 text-xs font-medium text-electricBlue bg-electricBlue/10 border border-electricBlue/20 rounded-md"
                            >
                                {tag}
                            </span>
                        {/each}
                    </div>
                {/if}

                <div class="pt-6 flex justify-end gap-3">
                    {#if link}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-5 py-2.5 rounded-lg bg-neonCyan text-obsidian font-semibold hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all flex items-center gap-2"
                        >
                            {#if type === "project"}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                    ></path><path d="M9 18c-4.51 2-5-2-7-2"
                                    ></path></svg
                                >
                                GitHub / Demo
                            {:else}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path><polyline points="15 3 21 3 21 9"
                                    ></polyline><line
                                        x1="10"
                                        y1="14"
                                        x2="21"
                                        y2="3"
                                    ></line></svg
                                >
                                Verify Credential
                            {/if}
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}
