# Health.io

A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications

## Features

- Register as a Patient
- Book a New Appointment with Doctor
- Manage Appointments on Admin Side
- Confirm/Schedule Appointment from Admin Side
- Cancel Appointment from Admin Side
- Send SMS on Appointment Confirmation

## Getting Started

### 1. Clone the repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/mayankkalra03/health.io.git
cd health.io
```

### 2. Install dependencies

Install the necessary dependencies by running:

```sh
npm install
```

## 3. Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

### 4. Start the application

Launch the application with:

```sh
npm run dev
```

### 5. Visit the application

Open http://localhost:3000 to view the application in your web browser.

![Health.io](./public/assets/images/landing.png "Health.io")
