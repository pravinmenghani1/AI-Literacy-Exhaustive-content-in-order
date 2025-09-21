# BERT Model Download Instructions

The pre-trained BERT model file (`model.safetensors`) was excluded from the repository due to GitHub's file size limitations (417MB > 100MB limit).

## To Download the Model:

### Option 1: Download from Hugging Face
```python
from transformers import AutoModel, AutoTokenizer

# Download and save the model
model = AutoModel.from_pretrained('bert-base-uncased')
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')

# Save locally
model.save_pretrained('./saved_model')
tokenizer.save_pretrained('./saved_model')
```

### Option 2: Run the Load_model.py script
```bash
python Load_model.py
```

This will automatically download and save the BERT model to the `saved_model/` directory.

## File Structure After Download:
```
saved_model/
├── config.json
├── model.safetensors  # This file will be downloaded
├── special_tokens_map.json
├── tokenizer.json
├── tokenizer_config.json
└── vocab.txt
```

## Requirements:
- Internet connection for initial download
- ~500MB free disk space
- Python packages: `transformers`, `torch`
