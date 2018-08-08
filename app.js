var express = require("express");
var app = express();
let axios = require('axios');
const Client = require('fortnite');

let userStats1,userStats2,userStats3;

const fortnite = new Client('9042530b-eb71-4a2f-8305-6ac7def62b72');


 
    function fort()
    {
        console.log('nesto')
        fortnite.user('jeseupeci', 'pc').then(ispis).catch(function(err){
        console.log('greska pri uzimanju apija iz fortnite',err)
         })
        function ispis(a)
    {
          userStats1 = a.stats.solo.kills
         userStats2 = a.stats.duo.kills
         userStats3 = a.stats.squad.kills
        //console.log(userStats1);
    }
    }

fort();

app.get("/", (req, res, next) =>
{
    res.json(
            {
        "Solo kills": userStats1,
        "Duo kills": userStats2,
        "Squad kills": userStats3
            }
        ]
        [
            )
}
    )
app.listen(3000, () => {
 console.log("Server running on port 3000");
});