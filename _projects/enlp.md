---
layout: page
title: Curriculum Learning for BabyLM Challenge
description: Exploring different curricula organization methods for the BabyLM challenge
# img: assets/img/7.jpg
# redirect: https://unsplash.com
importance: 4
github: https://github.com/erafkin/enlp_final_curriculum_learning
category: school
---

We explore the impact of curriculum learning for the BabyLM challenge. We selected different methods for creating our curricula and finetuned a BabyBERTa model on increasingly more difficult data. The three methods we chose are:

Surprisal Surprisal theory posits that the amount of information contained in each word can be measured using surprisal (negative log probability). Studies on surprisal theory have shown that surprisal is a good predictor for longer reading and parsing times. This implies that surprisal is correlated with sentence difficulty. Therefore, the corpus can be divided into curricula with the easiest curriculum containing the phrases with the lowest surprisal. We use surprisal calculated from trigram probabilities from the training set.

Syntactic Syntactic complexity ordering ranks sentences based on how complex their grammatical structure is. We use spaCy to analyse the sentence structure in the training corpus for this approach.

MMM Theory Maximize Minimal Means (MMM) is a curriculum learning strategy grounded in linguistic theories of language acquisition, which suggest that learners benefit from progressing from simpler to more complex structures. It does so by ranking sentences based on the average rarity of their syntactic (e.g., POS tags) and semantic (e.g., semantic role labels) features. Simpler, more frequent constructions are introduced earlier, while rarer, complex ones appear later. This mirrors how humans typically acquire language.

Concreteness represents the extent to which you can directly experience through your senses or actions like smelling, tasting, touching, hearing. The concreteness of a word ranges from a maximum of 5 to a minimum of 1 based on the Brybaert 2014 concreteness study. A rating of 5 means that it is something that exists in reality whereas rating of 1 means that it is something that you can’t experience directly. Based on the ratings from the study, we assign a concreteness score to each sentence in the training dataset, meaning computing the average concreteness score of the words in the sentence.

Paper for this project can be found [here](https://github.com/erafkin/enlp_final_curriculum_learning/blob/main/paper.pdf).

This project was done in collaboration with Saim Ishtiaq, Ismail Shaheen, and Muxiang Wen.

Code for this project can be found [here](https://github.com/erafkin/enlp_final_curriculum_learning)
