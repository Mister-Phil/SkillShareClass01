// My keys = [], {}
use std::env; // Or you'll get this error: ^^^ use of undeclared crate or module `env`

pub fn run() {
    let args: Vec<String> = env::args().collect();
    let command = args[1].clone();
    let name = "M. Phil";
    let status = "100%";

    println!("Commands are: {:?}", command);
    if command == "hello" {println!("Evening {}, how are you?", name);} 
    else if command == "status" {println!("Status is {}", status);}
    else {println!("Not a value");}
}