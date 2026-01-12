# Portfolio

A modern, interactive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, tabbed navigation, and a responsive design to showcase projects, skills, research, and more.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Powered by Framer Motion for smooth transitions
- **Tabbed Navigation**: Organized sections for easy browsing
- **Sound System**: Background audio controls for an immersive experience
- **Sections Include**:
  - Hero: Eye-catching introduction
  - About: Personal background and story
  - Skills: Technical expertise and tools
  - Projects: Showcase of completed work
  - Research: Academic or professional research highlights
  - Certificates: Achievements and certifications
  - Contact: Ways to get in touch

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Utilities**: clsx for conditional styling
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Manas8114/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── (tabs)/            # Tabbed sections
├── components/            # Reusable components
│   ├── animations/        # Animation utilities
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Main content sections
│   ├── SoundSystem.tsx    # Audio controls
│   └── TabNav.tsx         # Tab navigation
├── lib/                   # Utility libraries
│   └── data.ts            # Static data
└── public/                # Static assets
    └── images/            # Portfolio images
```

## 🎨 Customization

- **Content**: Update `lib/data.ts` with your personal information, projects, and skills
- **Styling**: Modify Tailwind classes in components or update `app/globals.css`
- **Images**: Replace images in `public/images/` with your own assets
- **Sections**: Add or modify sections in `components/sections/`

## 🚀 Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and make your own portfolio! If you find any issues or have suggestions, please open an issue or submit a pull request.

---

Built with ❤️ using Next.js
