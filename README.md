# Registration-page

# 🌟 Tech For Girls - Registration Website

A modern, interactive registration page built for the **Tech For Girls Community** initiative. This project is designed to collect participant details, encourage community sharing, and store data securely in Google Sheets using Google Apps Script.

---

## 🚀 Features

### 📝 Registration Form
- Name, Phone, Email, College/Department input fields
- File upload (for screenshot, resume, or photo)
- Google Sheets integration to save all form data

### 📤 WhatsApp Sharing
- Button to share a pre-written message via WhatsApp
- Tracks click count (5 required)
- Displays progress and completion message

### ✅ Submission Control
- Form submission enabled only after 5 shares
- Submission disables the form and saves a flag in `localStorage`
- Prevents resubmission even on page refresh

### 🎨 Beautiful UI
- Fully responsive and mobile-friendly
- Clean modern design using custom CSS
- Subtle hover, focus, and success animations

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Apps Script (Web App)
- Git & GitHub
- GitHub Pages (for deployment)

---

## 📁 Project Structure


📁 Registration-page/
├── index.html # Main HTML form page
├── style.css # Responsive and modern styling
├── script.js # Logic for sharing, validation, and submission
├── README.md # Project overview and documentation


## 📦 How It Works

1. User fills in the form.
2. User clicks **"Share on WhatsApp"** 5 times (counter increments).
3. After 5 shares, the **Submit** button is enabled.
4. On submission:
   - Data is sent to a Google Sheet via Apps Script.
   - A thank-you message is shown.
   - The form is disabled and remembered using localStorage.

---

## 📚 Learning Outcomes

- Front-end form validation & UI design
- File upload handling in the browser
- Integration with Google Sheets via Apps Script
- GitHub Pages deployment
- Use of localStorage for user state management

---

## ✨ Author

Made with ❤️ for the **Tech For Girls Community**  
👩‍💻 Your Name — [@ChaitanyaProjects](https://github.com/ChaitanyaProjects)

