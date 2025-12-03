// Getter Setter
const person = {
    firstName : "Febrian",
    lastName : "Syah",
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const array = value.split(" ");
        this.firstName = array[0],
        this.lastName = array[1]
    }
}

person.fullName = "Febrian Syah";
console.table(person);

person.fullName = "Joko Morro";
console.table(person);

person.fullName = "Eko Khannedy";
console.table(person);