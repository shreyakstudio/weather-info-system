# Weather Information System

## About This Project
I built this project as part of my DevOps mini project. The idea is simple — 
a weather app where you enter any city name and it shows you the current 
weather details instantly.

## What It Shows
- 🌡️ Temperature (°C)
- 💧 Humidity (%)
- 💨 Wind Speed (km/h)
- 🤔 Feels Like (°C)

## Live Link
🌐 https://weather-info-system.onrender.com

## Tools and Technologies Used
- HTML, CSS, JavaScript — for the frontend
- Node.js and Express — for the backend
- OpenWeatherMap API — for real weather data
- GitHub Actions — for CI/CD pipeline
- Docker — for containerization
- Render — for cloud deployment

## Project Structure
src/            → Frontend files (HTML, CSS, JS)
server/         → Backend Node.js server
tests/          → Jest test files
.github/        → GitHub Actions CI/CD workflow
Dockerfile      → Container configuration
package.json    → Project dependencies

## How the Pipeline Works
Whenever I push code to the main branch, GitHub Actions automatically
installs dependencies, runs the build, and executes tests.
The app is deployed on Render and updates automatically.
