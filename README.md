# Credit Desk — Credit Analysis Dashboard

## 📖 Overview

Credit Desk is a front-end credit analysis panel built with React 18, simulating an internal tool for credit analysts to evaluate and manage loan applications.

## 💼 Business Applicability

The system centralises the credit application pipeline. With this dashboard, analysts can:

- Monitor pipeline KPIs — total requested, total approved, applications under review, and average portfolio score.
- Filter applications by status (Under Review, Approved, Rejected, Pending Documents).
- Access a detailed credit file per applicant — income, repayment term, credit score, and automated risk recommendation — with a single click.

## 🏗️ Key Architectural Decisions

- **Lifting State Up:** All shared state lives in `App.jsx`. Child components receive data via props and communicate back through callbacks — mirroring the Controller pattern from back-end design.
- **Props as DTOs:** Each component receives only the data it needs, keeping components decoupled and independently maintainable.
- **Data Layer Isolation (`mockdata.js`):** Mock data is fully decoupled from the UI. In production, this module would be replaced by an API service without touching any component.

## 🚀 Tech Stack

- **React 18** (Hooks: `useState`, conditional rendering)
- **Vite** — Build tool and dev server
- **Vanilla CSS + CSS Grid** — No UI framework

## 🌐 Live Demo

[View live project →](https://credit-desk-xi.vercel.app/)

## 🛠️ Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.
