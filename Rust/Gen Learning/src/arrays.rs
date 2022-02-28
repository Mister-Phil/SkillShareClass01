// My keys = [], {}
pub fn run() {

    let mut abc: [i32; 5] = [1, 3, 5, 7, 9]; // Now ew chage 3 for 21
    abc[1] = 21; // Changing a number and the result.
    
    println!("{:?}", abc);

    println!("Single value is: {}", abc[1]);
    println!("Array length is: {}", abc.len());
    println!("This array used {} bytes", std::mem::size_of_val(&abc)); // arrays = stock allocation
    
    let slice: &[i32] = &abc[0..4];
    println!("The slice is: {:?}", slice);
}