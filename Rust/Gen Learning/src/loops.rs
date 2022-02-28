// My keys = [], {}
pub fn run() {

    let mut count = 0;

    loop {
        count +=2;
        println!("x = {}", count);

        if count == 10 {break;}
    }

    while count <= 10 {
        if count % 2 == 0 {
            println!("VALID");
        } else if count % 5 == 0 {
            println!("Fresh");
        } else { println!("{}", count);
            }

        count += 1;
    }
    
}