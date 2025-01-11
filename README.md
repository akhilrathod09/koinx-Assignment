# KoinX - Frontend Intern Assignment

This repository contains the implementation of the **KoinX Frontend Intern Assignment**. The goal was to convert a Figma design into a fully functional React.js application using APIs from Coingecko and TradingView. The project is hosted and deployed for live access.

## 🚀 [Deployed Link](https://koinxfrontendassignment.netlify.app/)

---

## 🗿 **Objective**

To convert the given [Figma Design](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FVRj5MqVPoQdj5N7AwmYc98%2FKoinX---Frontend-Intern-Assignment%3Ftype%3Ddesign%26node-id%3D0-1%26mode%3Ddesign%26t%3Dx8gdUiF5gA3sjRd3-0) into a fully responsive React.js/Next.js application. The design includes components, API integrations, and dynamic content rendering.

---

## 🛠️ **Implemented Features**

### 1. **Figma Design Conversion**
- All components from the Figma design were implemented using **React.js**.
- The layout is fully **responsive**, ensuring compatibility across devices.

### 2. **Bitcoin Price Component**
- Fetches the **Bitcoin price in INR and USD** using Coingecko’s `/simple/price` API.
- Displays the **24-hour price change** for USD.

### 3. **TradingView Integration**
- Integrated the **TradingView advanced chart widget** for BTC/USD.
- Customized the widget design to match the Figma style.

### 4. **Trending Coins (24h) Component**
- Fetches the top 3 trending coins using Coingecko’s `/search/trending` API.
- Displays the coin's logo, name, and other details.

### 5. **You May Also Like Section**
- Horizontally scrollable **carousel** showing trending coins.
- Utilizes the `sparkline` data from the API for mini price graphs.

### 6. **Responsive Design**
- Ensures that all components adjust seamlessly for mobile, tablet, and desktop devices.

---

## ✨ **Optional Feature**
- Dynamic token data based on the URL path (e.g., `/bitcoin` shows Bitcoin's data, `/ethereum` shows Ethereum's data).
- Implemented using Coingecko’s `/coins/{id}` API for flexibility and dynamic chart rendering.

---

## 📦 **APIs Used**

### 1. **Coingecko API**
- `/simple/price`: Fetches Bitcoin price in USD and INR, along with 24-hour price change.
- `/search/trending`: Fetches the top 3 trending coins, including details like name, logo, and sparkline.

### 2. **TradingView Widget**
- Embedded the **advanced chart widget** for BTC/USD with customization.

---

## 🦜 **Technologies Used**

- **React.js**: Framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API requests.
- **TradingView Widget**: For advanced BTC/USD price chart.
- **Netlify**: For deployment and hosting.

---

## 🔥 **How to Run Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/koinx-frontend-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd koinx-frontend-assignment
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🌟 **Key Highlights**

- Clean, production-ready code with modular components.
- Follows best practices for folder structure, API handling, and styling.
- Meaningful and descriptive commit messages for better version control.

---

## 🤝 **Connect**

If you have any questions or feedback, feel free to reach out!

