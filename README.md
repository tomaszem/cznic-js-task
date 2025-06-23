# CZNIC - JS - TASK: Vue 3 + Vite

A responsive Vue 3 (Vite) web application for visualizing registry domain information, including ownership, contact data, state flags, DNS, and more.

## Features

- Built with **Vue 3** + **Vite**
- Responsive layout (desktop/mobile)
- Dynamic data loading from JSON
- Toggle-based verbose view support
- Clean and modern UI
- Dockerized for easy deployment

---

## Run with Docker

This project is fully containerized using Docker.

### 1. Clone the repository
```bash
git clone <url>
cd cznic-js-task
```
### 2. Run following commands
```bash
docker build -t cznic-js-task-app .
```
```bash
docker run -p 8080:80 cznic-js-task-app
```

### 3. Open the app in your browser
http://localhost:8080

The app is served using Nginx inside the container on port 80, mapped to your local port 8080.

## Development (Optional)
To run the app in development mode using the Vite dev server:

```bash
npm install
npm run dev
```
Then open: http://localhost:5173