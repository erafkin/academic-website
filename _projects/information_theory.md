---
layout: page
title: Efficient Communication in Internet Slang
description: Exploring information theory's implications on compression on internet abbreviations.
# img: assets/img/7.jpg
# redirect: https://unsplash.com
importance: 3
github: https://github.com/erafkin/twitter_abbreviation_word_length/tree/main
category: school
---

In 1935, Zipf hypothesized that language becomes abbreviated over time due to the competing pressures of accuracy and efficiency, demonstrating that word frequency and length are inversely correlated. In later years, others hypothesized that word length is better explained by surprisal, or negative log probability given context. To test surprisal theory in a controlled setting, I looked at words that have the same meaning but different lengths: abbreviations and their full length counterparts. If language is in fact optimized towards efficient communication, then the amount of compression that a word experiences as it becomes abbreviated should be directly correlated to the amount of information lost between the long and short forms. I measured the frequency and surprisal of short and long forms of common abbreviations on a corpus of 3M Tweets. This experiment confirmed that word length is correlated to surprisal, shortened forms often occur in more predictable environments than their long form counterparts, and a meaning’s compression rate is correlated to the difference in surprisal between its word forms. These results further cement idea that the amount of information in a single word is directly encoded in the amount of effort it takes to produce: its word length.

Paper for this project can be found [here](https://github.com/erafkin/twitter_abbreviation_word_length/blob/main/paper/Efficient_communication_in_internet_slang.pdf).

Code for this project can be found [here](https://github.com/erafkin/twitter_abbreviation_word_length/tree/main)
