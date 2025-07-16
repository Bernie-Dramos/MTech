# Deployment Guide for MozTech Solutions Website

This guide provides detailed instructions on how to deploy the MozTech Solutions website to Vercel.

## 1. Prerequisites

Before you begin, ensure you have the following:

*   **Git**: Installed and configured on your local machine.
*   **Node.js**: Version 18.x or higher installed.
*   **npm** or **Yarn**: Package manager installed.
*   **Vercel Account**: A free or paid Vercel account. You can sign up at [vercel.com](https://vercel.com/).
*   **GitHub/GitLab/Bitbucket Account**: Your project should be hosted on one of these Git providers for seamless integration with Vercel.

## 2. Local Setup (if not already done)

If you haven't already, set up the project locally:

1.  **Clone the repository**:
    \`\`\`bash
    git clone https://github.com/your-username/moztech-solutions.git
    cd moztech-solutions
    \`\`\`
    (Replace `your-username` with your actual GitHub/GitLab/Bitbucket username and repository name if different).

2.  **Install dependencies**:
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`

3.  **Create a `.env.local` file**:
    Copy the contents of `.env.example` to a new file named `.env.local` in the root of your project.
    \`\`\`bash
    cp .env.example .env.local
    \`\`\`
    Populate any necessary environment variables (e.g., for Google Analytics if you plan to add it later).

## 3. Deploying to Vercel

There are two primary ways to deploy to Vercel: via the Vercel CLI or directly from your Git repository.

### Option A: Deploying with Vercel CLI (Recommended for quick deployments/testing)

1.  **Install Vercel CLI (if you haven't already)**:
    \`\`\`bash
    npm install -g vercel
    \`\`\`

2.  **Log in to Vercel**:
    \`\`\`bash
    vercel login
    \`\`\`
    This will open your browser to authenticate with your Vercel account.

3.  **Link your project**:
    Navigate to your project's root directory in your terminal and run:
    \`\`\`bash
    vercel link
    \`\`\`
    Follow the prompts:
    *   `Set up and deploy “~/moztech-solutions”? [Y/n]` - Type `Y` and press Enter.
    *   `Which scope do you want to deploy to?` - Select your personal account or a team.
    *   `Found project “moztech-solutions” in “your-scope”. Link to it? [Y/n]` - Type `Y` and press Enter. (If it's a new project, it will ask to create one).

4.  **Deploy your project**:
    \`\`\`bash
    vercel deploy
    \`\`\`
    Vercel will build and deploy your project. Once complete, it will provide you with a deployment URL.

### Option B: Deploying from Git Repository (Recommended for continuous deployment)

This method sets up continuous deployment, meaning every push to your main branch (e.g., `main` or `master`) will automatically trigger a new deployment on Vercel.

1.  **Push your code to your Git repository**:
    Ensure all your latest changes are pushed to your GitHub, GitLab, or Bitbucket repository.
    \`\`\`bash
    git add .
    git commit -m "Initial commit for Vercel deployment"
    git push origin main # or master
    \`\`\`

2.  **Import your project to Vercel**:
    *   Go to your Vercel Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
    *   Click on "Add New..." -> "Project".
    *   Select your Git provider (GitHub, GitLab, or Bitbucket).
    *   Find and select the `moztech-solutions` repository.
    *   Click "Import".

3.  **Configure Project (if necessary)**:
    Vercel will usually auto-detect Next.js projects.
    *   **Root Directory**: If your Next.js app is not in the root, specify the correct root directory.
    *   **Build and Output Settings**: Vercel typically auto-configures these for Next.js.
        *   `BUILD COMMAND`: `next build`
        *   `OUTPUT DIRECTORY`: `out` (or `.next` for App Router)
    *   **Environment Variables**: If you have sensitive keys or variables (e.g., API keys for contact form, analytics IDs), add them under the "Environment Variables" section.
        *   Click "Add" and enter `KEY` and `VALUE`. Ensure they are marked as "Serverless Function" or "All" if needed on the server.

4.  **Deploy**:
    Click the "Deploy" button. Vercel will now clone your repository, install dependencies, build your project, and deploy it.

## 4. Post-Deployment Steps

*   **Custom Domains**: After deployment, you can add a custom domain to your project from the Vercel Dashboard under your project settings.
*   **Monitoring & Analytics**: Consider integrating tools like Vercel Analytics, Google Analytics, or other monitoring solutions for your deployed site.
*   **Troubleshooting**: If your deployment fails, check the build logs in the Vercel Dashboard for error messages. Common issues include missing environment variables, build errors, or incorrect project configurations.

By following these steps, your MozTech Solutions website should be successfully deployed and accessible online!
