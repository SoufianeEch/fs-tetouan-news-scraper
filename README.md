# 📦 FS Tetouan News Scraper (Python + Node.js + Frontend)

This project scrapes the **latest news headlines** from [FS Tetouan (UAE Morocco)](https://fs.uae.ac.ma/) using **Python (Selenium)** and displays them on a simple webpage served by a **Node.js backend**.

---

## 🛠️ Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
* **Python** (Selenium, WebDriver) → Scrapes headlines from the FS Tetouan website.
* **Node.js (http + child\_process)** → Runs the Python script and returns JSON data.
* **Frontend (HTML + JavaScript)** → Fetches JSON data and renders it dynamically.

---

## ✨ Features

* 🔎 Scrapes the **carousel news headlines** from the FS Tetouan homepage.
* ⚡ Runs scraper automatically when you call the Node.js endpoint.
* 🌍 Frontend button fetches fresh data from the server and displays it.
* 📑 Returns structured JSON:

Example response:

```json
[
  {
    "index": 1,
    "title": "Title-1",
    "url": "https://fs.uae.ac.ma/link-1"
  },
  {
    "index": 2,
    "title": "Title-2",
    "url": "https://fs.uae.ac.ma/link-2"
  }
]
```

---

## 📁 Project Structure

```
.
├── server.js              
├── scraper.py             
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Usage

**Python**

```bash
pip install selenium
```

> ⚠️ Requirements:
>
> * **Brave/Chrome** installed
> * Matching **ChromeDriver** available in PATH

---

### 2️⃣ Start the server

```bash
node server.js
```

The server runs at:
👉 [http://localhost:3000](http://localhost:3000)
---
`@SoufianeEch`