# 🚦 LineWise – An AI-Based Smart Service Flow Management & Waiting Time Prediction System

> **Redefining queue management with Artificial Intelligence, predictive analytics, and real-time optimization.**
> A final-year capstone project from the Department of Computer Science & Engineering, Priyadarshini College of Engineering, Nagpur.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb)
![AI](https://img.shields.io/badge/AI-Powered-orange)
![Status](https://img.shields.io/badge/Status-Development-yellow)

---

## 👥 Team & Mentorship

| Role | Name | Roll No. |
|------|------|----------|
| **Guide** | **Mr. Virendra P. Yadav** | — |
| Team Member | **Swati Chaudhari** | 221 |
| Team Member | **Aman Kamble** | 224 |
| Team Member | **Abhishek Telkapalliwar** | 222 |
| Team Member | **Anushka Gajbhiye** | 204 |
| Team Member | **Mrunali Shahare** | 213 |

**Institution:** Priyadarshini College of Engineering, Nagpur *(An Autonomous Institution, Affiliated to R.T.M. Nagpur University)*  
**Department:** Computer Science & Engineering  
**Semester:** VII (2026–2027)

---

## 📌 Overview

**LineWise** is an intelligent queue management platform designed to eliminate long waiting times, overcrowding, and inefficient customer flow in high-density service environments such as hospitals, banks, government offices, railway ticket counters, college administration offices, and restaurants.

Unlike conventional token systems, LineWise leverages **Artificial Intelligence** to:
- Predict waiting times from historical and real-time data
- Prioritise users dynamically (emergency, senior citizens, disabled, VIP)
- Optimise queue flow using reinforcement learning
- Provide real-time analytics for administrators

The goal is to improve customer experience while helping organisations efficiently manage resources and reduce operational delays.

---

## ❗ Problem Statement

Traditional queue management systems suffer from several critical limitations:

| Problem | Impact |
|---------|--------|
| ⏳ Uncertain waiting times | User anxiety and walkouts |
| 👥 Overcrowded waiting areas | Health/safety risks, discomfort |
| 📄 Manual token & paper tickets | Lost tokens, no traceability |
| 📉 No intelligent prioritisation | Emergencies get stuck behind routine cases |
| 🔍 No real-time monitoring | Administrators fly blind |
| 📊 Zero predictive insights | No data-driven staffing decisions |

These challenges lead to reduced efficiency, customer dissatisfaction, and resource wastage.

---

## 💡 Solution

LineWise introduces a complete digital ecosystem for queue management:

- **Virtual Queues** — join from anywhere via QR code; step into the physical line only when your turn is near
- **AI-Based Waiting Time Prediction** — powered by historical queue data, current length, service duration, and staff availability
- **Dynamic Priority Reordering** — automatically handles emergency cases, senior citizens, disabled users, and VIP appointments
- **Live Queue Tracking** — users monitor position and estimated arrival time remotely via web dashboard
- **Smart Notifications** — real-time alerts when your turn approaches, counter changes, or delays occur
- **Admin Analytics Dashboard** — active queues, average wait time, customer flow, staff performance, peak hour trends

---

## 🎯 Objectives

| # | Objective |
|---|-----------|
| 1 | Reduce physical waiting time using AI prediction |
| 2 | Minimise overcrowding via virtual queue with remote waiting |
| 3 | Provide accurate waiting-time predictions |
| 4 | Enable remote queue joining via QR code registration |
| 5 | Improve overall service efficiency |
| 6 | Increase customer satisfaction |
| 7 | Automate end-to-end queue progression |

---

## 🧠 AI & Algorithms

LineWise incorporates multiple AI/ML techniques for intelligent queue management:

| Feature | Approach | Reference |
|---------|----------|-----------|
| ⏱ Waiting Time Prediction | Regression models on historical & real-time queue data | [1][7] |
| 🔄 Queue Optimisation | Reinforcement Learning (RL) for dynamic reordering | [2][4] |
| 📈 Demand Forecasting | Time-series analysis for peak hour prediction | [5] |
| 🎯 Priority Scheduling | Rule-based + ML classifiers for emergency/VIP handling | [3] |
| 🧩 Resource Allocation | Optimisation models for staff-to-counter assignment | [6] |
| 📊 Analytics | Generative AI for operational insights & reporting | [4] |

---

## 🏗 System Architecture

```
┌──────────────────────────────┐
│         Customer / User      │
│  (Joins via QR / Web Portal) │
└──────────┬───────────────────┘
           │
┌──────────▼───────────────────┐
│      React Frontend (UI)     │
│  Dashboard · Queue Status    │
│  Admin Panel · Notifications │
└──────────┬───────────────────┘
           │ (REST API / WebSocket)
┌──────────▼───────────────────┐
│   Node.js + Express Backend  │
│  Auth · Queue Logic · Routes │
└──────────┬───────────────────┘
           │
┌──────────▼───────────────────┐
│    AI Prediction Engine      │
│  Python ML Service · Models  │
│  Gemini API (future)         │
└──────────┬───────────────────┘
           │
┌──────────▼───────────────────┐
│      MongoDB (Database)      │
│  Users · Queues · Tokens     │
│  Analytics · Logs            │
└──────────────────────────────┘
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React · Vite · Tailwind CSS · React Router · Axios |
| **Backend** | Node.js · Express.js |
| **Database** | MongoDB · Mongoose ODM |
| **Auth** | JWT · Bcrypt |
| **AI/ML Engine** | Python (Flask/FastAPI) · Scikit-learn · TensorFlow |
| **Notifications** | WebSocket / Socket.io · *(Future: WhatsApp API)* |
| **Deployment** | *(Future: Docker · Nginx · Cloud — AWS/GCP)* |

---

## 📂 Project Structure

```
LineWise/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/          # Route pages
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   └── assets/         # Images, icons, styles
│   └── package.json
│
├── server/                 # Node.js + Express Backend
│   ├── routes/             # API route definitions
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, validation, error handling
│   ├── models/            # Mongoose schemas
│   └── services/          # AI integration, notification service
│
├── ai-engine/             # Python ML prediction service
│   ├── models/            # Trained ML models
│   ├── predict.py         # Waiting time prediction
│   └── requirements.txt
│
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- MongoDB (local or Atlas)
- Python ≥ 3.9 (for AI engine)

### Installation

```bash
# Clone the repository
git clone https://github.com/ChaudhariSwati/LineWise.git

# Navigate to project
cd LineWise

# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install

# Install AI engine dependencies (optional for now)
cd ../ai-engine && pip install -r requirements.txt

# Return to root
cd ..

# Run both frontend + backend in development mode
npm run dev
```

---

## 📖 References

This project is informed by the following academic research:

| # | Reference |
|---|-----------|
| [1] | A. Bidari, S. Jafarnejad, and N. Alaei Faradonbeh, *"Effect of Queue Management System on Patient Satisfaction in Emergency Department,"* Archives of Academic Emergency Medicine, vol. 9, no. 1, Art. no. e59, 2021. |
| [2] | T. Dobrev, M. Markov, and V. Markova, *"A Reinforcement Learning Solution for Queue Management in Public Utility Services,"* Engineering Proceedings, vol. 104, no. 6, 2025. |
| [3] | J. Li and Q. Li, *"Analysis of Queue Management in Theme Parks Introducing the Fast Pass System,"* Heliyon, vol. 9, Art. no. e18001, Jul. 2023. |
| [4] | S. S. Lim and Y. P. Yu, *"Intelligent Queue Management System Using Optimization and Generative AI Models,"* in Proc. IEEE ICCBE, 2025. |
| [5] | K. Kavitha, S. Maragathasundari, and K. Karthikeyan, *"AI-Driven Healthcare: A Queuing-Based Framework for Optimized Patient Management,"* in Proc. IEEE ICCCIS, 2025. |
| [6] | S. P. Subash et al., *"IoT-Based Real-Time Queue Monitoring and Management Solution System,"* in Proc. IEEE AIMLA, 2026. |
| [7] | A. Chydzinski, *"Waiting Time in a General Active Queue Management Scheme,"* IEEE Access, vol. 11, pp. 1–12, 2023. |
| [8] | H. Yang, Y. Z. Farid, and K. Oguchi, *"Systematic Evaluation of a Centralized Non-Recurrent Queue Management System,"* in Proc. IEEE IV, 2022. |

---

## 📅 Development Roadmap

### Phase 1 — Foundation *(In Progress)*
- [x] Repository & project setup
- [ ] User authentication (JWT)
- [ ] Landing page
- [ ] Queue creation flow

### Phase 2 — Core Queue System
- [ ] QR-based digital token generation
- [ ] Live queue tracking dashboard
- [ ] Admin panel with queue controls

### Phase 3 — AI & Intelligence
- [ ] Waiting time prediction engine
- [ ] Dynamic queue prioritisation
- [ ] Analytics & reporting dashboard

### Phase 4 — Production
- [ ] Smart notifications (WebSocket)
- [ ] Performance optimisation & caching
- [ ] Deployment (Docker + Cloud)

---

## 🌍 Potential Applications

| Sector | Example Use Case |
|--------|-----------------|
| 🏥 Hospitals | OPD queue, pharmacy, lab appointments |
| 🏦 Banks | Customer service counter, loan processing |
| 🏛 Government Offices | Passport office, RTO, municipality services |
| 🎓 Universities | Admission office, exam fee counter |
| 🍽 Restaurants | Waitlist management, table availability |
| ✈ Airports | Check-in counters, security lines |
| 🏢 Corporate Offices | Visitor management, cafeteria queues |
| 💊 Pharmacies | Prescription dispensing queue |

---

## 🧪 Future Enhancements

- [ ] QR Code Queue Entry with dynamic counter assignment
- [ ] Face Recognition Check-in for VIP/senior citizen prioritisation
- [ ] Voice Assistant — Hindi/Marathi/English for accessibility
- [ ] WhatsApp & Telegram Bot Notifications
- [ ] AI Chat Support for queue-related queries
- [ ] Multi-Branch Queue Management with cross-location switching
- [ ] NFC-based Queue Entry via smart cards
- [ ] IoT Device Integration (digital signage, ticket kiosks)
- [ ] Cloud Deployment (AWS/GCP) with auto-scaling
- [ ] Cross-platform Mobile Application (React Native)

---

## 📄 License

This project is developed for academic purposes under **Priyadarshini College of Engineering, Nagpur**.

---

> ⭐ **Star this repository** if you find the project useful or interesting!
