
function unit5(){
var user = prompt("What do you like?").toUpperCase();
switch(user){
    case 'candy':
        console.log("sweet~");
        break;
    case 'ball':
        if(4>3 && 3<4){
        console.log("cute");}else{
            console.log("great")
            };
        break;
    case 'food':
        if(3>4 || 2>3){
        console.log("I am also a big fan of that!");}else{
            console.log("keep fit is more healthy.");
            }
        break;
        
        
    default:
    console.log("thanks for your participating!");
    };
};