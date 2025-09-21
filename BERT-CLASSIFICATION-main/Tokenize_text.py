from load_model import tokenizer, model

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
