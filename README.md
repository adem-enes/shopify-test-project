# Shopify Test Project

This project is a simple application that allows you to modify product meta data using the Shopify API. The project uses Nodejs for the server side and React Typescript for the client side. The project follows the cUrl request method recommended by the Shopify documentation and uses the axios library to perform crud operations with the Shopify API. The client side has an interface designed with the Shopify polaris library. This interface allows the user to view and change the meta title and meta description values of the products in the Shopify store.

## Installation

To run the project, you need to have Nodejs and npm installed. You also need a Shopify account and store. You can follow the steps here to access the API keys and password of your Shopify store.

After cloning the project, rename the`.env.example` files in the server folders to  `.env` nd enter the required information. The server side requires the API keys and password of your Shopify store, while the client side requires the port number that the server side runs on.

Run the `npm install` command separately in the server and client folders to install the dependencies. Then run the `npm start` command in both folders to start the application. The client side will run on `http://localhost:3000` by default, while the server side will run on `http://localhost:5000`.

## Usage

After starting the application, you can access the client side’s address from your browser. You will see the meta title and meta description values of the product with the id value that I specified in the `Preferences` component among the products that I created in the Shopify store. There is an edit button below these values. To save the changes, just click the save button. The changes will be reflected to the Shopify API immediately.

This is how our frontend looks like
![App Frontend](./docs/App%20Frontend.png)

These images are the changes on Shopify app that we made on our frontend
![Shopify Title](./docs/Shopify%20Title.png)
![Shopify Page](./docs/Shopify%20Page.png)

You can see changes on html page.
