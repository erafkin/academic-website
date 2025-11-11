---
layout: page
title: Cross-Lingual Task Transfer Using Task Vectors
description: Master's Research Paper
# img: assets/img/12.jpg
importance: 1
category: school
related_publications: false
github: https://github.com/erafkin/xling_task_transfer/
---

This project investigates the utility of [task vectors (TVs)](https://arxiv.org/abs/2212.04089) for cross lingual task transfer. Specifically the ability of TVs to encode syntactic vs semantic knowledge, and how linguistic similarity effects the success of transfer cross linguistically.

Multilingual transformers were trained on each target language and then the base transformer was trained to perform a task (NER, POS tagging, NLI, or Dependency Parsing). Success was evaluated across tasks and crosslinguistically. It was hypothesized that task vectors would perform better for semantic tasks than syntactic tasks, and would perform better on languages more similar to the source language.

This project is in progress.

Code for this project can be found [here](https://github.com/erafkin/xling_task_transfer/).
