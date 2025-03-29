## 💻 Atlan Frontend Task: Mastering SQL Queries

🔗 **Live Application**: [atlan-frontend-task-onrender.app](https://sql-editor-3aq1.onrender.com)

### 🚀 Introduction

This application was built as part of a frontend assignment for **Atlan**. It provides users with an interactive SQL editor where they can write and execute queries on mock data, and immediately view the results—mimicking a real-world data analysis workflow.

Scroll down for a more detailed **Problem Statement** and design rationale.

### 📊 Data Source

The data used in this application has been generated using [Mockaroo](https://www.mockaroo.com/), a popular tool for producing realistic mock datasets.

- The data is currently stored locally in JSON format for fast access.
- With slight modifications, the application can also support CSV files via format conversion libraries or alternate logic.

### ⚡ Performance Optimization & Page Speed

To evaluate and optimize performance, tools like **Google Lighthouse**, **PageSpeed Insights**, and **GTMetrix** were used. The app achieves exceptional scores in all key performance metrics.

- On a typical laptop browser, the **Time to Interactive (TTI)** is **~0.5 seconds** on both the Homepage and SQL Editor.
- These results fall well below Google's recommended thresholds for both mobile and desktop performance.

#### 📷 Performance Screenshots & Scores

Detailed screenshots showing the results from Lighthouse and GTMetrix are available in the attached documentation.

### ✅ Optimization Techniques Implemented

1. **Progressive Web App (PWA) Support**  
   - The application is PWA-compliant, enabling installation as a native-like app.
   - PWA features ensure offline support and improved performance, aligning with modern best practices.

2. **Responsive Design**  
   - While SQL editors are primarily desktop-oriented, the app is made responsive using flexible units (`em`, `rem`, `vh`, `vw`) instead of absolute sizing.
   - Media queries are applied consistently to ensure layout adaptability across different devices.
   - Bootstrap is used sparingly for rapid prototyping in areas where custom responsiveness was less critical.

3. **Hosting on Vercel**  
   - Deployed via [onrender](https://render.com/), a performance-optimized platform for JavaScript applications.
   - Benefits include:
     - Global CDN with caching
     - Built-in SSL for secure access
     - Fast deployments with seamless CI/CD

4. **React Lazy Loading**  
   - Components not immediately required on initial page load are loaded asynchronously using **React.lazy** and **Suspense**, reducing initial bundle size.

5. **Code & Dependency Optimization**  
   - Only essential dependencies are included.
   - Reusable components are modularized to promote DRY principles.
   - Code structure is optimized to avoid unnecessary imports and improve maintainability.
  
### Screenshots
![Screenshot 2025-03-29 125552](https://github.com/user-attachments/assets/262278fa-31a7-4681-8a0d-3a9d3d1c3062)
The landing page is a clean and modern interface for a web-based SQL Editor branded with Atlan. At the top, there's a navigation bar featuring the Atlan logo on the left and links to Home, SQL Editor, Contact Us, and GitHub on the right, all styled in a sleek blue theme. The main hero section grabs attention with a bold headline that reads "SQL Editor - Query Made Easy," followed by a subheading in blue that promotes faster and more efficient SQL query writing. A prominent call-to-action button labeled "Lets Begin" invites users to get started, styled with a border that mimics a code editor’s aesthetic. The background features abstract wave-like blue gradients, adding a tech-savvy and visually appealing touch. At the bottom, the footer includes a personalized note saying, “Developed with ♥ by Akshay for atlan,” subtly reinforcing the brand and the creator’s contribution.
![Screenshot 2025-03-29 125604](https://github.com/user-attachments/assets/5d33c08a-f2c5-491c-ac76-c1a83f97c4a3)
The SQL Editor interface is designed with a user-friendly layout that supports efficient SQL query execution. On the left, there's a panel titled "Queries Available" containing pre-written SQL queries and a search bar to quickly locate them. Below it, a "Query History" section keeps track of executed queries for easy reuse. The central focus is the dark-themed code editor where users can write or edit SQL statements. To the right of the editor are three action buttons: a blue **Run** button to execute queries, a **Save** button to store them, and a red **Clear** button to reset the editor. A helpful note below the editor prompts users to click on a saved query to begin. At the bottom, a playful message reads, “Run Something & Your Output Shall Appear!”, encouraging user interaction. The design is clean and intuitive, ideal for beginners and experienced users alike.
![Screenshot 2025-03-29 125624](https://github.com/user-attachments/assets/4a27aa5b-1944-42af-b9e5-f6b3397f8237)
The screenshot displays the **Output view** of the SQL Editor in the Atlan platform. On the left, there's a sidebar featuring a list of available queries and a query history section, both equipped with search functionality. The main section shows the result of the executed SQL query `SELECT * FROM internetData;`, returning 289 rows in 0.03 seconds. The data is presented in a clean, scrollable table format with columns like `id`, `first_name`, `last_name`, `email`, `gender`, and `ip_address`. Above the table, there are tabs for toggling between "Output" and "Table Data," and a button labeled “Export” for downloading results. The interface is user-friendly, with clearly labeled sections, making it easy to navigate and analyze query outputs.
