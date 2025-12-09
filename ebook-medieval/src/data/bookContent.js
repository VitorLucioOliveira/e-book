export const bookContent = {
  title: "AI Survival Kit for Professionals",
  subtitle: "A Practical Guide for Researchers in the Age of Artificial Intelligence",
  author: "Vitor L. Oliveira",
  chapters: [
    {
      id: 1,
      title: "Introduction",
      subtitle: "The Dawn of a New Age",
      icon: "scroll",
      content: `This kit is a personal and practical guide designed to help professionals thrive in the age of AI. The goal is not only to understand AI tools but to develop a true "AI Mindset"—combining critical thinking, creativity, and ethical awareness.

We must learn to use AI as a partner, not a replacement.`,
      quote: "We must learn to use AI as a partner, not a replacement.",
      image: "intro"
    },
    {
      id: 2,
      title: "Target Audience",
      subtitle: "For the Seekers of Knowledge",
      icon: "knight",
      content: `This kit targets researchers, primarily those working in the Computer Science field. Researchers in this field face unique pressures. They are required to stay on the cutting edge of technology while maintaining rigorous scientific standards.

They are either integrating AI directly into their projects or investigating AI itself as a subject of study.`,
      keyPoints: [
        "Conducting rigorous experiments and benchmarking",
        "Writing complex code and documentation",
        "Analyzing vast amounts of academic literature",
        "Publishing novel findings that contribute to the scientific community"
      ],
      image: "audience"
    },
    {
      id: 3,
      title: "The Future of Research",
      subtitle: "A Realm Untouched by Machines",
      icon: "castle",
      content: `In the current AI climate, research remains one of the few fields that is largely unaffected by the threat of total automation. While other industries may be disrupted, the core value of a researcher cannot be easily replicated.

The reason research is safe is that AI is inherently limited by its existing knowledge. It operates based on data that has already been created. Consequently, innovating using AI as the base or sole method is extremely difficult, if not impossible.`,
      highlight: "AI cannot invent what it has not seen.",
      additionalContent: `However, the future is not about ignoring AI. When used responsibly as a tool for workload optimization, AI can be highly beneficial. It allows researchers to handle repetitive tasks faster, freeing up mental energy for the complex thinking that machines cannot do.`,
      image: "future"
    },
    {
      id: 4,
      title: "Core Competencies",
      subtitle: "The Three Pillars of Wisdom",
      icon: "shield",
      content: `To survive and thrive, researchers need specific skills to effectively use AI. The most crucial competency is not coding, but critical awareness.`,
      competencies: [
        {
          title: "Understanding Temporal Limitations",
          description: "Researchers must develop the wisdom to recognize that AI models are not always up-to-date. They effectively have a 'knowledge cutoff,' potentially providing information that is obsolete in fast-moving fields like Computer Science."
        },
        {
          title: "Hallucination Detection",
          description: "A required skill is the ability to identify when an AI is 'hallucinating.' Models can fabricate plausible but entirely false content, data, or references. A researcher must possess the domain knowledge to spot these fabrications immediately."
        },
        {
          title: "Intellectual Independence",
          description: "The ability to use AI without becoming dependent on it. This involves maintaining your own critical judgment and ensuring that your learning process is not hindered by automated shortcuts."
        }
      ],
      image: "competencies"
    },
    {
      id: 5,
      title: "Learning Resources",
      subtitle: "The Sacred Texts",
      icon: "book",
      content: `To stay updated on AI developments and tools without falling for hype, researchers should rely on primary sources:`,
      resources: [
        {
          name: "arXiv.org (CS Section)",
          description: "The primary source for the latest pre-prints in AI and Computer Science. Essential for verifying if a 'new' AI capability is scientifically valid."
        },
        {
          name: "Papers with Code",
          description: "A resource that links academic papers with their actual implementations, allowing researchers to test claims rather than just reading them."
        },
        {
          name: "Official Documentation",
          description: "Instead of asking a chatbot how a library works, rely on official documentation (e.g., Python docs, TensorFlow, PyTorch) to ensure accuracy."
        }
      ],
      image: "resources"
    },
    {
      id: 6,
      title: "Practical Tools",
      subtitle: "Artifacts of Power",
      icon: "sword",
      content: `Despite the limitations, AI can be used to speed up work. Below are the recommended tools for specific research tasks.`,
      tools: [
        {
          name: "Stanford Paperreview.ai",
          useCase: "Reviewing academic papers",
          application: "Use this to check the structure and clarity of your drafts before submission."
        },
        {
          name: "Google Gemini & OpenAI ChatGPT",
          useCase: "General use, summarizing texts and coding support",
          application: "These tools are excellent for creating preliminary documentation for your code or project. They can also summarize long articles to help you decide if a paper is worth reading in full."
        },
        {
          name: "Linguee",
          useCase: "Translation and context",
          application: "Unlike generative AI which might guess meanings, Linguee provides context-based translations essential for precise academic writing."
        }
      ],
      image: "tools"
    },
    {
      id: 7,
      title: "Ethical Practices",
      subtitle: "The Code of Honor",
      icon: "crown",
      content: `The Ethics of Authorship - Using AI for the entire research project is not just unethical but also fundamentally flawed. A paper written entirely by AI is a deception of the scientific community.

Scientific Rigor vs. AI Limitations - The final result of an AI-dependent project will severely lack substance and scientific rigor.`,
      limitations: [
        "AI cannot make new discoveries",
        "AI cannot generate new insights",
        "AI cannot design complex systems",
        "AI cannot conduct physical experiments or benchmarks"
      ],
      warning: "Relying too much on AI creates a dangerous dependency. If you use AI to do your thinking, you stop learning. You lose the ability to discriminate between good and bad data, preventing effective learning.",
      image: "ethics"
    },
    {
      id: 8,
      title: "AI Mindset Strategies",
      subtitle: "The Rules of Engagement",
      icon: "helm",
      content: `To integrate AI effectively and ethically, adopt these practical rules:`,
      rules: [
        {
          number: 1,
          rule: "Avoid using AI for generating original content. If the core idea comes from AI, it is not your research."
        },
        {
          number: 2,
          rule: "Do not use AI for everything. If you face writer's block, write the draft yourself first—even if it is rough or short. Only then should you ask AI to refine and organize the ideas you have already documented."
        },
        {
          number: 3,
          rule: "When using AI for summarizing articles, be directive. Explicitly specify what information you are looking for in the paper so the AI knows exactly where to focus."
        },
        {
          number: 4,
          rule: "If you must use AI generation due to strict time constraints or deadlines, you must always revise the output heavily. Never copy and paste blindly."
        }
      ],
      image: "strategies"
    },
    {
      id: 9,
      title: "Personal Reflection",
      subtitle: "A Call to Arms",
      icon: "dragon",
      content: `Through building this kit, I realized that while AI is a functional tool, manual work is often superior. If you have the time and energy, it is always better to do the work yourself.

I intend to prioritize human collaboration over automated answers. Instead of prompting a chatbot, I will ask professors or other professionals in the field for help. Instead of relying on summaries, I will read the whole paper to form my own conclusions.`,
      finalWords: `Researching is difficult, but it is rewarding. It is a search for innovation and deep knowledge. Do not trade the struggle of learning for an easy answer. We must value the process, not just the result.

Use AI to optimize your time, but never let it replace your intellect.`,
      image: "reflection"
    }
  ]
};
