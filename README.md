## Product Listing

#### Description

A single page application presenting a product store used to add products to the basket to buy them. You can search products using different filter keys: company name, tags and product type. You can also sort products by date or by price.
This project makes you able to manage product quantity in the basket and you can have the total cost as a result.
When the quantity reaches 0 the product will be automatically deleted from the basket.
This project is built with React, Redux saga, TypeScript, and CSS.

Responsive project.

##Project Status

This project is finished: development and documentation.

## Project Screen shot

![Alt text](./src/assets/productListingPage.png../src/assets/productListingPage.png "Product Listing Single page application")

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

This was a 2 week long project built during my technical test for the Front-End Developer position with "Getir" Turkish start-up. Project goals development of a single page responsive application using react TypeScript, redux-saga, CSS and JSON-server for data. The design of the page was a Figma file.  

The main role of this application is being a store. It allow users to add products to the basket depending on their needs. So they can filter and sort products to facilitate their search. I started this process by using the `create-react-app typescript` boilerplate, then adding `react-router-6. 2. 1` and `redux-saga`.  

One of the main challenges I ran into was the use of TypeScript because this my first project with it. This leaded me to spend a few days on a research spike into typescript syntax, interfaces, and types. Due to project time constraints, I used libraries to facilitate the work and gain time. I started using fake data, then fetch the real ones.

Managing time was my biggest challenge in this project because I was working on another at the same time.

At the end of the project, the technologies implemented was TypeScript, React, React-Router 6.2.1, Redux-saga, LoDash, anted, and a significant amount of VanillaJS and CSS for the front-end part. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.
For the data I used JSON-server.
I used express js to add more APIs needed to optimize the work.
In the next iteration the front-end part could be optimized on different devices.

