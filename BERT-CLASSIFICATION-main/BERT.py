from transformers import AutoTokenizer, AutoModel
import torch

MODEL_NAME = "bert-base-uncased"  
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModel.from_pretrained(MODEL_NAME)

text = "Hello, Myself Pravin Menghani!"

tokens = tokenizer.tokenize(text)
print("\nTokens:", tokens)

inputs = tokenizer(
    text,
    return_tensors="pt",       
    truncation=True,           
    padding="max_length",     
    max_length=15              
)

print("\nEncoded Input (Dictionary):")
print("Input IDs (Token IDs):", inputs["input_ids"])
print("Attention Mask:", inputs["attention_mask"])

with torch.no_grad():
    outputs = model(**inputs)

embeddings = outputs.last_hidden_state
print("\nEmbeddings Shape:", embeddings.shape)

cls_embedding = embeddings[:, 0, :] 
print(cls_embedding)
mean_pooled = embeddings.mean(dim=1)  
print(mean_pooled)

model.save_pretrained("saved_model")
tokenizer.save_pretrained("saved_model")