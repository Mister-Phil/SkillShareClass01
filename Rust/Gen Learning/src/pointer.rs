// My keys = [], {}
pub fn run() {

   let arr1 = [3, 4, 6];
   let arr2 = arr1;

   println!("The values are: {:?}", (arr1, arr2));

   let vec1 = vec![1, 2, 3];
   let vec2 = &vec1;

   println!("The values are: {:?}", (&vec1, vec2));

}