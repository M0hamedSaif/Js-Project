let userRole = "admin";
let acessLevel;
let isLoggeedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

if (userRole === "admin"){
    acessLevel = "Full access granted";
} else if (userRole === "manager"){
    acessLevel = "Limited access granted";
}else{
    acessLevel = "No acess granted";
}

console.log("Access Level:", acessLevel);

if (isLoggeedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else {
        userMessage = "Welcome, User!";
    }
}else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";       
}

console.log("User Category:", userCategory);