---
layout: page
title: KNEED
description: Improving entity disambiguation using knowledge graph embeddings.
img:
importance: 4
category: work
---
When using ontologies for automated information retrieval and extraction, it is crucial that the entities are linked properly. Unfortunately, large ontologies have many ambiguous labels (e.g. river "bank" vs "bank" (institution)). This ambiguity leads to poor downstream task performance. 
This project used graph embeddings of relevant subgraphs of the ontologies to perform entity disambiguation. When graph embeddings were unavailable, the system fell back onto text embeddings of the ontology's natural language (labels, alt labels, and descriptions). This improved downstream NLP tasks that leveraged documents tagged against proprietary ontologies. 

I was the PI on this project. This project was an internally funded research project that I pitched and won a small grant for.