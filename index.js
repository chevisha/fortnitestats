let axios = require('axios');
const Client = require('fortnite');
var http = require('http');

let userStats1,userStats2,userStats3;

const fortnite = new Client('9042530b-eb71-4a2f-8305-6ac7def62b72');




function onRequest(request, response) {
    setInterval(fort, 10000); 
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
         response.writeHead(200, {'Content-Type': 'text/html'});
         response.write("<html><h1>" + userStats1.toString() + "   solo kilova  "+"</h1></html>");
         response.write("<html><h1>" + userStats2.toString() + "   duo kilova  "+"</h1></html>");
         response.write("<html><h1>" + userStats3.toString() + "   squad kilova  "+"</h1></html>");

    }



    }
}


http.createServer(onRequest).listen(8000);