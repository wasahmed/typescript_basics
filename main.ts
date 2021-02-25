
// function log(message){
//     console.log(message);
// }

// var message = "Hello world";

// log(message);






// A variable declared with a var keyword is scoped to the nearest function
// let is scoped to the nearest block. Try it ... Type script will show compilation errors
function doSomething(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();





enum Color {Red, Green}
let background = Color.Green;




//Type assertion
let message;// notice type isn't defined
message = 'abc';
//option 1 that will give access to intellisense because now the type will be known
let endsWithC = (<string>message).endsWith('c');
//option 2
let option2 = (message as string).endsWith('c')




//Arrow functions compare to log function above
let log = (msg) => console.log(msg);



// Interfaces (creating a custom type)
// no implementation, can only contain method signature
//  interface Point{
//      x: number;
//      y: number;
//  }

//  let drawPoint = (point: Point) => {
//      //
//  }

//  drawPoint({
//      x:1,
//      y:2
//  })




 //Classes
 //Groups variables and functions that are highly related

 class Point{
     x: number;
     y: number;

     constructor(x?:number, y?: number){
         this.x = x;
         this.y = y;
     }

     draw(){
         console.log('x:' + this.x + ' y: ' + this.y)
     }
//property
     get X(){
         return this.x;
     }

     set X(value){
         if(value < 0)
            throw new Error('value less than 0');
        
        this.x = value;
     }

 }

 let point = new Point(3,4);//assign memory
 point.draw();
