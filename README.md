# Shopping Cart Project

This React-based e-commerce application offers a dynamic user experience with product browsing, cart management, and checkout simulation. The app leverages React's state management through hooks (useState, useEffect) to track items in the cart and manage quantities, with persistent local storage ensuring the cart remains intact across sessions. Styled-components were used for modular and maintainable CSS, allowing for a responsive and polished UI. The project also includes custom utility functions for calculating total costs and updating cart states efficiently. Integrated routing (react-router-dom) enables seamless navigation between product listings and cart views. Hosted on Netlify for fast deployment and performance optimization.

## Live Demo

![shoppingcart](https://github.com/user-attachments/assets/34311420-c259-4e30-a6eb-5cf3c3951883)

Check out the live demo of the project: [Shopping Cart Demo](https://sehunshoppingcart.netlify.app/)

## Features

- Browse a list of products fetched from an external API
- Add products to the cart with specified quantities
- View and manage the shopping cart
- Responsive design for various screen sizes
- Real-time cart total and item count updates
- Sliding notifications for user actions

## Tech Stack

- React
- Styled-components
- React-router-dom
- LocalStorage
- Netlify

## Project Structure

- `src/`
  - `components/`: Reusable React components
  - `pages/`: Page-level components
  - `assets/`: Static assets like images
  - `App.jsx`: Main application component
  - `main.jsx`: Entry point of the application

## Key Components

- `CartContext.jsx`: Provides cart functionality and state management
- `ProductList.jsx`: Fetches and displays the list of products
- `ProductCard.jsx`: Individual product display with add-to-cart functionality
- `ShoppingCart.jsx`: Displays cart items and allows quantity adjustments
- `NavBar.jsx`: Navigation component with cart item count
- `SlidingNotification.jsx`: Displays temporary notifications for user actions

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/sehundpark/shopping-cart.git
   ```
2. Navigate to the project directory:
   ```
   cd shopping-cart
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Browse products on the Shop page
- Click "Add to Cart" to add items to your cart
- Adjust quantities in the cart
- View your cart total and proceed to checkout (functionality to be implemented)

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
