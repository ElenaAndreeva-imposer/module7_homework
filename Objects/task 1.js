const appearance = {
    eyes: "green",
    skin: "fair",
    hair: "ginger"
};
let person = Object.create(appearance);
person.eyes = "blue";
person.hair = "blonde";

function personLooks(person) {
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}
personLooks(person)