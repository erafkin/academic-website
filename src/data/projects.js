export const projects = [
  {
    title: "Swarmish",
    location: "AE Studio",
    location_background: "#eb4e27",
    blurb: "We introduce a modular 3-round setup in which an agent swarm creates a language called Swarmish; a new agent swarm must complete a collaborative task while communicating only in Swarmish; and a final agent swarm attempts to decode Swarmish using only the transcripts of the task and an optional task description. We find no model was able to produce a language that was both sufficiently productive to play the game but also was completely uninterpretable. We also found that the ability to decode Swarmish depends strongly on how much context the decoder has about the swarm's task. Won first place at the AE Studio LA hub for a Swarm Aligment Hackathon.",
    links: [
      { label: "GitHub", href: "https://github.com/tommyet/swarmish" },
      { label: "LessWrong", href: "https://www.lesswrong.com/posts/7eJF9p8rnaAAcKbZa/swarmish-what-happens-when-agent-swarms-create-language"}
    ],
    tags: ["alignment", "nlp", "swarm alignment", "synthetic language production"]
  },
  {
    title: "Dandelion",
    location: "APL",
    location_background: "#002d74",
    blurb:
      "Detecting and erasing bias from multimodal foundation models. Measures bias along a user-selected characteristic, locates it in the model, and attempts to erase that concept via activation probing, steering, and weight-space methods.",
    tags: ["alignment", "mech. interp.", "activation steering"]
  },
  {
    title: "Forget-Me-Not",
    location_background: "#002d74",
    location: "APL",
    blurb:
      "Using task vectors and LoRA combinations to prevent catastrophic forgetting on cyber-related datasets, including plug-and-play task vectors in an agentic system.",
    tags: ["alignment", "task vectors", "catastrophic forgetting", "fine-tuning", "LoRA"]

  },
  {
    title: "ROSE",
    location: "APL",
    location_background: "#002d74",
    blurb:
      "Relating Ontologically Similar Entities: using ontologies to recognize when an LLM refers to the same entity with different language, with a medical treatment use case.",
    tags: ["alignment", "nlp", "entity disambiguation", "domain ontologies"]

  },

  {
    title: "TRICT",
    location: "APL",
    location_background: "#002d74",
    blurb:
      "A simple red-teaming experiment showing how easy it is to inject attack code into coder Agents, demonstrating that generative AI has no real guard rails.",
    tags: ["alignment", "jailbreaks", "fine-tuning"]

  },
  {
    title: "Investigating the Cross-Lingual Transferability of NLP Tasks",
    location: "Georgetown",
    location_background: "#041E42",
    blurb:
      "Master's research paper on task vectors for cross-lingual task transfer: how linguistic similarity and model architecture affect transfer of syntactic vs. semantic knowledge.",
    links: [
      { label: "GitHub", href: "https://github.com/erafkin/xling_task_transfer/" },
    ],
    tags: ["nlp", "task vectors", "XLT", "fine-tuning"]

  },
  {
    title: "Task Arithmetic with Support Languages for Low-Resource ASR",
    location: "Georgetown",
    location_background: "#041E42",
    blurb:
      "Mozilla CommonVoice Spontaneous Speech ASR Challenge submission. Finetuned Whisper and trained adapters or task vectors on genetically similar higher-resource languages to bolster low-resource ASR. System description paper accepted into Workshop",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ddegenaro/mozilla-asr-challenge/",
      },
      { label: "PDF", href: "/papers/mozilla.pdf" },
    ],
    tags: ["nlp", "task vectors", "ASR", "fine-tuning", "LoRA"]

  },
  {
    title: "Efficient Communication in Internet Slang",
    location: "Georgetown",
    location_background: "#041E42",
    blurb:
      "Testing information theory via surprisal on abbreviations vs. their full-length counterparts in a corpus of 3M tweets: compression rate correlates with the difference in surprisal between word forms.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/twitter_abbreviation_word_length/",
      },
    ],
      tags: ["nlp", "information theory", "fine-tuning"]

  },
  {
    title: "Curriculum Learning for BabyLM Challenge",
    location: "Georgetown",
    location_background: "#041E42",
    blurb:
      "Finetuned BabyBERTa on curricula ordered by surprisal, syntactic complexity, MMM theory, and semantic concreteness for the BabyLM challenge.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/enlp_final_curriculum_learning",
      },
    ],
    tags: ["nlp", "curriculum learning", "fine-tuning"]

  },
  {
    title: "T/V Reform Corpus Study",
    location: "Georgetown",
    location_background: "#041E42",
    blurb:
      "This is a small corpus study (of parilimentary/formal speeches) looking at second person pronomial honorific reform across 3 european languages: Swedish, German, and Spanish.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/erafkin/semantics-du-reform",
      },
    ],
    tags: ["nlp", "corpus study", "semantics"]
  },
  {
    title: "KNEED",
    location_background: "#002d74",
    location: "APL",
    blurb:
      "Improving entity disambiguation with knowledge graph embeddings of ontology subgraphs, falling back to text embeddings of labels and descriptions when graph embeddings are unavailable.",
    tags: ["nlp", "entity disambiguation", "domain ontologies", "graph embeddings"]

  },
  {
    title: "GIST",
    location_background: "#002d74",
    location: "APL",
    blurb:
      "An experiment on improving single- and multi-document summarization. Compared abstractive and extractive methods; Edmundson heuristics worked best for single-document, SG-Sum for multi-document. (Pre LLM era)",
    tags: ["nlp", "summarization"]

  },
];
