// My keys = [], {}
pub fn run() {

    let name = "Jojo";
    let mut age = 28;
    age = 29;

    println!("My name is {} and today my age is {}.", name, age);

    //Define a CONST:
    const ID: i32 = 007;
    println!("ID: {}", ID);

    //Many vars assigned:
    let (my_name, my_age) = ("Brad, 37"); 
    println!("{} is {}", my_name, my_age);
}