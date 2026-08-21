export const projects = [
  {
    title: "Dandelion",
    category: "work",
    blurb:
      "Detecting and erasing bias from multimodal foundation models. Measures bias along a user-selected characteristic, locates it in the model, and attempts to erase that concept via activation probing, steering, and weight-space methods.",
    links: [{ label: "CaTE report", href: "https://arxiv.org/pdf/2508.14741" }],
  },
  {
    title: "Forget-Me-Not",
    category: "work",
    blurb:
      "Using task vectors and LoRA combinations to prevent catastrophic forgetting on cyber-related datasets, including plug-and-play task vectors in an agentic system.",
  },
  {
    title: "ROSE",
    category: "work",
    blurb:
      "Relating Ontologically Similar Entities: using a knowledge graph and ontology to recognize when an LLM refers to the same entity with different language, with a medical treatment use case.",
  },
  {
    title: "KNEED",
    category: "work",
    blurb:
      "Improving entity disambiguation with knowledge graph embeddings of ontology subgraphs, falling back to text embeddings of labels and descriptions when graph embeddings are unavailable.",
  },
  {
    title: "GIST",
    category: "work",
    blurb:
      "An experiment on improving single- and multi-document summarization. Compared abstractive and extractive methods; Edmundson heuristics worked best for single-document, SG-Sum for multi-document.",
  },
  {
    title: "TRICT",
    category: "work",
    blurb:
      "A simple experiment showing how easy it is to inject attack code into coding LLMs, demonstrating that generative AI has no real guard rails.",
  },
  {
    title: "Investigating the Cross-Lingual Transferability of NLP Tasks",
    category: "school",
    blurb:
      "Master's research paper on task vectors for cross-lingual task transfer: how linguistic similarity and model architecture affect transfer of syntactic vs. semantic knowledge. Currently under review.",
    links: [
      { label: "GitHub", href: "https://github.com/erafkin/xling_task_transfer/" },
    ],
  },
  {
    title: "Task Arithmetic with Support Languages for Low-Resource ASR",
    category: "school",
    blurb:
      "Mozilla CommonVoice Spontaneous Speech ASR Challenge submission. Finetuned Whisper and trained adapters or task vectors on genetically similar higher-resource languages to bolster low-resource ASR.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ddegenaro/mozilla-asr-challenge/",
      },
      { label: "PDF", href: "/papers/mozilla.pdf" },
    ],
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
      "Finetuned BabyBERTa on curricula ordered by surprisal, syntactic complexity, MMM theory, and concreteness for the BabyLM challenge.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/enlp_final_curriculum_learning",
      },
    ],
  },
];
