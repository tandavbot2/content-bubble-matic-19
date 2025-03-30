
# SocialCurator - AI-Powered Social Media Content Creation

SocialCurator is a modern web application that enables users to create, manage, and share content across multiple social media platforms using AI assistance. The platform streamlines the content creation process for tech professionals and content creators.

![SocialCurator Screenshot](https://place-hold.it/800x400/purple/white&text=SocialCurator&bold&fontsize=20)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Application Workflow](#application-workflow)
- [UI Components](#ui-components)
- [Page Structure](#page-structure)
- [Backend Requirements](#backend-requirements)
- [Getting Started](#getting-started)
- [Development](#development)

## Overview

SocialCurator enables users to generate tech-focused content through AI assistance and automatically format it for various platforms like Dev.to, Reddit, and Mastodon. The application streamlines the entire process from content creation to publishing, helping developers and tech content creators maintain a consistent social media presence with minimal effort.

## Features

- **AI-Powered Content Generation**: Create content from user prompts or trending tech news
- **Multi-Platform Publishing**: Format and share content across various tech platforms
- **Content Management**: Dashboard to track, edit, and manage all content
- **Platform Connections**: Integration with popular tech social platforms
- **User Authentication**: Secure login and registration system
- **Profile Management**: User profile and platform connection settings

## Project Structure

The project follows a modern React application structure with TypeScript:

```
src/
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Main application pages
├── App.tsx              # Main application component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Technology Stack

### Frontend
- **React**: UI library for building the user interface
- **TypeScript**: Type-safe JavaScript for better developer experience
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI
- **Lucide Icons**: Modern icon library
- **TanStack Query**: Data fetching and state management

### Backend Requirements (To Be Implemented)
- **Authentication Service**: User management and authentication
- **Content Generation API**: Integration with AI services for content creation
- **Platform API Integrations**: Services to connect with social media platforms
- **Database**: Storage for user data, content, and platform connections
- **Content Management Service**: Handling content creation, editing, and scheduling

## Application Workflow

### User Journey

1. **Registration/Login**: Users create an account or log in to access the dashboard
2. **Profile Setup**: Users connect their social media accounts
3. **Content Creation**:
   - User enters a prompt or selects trending tech news
   - AI generates content tailored for different platforms
   - User reviews and edits the generated content
4. **Publishing**: Content is posted to selected platforms or scheduled for later
5. **Analytics**: User monitors engagement and performance on the dashboard

### Data Flow

1. **User Authentication**: Frontend ↔ Auth Service ↔ User Database
2. **Content Generation**: User Input → AI Service → Generated Content
3. **Platform Publishing**: Formatted Content → Platform API Services → Social Media Accounts
4. **Analytics Tracking**: Platform APIs → Analytics Service → User Dashboard

## UI Components

### Core Components

- **Navbar**: Navigation component with authentication state
- **Footer**: Site-wide footer with links and information
- **ContentCard**: Displays content items with status and actions
- **SocialConnectionCard**: Manages social media platform connections

### UI Elements

- **Button**: Primary interactive element with multiple variants
- **Card**: Container for structured content display
- **Tabs**: Organizes content into different sections
- **Toast**: Provides user feedback through notifications

## Page Structure

### Public Pages

- **Index**: Landing page with features and benefits
- **Login/Register**: Authentication pages

### Authenticated Pages

- **Dashboard**: Overview of content metrics and management
- **CreateContent**: AI-assisted content generation interface
- **Profile**: User settings and social platform connections

## Backend Requirements

To implement the backend for SocialCurator, you'll need to develop:

### Authentication Service
- User registration and login
- Session management
- Password recovery

### Content Service
- Storage for user-generated content
- Content status management (draft, scheduled, published)
- Content editing and versioning

### AI Integration
- Connection to AI content generation services
- Prompt processing and response formatting
- Platform-specific content optimization

### Platform Connectors
- OAuth integration with social platforms
- API clients for Dev.to, Reddit, Mastodon, etc.
- Content posting and scheduling

### Analytics Service
- Content performance tracking
- Engagement metrics collection
- Dashboard data aggregation

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository
   ```
   git clone <repository-url>
   cd socialcurator
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

## Development

### Frontend Development
- The application uses Vite for fast development
- Run `npm run dev` to start the development server

### Backend Implementation Recommendations
- Consider using Node.js with Express for the API
- Implement JWT authentication for secure user sessions
- Use PostgreSQL or MongoDB for data storage
- Consider serverless functions for AI processing
- Implement rate limiting for API connections

### Environment Configuration
- Create separate environments for development, testing, and production
- Use environment variables for API keys and secrets
- Implement CORS for secure frontend-backend communication

---

Built with [Lovable](https://lovable.dev) - An AI-powered web app builder.

