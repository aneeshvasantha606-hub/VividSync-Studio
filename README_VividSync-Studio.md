# 🌐 VividSync Studio

**VividSync Studio** is a portfolio-style website project showcasing the team members, their roles, and interactive content.  
This project is structured for easy maintenance and future scalability, with a clear separation between the **frontend** (user interface) and **backend** (server logic).

---

## 📁 Project Structure

```
VividSync-Studio/
│
├── frontend/                          # All UI/visible components
│   ├── assets/                        # Images and icons
│   │   └── logo.png
│   │
│   ├── css/                           # Styling files
│   │   └── style.css
│   │
│   ├── js/                            # Client-side scripts
│   │   ├── script.js
│   │   └── formHandler.js
│   │
│   ├── index.html                     # Main entry page
│   ├── home.html                      # Home section
│   ├── contact.html                   # Contact page
│   ├── admin.html                     # Admin management page
│   ├── member1.html                   # Member profiles
│   ├── member2.html
│   ├── member3.html
│   ├── member4.html
│   └── member5.html
│
└── backend/                           # Server logic (future use)
    └── server.js
```

---

## 🚀 Features

- ✨ **Modern Portfolio Layout** — clean and well-organized HTML pages.  
- 🎨 **Custom Styling** — managed through a single `style.css` file for easy updates.  
- ⚙️ **Interactive Frontend** — JavaScript-based animations and dynamic effects.  
- 📬 **Form Handling** — `formHandler.js` for contact or enquiry submissions.  
- 🔧 **Ready for Backend Integration** — `server.js` placeholder for Node.js/Express setup.

---

## ⚙️ Setup Instructions

### 1. Clone or Extract the Project
If you downloaded a `.zip`, extract it into a local folder.  
Or clone it using:
```bash
git clone https://github.com/yourusername/VividSync-Studio.git
```

### 2. Open Frontend
You can directly open `frontend/index.html` in your browser to view the website.

### 3. (Optional) Setup Backend
If you want to use a Node.js backend:

```bash
cd backend
npm init -y
npm install express
```

Create a simple Express server in `server.js`:
```js
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend")));
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

Then run:
```bash
node server.js
```

---

## 🧠 Future Improvements

- Add a **database** (e.g., Firebase or MongoDB) for form submissions.  
- Enhance UI with **animations and responsive design**.  
- Create an **admin dashboard** to manage member info dynamically.  
- Convert static HTML into **dynamic templates (EJS, React, etc.)**.

---

## 👥 Team

Developed by **VividSync Studio Team**  
- Each member has a dedicated profile page (`member1.html` – `member5.html`).  
- Project maintained by [Mr Stark](https://github.com/yourusername) (Graphic Designer & Frontend Developer).  

---

## 📜 License

This project is for **educational and personal portfolio purposes**.  
Feel free to modify and expand it.
