// My keys = [], {}
pub fn run() {

    let hello = "Bonjour Toi!"; // This is immutable; 

    //For a GROWABLE, heap-allocated data structure (when need to chage or own).
    let mut hi = String::from("Re-Bonjour ");
    let mut hola = String::from("Cerveza ");  
    let mut x = String::with_capacity(5);  // The number usage??

    println!("Length: {} is the length for hello", hello.len());
    println!("Length: {} is the length for ...", hi.len()); // Get the length
   
    hi.push('K'); //Pushin a char
    hola.push_str("Porfavor"); // Pushing a string
    x.push('x');
    x.push('o');
    x.push('x');
    x.push('o');

    //Those above will work on "String::from(...)" value/string.
    println!("Capacity: {}", hi.capacity()); // Capacity check
    println!("Is it Empty?: {}", hi.is_empty()); // Is Empty check
    println!("Does it contain 'World'?: {}", hi.contains("world")); // Check for a world
    
    // Assertions:
    assert_eq!(5, x.capacity()); // Good to check the capacity EVEN the length.

    println!("{}", hello);
    println!("{}", hi);
    println!("{}", hola);
    println!("Replace: {}", hello.replace("Toi", "Vous")); // Works on immutable too.
    println!("Replace: {}", hi.replace("K", "Neo")); // Works for the second parameter.
    println!("{}", x);
     
}