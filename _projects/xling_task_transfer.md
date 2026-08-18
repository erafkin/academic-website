---
layout: page
title: Investigating the Cross-Lingual Transferability of NLP Tasks
description: Master's Research Paper
# img: assets/img/12.jpg
importance: 1
category: school
related_publications: false
github: https://github.com/erafkin/xling_task_transfer/
---

This project investigates the utility of [task vectors (TVs)](https://arxiv.org/abs/2212.04089) for cross lingual task transfer. Specifically we look at the ability of TVs to encode syntactic vs semantic knowledge, how linguistic similarity effects the success of transfer cross linguistically, and how model architecture effects transfer. 

Models were trained on each target language and then the base transformer was trained to perform a task (NER, POS tagging, NLI, Question-Answering, Morphological Reinflection, or Dependency Parsing). The language model was then applied to the task model via task arithmetic using task vectors. Success was evaluated across tasks and cross-linguistically. It was hypothesized that transfer would perform better for semantic tasks than syntactic tasks, and would perform better on languages more similar to the source language. The base models used were all `< 1B` parameters: multilingual BERT, XLM-RoBERTa, Granite4 350M, and Qwen3 0.3B. The source language was always English. The target languages were Chinese, Russian, Hindi, French, Spanish, and German.

This paper is in currently under review.

Code for this project can be found [here](https://github.com/erafkin/xling_task_transfer/).
