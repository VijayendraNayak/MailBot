# Rudradev's-Reachinbox Assessment

## Overview
Open AI Email Assistant using a Node.js application that automates email processing for both Gmail and Outlook accounts. It uses GPT 3.5 turbo - 0125 to categorize incoming emails, generate appropriate responses, and apply labels or categories to the processed emails.

## Features
- Supports both Gmail and Outlook email providers
- AI-powered email categorization
- Automated response generation
- Email labeling and categorization
- OAuth2 authentication for secure access to email accounts

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Gmail account 
- Microsoft Azure account with registered application 
- OpenAI API key 

## Folder Structure
```bash
Rudradev-s-inbox/
│
├── src/
│   ├── app.ts
│   ├── config.ts
│   ├── authService.ts
│   ├── emailService.ts
│   ├── outlookAuthService.ts
│   ├── outlookEmailService.ts
│   └── aiService.ts
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-email-assistant.git
   cd ai-email-assistant
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   # Gmail Configuration
   GMAIL_CLIENT_ID=your_gmail_client_id
   GMAIL_CLIENT_SECRET=your_gmail_client_secret
   GMAIL_REDIRECT_URI=http://localhost:3000/auth/gmail/callback

   # Outlook Configuration
   OUTLOOK_CLIENT_ID=your_outlook_client_id
   OUTLOOK_CLIENT_SECRET=your_outlook_client_secret
   OUTLOOK_TENANT_ID=your_outlook_tenant_id
   OUTLOOK_REDIRECT_URI=http://localhost:3000/auth/outlook/callback

   # OpenAI Configuration
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Configure OAuth 2.0 credentials:
   - For Gmail: Set up OAuth 2.0 credentials in the Google Cloud Console
   - For Outlook: Register an application in the Azure Portal and configure the necessary permissions

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Authenticate your email accounts:
   - Gmail: Visit `http://localhost:3000/auth/gmail` or `http://localhost:3000/auth`
   - Outlook: Visit `http://localhost:3000/auth/outlook`

3. Process emails:
   - Gmail: `http://localhost:3000/process-email/gmail`
   - Outlook: `http://localhost:3000/process-email/outlook`

## API Endpoints

- `/auth/gmail`: Initiates Gmail authentication
- `/auth/outlook`: Initiates Outlook authentication
- `/process-email/gmail`: Processes the latest unread Gmail email
- `/process-email/outlook`: Processes the latest unread Outlook email
- `/verify-outlook-auth`: Verifies Outlook authentication status


## Why BullMQ wasn't used
by default the email processing is handled synchronously when requested hence was not needed
