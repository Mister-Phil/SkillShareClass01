// My keys = [], {}
pub fn run() {

    let age = 23;
    let check_ID: bool = false; // *He NEEDS to cherck the ID.
    let knows_age = false; // *This will overpass all other argumets!

    if age >= 21 && check_ID || knows_age {
        println!("Bartender: What would you like to drink?");
    } else if age < 21 && check_ID {
        println!("Bartender: Please go home.");
    } else {
        println!("Bartender: ID please");

        // Shorthand
        let is_age = if age >= 21 {true} else {false};
        println!("The Medium says that his/her age is {}.", is_age);

    }
}