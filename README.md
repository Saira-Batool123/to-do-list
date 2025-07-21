Advanced To-Do List
Overview
The Advanced To-Do List is a web-based application designed to help users manage tasks efficiently with features like adding, editing, deleting, and categorizing tasks, along with user authentication. Built using HTML, CSS, JavaScript, Node.js, and Tailwind CSS, it offers a modern, responsive interface with priority levels and task categorization. Developed by Saira Batool for an internship project at UET Lahore (Narowal Campus), this application demonstrates full-stack web development skills with a focus on user experience and security.
Features

Task Management: Add, edit, delete, and mark tasks as complete with a clean, intuitive interface.
Task Categories: Organize tasks into categories (e.g., Work, Personal, Study) for better management.
Priority Levels: Assign priorities (High, Medium, Low) to tasks with color-coded indicators.
User Authentication: Secure login system using JSON Web Tokens (JWT) and bcrypt for password hashing.
Responsive Design: Fully responsive UI using Tailwind CSS, suitable for desktops, tablets, and mobile devices.
Local Storage: Persist tasks and user preferences in the browser for seamless access.
Modern UI: Glassmorphism-inspired design with smooth animations and hover effects for buttons and task cards.
Task Filtering: Filter tasks by category, priority, or completion status for quick access.

Technologies Used

HTML5: For structuring the web application.
CSS3 with Tailwind CSS: For styling and responsive design with a modern, glassmorphism aesthetic.
JavaScript: For client-side interactivity, including task management and form validation.
Node.js with Express: For backend API to handle user authentication and task storage.
JSON Web Tokens (JWT): For secure user authentication and session management.
bcryptjs: For password hashing to ensure secure user authentication.
Local Storage: For client-side persistence of tasks and preferences.
Font Awesome: For icons to enhance the user interface.

<img width="1349" height="624" alt="image" src="https://github.com/user-attachments/assets/7ae03f8d-0bb5-4c8e-a67d-407b3150fcd6" />
![WhatsApp Image 2025-07-21 at 01 46 31_8938ad2b](https://github.com/user-attachments/assets/f1837f3e-c0d7-436e-8ff8-8fd3d53165f1)

Installation
To run the Advanced To-Do List locally, follow these steps:

Clone or Download the Repository:
git clone https://github.com/Saira-Batool123/advanced-todo-list.git

Alternatively, download the project as a ZIP file from GitHub and extract it.

Navigate to the Project Directory:
cd advanced-todo-list


Install Backend Dependencies:

Ensure Node.js is installed (download from nodejs.org).
Install dependencies listed in package.json:npm install

This installs express, jsonwebtoken, bcryptjs, and body-parser.


Run the Backend Server:

Start the Node.js server:node server.js

The server will run on http://localhost:3000 (or another port if specified).


Run the Frontend:

Open index.html in a web browser (e.g., Chrome, Firefox) using a local server for full functionality:python -m http.server 8000

Access the application at http://localhost:8000.


Dependencies:

Ensure an internet connection to load external libraries via CDN:
Tailwind CSS: https://cdn.tailwindcss.com
Font Awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css


Node.js dependencies are managed via npm install.



Usage

Open the Application:

Launch the To-Do List in a web browser via http://localhost:8000.


User Authentication:

Register a new account by providing a username, email, and password.
Log in with your credentials to access the task management dashboard.


Manage Tasks:

Add Task: Enter task details (title, description, category, priority) in the task form and click "Add Task".
Edit Task: Click the edit icon on a task card, modify details, and save changes.
Delete Task: Click the delete icon to remove a task.
Mark as Complete: Toggle the completion status using a checkbox or button.


Filter and Organize:

Use dropdowns or buttons to filter tasks by category (e.g., Work, Personal) or priority (High, Medium, Low).
View completed tasks separately to track progress.


Responsive Experience:

The application adapts to different screen sizes, ensuring usability on mobile devices and desktops.



Project Structure
advanced-todo-list/
├── index.html        # Main HTML file for the frontend
├── styles.css        # Custom CSS (supplements Tailwind CSS)
├── script.js         # JavaScript for client-side logic
├── server.js         # Node.js backend for authentication and API
├── package.json      # Node.js dependencies and scripts
├── images/           # Folder for assets (e.g., task icons)
└── README.md         # This file

Screenshots
(Add screenshots of the application interface here, e.g., images/dashboard.png for the task dashboard)
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit: git commit -m "Add your feature description".
Push to your branch: git push origin feature/your-feature-name.
Submit a pull request on GitHub.

Please follow the contributing guidelines for more details.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For any queries or suggestions, reach out to:

Saira Batool
Email: batoolsaira957@gmail.com
GitHub: Saira-Batool123


Created by Saira Batool, UET Lahore (Narowal Campus), 2025
