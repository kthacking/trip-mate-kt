TripMate – College Trip Management 🚍🎒
📌 Project Overview

TripMate is a complete web-based College Trip Management System that helps colleges plan, organize, and manage trips easily.
From student registrations to budget management and itinerary planning, everything can be handled in one platform.

✨ Features

👨‍🎓 Student Registration – Students can register for trips online.

📅 Trip Scheduling – Manage trip date, time, and itinerary.

💰 Expense & Budget Tracking – Keep track of total expenses and per-student contributions.

🚌 Transport & Accommodation Management – Assign buses, book hotels, and manage logistics.

📑 Admin Dashboard – College staff can monitor all details in one place.

📱 Responsive Design – Works on mobile, tablet, and desktop.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: PHP (Core PHP, no framework)

Database: MySQL

Server: Apache / XAMPP / LAMP

📂 Project Structure
tripmate/

│
├── index.php            # Landing page / login redirect

├── config/

│   └── database.php     # DB connection

├── includes/
│   ├── header.php       # Common header

│   ├── footer.php       # Common footer

│   ├── functions.php    # Reusable PHP functions

│   └── auth.php         # Authentication checks

├── public/
│   ├── login.php        # Student/Admin login

│   ├── register.php     # New student registration

│   ├── dashboard.php    # Admin dashboard

│   └── trips.php        # Trip details

├── assets/
│   ├── css/             # Stylesheets

│   ├── js/              # Scripts  

│   └── images/          # Images

└── db.sql               # Database schema





⚡ Setup Instructions

Clone this repository

git clone https://github.com/kthacking/trip-mate-kt.git
cd trip-mate-kt


Import db.sql into your MySQL database.

Update config/database.php with your DB credentials.

Run the project in XAMPP or LAMP environment.

Open in browser:

http://localhost/tripmate

🎯 Future Enhancements

Online payment integration 💳

Student feedback & rating system ⭐

AI-based travel suggestions 🤖

Mobile app support 📱

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📧 Contact

👤 Kirubalan V
📩 Email: kirubalan220@gmail.com

🔗 LinkedIn: Kirubalan V
