# BookItAll

BookItAll is a travel and entertainment booking platform that allows users to search and book flights, trains, buses, movie tickets, and restaurant reservations from a single portal.

The application provides dedicated booking workflows including search, seat selection, payment processing, and booking confirmation.

---

## Features

### Flights

* Search flights
* View flight results
* Seat selection
* Payment processing
* Booking confirmation

### Trains

* Search trains
* View train schedules
* Seat selection
* Payment processing
* Booking confirmation

### Buses

* Search buses
* View available routes
* Seat selection
* QR-code based payment simulation
* Booking confirmation

### Movies

* Browse movies
* Select theatres
* Reserve seats
* Payment processing
* Ticket confirmation

### Restaurants

* Search restaurants
* View available options
* Reserve tables
* Booking confirmation

### Offers

* Browse promotional offers and discounts

### Authentication

* User login
* User signup
* Ready for database integration

### Contact

* Contact form
* Server-side form handling

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Additional Tools

* Font Awesome

---

## System Architecture

```text
Client (HTML, CSS, JavaScript)
            |
            v
      Express Server
            |
            v
      Application Logic
            |
            v
 Future Database Layer
     (MongoDB Ready)
```

---

## Project Structure

```text
BookItAll/
├── server.js
├── package.json
├── index.html
├── login.html
├── contact.html
│
├── flights.html
├── flight-results.html
├── seat-selection.html
├── payment.html
├── confirmation.html
│
├── train.html
├── trainresults.html
├── trainseatselection.html
├── trainpayment.html
├── trainconfirmation.html
│
├── buses.html
├── busresults.html
├── busseatselection.html
├── buspayment.html
├── busconfirmation.html
│
├── movies.html
├── movietheatre.html
├── movieseatreservation.html
├── moviepayment.html
├── movieconfirmation.html
│
├── restaurants.html
├── restaurantresults.html
├── restconfirmation.html
│
├── offers.html
└── *.css
```

---

## Prerequisites

Before running the project, ensure the following are installed:

* Node.js v18 or later
* npm

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/BookItAll.git
cd BookItAll
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

### Development Mode

```bash
npm run dev
```

---

## API Routes

### Authentication

| Method | Route   |
| ------ | ------- |
| POST   | /login  |
| POST   | /signup |

### Contact

| Method | Route           |
| ------ | --------------- |
| POST   | /submit-contact |

### Flights

| Method | Route                   |
| ------ | ----------------------- |
| GET    | /flights                |
| GET    | /flight-results         |
| GET    | /seat-selection         |
| GET    | /payment                |
| POST   | /confirm-flight-payment |

### Trains

| Method | Route                  |
| ------ | ---------------------- |
| GET    | /train                 |
| GET    | /trainresults          |
| GET    | /trainseatselection    |
| GET    | /trainpayment          |
| GET    | /trainconfirmation     |
| POST   | /confirm-train-payment |

### Buses

| Method | Route             |
| ------ | ----------------- |
| GET    | /buses            |
| GET    | /busresults       |
| GET    | /busseatselection |
| GET    | /buspayment       |
| GET    | /busconfirmation  |
| GET    | /generate-qr-code |
| POST   | /confirm-payment  |

### Movies

| Method | Route                  |
| ------ | ---------------------- |
| GET    | /movies                |
| GET    | /movietheatre          |
| GET    | /movieseatreservation  |
| GET    | /moviepayment          |
| GET    | /movieconfirmation     |
| POST   | /confirm-movie-payment |

### Restaurants

| Method | Route                       |
| ------ | --------------------------- |
| GET    | /restaurants                |
| GET    | /restaurantresults          |
| GET    | /restconfirmation           |
| POST   | /confirm-restaurant-booking |

### Offers

| Method | Route   |
| ------ | ------- |
| GET    | /offers |

---

## Environment Variables

| Variable | Default | Description |
| -------- | ------- | ----------- |
| PORT     | 3000    | Server Port |

Example:

```bash
# Windows PowerShell
$env:PORT=8080; npm start

# macOS/Linux
PORT=8080 npm start
```

---

## Future Enhancements

### Phase 1

* MongoDB Integration
* JWT Authentication
* Password Hashing with bcrypt
* User Profile Management

### Phase 2

* Razorpay Integration
* Stripe Integration
* Email Notifications
* SMS Notifications

### Phase 3

* Personalized Recommendations
* Dynamic Price Tracking
* Booking History Dashboard

### Phase 4

* Mobile Application
* Multi-Language Support
* Real-Time Booking Updates

---

## Security Enhancements

* Password Hashing
* JWT Authentication
* Input Validation
* Helmet Security Headers
* Rate Limiting
* CSRF Protection
* XSS Protection

---

## License

This project is licensed under the ISC License.

---

## Contact

Email: [support@bookitall.com](mailto:support@bookitall.com)

Phone: +123-456-7890

Address: #5, Travel Avenue, JP Nagar, Bangalore – 560086
