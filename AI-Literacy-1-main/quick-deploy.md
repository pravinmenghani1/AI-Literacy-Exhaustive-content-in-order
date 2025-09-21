# 🚀 Quick Deployment to GitHub/Netlify

## Step 1: Copy Files to Your Repository

```bash
# Navigate to your cloudcognoscente repository
cd /path/to/your/cloudcognoscente

# Copy the AI Literacy course files
cp -r "/Users/pravinmenghani/Downloads/AI-Literacy-1-main/ai-literacy" ./
```

## Step 2: Git Commands

```bash
# Add files to git
git add ai-literacy/

# Commit with descriptive message
git commit -m "Add AI Literacy Training Course

- 30 interactive slides with quizzes and activities  
- 3 capstone projects with complete solutions
- Certificate generation and download
- Responsive design for all devices"

# Push to GitHub (triggers Netlify auto-deploy)
git push origin main
```

## Step 3: Verify Deployment

After pushing, your course will be available at:
- **Landing Page:** https://cloudcognoscente.com/ai-literacy/
- **Presentation:** https://cloudcognoscente.com/ai-literacy/presentation.html

## 📁 Files Being Deployed

```
ai-literacy/
├── index.html              # Course landing page
├── presentation.html       # Interactive presentation (fixed version)
├── capstone_solutions/     # Complete project solutions
│   ├── healthcare_ai_solution.md
│   ├── education_ai_solution.md
│   ├── environmental_ai_solution.md
│   ├── evaluation_rubric.md
│   └── README.md
└── README.md              # Course documentation
```

## ⚡ Netlify Auto-Deploy

Since you have Netlify connected to your GitHub repo, the deployment will happen automatically within 1-2 minutes after pushing to the main branch.

## 🔧 If Issues Persist

If the presentation still doesn't display correctly after deployment:

1. **Check Netlify build logs** for any errors
2. **Verify file paths** are correct in the deployed version
3. **Test locally first** by opening the files in your browser
4. **Check browser console** for JavaScript errors

The updated presentation.html file I created should resolve the display issues you were experiencing.
