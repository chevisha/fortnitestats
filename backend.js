let axios = require('axios');
const Client = require('fortnite');
var http = require('http');
let express = require('express')
let app = express();
let cors = require('cors');
let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

let userStats1,userStats2,userStats3;
let namee;

const fortnite = new Client('9042530b-eb71-4a2f-8305-6ac7def62b72');

app.post('/userStats', (reqq  ,ress,next)=>{
    let nickname = reqq.headers.playername
    console.log(reqq.headers.playername);
    fortnite.user(nickname, 'pc').then(ispis).catch(function(err){
        res.status(200).send()
    })
        
function ispis(a)
    {
      
        ress.status(200).send(a)

    }
})


   
app.listen(3000, function(){
    console.log('radiiii server')
})