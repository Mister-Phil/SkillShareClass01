// My keys = [], {}

struct Color {
    red: u8,
    green: u8,
    blue: u8,
}

struct Temp(u8, u8, u8);

struct Person {
    first_name: String, // Absolutely need ","
    last_name: String
}

impl Person {
    fn new(first: &str, last: &str) -> Person {
        Person {
            first_name: first.to_string(), // Absolutely need ","
            last_name: last.to_string(),
        }
    }
    // Get the full name
    fn full_n (&self) -> String {
        format!("{}  {}", self.first_name, self.last_name) // NO COMMA
    }

    fn set_l_n(&mut self, last: &str) {
        self.last_name = last.to_string();
    }

    fn to_tuple(self) -> (String, String)  {
        (self.first_name, self.last_name) // NO COMMA
    } 
}

pub fn run() {
    let mut c = Color {red: 255, green: 0, blue: 0,};  
    c.blue = 200; // You can change the color directly. 
    println!("The colors x = {} / {} / {}", c.red, c.green, c.blue);

    let mut t = Temp(27, 1, 15);  
    t.1 = 8; // You can change the color directly. 
    println!("The temperature is {}* for Cuba; {}* for Canada and {}* for Brazil.", t.0, t.1, t.2,);

    let mut p = Person::new("John", "Doe");
    println!("The ID says: {} {}", p.first_name, p.last_name);
    p.set_l_n("Crimson");
    println!("But now it's: {}", p.full_n());
    println!("With Tuple = {:?}", p.to_tuple());
}
