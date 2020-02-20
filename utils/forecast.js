const request=require('request')

const forecast=(lattitude,longitude,callback)=>{
    const forecastUrl='https://api.darksky.net/forecast/dd5be47ac3d64dcdcac421cb326ff841/'+lattitude+','+longitude;
    request({url:forecastUrl,json:true},(error,response)=>{
        if(error)
            callback("Unable to connect to location services ",undefined)
        else if(response.body.error)
            callback(" Could not find the weather details ! ",undefined)
        else
        {
            callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.summary);
        }
    })
}

// const url='https://api.darksky.net/forecast/dd5be47ac3d64dcdcac421cb326ff841/22.5726,88.3639';

// request({url:url,json:true },(error,response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.summary);
// })


module.exports={forecast};