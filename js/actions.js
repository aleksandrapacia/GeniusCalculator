let chosen_animal = "dog"
let message = " "

switch (chosen_animal) {
    case "dog":
        message = "Cats are better than dogs!";
        break;
    case "giraffe":
        message = "Well... Giraffe lives in Africa";
        break;
    default:
        message = "Give a proper name of the animal :)"
}

console.log(message)