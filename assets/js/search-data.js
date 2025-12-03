// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-team-won-the-the-interactive-media-amp-amp-gaming-track-winner-at-mhacks-2024",
          title: 'My team won the the Interactive Media &amp;amp;amp; Gaming Track Winner at MHacks...',
          description: "",
          section: "News",},{id: "news-my-team-umich-won-3rd-place-in-this-year-s-mitre-embedded-ctf",
          title: 'My team (UMich) won 3rd place in this year’s MITRE embedded CTF.',
          description: "",
          section: "News",},{id: "news-my-team-won-the-best-hardware-hack-prize-at-mhacks-2025",
          title: 'My team won the Best Hardware Hack prize at MHacks 2025.',
          description: "",
          section: "News",},{id: "projects-16-bit-risc-processor-layout",
          title: '16-Bit RISC Processor Layout',
          description: "Physical design of a 16-bit RISC processor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16bit-risc-layout/";
            },},{id: "projects-knn-accelerator",
          title: 'KNN Accelerator',
          description: "Bit-serial K-Nearest Neighbors accelerator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/KNN-accelerator/";
            },},{id: "projects-conductor-mhacks-2025",
          title: 'Conductor — MHacks 2025',
          description: "Best Hardware Hack at MHacks 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/conductor-mhacks-2025/";
            },},{id: "projects-escape-mate-mhacks-2024",
          title: 'Escape Mate — MHacks 2024',
          description: "Interactive Media &amp; Gaming Track Winner",
          section: "Projects",handler: () => {
              window.location.href = "/projects/escape-mate-mhacks-2024/";
            },},{id: "projects-lc2k-verilog-processor",
          title: 'LC2K Verilog Processor',
          description: "Implementation of a 5-stage pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lc2k-verilog/";
            },},{id: "projects-mitre-ectf-2025-3rd-place",
          title: 'MITRE eCTF 2025 — 3rd Place',
          description: "Competition submission for MITRE eCTF 2025 (3rd place)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mitre-ectf-2025/";
            },},{id: "projects-out-of-order-risc-v-core",
          title: 'Out-of-Order RISC-V Core',
          description: "High-performance out-of-order N-way superscalar RISC-V core",
          section: "Projects",handler: () => {
              window.location.href = "/projects/out-of-order-nway-riscv/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tsha-256", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tsha256", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
