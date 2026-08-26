export const projects = [
  {
    title: "Dandelion",
    category: "work",
    blurb:
      "Detecting and erasing bias from multimodal foundation models. Measures bias along a user-selected characteristic, locates it in the model, and attempts to erase that concept via activation probing, steering, and weight-space methods.",
    tags: ["mech. interp.", "activation steering"]
  },
  {
    title: "Forget-Me-Not",
    category: "work",
    blurb:
      "Using task vectors and LoRA combinations to prevent catastrophic forgetting on cyber-related datasets, including plug-and-play task vectors in an agentic system.",
    tags: ["task vectors", "catastrophic forgetting", "fine-tuning", "LoRA"]

  },
  {
    title: "ROSE",
    category: "work",
    blurb:
      "Relating Ontologically Similar Entities: using ontologies to recognize when an LLM refers to the same entity with different language, with a medical treatment use case.",
    tags: ["entity disambiguation", "domain ontologies"]

  },
  {
    title: "KNEED",
    category: "work",
    blurb:
      "Improving entity disambiguation with knowledge graph embeddings of ontology subgraphs, falling back to text embeddings of labels and descriptions when graph embeddings are unavailable.",
    tags: ["entity disambiguation", "domain ontologies", "graph embeddings"]

  },
  {
    title: "GIST",
    category: "work",
    blurb:
      "An experiment on improving single- and multi-document summarization. Compared abstractive and extractive methods; Edmundson heuristics worked best for single-document, SG-Sum for multi-document. (Pre LLM era)",
    tags: ["summarization"]

  },
  {
    title: "TRICT",
    category: "work",
    blurb:
      "A simple red-teaming experiment showing how easy it is to inject attack code into coder Agents, demonstrating that generative AI has no real guard rails.",
    tags: ["jailbreaks", "fine-tuning"]

  },
  {
    title: "Investigating the Cross-Lingual Transferability of NLP Tasks",
    category: "school",
    blurb:
      "Master's research paper on task vectors for cross-lingual task transfer: how linguistic similarity and model architecture affect transfer of syntactic vs. semantic knowledge. Currently under review.",
    links: [
      { label: "GitHub", href: "https://github.com/erafkin/xling_task_transfer/" },
    ],
    tags: ["task vectors", "XLT", "fine-tuning"]

  },
  {
    title: "Task Arithmetic with Support Languages for Low-Resource ASR",
    category: "school",
    blurb:
      "Mozilla CommonVoice Spontaneous Speech ASR Challenge submission. Finetuned Whisper and trained adapters or task vectors on genetically similar higher-resource languages to bolster low-resource ASR. System description paper accepted into Workshop",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ddegenaro/mozilla-asr-challenge/",
      },
      { label: "PDF", href: "/papers/mozilla.pdf" },
    ],
    tags: ["task vectors", "ASR", "fine-tuning", "LoRA"]

  },
  {
    title: "Efficient Communication in Internet Slang",
    category: "school",
    blurb:
      "Testing Zipf's law and surprisal on abbreviations vs. their full-length counterparts in a corpus of 3M tweets: compression rate correlates with the difference in surprisal between word forms.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/twitter_abbreviation_word_length/",
      },
      { label: "PDF", href: "/papers/Efficient_communication_in_internet_slang.pdf" },
    ],
  },
  {
    title: "Curriculum Learning for BabyLM Challenge",
    category: "school",
    blurb:
      "Finetuned BabyBERTa on curricula ordered by surprisal, syntactic complexity, MMM theory, and semantic concreteness for the BabyLM challenge.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/enlp_final_curriculum_learning",
      },
      { label: "PDF", href: "/papers/emnlp.pdf" },

    ],
    tags: ["curriculum learning", "fine-tuning"]

  },
  {
    title: "T/V Reform Corpus Study",
    category: "school",
    blurb:
      "This is a small corpus study (of parilimentary/formal speeches) looking at second person pronomial honorific reform across 3 european languages: Swedish, German, and Spanish.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/semantics-du-reform",
      },
    ],
    tags: ["corpus study", "semantics"]

  },
];
