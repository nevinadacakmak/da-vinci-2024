# Bulk Purchasing Collective

A platform where small businesses join forces to bulk purchase essential supplies, such as office supplies, packaging materials, or wholesale goods. By leveraging group buying, the platform helps businesses reduce individual costs through collective purchasing power.

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

**Bulk Purchasing Collective** is a B2B platform that allows small businesses to lower operational costs by joining interest groups for bulk purchasing of essential supplies. The MVP focuses on creating a seamless interface for discovering bulk purchase options, forming interest groups, and tracking potential savings.

## Features

- **Product Listings**: Display essential supplies available for bulk purchase.
- **Interest Groups**: Enables businesses to express interest in certain items, facilitating group formation to meet bulk order minimums.
- **Price Tracking**: Real-time display of cost savings based on group size.
- **Optional Notifications**: Alerts businesses when group sizes reach savings thresholds (optional feature).

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Hosting**: Vercel

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) - Version 14.x or higher
- [Git](https://git-scm.com/) - Version control system

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/bulk-purchasing-collective.git
    cd bulk-purchasing-collective
    ```

2. **Install dependencies**:
    ```bash
    # If using npm
    npm install

    # Or if using yarn
    yarn install
    ```

3. **Set up environment variables**:

    - Create a `.env` file in the project root.
    - Add the following environment variables:

      ```plaintext
      DATABASE_URL=your_database_url_here
      API_KEY=your_api_key_here
      ```

4. **Run the application locally**:
    ```bash
    # If using npm
    npm start

    # Or if using yarn
    yarn start
    ```

    The app should now be running at `http://localhost:3000`.

### Deployment

#### Vercel Deployment

1. **Create an account** on [Vercel](https://vercel.com/) and install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. **Deploy the app**:
   ```bash
   vercel
   ```

   Follow the CLI prompts to select your project settings.

3. **Environment Variables**:
   - In your Vercel dashboard, navigate to your project’s **Settings > Environment Variables**.
   - Add the same environment variables from your `.env` file (e.g., `DATABASE_URL`, `API_KEY`).

4. **Build and Deploy**:
   - Trigger a new deployment through the Vercel dashboard or by running:
     ```bash
     vercel --prod
     ```
   - Your app will be deployed to a Vercel URL, usually `https://bulk-purchasing-collective.vercel.app`.

---

## Usage

1. Access the deployed app at `[deployment URL]`.
2. Businesses can browse product listings, join interest groups, and track savings on bulk orders.

---

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
