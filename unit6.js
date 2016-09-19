var friends = {
    bill:{
        firstName: "Bill",
        lastName: "zhao",
        number: 001,
        address:['one way','Browns bay','NZ']
        },
    steve:{
        firstName: "Steve",
        lastName: "Zhao",
        number: 002,
        address:['two way','Mairangi Bay','NZ']
        },
    };
    
   var list = function(friends){
       for(var firstName in friends){
        console.log(firstName)
           }
      
       };
       
 var search = function(name){
        for(var list in friends){
            if(friends[list].firstName === name) {
            console.log(friends[list]);
            return friends[list]
            }
            };
        };  
    search("steve");