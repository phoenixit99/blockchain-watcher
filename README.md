# Cosmos Validator Dashboard

## Project Overview

A comprehensive web application for tracking and analyzing Cosmos blockchain validators, staking performance, and network metrics.

## Technologies Used

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Project Structure

```
blockchain-watcher/
│
├── public/                 # Static assets
│   ├── favicon.ico
│   └── images/
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Main navigation component
│   │   ├── Footer.tsx      # Site footer component
│   │   └── layout/
│   │       └── MainLayout.tsx  # Primary layout wrapper
│   │
│   ├── pages/              # Next.js pages
│   │   ├── index.tsx       # Home page
│   │   ├── validators/     # Validators-related pages
│   │   │   └── index.tsx
│   │   └── analytics/      # Analytics pages
│   │       └── index.tsx
│   │
│   ├── styles/             # Styling
│   │   └── globals.css     # Global CSS
│   │
│   └── types/              # TypeScript type definitions
│       └── validator.ts    # Validator-related types
│
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Features

- Responsive design
- Validator tracking
- Network statistics
- Staking performance analysis

## Prerequisites

- Node.js (v18+)
- npm or yarn

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/phoenixit99/cosmos-validator-dashboard.git
```

2. Install dependencies
```bash
cd blockchain-watcher
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Start production server
- `npm run lint`: Run linter

## Deployment

The application is configured for easy deployment on Vercel or similar platforms supporting Next.js.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [Your Email]

Project Link: [https://github.com/your-username/cosmos-validator-dashboard](https://github.com/your-username/cosmos-validator-dashboard) 