<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import TechStack from "$lib/components/TechStack.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import CertificateCard from "$lib/components/CertificateCard.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import { inView } from "$lib/actions/inView";

    // --- MOCK DATA ---

    const projects = [
        {
            id: 1,
            title: "Stellar AI",
            shortDescription:
                "End-to-end GenAI assistant integrating ESP32-S3 hardware for edge computing.",
            description:
                "Stellar AI is a comprehensive edge computing solution that brings Generative AI capabilities directly to hardware. By utilizing an ESP32-S3 microcontroller, this system bypasses heavy cloud-compute latency for specific offline tasks while intelligently routing complex queries to the cloud. Designed with energy efficiency and real-time response in mind.",
            tags: ["ESP32-S3", "GenAI", "C++", "Python", "Edge Computing"],
            image: "",
            link: "https://github.com",
            status: "wip",
        },
        {
            id: 2,
            title: "Daurama",
            shortDescription:
                "Computer vision web app using Gemini API with gamification for sustainable waste management.",
            description:
                "Daurama introduces a gamified approach to waste sorting and recycling. Leveraging the Gemini API for advanced computer vision analysis, users can scan waste items to identify correct recycling categories. The platform rewards sustainable actions with points that can be redeemed for eco-friendly products, helping communities build better habits.",
            tags: [
                "SvelteKit",
                "Gemini API",
                "Tailwind CSS",
                "Computer Vision",
            ],
            image: "",
            link: "https://github.com",
            status: "completed",
        },
        {
            id: 3,
            title: "Vye YouTube RAG",
            shortDescription:
                "Intelligent Q&A system synthesizing knowledge from YouTube videos using RAG architecture.",
            description:
                "Vye is a Retrieval-Augmented Generation (RAG) system built to extract, summarize, and query information directly from YouTube video transcripts. Users can paste a URL and immediately converse with the content of the video, saving hours of watch time. Built with a vector database for semantic search.",
            tags: ["Python", "LangChain", "Vector DB", "RAG", "OpenAI"],
            image: "",
            link: "https://github.com",
            status: "completed",
        },
        {
            id: 4,
            title: "NVIDIA Stock Prediction",
            shortDescription:
                "Predictive analytics model forecasting stock movements using Linear Regression.",
            description:
                "A data science pipeline focused on predicting NVIDIA's stock price fluctuations. The project involves extensive exploratory data analysis (EDA), feature engineering (moving averages, RSI, MACD), and training a Linear Regression model. Includes an interactive dashboard to visualize predictions against actual historical data.",
            tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
            image: "",
            link: "https://github.com",
            status: "completed",
        },
    ];

    const certificates = [
        {
            id: 1,
            title: "IBM AI Foundations",
            issuer: "IBM SkillsBuild",
            description:
                "Comprehensive understanding of Artificial Intelligence concepts, machine learning fundamentals, and AI ethics. Certified by IBM.",
            image: "",
            link: "https://credly.com",
        },
        {
            id: 2,
            title: "Machine Learning applied to Business",
            issuer: "Dicoding",
            description:
                "Practical implementation of Machine Learning algorithms to solve real-world business problems and predictive analytics.",
            image: "",
            link: "https://dicoding.com",
        },
        {
            id: 3,
            title: "Google Cloud Computing Foundations",
            issuer: "Google Cloud",
            description:
                "Core infrastructure, big data, and machine learning on Google Cloud Platform. Demonstrated capability in cloud architecture.",
            image: "",
            link: "https://cloud.google.com",
        },
        {
            id: 4,
            title: "Google Cloud Computing Foundations",
            issuer: "Google Cloud",
            description:
                "Core infrastructure, big data, and machine learning on Google Cloud Platform. Demonstrated capability in cloud architecture.",
            image: "",
            link: "https://cloud.google.com",
        },
    ];

    // --- MODAL STATE ---

    let isModalOpen = $state(false);
    let modalContent = $state({
        title: "",
        description: "",
        image: "",
        tags: [],
        link: "",
        type: "project",
    });

    function openProjectModal(project: any) {
        modalContent = {
            title: project.title,
            description: project.description,
            image: project.image,
            tags: project.tags,
            link: project.link,
            type: "project",
        };
        isModalOpen = true;
    }

    function openCertificateModal(cert: any) {
        modalContent = {
            title: cert.title,
            description: cert.description,
            image: cert.image,
            tags: [],
            link: cert.link,
            type: "certificate",
        };
        isModalOpen = true;
    }
</script>

<svelte:head>
    <title>Rajif | AI Engineer & Developer</title>
    <meta
        name="description"
        content="Personal tech portfolio of Rajif, showcasing AI engineering, Generative AI, and full-stack development projects."
    />
</svelte:head>

<Hero />

<AboutMe />

<Timeline />

<TechStack />

<section id="projects" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-white">Featured Projects</h2>
        <div
            class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
        ></div>
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    >
        {#each projects as project}
            <ProjectCard {project} onOpen={openProjectModal} />
        {/each}
    </div>
</section>

<section id="certificates" class="py-20" use:inView={{ y: 50, duration: 800 }}>
    <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl font-bold text-white">Verified Credentials</h2>
        <div
            class="h-px bg-gradient-to-r from-neonCyan/50 to-transparent flex-grow"
        ></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each certificates as cert}
            <CertificateCard certificate={cert} onOpen={openCertificateModal} />
        {/each}
    </div>
</section>

<Footer />

<Modal
    bind:isOpen={isModalOpen}
    title={modalContent.title}
    description={modalContent.description}
    image={modalContent.image}
    tags={modalContent.tags}
    link={modalContent.link}
    type={modalContent.type as "project" | "certificate"}
/>
