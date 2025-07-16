# MozTech Solutions - Deployment Instructions

## Quick Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
\`\`\`bash
npm install -g vercel
\`\`\`

2. **Login to Vercel:**
\`\`\`bash
vercel login
\`\`\`

3. **Deploy:**
\`\`\`bash
vercel
\`\`\`

4. **Follow prompts:**
   - Project name: `moztech-solutions`
   - Framework: Next.js (auto-detected)
   - Accept all defaults

### Method 2: GitHub Integration

1. **Push to GitHub:**
\`\`\`bash
git init
git add .
git commit -m "MozTech Solutions website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
\`\`\`

2. **Connect to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Deploy

## Configuration

- ✅ No vercel.json needed (Vercel auto-detects Next.js)
- ✅ All settings in next.config.mjs
- ✅ Optimized for performance
- ✅ Security headers included
- ✅ Image optimization enabled

## Expected Result

Your website will be live at:
`https://moztech-solutions-[random].vercel.app`

## Custom Domain (Optional)

After deployment:
\`\`\`bash
vercel domains add yourdomain.com
\`\`\`

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify Node.js version compatibility
4. Check for any TypeScript errors

## Support

For deployment issues, check:
- Vercel documentation
- Next.js deployment guide
- GitHub repository settings
