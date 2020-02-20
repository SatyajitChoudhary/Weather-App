const {geoCode}=require("./utils/geocode.js")
const {forecast}=require("./utils/forecast.js")

geoCode("Los Angeles",(error,data)=>{
    console.log("Coordinates of Los Angeles ")
    console.log("Error >>  " + error)
    console.log("Data >>  " + JSON.stringify(data))
})

forecast(22.5726,88.3639,(error,data)=>{
    console.log("Weather Details ")
    console.log("Error >>  " + error)
    console.log("Data >>  " + data)
})