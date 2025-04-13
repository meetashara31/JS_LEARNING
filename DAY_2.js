//  Diffferent types of variables
// let a = 10
// {let a = 20}
// const b = 20
// {const b = 30}
// var c = 30
// {var c = 40}  only this valye will be change into {} < this bracketets
// console.log(a,b,c)


//   THIS IS AN EXAMPLES OF THE DIFFERENT DATA TYPES 
// let a = 3
// let b = 4
// console.log(a + b - 6)

// let n = 'hetu'
// let age = 4
// let adharcard = false
// let school;
// let mom = {
//     nam: 'tinu ben',
//     age : 30,
//     city : 'tempoo',

// }
// let f = [1,2,4,4,6]
// s = Symbol('hello')


// console.log(typeof(mom))
// console.log(typeof(age))
// console.log(typeof(adharcard))
// console.log(typeof(school))
// console.log(typeof(f))

//  STRING AND STRING METHODS

// str1 = 'This is an exmaple of the string methods'

// console.log(str1.length);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.includes('str')); // Find an character in the string the maping is started form the left to right
// console.log(str1.indexOf('of'))
// console.log(str1.charAt(6))
// console.log(str1.slice(0,6)) // Example of slicing 
// console.log(str1.replace(' is ',' are '));

// console.log(str1.split('  '))
// console.log(str1.concat('- this is an example of concations of the string'))

// // AN MINI PRACTICE OF THE SRINGS METHODS

// let st2 = '     practice of the strings methods     ';
// clean = st2.trim();
// uper = clean.toUpperCase();
// words = uper.split(' ');
// count = words.length; 
// console.log(count)
// rep = clean.replace('practice', 'Example');
// console.log(rep)

// //   THIS I SAN FUCNTION IS I HAVE COMBINE THE STINGS METHOD
// function pretify(st){
//     console.log('hello your string is looking messy');
//     console.log(st.trim(), 'this is you string after removing the extra space');
//     console.log(st.toLowerCase(), 'this is you string after converting into the lower case');
//     console.log(st.toUpperCase(), 'this is you string after converting into the lower case');
//     console.log(st.concat('this is an addition feature of the sting method'));
//     console.log(st.replace(' is ',' are '));
// }
// st='    this is an example of the string methods   ';
// sr = pretify(st);

//   NUMBER AND MATH METHODS

// let price = 49.999;
// console.log(price.toFixed(3), 'this is an price');

// let st = '49';
// console.log(parseInt(st));
// console.log(parseFloat(st));
// console.log(Math.floor(price));
// pow1 = console.log(Math.sqrt(st));
// console.log(Math.pow(st,2));

  //  CREATING THE FUNCION FOR ROLLING THE DIES

// function dices(){
//     dice = Math.floor(Math.random()*6)+1;
//     console.log(dice);
//   }

//   dices();
// price1= 199.98
// price2 = 345.67

// amount = price1 + price2
// console.log(amount.toFixed(0));

// function random(min,max){
// val = Math.floor(Math.random()*(max-min+2)+min);
// console.log(`the generated random value between ${min } and ${max} is ${val}`);
// } 
// random(50,100)

//  THE ANOTHER EXAMPLE OF THE RAMDOM VARAIBLE

// function even(min , max){
//     do{

//     val = Math.floor(Math.random()*(max-min+1)+min);
//     if(val % 2 == 0){
//         console.log(val);
//         }
// }while(val<max);
// }
// even(10,80)

// function odd(min , max){
// do{
//   val = Math.floor(Math.random()*(max-min+1)+min);
//   if(val % 2 !== 0){
//       console.log(`odd number is ${val}`);
//    }
//   }while(val<max);

// }
// odd(10,80)

  //  THIS IS AN EXAMPLE OF THE IF ANS ELSE CONDITOINS
// age = 20
// if(age >= 18){
//   console.log(`your age is ${age} so you are allowed to vote`);
// }
// else{
//   console.log(`your age is ${age} so you are not allowed to vote`);
// }


// mark = Math.floor(Math.random()*(max-min+1)+min);
// pass = 35
// if(mark >= 90){
  // console.log(` your mark is ${mark} so you got A+ grade`);
// }
// else if (mark >=80){
  //   console.log(` your mark is ${mark} , and you got A grade`);
  // }
  // else if(mark >= 70){
    //   console.log(` your mark is ${mark} , and you have got B grade`);
    // }
    // else if(mark >= 60){
      //   console.log(` your mark is ${mark} and you got C+ GRADE`)
      // } 
      
      // else if(mark >= 50){
        //   console.log(` your mark is ${mark} and you got D+ GRADE`)
        // } 
        
        // else if(mark >= 35){
          //   console.log(` your mark is ${mark} and you pass GRADE`)
          // } 
          
          
          // else if(mark <35){
            //   console.log(` your mark is ${mark} you fail`);
            // }
            // else{
              // console.log(` incorect value`);
              // }
              
// let isLoggedIn = false;
// let message = isLoggedIn ? "Welcome back!" : "Please log in.";
// console.log(message);
              
// let dri = true;
// let messag = dri ? 'you can drive' : 'you can not drive';
// console.log(messag);
// if(num > 0){
//   console.log(`the number ${num} is positive`)
// }
// else if(num < 0){
//   console.log(`the number ${num} is negative`)
// }
// else{
//   console.log(`the  number ${num} is zero`)}
  
  
//   if(num % 2==0){
//     console.log(`the number ${num} is even`)
    
//   }
//   else if( num % 2 !== 0){{
//     console.log(`the number ${num} is odd`)
//   }}
//   else{
//     console.log(`the number ${num} is invalid` )
//   }
  
//   min = 0
//   max= 100
//   temp = Math.floor(Math.random()*(max-min+1)+min)
//   console.log(temp);

// if(temp >= 35 ){
//   console.log(`the temperature is ${temp} hot `)

// }
// else if(temp <=18){
//   console.log(`the temperature is ${temp} cold `)

// }
// else{
//   console.log(`the temperature is ${temp} normal `)
// }

  // LOOPS CONCEPTS

// for(let i = -1; i<5;i++){
//   console.log(i);
// }
// let j = 1
// while(j<6){
//   console.log(j);
//   j++;
// }
// do{
//   console.log(`this is an do while loop ${j}`);
//   j++;

// }while(j<=10);
  // ARRAY LOOP
// let brands = ['Shreeji','Flite','Puma','Nike','Adidas','redwood']

// for(let i=0;i<brands.length;i++){
//   console.log(brands[i]);
// }

// for(let i=0;i<4;i++){
//   for(let j=0;j<3;j++){
//     console.log(`${i}${j}`)
//   }
// }
  // THIS IS AN PATTERN LOGIC
let row= 5;

for(let i=1;i<=row;i++){
  let pattern = '';
  for(let j=1;j<=i;j++){
    pattern+=j,'';
  }console.log(pattern);
}




