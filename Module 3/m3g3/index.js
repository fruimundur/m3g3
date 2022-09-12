//these objects are a combination of a string and a number variable - these are the first people being added to the contact list
let person1 = {
    firstName: "Fríðmundur",
    phoneNumber: 261521
}

let person2 = {
    firstName: "Hallur",
    phoneNumber: 277716
}

let person3 = {
    firstName: "Bjarni",
    phoneNumber: 221052
}


//this array is the contact list
let contactList = [person1, person2, person3]

console.log(contactList)


//creating new contacts to be added to the list
let person4 = {
    firstName: "Jógvan",
    phoneNumber: 261623
}

let person5 = {
    firstName: "Fríðbjartur",
    phoneNumber: 269276
}

let person6 = {

    phoneNumber: 256719
}


//pushing the new contacts to the list
contactList.push(person4)
contactList.push(person5)
contactList.push(person6)

console.log(contactList);


if (person1.firstName.length < 8) {
    console.log("Your name is too short")
    //  block of code to be executed if the condition is true
  }
  else {
    console.log("Your name is too long")
  }



