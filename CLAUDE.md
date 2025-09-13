# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern landing page for FYH Ingenieros, a technology services company. The project is built with **Next.js 15** and **TypeScript**, configured for static export deployment.

### Dual Architecture

The project has a hybrid structure with two implementations:
1. **Next.js App** (in `/src/`) - Modern React components with TypeScript
2. **Static HTML** (root files: `index.html`, `styles.css`, `script.js`) - Legacy vanilla implementation

The Next.js implementation is the active development version.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run export       # Build and export static files
npm start            # Start production server
npm run lint         # Run ESLint checks
```

### Testing
No test framework is currently configured in this project.

## Code Architecture

### Next.js Structure
- **App Router**: Uses Next.js 13+ app directory structure
- **Component Organization**: 
  - `/src/components/sections/` - Page sections (Header, Hero, Services, etc.)
  - `/src/components/ui/` - Reusable UI components
- **Styling**: Tailwind CSS v4 with custom configuration
- **Animations**: Framer Motion for page animations
- **Forms**: React Hook Form for contact form validation

### Key Components
- `src/app/page.tsx` - Main page composition
- `src/app/layout.tsx` - Root layout with SEO metadata
- Section components: Header, HeroSection, ServicesSection, WhyUsSection, ContactSection, Footer
- WhatsAppButton - Floating contact button

### Configuration
- **Static Export**: Configured for static deployment (`output: 'export'`)
- **TypeScript**: Path aliases configured (`@/*` maps to `./src/*`)
- **ESLint**: Next.js core-web-vitals and TypeScript rules
- **Tailwind**: v4 with PostCSS integration

### Business Context
- **Industry**: Technology services (RPA, AI, Cybersecurity)
- **Services**: 17 specialized services across Automation, Cybersecurity, AI, and Infrastructure
- **Target**: B2B clients in Financial, Energy, and Mining sectors
- **Languages**: Spanish (primary), with potential for English expansion

### Development Notes
- Uses Inter font via Google Fonts
- Configured for image optimization disabled (static export)
- SEO metadata includes OpenGraph and Twitter cards
- Responsive design with mobile-first approach