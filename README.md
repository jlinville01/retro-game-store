# Retro Game E-Commerce Store

![Project logo](https://github.com/jlinville01/retro-game-store/blob/main/assets/retro-game-logo.png?raw=true)

## Setup

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/jlinville01/retro-game-store.git
   cd retro-game-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   - The app will be available at `http://localhost:8080`
   
4. **Change directories**
   ```bash
   cd qa
   ```

5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Run automation**
   ```bash
   npx wdio run ./wdio.conf.js
   OR
   npm run test:chrome
   OR
   npm run test:firefox
   ```
   
### Testing Checkout
Use credit card number: `4242 4242 4242 4242` to complete a test purchase.

## This project is built with

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
