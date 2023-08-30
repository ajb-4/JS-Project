This project is an inflation calculator. While many resources on the internet will provide users with a compound calculator and readily provide users with market data, there is no place to customize inputs such that you can render the true value (in the form of a "basket of goods") of these numerical figures. CPI data uses a cookie-cutter basket and even manipulates the contents of this basket from year to year for various reasons. Here, users have 3 main input "boxes" per scenario they generate. 1.) On the left, users can start with numerical value of their choosing, in a currency of their choosing, at a time of their choosing (after 1970 b/c data availability). 2.) Users can then specify the duration and investment vehicle (ie, cash, bonds, S&P, Apple stock, etc.) for which they want to expose that currency value specified in the first input box. 3.) In the third input box, users are able to choose from about a dozen goods/commodities that they wish to denominate their total value. In this section will give integer inputs that sum to 100, representing the percentage of their total portfolio allocated to that good, priced according to the "end time" that was determined from adding the start time to the duration they specified.

In the end, users will see 2D renderings of various investment scenario, side by side and tailored to the specific set of goods that help them visualize value most clearly. Simply click boxes to modify their inputs and hover over boxes to inspect the details of their contents. Generate as many scenarios side by side as you would like and compare these otherwise nominal values in representions that suit you best.

Functionality and MVPs

In "Show Me The Goods!" users are able to:

1.) input an investment amount, start date, duration, investment vehicle 2.) customize a basket of goods(using percentages of wheat, corn, sugar, coffee) they wish to denominate their end value 3.) generates a summary of user inputs, commodity quantities, commodity prices (at the end date), total yield($), and quantity of goods 4.) generate many scenarios side by side and have them render next to each other for comparison

In addition, I am actively working to build functionality for: 5.) users to be able to reverse their input/output, such that they can look backwards in time and convert today’s goods to “yesterday’s” dollars 6.) have subtle thematic animations and sounds to make the site more engaging

Technologies, Libraries, and API's

1.) API for market data: https://www.alphavantage.co/documentation/ 2.) Webpack and Babel to bundle and transpile the JS code 3.) npm to manage project dependencies

Implemtation Timeline Thursday: get fluent in accessing my market data via API's and JSON "querying", make sure I have access to all possible data Friday: build all my classes for various objects and work on their methods needed to calculate output Weekend: end-to-end testing for user input to get the correct values for output objects, nothing will be rendered yet, just console.logging and making sure API's/data fetching and calculators work Monday: work on building out skeleton of "frontend", using Canvas and creating input boxes/forms, drop down boxes, making sure my objects are at least rendering where I would like Tuesday: first day of CSS, styling all of my elements and exploring ways of making objects interact smoothly w/ Canvas Wednesday: day of testing site, identifying any bugs, poor design/styling flaws and fixing anything I've missed or ignored in the previous days Thursday: finishing touches and launching the site into production on my repo

![Alt text](https://user-images.githubusercontent.com/114460756/263029544-f1dbc7bf-524d-4fcd-a378-34c78da7814c.png)

