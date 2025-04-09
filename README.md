# Fitness Tracking UI

Please consider that UI is not completed and not connected with all BE endpoints

A modern React-based fitness tracking application built with Vite, TypeScript, and Ant Design.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm (version 9 or higher)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fitness-tracking-ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### 4. Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
fitness-tracking-ui/
├── src/            # Source files
├── public/         # Static assets
├── dist/           # Production build output
├── node_modules/   # Dependencies
└── package.json    # Project configuration
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Ant Design (antd)
- React Router DOM
- ESLint & Prettier for code quality

## Code Quality

The project uses ESLint and Prettier for maintaining code quality. You can run:

```bash
npm run lint    # Check for linting errors
npm run format  # Format code
```

## Docker Support

The project includes a Dockerfile for containerization. To build and run the Docker container:

```bash
docker build -t fitness-tracking-ui .
docker run -p 80:80 fitness-tracking-ui
```

