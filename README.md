# xeno
# 🧠 Mini CRM Platform – Xeno SDE Internship Assignment 2025

Welcome to the Mini CRM Platform – a customer segmentation and campaign management tool built with scalability, intelligence, and simplicity in mind. This project is part of the 2025 SDE Internship Assignment for Xeno.

---

## 🚀 Features

### ✅ 1. Data Ingestion APIs
- Secure REST APIs to ingest **Customer** and **Order** data.
- Validations at API layer (using middleware).
- Documentation and testing via **Postman**.
- **Bonus**: Supports async data persistence with Redis Streams (Pub/Sub architecture).

### ✅ 2. Campaign Creation UI
- Dynamic rule-based segment builder using **AND/OR** conditions.
- Preview segment size before saving.
- Redirects to a **Campaign History** page after saving.
- Displays:
  - Past campaigns
  - Delivery statistics (sent, failed, audience size)
  - Recent campaigns at the top

### ✅ 3. Campaign Delivery & Logging
- Creates a campaign when a segment is saved.
- Sends personalized messages via a **simulated vendor API**.
- Simulates 90% delivery success and 10% failure.
- Delivery receipts update communication logs asynchronously.

### ✅ 4. Authentication
- Integrated **Google OAuth 2.0**.
- Only authenticated users can create/view campaigns or segments.

## 🧪 Tech Stack

| Layer         | Tech                     |
|--------------|--------------------------|
| Frontend     | React + Tailwind CSS     |
| Backend      | Node.js (Express)        |
| Database     | MongoDB (Mongoose ORM)   |
| Auth         | Google OAuth 2.0         |  
| Hosting      | Render (backend), Vercel (frontend) |

---

## 🧰 Local Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)
- Redis server (for pub-sub, optional)
- OpenAI API Key
- Google OAuth credentials
