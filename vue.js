   const ap=new Vue({
         el:'#app',
         data:{
             solokills: 0,
             duokills: 0,
             squadkills: 0,
             nick : ""
         },
         methods : {
            la : function (){
                axios.post('http://localhost:3000/userStats',{
                  },
                  {
                    headers: {
        //              'Content-Type': 'application/json'
        //            'Content-Type': 'multipart/form-data'
                    'Content-Type': 'application/x-www-form-urlencoded',
                    playerName : ap.nick
                    }
                  })
                    .then(function (response) {
                       // console.log(response)
                   
                        
                        ap.solokills=(response.data.data.stats.solo.kills);
                        ap.duokills=(response.data.data.stats.duo.kills);
                        ap.squadkills=(response.data.data.stats.squad.kills);
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
            
         },
         created(){

         }
         

         })


