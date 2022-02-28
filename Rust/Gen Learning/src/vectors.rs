// My keys = [], {}
pub fn run() {

    //1. Vectors are arrarys that you can mod.
    let mut abc: Vec<i32> = vec![1, 3, 5, 7, 9]; //*We can just make that change to convert to vector
    abc[1] = 21; // Changing a number and the result.
    
    // Part1 = *YOU WILL HAVE THE SAME RESULTS AS THE ARRAYS FILE: same thing now just vector.

    println!("{:?}", abc);

    println!("Single value is: {}", abc[1]);
    println!("The Vector length is: {}", abc.len());
    println!("This vector used {} bytes", std::mem::size_of_val(&abc)); // arrays = stock allocation
    
    let slice: &[i32] = &abc[0..4];
    println!("The slice is: {:?}", slice);

    // Part 2 = Now let's change the vector:
    abc.push(18);
    abc.push(45);
    println!("The second version is now {:?}", abc);

    for x in abc.iter_mut() {
        *x *= 2;
    }
    println!("All data 2X will give {:?}", abc);
}