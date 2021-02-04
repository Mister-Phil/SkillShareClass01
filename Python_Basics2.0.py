#My first custom LOGIN!!!
user = "Name"
userlog = input("Your name, please:")
if userlog == user: #So since 'userlog' is an input, we can set the good answer as the wanted condition...
    print("Welcome")
elif userlog != user: #Here we are saying : "if the answer required IS NOT the string 'user' then return wrong"...
    print("Please try again...")