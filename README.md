# Cosmos Validator Dashboard

A comprehensive dashboard for monitoring Cosmos validators and staking rewards. Built with Next.js and Tailwind CSS, with multi-language support for English and Vietnamese.

## Features

- **Validator Analytics**: Detailed analysis of validator performance, uptime, and commission rates
- **Delegator Dashboard**: Track rewards, unbonding periods, and total amount staked
- **Validator Alerts**: Receive notifications when validators are jailed or show signs of poor performance
- **Multi-language Support**: Currently supports English and Vietnamese
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: next-intl

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blockchain-watcher.git
cd blockchain-watcher
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components/         # React components
├── messages/           # Internationalization files
│   ├── en/             # English translations
│   └── vi/             # Vietnamese translations
├── pages/              # Next.js pages
├── public/             # Static assets
└── styles/             # Global styles
```

## Adding New Languages

1. Create a new folder in the `messages` directory with the language code
2. Copy the structure from an existing language file (e.g., `messages/en/common.json`)
3. Translate the strings to the new language
4. Update the `LanguageProvider.tsx` file to include the new language

## Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Built for the Cosmos ecosystem
- Inspired by existing validator dashboards and monitoring tools 