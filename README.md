# Backend Profiles Website

[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18-brightgreen.svg)]()

A **mini profile website** built with **Express.js** and **EJS**, showcasing backend developers. Each profile includes the developer's **name, bio, picture, posts, and social links**.

---

## 🌟 Features

- Dynamic profile pages rendered from `data.json`.
- Homepage listing all backend developer profiles.
- Individual profile pages with posts and social links.
- Custom 404 page for non-existing routes.
- Static assets (CSS & images) served via `express.static()`.
- Modern and responsive design with animations.

---

## 📂 Project Structure

```
profile-modern/
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── profile1.jpg
│       ├── profile2.jpg
│       ├── profile3.jpg
│       ├── profile4.jpg
│       ├── profile5.jpg
│       ├── profile6.jpg
│       ├── profile7.jpg
│       ├── profile8.jpg
│       ├── profile9.jpg
│       └── profile10.jpg
├── views/
│   ├── index.ejs
│   ├── profile.ejs
│   └── 404.ejs
├── data.json
└── app.js
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Emmanuelahdamilola/ejs-profile-project.git
cd profile-app
```

2. **Install dependencies**

```bash
npm install express ejs nodemon
```

3. **Run the application**

```bash
node server.js
```

4. **Open in browser**

Visit: [http://localhost:4000](http://localhost:4000)

---

## ➕ Adding or Updating Profiles

1. Open `data.json`.
2. Add a new profile in the following format:

```json
{
  "id": 11,
  "name": "New Developer",
  "bio": "Backend developer focused on XYZ.",
  "image": "newdev.jpg",
  "posts": [
    "Post 1",
    "Post 2",
    "Post 3"
  ],
  "social": {
    "twitter": "twitter_handle",
    "github": "github_username",
    "website": "https://website.com"
  }
}
```

3. Add the corresponding profile image in `public/images/`.

---

## 📌 Usage

- **Homepage:** Browse all backend developer profiles.
- **Profile page:** Click on a profile to view detailed info, posts, and social links.
- **404 page:** Accessing an invalid URL shows a custom 404 page.

---

## 📚 Technologies Used

- Node.js  
- Express.js  
- EJS templating engine  
- HTML, CSS  
- JSON for dynamic data

---

## 📝 License

This project is **open-source** and free to use for educational purposes.

---

## 🎯 Author

- [Emmanuelah Damilola](https://github.com/Emmanuelahdamilola)