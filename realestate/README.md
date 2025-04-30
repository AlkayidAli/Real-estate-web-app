# Real Estate Project

## Overview

The Real Estate Project is a web application that allows users to search for properties across the USA. Users can filter properties by location and status (e.g., for sale or for rent). The application provides detailed property information, including pricing, location, and high-quality images.

---

## Features

- **Property Search**: Search for properties by location and status.
- **Property Details**: View detailed information about a specific property.
- **Dynamic API Integration**: Fetch property data from an external API.
- **Database Integration**: Store and retrieve property data using MySQL.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://www.mysql.com/) database server

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd realestate-project-2/realestate
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the `.env` file:
   Create a `.env` file in the root directory and add the following:

   ```
   GLOBAL_DB_HOST=localhost
   GLOBAL_DB_USER=root
   GLOBAL_DB_PASSWORD=yourpassword
   GLOBAL_DB_NAME=realestate
   VITE_PROPERTIES_API_KEY=your-api-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Usage

### Searching for Properties

1. Navigate to the **Properties** page.
2. Enter a location (e.g., "Houston, TX") and select a status (e.g., "forSale").
3. Click the **Search** button to view the results.

### Viewing Property Details

1. Click on a property from the list to view its details.
2. The details page includes images, pricing, and location information.

---

## API Endpoints

### GET `/api/properties`

Fetches properties from the database based on the provided location and status.

#### Query Parameters:

- `location` (string): The location to search for (e.g., "Houston, TX").
- `status` (string): The property status (e.g., "forSale").

### POST `/api`

Fetches property data from an external API and inserts it into the database.

---

## Components

### Header

- Displays the logo and navigation links.
- Clicking the logo redirects to the home page.

### Footer

- Contains links to "About Us" and "Contact" pages.
- Displays the logo.

### Info

- Provides an introduction to the application.

### PropertyForm

- Allows users to search for properties by location and status.

### PropertyList

- Displays a list of properties fetched from the database.

### PropertyDetails

- Shows detailed information about a selected property.

---

## Database Schema

The `properties` table stores property data:

- `id` (string): Unique property ID.
- `city` (string): City of the property.
- `state` (string): State of the property.
- `street_address` (string): Street address.
- `price` (number): Sale price.
- `rent_price` (number): Rent price.
- `photo_1`, `photo_2`, `photo_3`, `photo_4` (string): URLs of property images.

---

## Troubleshooting

### Database Connection Issues

- Ensure the MySQL server is running.
- Verify the `.env` file contains the correct database credentials.
- Test the connection using the `test-db-connection.js` script:
  ```bash
  node test-db-connection.js
  ```

### API Key Issues

- Ensure the `VITE_PROPERTIES_API_KEY` in the `.env` file is valid.

---

## Contributors

- **Alkayid Ali** - **KVUAS7** - Developer

```

```
````
