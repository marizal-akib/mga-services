# MGA Services - Premium Airport Meet & Greet

Premium airport assistance services providing seamless arrivals, departures, and connections for VIP travelers.

## 🌟 About MGA Services

Meet Greet and Assist Services (MGA) was established in 2002 by senior retired aviation officials to assist passengers at Bangladesh's busiest international airport in Dhaka. We provide government-approved, professional airport assistance services across 50+ airports worldwide.

### Our Services
- ✈️ **Arrival Meet & Greet** - Personal greeting, fast-track immigration, luggage assistance
- 🛫 **Departure Assistance** - Check-in, security fast-track, VIP lounge access
- 🔄 **Transit & Connection** - Seamless transfer between flights
- 🧳 **VIP Porter Service** - Dedicated baggage handling
- 🎟️ **Air Ticketing & Tours** - Travel packages with installment options

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Chat**: Google Gemini AI
- **Icons**: Lucide React

## 📦 Project Structure

```
mga-services/
├── assests/
│   ├── Logo and icons/     # Brand logos
│   └── photos/             # Service images
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # Company info
│   ├── Services.tsx        # Service cards
│   ├── Testimonials.tsx    # Client reviews
│   ├── BookingForm.tsx     # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── ChatWidget.tsx      # AI chatbot
│   └── Button.tsx          # Reusable button
├── services/
│   └── geminiService.ts    # AI integration
├── App.tsx                 # Main app component
├── index.tsx              # App entry point
├── types.ts               # TypeScript types
└── vite.config.ts         # Vite configuration
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mga-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   
   Get your API key from: https://aistudio.google.com/app/apikey

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Features

- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **AI Chatbot** - Powered by Google Gemini for instant support
- ✅ **Professional UI** - Premium design with smooth animations
- ✅ **Fast Performance** - Built with Vite for lightning-fast loading
- ✅ **Real Photos** - Authentic team and service imagery
- ✅ **SEO Optimized** - Proper meta tags and structure

## 🌍 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📞 Contact Information

**MGA Services**
- 📧 Email: info@mgaservices.com
- 📱 Phone: +880 1234-567890
- 🌐 Locations: Dhaka, Bangladesh • Middle East • USA

## 📄 License

© 2002-2026 MGA Services. All rights reserved.

---

**Built with ❤️ by MGA Services Team**
