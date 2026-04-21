# How to run the application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

Clone this repository first. Navigate into the project directory. Install the required packages using npm install.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. Do sign in using username = rashad, password = test.123.

## Project structure overview

home-inventory/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   ├── inventory/
│   │   ├── services/
│   │   ├── sidebar/
│   │   ├── app.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json

## How you handled authentication and routing

I handled authentication using AuthService, AuthGuard. In the AuthService i did all the logics related authentication. I checked the given username and password with the sample credentials, if they match then i redirected the user to inventory and generated a token and saved that into localStorage. For routing i used angular routing and checked is the user logged in while accessing the routes using CanActivate. 

## Mock data structure explanation

I created an array of objects which had 12 mock datas. Below is the interface of mock data 
export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  color: string;
  serialNumber: number;
  purchasedFrom: string;
  lastUpdated: string;
  locations: string[];
  labels: string[];
  quantity: number;
  warranty: string;
  purchaseDate: string;
  purchasePrice: number;
  notes: string;
}

## List of implemented features

1. Sign in page design.
2. User authentication.
3. Sidebar design.
4. Generated a list of inventory items.
5. Search by product name.
6. Add product using modal.
7. Validation and implemented reactive form.
8. Edit product using a modal.
9. Delete product and give confirmation modal.
10. Show toast messages when a operation is successful.
11. Error handling.
12. Product detail page design.
13. Implemented tab in product details page using primeNG tabs.
