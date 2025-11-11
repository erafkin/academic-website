---
layout: page
title: Forget-Me-Not
description: Using task vectors to prevent catastrophic forgetting
# img: assets/img/7.jpg
# redirect: https://unsplash.com
importance: 1
category: work
---

[Task Vectors (TVs)](https://arxiv.org/abs/2212.04089) are the quantification of a what a model learned in finetuning and calculated as the difference in weight space between a finetuned model and a base model. [Huang et.al 2024](https://arxiv.org/pdf/2310.04799) found that TVs can prevent caastrophic forgetting (CF). We explored and validated this claim on cyber-related datasets. Furthermore, we found that linearly combining LoRA layers achieved the same performance both in overall accuracy and ability to prevent CF. Finally, we demonstrated the utility of TVs for their plug-and-play capabilities in an agentic system. 

I was the PI on this project for a small team of 3 people. This project was an internally funded research project that I pitched and won a small grant for.