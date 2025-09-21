#!/bin/bash

# Git Deployment Commands for AI Literacy Course
# Run these commands in your cloudcognoscente repository directory

echo "🚀 Deploying AI Literacy Course to GitHub..."

# Navigate to your repository (update path as needed)
cd /path/to/your/cloudcognoscente

# Copy the AI Literacy files from the download location
cp -r "/Users/pravinmenghani/Downloads/AI-Literacy-1-main/ai-literacy" ./

# Add all new files to git
git add ai-literacy/

# Commit the changes
git commit -m "Add AI Literacy Training Course with Interactive Presentation

- 30 interactive slides with quizzes and activities
- 3 capstone projects (Healthcare, Education, Environmental AI)
- Certificate generation with download capability
- Complete solution files and documentation
- Responsive design for all devices"

# Push to GitHub (this will trigger Netlify deployment)
git push origin main

echo "✅ Deployment complete! Course will be available at:"
echo "https://cloudcognoscente.com/ai-literacy/"
echo ""
echo "🔗 Direct presentation link:"
echo "https://cloudcognoscente.com/ai-literacy/presentation.html"
