# 🛒 King's Collection - E-commerce Web Application (Admin Panel)
An elegant, modern e-commerce application, King's Collection delivers a seamless online shopping experience for a wide range of clothing products. The application is crafted with a React-based frontend, integrated backend functionalities, and smooth administrative capabilities, tailored to create an intuitive shopping journey for users and a comprehensive dashboard for administrators.

---

## ✨ Table of Contents:

- Features
- Project Structure
- Technologies Used
- Components & Modules
- Installation & Setup
- Future Plans
- Contribution

1. **Features:**

- Responsive UI: User-friendly interface for browsing and purchasing clothing items on any device.
- Product Details & Cart: Detailed product views, real-time cart management, and secure checkout.
- Admin Dashboard: Manage products, view orders, and track items in a streamlined admin panel.
- Payment Integration: Razorpay integrated for secure transactions.
- User Authentication: Supports Google Sign-In, allowing quick login and session management.
- Wishlist & Reviews: (Upcoming) Features to enhance customer engagement.
- Notifications: Smooth feedback with react-toastify for actions like login, logout, and form submissions.

2. **Technologies Used:**

- Frontend: React, React Router, Tailwind CSS, Font Awesome, Axios
- Backend: Node.js, Express.js, MongoDB
- Image Storage: Cloudinary
- Payment Integration: Razorpay API
- Authentication: Google Sign-In, Custom Email Authentication
- Notifications: React Toastify
- Version Control: Git, GitHub

3. **Components & Modules:**

- 3.1 Main Components

- Sidebar:

Serves as the main navigation menu for administrators.
Includes links to manage products (Add Items, List Items) and view orders.
Styling and icons provide quick identification and active states for user-friendliness.

- Navbar:

Positioned at the top of the admin panel with a centered brand logo and title.
Contains a Logout button that clears the token state, redirecting the user upon logout.

- Login:

Enables secure admin access with email/password fields, password visibility toggle, and error handling.
Form submission triggers authentication with Axios POST requests.
Background video with dark overlay for a professional look.

- 3.2 Pages

- Home: Introductory page showcasing King's Collection’s clothing brand.
- Collection: Displays all products with filtering and search options.
- Product: Detailed view of individual products, size selection, ratings, and Add to Cart button.
- Cart: Real-time cart management.
- Orders: Admin view for managing user orders and tracking status.

3.3 Contexts

- ShopContext: Centralized state management, holding data like cartItems, products, token, and backendUrl. Provides context values to children components to streamline data access and manipulation.

3.4 Utilities

- API Calls: Axios instances for GET and POST requests to the backend.
- Helper Functions: For processing data, including cart calculations and order status updates.

4. **Installation & Setup:**

- Prerequisites
- Node.js (>=14.x.x)
- MongoDB (for backend setup)
- Razorpay API Key (for payment integration)
- Cloudinary Account (for image hosting)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/JigarHingu/ecommerce_app_admin.git
cd kings-collection
```

2. Install Dependencies:

```bash
npm install
```

3. Environment Variables: Create a .env file in the root directory and add the following:

```bash
REACT_APP_BACKEND_URL=<your_backend_url>
REACT_APP_RAZORPAY_API_KEY=<your_razorpay_api_key>
REACT_APP_CLOUDINARY_URL=<your_cloudinary_url>
VITE_BACKEND_URL=<your_url> 
```

4. Open your Browser and Go to:

    ```
    http://localhost:5174/
    ```

---

4. Run the Application:

- Frontend:

```bash
Copy code
npm run dev
```

- Backend: Ensure MongoDB is running, then start your backend server (details in server.js or similar backend directory).

5. Testing:

Test components and API calls with tools like Postman for backend endpoints and React Developer Tools for UI testing.

 5. **Future Plans:**

- Wishlist and Reviews: Allow users to save favorite items and add product reviews.
- Advanced Filtering: Incorporate multi-criteria search with filtering by size, color, and price range.
- UI/UX Improvements: Enhance accessibility and animations for an improved shopping experience.

## 6. **Contribution:**

Contributions are welcomed! To contribute:

1. Fork the repository.
2. Create a feature branch: git checkout -b feature-name.
3. Commit your changes: git commit -m "Add some feature".
4. Push to the branch: git push origin feature-name.
5. Create a pull request.

Thank You!
Thank you for checking out King's Collection! Please feel free to reach out with any questions, suggestions, or feedback.