// My keys = [], {}
pub fn run() {

    println!("I'am his friend yellow.");

    //Basic Formating:
    println!("Your number is: {}", 7); // Basic # form
    println!("{} has {} siblings", "Yellow",4); // Replacing all the {} with your data
    
    //Positional Arguments:
    println!("{0} has {1} siblings and {3} {2}.",
     "Yellow", 4, "dogs", 3);

    //Named Arguments:
    println!("{name} has {x} passions and one is {sport}."
    , name = "Yellow", x = 2, sport = "Baseball");

    //Debug placeholder (TUPLE):
    println!("{:?}",(33, false, "yio"));
}