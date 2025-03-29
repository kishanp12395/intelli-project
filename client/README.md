# **Frontend for [intelli project]**

## **Overview**
This is the frontend of the **[intelliproject]**, built with React.js. It provides a responsive user interface to interact with the backend services.

## **Tech Stack**
- **Frontend:** React.js, Vite  
- **UI Library:** Tailwind CSS  
- **Routing:** React Router  
- **API Handling:** Axios   

## **Project Structure**
```
/frontend
│── /src
│   │── /assets        # Static assets (images, icons, etc.)
│   │── /components    # Reusable UI components
│   │── /pages         # Application pages (Home, Dashboard, etc.)
│   │── App.js         # Main application entry
│   │── main.jsx       # Root file for rendering
│── /public            # Static public files
│── .env.              # environment variables
│── package.json       # Dependencies & scripts
│── README.md          # Documentation
```

## **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/project-frontend.git
cd client
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory and add:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```
*(Modify the API base URL based on your backend deployment.)*

### **4. Start the Development Server**
```sh
npm run dev
```
The frontend will be live at `http://localhost:5173/` (default Vite port).

### **5. Build for Production**
```sh
npm run build
```
The optimized build files will be generated in the `/dist` folder.

## **API Integration**
Modify the `/api/v1/users/register` file to set up API calls using Axios:
```js
import axios from 'axios';

const API = axios.post({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default API;
```

## **Running the Project Locally**
1. Ensure the backend is running.
2. Start the frontend with `npm run dev`.
3. Open `http://localhost:5173/` in your browser.

  

---

This README ensures clear documentation and easy setup for anyone using your frontend. 🚀
