# MGA Services - Project Structure

## 📁 Directory Organization

### `/assests/`
Static assets including logos and photos

#### `/assests/Logo and icons/`
- `white_logo.png` - White outline logo (used in header/footer)
- `logo-with_gold.png` - Colored logo with golden shadow (used in scrolled header)
- `clean-logo.png` - Clean colored logo without shadow (alternative)

#### `/assests/photos/`
- `hero.jpg` - Main hero section background (team photo)
- `Who_We_Are.jpg` - About section image
- `Arrival_Meet_&_Greet.jpg` - Arrival service card
- `Departure Assistance.jpg` - Departure service card  
- `VIP_Porter_Service.jpg` - VIP porter service card

### `/components/`
React components organized by functionality

#### Layout Components
- `Header.tsx` - Site navigation with logo and menu
- `Footer.tsx` - Site footer with links and contact info
- `Hero.tsx` - Landing page hero section

#### Content Components
- `About.tsx` - Company history and statistics
- `Services.tsx` - Service offerings with cards
- `Testimonials.tsx` - Client testimonials/reviews
- `BookingForm.tsx` - Contact and booking form

#### UI Components
- `Button.tsx` - Reusable button component
- `ChatWidget.tsx` - AI-powered chat interface

### `/services/`
Business logic and API integrations

- `geminiService.ts` - Google Gemini AI integration for chatbot

### Root Files

#### Configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

#### Application
- `App.tsx` - Main application component
- `index.tsx` - Application entry point
- `index.html` - HTML template
- `types.ts` - TypeScript type definitions

#### Documentation
- `README.md` - Project documentation
- `PROJECT_STRUCTURE.md` - This file
- `.gitignore` - Git ignore rules

## 🔧 Key Technologies

### Frontend Framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Build & Development
- **Vite** - Fast build tool and dev server
- **ESM** - Modern module system

### External Services
- **Google Gemini AI** - Chatbot intelligence
- **Lucide React** - Icon library

## 🎨 Design System

### Colors
- **Gold**: `#D4AF37` (primary brand color)
- **Dark**: `#0F172A` (text and backgrounds)
- **White/Gray**: Various shades for UI

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📝 Component Architecture

### Data Flow
```
App.tsx
  ├─ Header (global nav)
  ├─ Hero (landing)
  ├─ About (company info)
  ├─ Services (offerings)
  ├─ Testimonials (social proof)
  ├─ BookingForm (lead capture)
  ├─ Footer (site info)
  └─ ChatWidget (AI support)
```

### State Management
- Local component state with `useState`
- No global state manager needed (simple app)

### Styling Approach
- Tailwind utility classes
- Responsive-first design
- Custom color extensions in `index.html`

## 🚀 Development Workflow

1. **Local Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`

## 📦 Assets Management

### Images
- All images served from `/assests/` directory
- Referenced using public paths (e.g., `/assests/photos/hero.jpg`)
- No image optimization pipeline (rely on Vite's defaults)

### Logos
- Multiple variants for different backgrounds
- Used conditionally based on scroll state
- Cropped using CSS for optimal display

## 🔐 Environment Variables

Required:
- `GEMINI_API_KEY` - Google Gemini API key for chatbot

See `.env.example` for template.

## 📊 Performance Considerations

- Lazy loading not implemented (small app)
- Images not optimized (consider WebP conversion for production)
- No code splitting (single bundle strategy)
- CDN for Tailwind CSS (consider self-hosting for production)

## 🎯 Future Improvements

- [ ] Add image optimization
- [ ] Implement form backend integration
- [ ] Add analytics tracking
- [ ] SEO meta tags enhancement
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add unit tests
- [ ] Set up CI/CD pipeline

---

Last updated: January 2026
