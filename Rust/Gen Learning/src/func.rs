// My keys = [], {}
pub fn run() {

    hello("Welcome", "Bond");
    let get_sum = add(5, 5); // Binding functions values to variables.
    println!("Sum is {}", get_sum);

    let n3: i32 = 10;
    let add_nums = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("C sum: {}", add_nums(3, 3));
}

fn hello(greet: &str, name: &str) {
    println!("{} M. {}, your meeting will start in 5 mins.", greet, name);
}

fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2 // You dont need semi-column here. 
}