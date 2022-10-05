// My keys = [], {}
use std::io;
fn main() {
 
println!("Enter value"); 
let mut input=String::new();
io::stdin().read_line(&mut input).expect("error, plz correct");
// let mut input:i32=input.trim().parse().expect("Please, enter a number"); || This is for CONVERTING THE STRING IN A #/number. 


println!("The value entered by the user is: {}",input);


}


let a=10;
let b:u32=15;
let c:f32=5.34;
let d=3.3;
let e:bool =false;
let f='g';
let g="Can you see me?"; // You will see it.

println!("value of a variable:{}",a);
println!("value of a variable:{}",b);
println!("value of a variable:{}",c);
println!("value of a variable:{}",d);
println!("Value of the boolean:{}",e);
println!("The value is the letter:{}",f);
println!("Your string is:{}",g);
