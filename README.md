# App Guide Touristique Interactif

## 📖 Description du Projet

Ce projet est une application web dédiée à la planification de voyages. Elle permet aux utilisateurs de rechercher des destinations à travers le monde et d’accéder à des informations essentielles telles que les hôtels, les moyens de transport, les restaurants ainsi que les sites historiques et culturels.

L’application intègre également un espace administrateur sécurisé permettant la gestion des destinations et des contenus associés (ajout, modification et suppression), garantissant la fiabilité et la mise à jour continue des données proposées aux utilisateurs.

L’objectif principal de ce projet est de centraliser les informations de voyage au sein d’une plateforme intuitive afin de faciliter l’organisation et la préparation des séjours.


## Features

## 🛠️ Technologies Utilisées

- **Frontend :** React, HTML, CSS, JavaScript  
- **Backend :** Node.js, Express.js  
- **Base de données :** MongoDB  
- **Autres outils :** GitHub, Jira, Figma


## Project Structure

This project follows a full-stack architecture with separate **backend** and **frontend** directories.

APP_GUIDE_TOURISTIQUE/
│
├── backend/
│   ├── src/
│   │   ├── config/         # Configuration files (database, environment, app settings)
│   │   ├── controllers/    # Route controllers (handle HTTP requests and responses)
│   │   ├── middlewares/    # Custom middleware functions (auth, validation, etc.)
│   │   ├── models/         # Database models and schemas
│   │   ├── public/         # Static files (images, uploads, etc.)
│   │   ├── repositories/   # Data access layer (database queries and logic)
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic and service layer
│   │   ├── app.js          # Express app configuration
│   │   └── server.js       # Server entry point
│   │
│   ├── .gitignore         # Git ignore rules
│   ├── package.json       # Backend dependencies and scripts
│   ├── package-lock.json  # Dependency lock file
│   └── info.txt           # Additional backend information
│
├── frontend/
│   └── my-app/
│       ├── node_modules/  # Installed dependencies
│       ├── public/        # Static public files
│       ├── src/
│       │   ├── assets/     # Images, icons, and static resources
│       │   ├── components/ # Reusable React components
│       │   ├── Data/       # Static or mock data files
│       │   ├── pages/      # Application pages (views)
│       │   ├── utils/      # Utility/helper functions
│       │   ├── App.js      # Main React component
│       │   ├── App.css     # App styles
│       │   ├── index.js    # React entry point
│       │   └── index.css   # Global styles
│       │
│       ├── package.json       # Frontend dependencies and scripts
│       ├── package-lock.json  # Dependency lock file
│       ├── tailwind.config.js # Tailwind CSS configuration
│       ├── postcss.config.js  # PostCSS configuration
│       ├── README.md          # Frontend documentation
│       └── LICENSE            # License file
│
└── README.md              # Project documentation

## Installation
Make sure you have installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Git

Check versions:

```bash
node -v
npm -v
Clone the repository
git clone https://github.com/ayoub22222222/App_Guide_Touristique_Interactif.git
cd app-guide-touristique
Install Backend dependencies
cd backend
npm install
Install Frontend dependencies
cd ../frontend/my-app
npm install

## Environment Variables
Create a .env file in the backend/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development

Description:

PORT → Backend server port

MONGO_URI → MongoDB connection string

JWT_SECRET → Secret key for authentication

NODE_ENV → Environment mode


## Running the Application
cd backend
npm run dev

or

npm start

Backend runs on:

http://localhost:5000
Run Frontend
cd frontend/my-app
npm start

Frontend runs on:

http://localhost:3000

## Project Management & Methodology
This project follows an Agile methodology.

Tools Used

Jira → Task management

GitHub → Source code management

Git → Version control

Figma → UI/UX design

Workflow

User story creation

Task planning

Feature-based development

Testing and validation

Continuous improvement

## Design (UI/UX)
The UI/UX was designed using Figma.

Goals

Intuitive interface

Smooth user experience

Responsive design

Clear navigation

Designed Components

Destination pages

Admin dashboard

Detail pages

Reusable UI components

## Contributing
Contributions are welcome.

Steps:

Fork the repository

Create a branch

git checkout -b feature/your-feature-name

Commit changes

git commit -m "Add new feature"

Push branch

git push origin feature/your-feature-name

Open a Pull Request

## License
This project is licensed under the MIT License.

You are free to use, modify, and distribute this software with proper attribution.

## Team
Jihane Mansouri: mansourijihane23@gmail.com
Othamn Chafik: Chafik.otmane96@gmail.com
Selmane Oukaya: salmane_dofus@hotmail.com
Ayoub Mohammed: salmane_dofus@hotmail.com