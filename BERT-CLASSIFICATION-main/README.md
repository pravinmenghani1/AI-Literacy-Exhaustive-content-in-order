# BERT-CLASSIFICATION

**BERT Text Embedding Generator**

AIM : Create a program that uses a pre-trained language model (such as BERT) to tokenize and encode incoming text. While encoding converts these tokens into numerical representations appropriate for model input, tokenization divides the text into smaller pieces (tokens). 

This repository provides a simple implementation for generating text embeddings using BERT (bert-base-uncased model). The code is split into three logical components for better organization.

## Features
- Load pre-trained BERT model and tokenizer
- Tokenize and encode input text
- Generate word embeddings
- Save model and tokenizer locally

## Files
1. `Load_model.py` - Loads the BERT model and tokenizer
2. `Tokenize_text.py` - Handles text tokenization and encoding
3. `Embeddings.py` - Generates and processes embeddings

## Usage
1. Run the files in order:
   ```bash
   python load_model.py
   python tokenize_text.py
   python get_embeddings.py
   ```
2. Alternatively, run them all at once:
   ```bash
   python -c "from load_model import *; from tokenize_text import *; from get_embeddings import *"
   ```

## Output
- Tokenized text
- Encoded input (token IDs and attention mask)
- Embeddings tensor (shape: [1, sequence_length, 768])
- [CLS] token embedding
- Mean-pooled embedding

## Saved Files
The model and tokenizer are saved in the `saved_model` directory.

## Requirements
- Python 3.x
- PyTorch
- Transformers library

## Google Colab 

👉 https://colab.research.google.com/drive/1K4xJkYItDCB0aO1qFuIaCxoTOm8ioWzt?usp=sharing

## Connect with me:
 - GitHub : https://github.com/pravinmenghani1
 - Linkedin : https://www.linkedin.com/in/pravinkumar-m-5922527/
