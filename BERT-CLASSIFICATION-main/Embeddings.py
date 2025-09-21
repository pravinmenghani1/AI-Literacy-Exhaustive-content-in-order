from load_model import model
from tokenize_text import inputs
import torch

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
