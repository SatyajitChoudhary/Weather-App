const request=require('request')

// const geoCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0eWFqaXRjaG91ZGhhcnkiLCJhIjoiY2s2dGdkZHRrMGEzODNlbWdobG5xc3ZkNiJ9.c7eUpUZl1t4yoSCyQt1LvQ';

// request({url:geoCodeUrl,json:true },(error,response) => {
//     if(error)
//     {
//         console.log(' Error Occured : '+ error) 
//     }
//     else if(response.body.features.length===0){
//         console.log(" Unable to find the place !");
//     }
//     else
//     {
//         const latitude=response.body.features[0].center[1];
//         const Longitude=response.body.features[0].center[0];
//         console.log('Lattitude : >>> ' + latitude + ' , Longitude : >> ' + Longitude );
//     }
// })


const geoCode=(address,callback)=>{
    const geoCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2F0eWFqaXRjaG91ZGhhcnkiLCJhIjoiY2s2dGdkZHRrMGEzODNlbWdobG5xc3ZkNiJ9.c7eUpUZl1t4yoSCyQt1LvQ';

    request({url:geoCodeUrl,json:true},(error,response)=>{
        if(error)
            callback("Unable to connect to address finding services",undefined)
        else if(response.body.features.length===0)
            callback(" Could not find the address ! ",undefined)
        else
        {
            callback(undefined,{
                lattitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]
            });
        }
    })
}


module.exports={geoCode};