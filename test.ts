import { User } from "./types/User";

console.log("Filen har startat")

function testDataTypes() {
    const isTired: boolean = true;
}

    const user: User = {
        username: "",
        password: ""
    }
    function printCurrentUser() {
    console.log(user.username);
    
    }
    const benny: User = {
        username: "Benny",
        password:"123",
    }
    function subtractionExample(x: number, y: number){
        return x-y
    }
    const sum = subtractionExample(50,25)
    printCurrentUser()
    console.log(sum)



