export interface User {
    name: string;
    id: number;
}

const user: User = {
    id: 7,
    name: "John Doe",
}

//Functions

function getAdminUser(): User { // :User means return something as an interface
    return ({
        id: 1,
        name: "something",
    });
}

user.location; // Error message

//Catch spelling mistakes

const someText = "Something is in here";
someText.toLocaleLowerCase();
someText.tolocaleLowerCase(); // Typescript caught spelling error