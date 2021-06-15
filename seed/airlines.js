const db = require('../db')
const Airline = require('../models/airline')
const HomeCountry = require("../models/homeCountry");

db.on("error", console.error.bind(console, "MongoDB connection error"))

const homeCountry1 = await new HomeCountry({
  name: "South Korea",
  country_flag:
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
});
homeCountry2.save();
  
const homeCountry2 = await new HomeCountry({
  name: "United States",
  country_flag:
    "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
});
homeCountry2.save();

const main = async () => {
    try {
        const airlines = [
            {name: "Delta", headquarters: "Atlanta, GA", airline_code: "DL", website: "https://www.delta.com/"},
            {name: "Alitalia", headquarters: "Rome, Italy", airline_code: "AZ", website: "https://www.alitalia.com"},
            {name: "American Airlines", headquarters: "Dallas, TX", airline_code: "AA", website: "https://www.aa.com/"},
            {name: "British Airways", headquarters: "London, UK", airline_code: "BA", website: "https://www.britishairways.com/"},
            {name: "Copa Airlines", headquarters: "Panama City, Panama", airline_code: "CM", website: "https://www.copaair.com/web/us"},
        ]

        await Airline.insertMany(airlines);
    } catch (err) {
        console.log(err)
    }

    console.log("Airlines have been created")
}

const run = async () => {
    await main();
    db.close();
}

run();