# 🚀 Deployment Instructions for GitHub Pages

## Step 1: Upload to Your Repository

1. **Copy the `ai-literacy` folder** to your `cloudcognoscente` repository
2. **Commit and push** the files to GitHub

```bash
# Navigate to your repository
cd /path/to/cloudcognoscente

# Copy the AI Literacy files
cp -r /Users/pravinmenghani/Downloads/AI-Literacy-1-main/ai-literacy ./

# Add to git
git add ai-literacy/
git commit -m "Add AI Literacy Training Course"
git push origin main
```

## Step 2: Enable GitHub Pages (if not already enabled)

1. Go to your repository: `https://github.com/pravinmenghani1/cloudcognoscente`
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

## Step 3: Access Your Course

The AI Literacy course will be available at:
```
https://pravinmenghani1.github.io/cloudcognoscente/ai-literacy/
```

## Step 4: Add Link to Main Site (Optional)

Add a link to the AI Literacy course in your main `index.html`:

```html
<!-- Add this to your existing navigation or content area -->
<a href="ai-literacy/" class="course-link">
    🤖 AI Literacy Training - Interactive Course with Certification
</a>
```

## 📁 File Structure After Deployment

```
cloudcognoscente/
├── index.html                    # Your existing main page
├── [your existing files]         # Your current content
└── ai-literacy/                  # New AI course directory
    ├── index.html                # Course landing page
    ├── presentation.html         # Main interactive presentation
    ├── capstone_solutions/       # Project solutions
    └── README.md                 # Course documentation
```

## 🔗 URLs After Deployment

- **Main Site:** `https://pravinmenghani1.github.io/cloudcognoscente/`
- **AI Course:** `https://pravinmenghani1.github.io/cloudcognoscente/ai-literacy/`
- **Presentation:** `https://pravinmenghani1.github.io/cloudcognoscente/ai-literacy/presentation.html`

## ✅ Verification Steps

1. **Test the landing page:** Visit the ai-literacy URL
2. **Test the presentation:** Click "Start AI Literacy Journey"
3. **Test navigation:** Use arrow keys or buttons to navigate slides
4. **Test interactivity:** Try quizzes and activities
5. **Test certificate:** Complete course and generate certificate

## 🎯 Features Included

- ✅ **30 Interactive Slides** with animations and transitions
- ✅ **15+ Quizzes & Activities** with real-time scoring
- ✅ **3 Capstone Projects** with complete solutions
- ✅ **Certificate Generation** with download capability
- ✅ **Progress Tracking** with visual indicators
- ✅ **Responsive Design** for all devices
- ✅ **Professional Styling** matching your brand

## 🔧 Customization Options

### Update Branding
- Modify colors in CSS variables
- Update instructor name and organization
- Add your logo or branding elements

### Content Updates
- Edit slide content in `presentation.html`
- Update capstone project requirements
- Modify scoring system or add new activities

### Integration
- Add course link to your main navigation
- Embed course metrics in your dashboard
- Connect to your existing user management system

---

Your AI Literacy Training course is now ready for deployment! 🎉
