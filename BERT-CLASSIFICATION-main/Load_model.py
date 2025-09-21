from transformers import AutoTokenizer, AutoModel
import torch

mod_name = "bert-base-uncased"  
tokenizer = AutoTokenizer.from_pretrained(mod_name)
model = AutoModel.from_pretrained(mod_name)
