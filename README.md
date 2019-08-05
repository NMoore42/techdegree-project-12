# techdegree-project-12
Capstone Project for Team Treehouse Fullstack JavaScript Techdegree


/////// HISTORICAL CRYPTOCURRENCY DATA NOTES /////////
Currently, Coin Market Cap limits their free API to exclude historical data.  Because of this, the historical data will need to be manually seeded from the seed-data folder provided and will not actually reflect current market prices.

First need to seed database

mongoimport --db cmc-api --collection cryptos --type=json --jsonArray --file cryptos.json
