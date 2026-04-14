# Weather Information System - Project Report

 Student Details
- **Name:** [Your Name]
- **Roll No:** [Your Roll No]
- **Subject:** DevOps Mini Project

---

 1. Problem Definition
Modern users need quick access to real-time weather data. This system 
provides a clean dashboard displaying temperature, humidity, wind speed, 
and feels like temperature for any city worldwide.

---

 2. Version Control
- **Repository:** https://github.com/shreyakstudio/weather-info-system
- **Tool Used:** Git + GitHub
- Regular commits made at each development stage
- Clear commit messages documenting every change

---

 3. Automated Build Process
- **Tool Used:** npm
- Build command: `npm install`
- Scripts defined in package.json for build, test, and lint

---

 4. Continuous Integration
- **Tool Used:** GitHub Actions
- Pipeline file: `.github/workflows/ci.yml`
- Runs automatically on every push to main branch
- Executes: dependency install → build → tests → lint

---

 5. Containerization
- **Tool Used:** Docker
- Dockerfile uses node:18-alpine base image
- Application fully containerized and portable

---

 6. Deployment
- **Platform:** Render (Cloud)
- **Live URL:** https://weather-info-system.onrender.com
- Automatically deploys when code is pushed to main branch

---

 7. Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- API: OpenWeatherMap
- CI/CD: GitHub Actions
- Container: Docker
- Hosting: Render
