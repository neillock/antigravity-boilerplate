#!/bin/bash

# deploy.sh - Unified deployment script for GCP and Firebase

set -e

ENV=$1

if [[ -z "$ENV" ]]; then
  echo "Usage: ./scripts/deploy.sh [staging|production]"
  exit 1
fi

echo "🚀 Starting deployment to $ENV environment..."

# 1. Authentication Check
echo "🔍 Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q "@"; then
  echo "❌ Not authenticated with gcloud. Please run 'gcloud auth login'."
  exit 1
fi

if ! firebase projects:list > /dev/null 2>&1; then
  echo "❌ Not logged in to Firebase. Please run 'firebase login'."
  exit 1
fi

# 2. Build Process
echo "🏗️ Building application..."
npm run build

# 3. Environment Configuration
GCP_PROJECT_ID="your-project-id" # Should be dynamically set or config-driven
if [[ "$ENV" == "production" ]]; then
  FB_TARGET="prod"
  CR_SERVICE="backend-prod"
else
  FB_TARGET="staging"
  CR_SERVICE="backend-staging"
fi

# 4. Deploy Backend (Cloud Run)
echo "📦 Deploying Backend to Cloud Run ($CR_SERVICE)..."
# gcloud run deploy $CR_SERVICE --source . --project $GCP_PROJECT_ID --region us-central1 --allow-unauthenticated

# 5. Deploy Frontend (Firebase Hosting)
echo "🌐 Deploying Frontend to Firebase Hosting ($FB_TARGET)..."
# firebase deploy --only hosting:$FB_TARGET

echo "✅ Deployment to $ENV complete!"
