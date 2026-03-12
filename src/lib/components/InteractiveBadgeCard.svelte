<script lang="ts">
    import { slide } from "svelte/transition";

    let isExpanded = $state(false);

    const skillMatrix = [
        {
            category: "Cloud Native",
            skills: ["GKE", "Terraform", "Kubernetes Apps"],
        },
        {
            category: "Data Ops",
            skills: ["BigQuery", "BigLake", "Streaming Analytics", "Looker"],
        },
        {
            category: "AI Ops",
            skills: ["Vertex AI Prompt Design", "Speech-to-Text", "Vision API"],
        },
        {
            category: "Security",
            skills: ["IAM Roles", "Secure Networking"],
        },
    ];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="glass p-5 rounded-xl cursor-pointer hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col gap-4 group border-l-2 border-transparent hover:border-l-blue-400/60 relative overflow-hidden"
    onmouseenter={() => (isExpanded = true)}
    onmouseleave={() => (isExpanded = false)}
    onclick={() => (isExpanded = !isExpanded)}
>
    <!-- Soft background glow -->
    <div
        class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"
    ></div>

    <div class="flex items-start gap-4 w-full relative z-10">
        <!-- Interactive Icon -->
        <div
            class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-300/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.1)]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                class="text-blue-400"
            >
                <path
                    d="M4 14.5L12 19L20 14.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M4 9.5L12 14L20 9.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 5L4 9.5L12 14L20 9.5L12 5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>

        <div class="overflow-hidden flex-grow pt-1 text-left">
            <h3
                class="text-white font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors leading-tight"
            >
                Google Cloud Infrastructure Suite
            </h3>
            <p class="text-gray-400 text-xs sm:text-sm mt-1.5 truncate">
                Specialized Skill Matrix
            </p>
        </div>

        <div
            class="ml-auto transition-transform duration-300 mt-2 {isExpanded
                ? 'rotate-180 text-blue-400'
                : 'rotate-0 text-gray-400'}"
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
                stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg
            >
        </div>
    </div>

    <!-- Dropdown / Marquee content -->
    {#if isExpanded}
        <div
            transition:slide={{ duration: 300 }}
            class="relative z-10 pt-2 border-t border-white/5"
        >
            <div class="flex flex-col gap-4 mt-3">
                {#each skillMatrix as group}
                    <div>
                        <h4
                            class="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider"
                        >
                            {group.category}
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            {#each group.skills as skill}
                                <span
                                    class="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] sm:text-xs px-2.5 py-1 rounded-md"
                                >
                                    {skill}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}

                <!-- JuaraGCP Hall of Fame -->
                <div
                    class="mt-2 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-3 relative overflow-hidden group/award"
                >
                    <div
                        class="absolute -right-2 -top-2 opacity-5 scale-150 transition-transform duration-500 group-hover/award:scale-110 group-hover/award:opacity-10 pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="text-yellow-500"
                            ><path
                                d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28z"
                            /></svg
                        >
                    </div>
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-3 relative z-10 w-full"
                    >
                        <div
                            class="bg-yellow-500/20 p-2 rounded-full text-yellow-500 border border-yellow-500/30 flex-shrink-0 w-fit"
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
                                ><circle cx="12" cy="8" r="7"></circle><polyline
                                    points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                                ></polyline></svg
                            >
                        </div>
                        <div class="flex-grow text-left">
                            <h4 class="text-sm font-bold text-yellow-500">
                                JuaraGCP Hall of Fame
                            </h4>
                            <p class="text-xs text-yellow-500/70 mt-0.5">
                                Completed a 42-badge sprint in 72 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="mt-5 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] sm:text-xs text-gray-500 w-full mb-1 uppercase tracking-wider font-semibold"
            >
                <span class="opacity-60">Status: Verified</span>
                <span class="text-gray-400">Google Cloud Skills Boost</span>
            </div>
        </div>
    {/if}
</div>
