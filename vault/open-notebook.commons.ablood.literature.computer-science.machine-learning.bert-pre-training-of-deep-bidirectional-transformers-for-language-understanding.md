---
id: 4eg4mocoafv1q9rapsegg6i
title: >-
  Bert Pre Training Of Deep Bidirectional Transformers For Language
  Understanding
desc: ''
updated: 1783058843148
created: 1783058763946
traitIds:
  - open-notebook-commons-ablood-literature
---

# [BERT - Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/html/1810.04805v2)
## Terms
- **BERT**: Bidirectional Encoder Representations from Transformers.
- **[GLUE score](https://gluebenchmark.com/)**: General Language Understanding Evaluation benchmark for natural language understanding.
- **[MultiNLI](https://cims.nyu.edu/~sbowman/multinli/)**: Multi-Genre Natural Language Inference benchmark for textual entailment.
- **[SQuAD v1.1](https://rajpurkar.github.io/SQuAD-explorer/)**: Stanford Question Answering Dataset benchmark where every question has an answer in the passage.
- **[SQuAD v2.0](https://rajpurkar.github.io/SQuAD-explorer/)**: Extension of SQuAD including questions with no answer in the passage.
## About
Works well on natural language processing tasks. Receiving a GLUE score as high as 80.5%. They point out there are two approaches for applying the pre-trained representations to a downstream task:
1) feature based: includes task specific architecture and includes the pre-trained structures as extra features
2) fine-tuning: (used by GPT) uses task-specific parameters that are smaller, and does fine tuning for down stream tasks with the pre-trained parameters. 
So BERT is meant to be an improvement for the fine tuning approach. It uses 'next sentence prediction' tasks to pre train text-pair representations. 
## Related Work
### unsupervised feature based approaches: 
Methods like *left-to-right* context-sensitive features are used for prediction. Other researchers have shown that pre-trained embeddings are important parts of NLP systems and are better than working from scratch.
### unsupervised fine-tuning approaches
Work has been done in pre-trained word embedding parameters. The advantage being that fewer parameters are needed to be learned from scratch. 
### transfer learning from supervised data
Supervised tasks using large datasets have also been shown to be effective when transferred to this unsupervised context. 
## BERT
BERT has two phases:
1. **pre-training** on large amounts of unlabeled text
2. **fine-tuning** on a specific downstream task using labeled data
Unlike previous language models, BERT uses the same transformer architecture for both phases, only adding a small output layer for the downstream task.
### Architecture
BERT is built from a bidirectional transformer encoder.
Two model sizes are introduced:
- **BERTBASE**: 12 transformer layers, 110M parameters
- **BERTLARGE**: 24 transformer layers, 340M parameters
### Input representation
Each input token is represented by the sum of three embeddings:
1. token embedding
2. segment embedding
3. positional embedding
Special tokens:
- `[CLS]`: classification token placed at the beginning of every sequence
- `[SEP]`: separates two input sentences
The final hidden representation of `[CLS]` is used for sequence-level classification tasks.
### Pre-training
BERT is trained using two self-supervised objectives.
#### Masked Language Model (MLM)
Instead of predicting the next word, BERT randomly masks 15% of tokens and predicts the missing words using both left and right context.
Masking strategy:
- 80% replaced with `[MASK]`
- 10% replaced with a random token
- 10% left unchanged
This avoids the model relying only on the `[MASK]` token during training.
#### Next Sentence Prediction (NSP)
BERT also learns relationships between sentences.
For each sntence pair:
- 50% are the actual next sentence (**IsNext**)
- 50% are a random sentence (**NotNext**)
So this helps downstream tasks such as question answering and natural language inference.
### Training data
Pre-training uses:
- BooksCorpus (~800 million words)
- English Wikipedia (~2.5 billion words)
### Fine-tuning
Fine-tuning is simple:
- initialize from the pre-trained BERT model
- add one small task-specific output layer
- update all parameters jointly
## Results
BERT achieved state-of-the-art performance on eleven NLP benchmarks.

Highlights:
- GLUE: 80.5
- MultiNLI: 86.7%
- SQuAD v1.1: 93.2 F1
- SQuAD v2.0: 83.1 F1
## Relevance
Although BERT demonstrates that large-scale self-supervised pre-training can learn useful representations from unlabeled data. This same idea seems to have later influenced DreaMS, where masked prediction is applied to mass spectra instead of text. 