# techdegree-project-12
Capstone Project for Team Treehouse Fullstack JavaScript TechDegree

Coin Market App
An asset overview tool providing real-time data on personalized cryptocurrency portfolios.
-Node.js backend using Express, Bcrypt, and MongoDB with endpoints for users, transactions, articles, and cryptocurrencies.
-Utilizes Newsapi and Cryptonator APIs to pull live cryptocurrency news and prices.
-User interface employs React with Material-Ui for styling.


/////// HISTORICAL CRYPTOCURRENCY DATA NOTES /////////

Initially, my intention was to include Coin Market Cap as a third API to serve historical data.  However, Coin Market Cap limits their free API to exclude this information.  Because of this, the historical data will need to be manually seeded from the seed-data folder provided and will not actually reflect current market prices.


/////// START UP INSTRUCTIONS /////////

1.  Navigate to the backend folder and run npm install
2.  On another terminal, navigate to the front end folder and run npm install
3.  Navigate to the seed-file and run the following:

mongoimport --db cmc-api --collection cryptos --type=json --jsonArray --file cryptos.json

4.  Start mongod
5.  Navigate to the backend folder and run npm start
6.  Navigate to the frontend folder and run npm start



/////// APP NAVIGATION /////////

This app allows a user to build a theoretical cryptocurrency portfolio and track its performance over time.  Two APIs are used - Newsapi brings in all relevant cryptocurrency articles upon app launch and Cryptonator brings in live cryptocurrency prices on a minute-to-minute basis.

The user is welcome to build their crypto portfolio under the "Portfolio" tab.  They can add any amount of crypto and remove crypto if their portfolio contains it.  These would be similar to "sending" and "receiving" transactions in a cryptocurrency wallet.

Under the "Charts" tab, the user is shown several data displays of their portfolio, with additional details provided during hover-overs.

The "Articles" tab allows users to view their saved articles.

The "Profile" tab provides some basic user information, as well as allowing the user to delete their profile.

Beneath these four main tabs are the 10 cryptocurrency views.  Each view shows the weekly historical performance, as well as current pricing, 7-day average, and relevant news articles related to that cryptocurrency.
