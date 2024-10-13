// statements //

// conditional statement //

// 1.if condition //
    var a = 10;
    if (a==10) {
    console.log("This is true"); 
    }

// 2.if else condition //
    var a = 8;
    if (a==10) {
    console.log("This is true"); 
    }
    else
    {
    console.log("This is false"); 
    }

  
// 3.if else if condition //
    var a = 14;
    if (a < 10) {
    console.log("a is less than 10"); 
    }
    else if  (a < 15)
    {
    console.log("a is less than 15"); 
    }
    else
    {
    console.log("a is greater than 20");  
    }

// 4.switch condition //
    var grade='B';    
    switch(grade){  
    case 'A':  
    console.log("Excellent");  
    break;  
    case 'B':  
    console.log("Very Good");  
    break;  
    case 'C':  
    console.log("Good");  
    break;  
    default:  
    console.log("Bad");  
    }  

// looping statement //

// 1.For Loop //
    for(var i=0; i<5; i++){
    console.log("The value is " , i);
    }

// 2.while Loop //
    var i = 0;
    while (i < 5) {
    console.log(i)
    i++;
    }

// 3.do while loop //
    var i = 0;
    do {
    console.log(i)
    i++;
    } while (i < 5);

// function //

// 1.Addition //
    function Add(a,b){
    var result =  a + b;
    console.log('Add =',result);
    return result;
}
    Add(20,30)

// function expression //
// 2.substraction //
    var sub = function(a,b){
    return a - b;
    }
    var result = sub (30,20);
    console.log('sub =',result);

// 3.multiplication //
    var multiplication = function(a,b){
    return a * b;
    }
    var result = multiplication (30,20);
    console.log('multiplication =',result);

// timeout function //
    setTimeout(function(){
    console.log('Hello');
    },2000);

// Array //
// length and index position example //

{var socialmedia=['instagram','facebook','whatsapp'];
    console.log("length of social media =",socialmedia.length);
    console.log("socialmedia platforms = ",socialmedia);
    
    console.log(socialmedia[0]);
    console.log(socialmedia[2]);
    }

// unshift  example  //
{   var games=['pubg','free fire','clash of clans','call of duty'];
    games.unshift('call of duty')
    console.log(games);
}
// pop example //
{   var games=['pubg','free fire','clash of clans','call of duty'];
    games.pop('call of duty')
    console.log(games);
}
// shift example //
{   var programming=['c++','java','python'];
    programming.push('javascript')
    console.log(programming);
}
//push example //
{   var programming=['c++','java','python'];
    programming.shift('javascript')
    console.log(programming);
}