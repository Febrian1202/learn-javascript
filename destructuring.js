{
    const names = ["Muhammad", "Febrian", "Syah"];
    const firstName = names[0];
    const middleName = names[1];
    const lastName = names[2];

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    // Destructuring Array
    const names = ["Muhammad", "Febrian", "Syah", "Budi", "Joko"];
    const [firstName, middleName, lastName, ...others] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(others);
}

{
    const person = {
    firstName : "Eko",
    lastName : "Khannedy",
    address : {
        street : "Jalan Belum Ada",
        city : "Jakarta",
        country : "Indonesia"
    },
    hobby : "Gaming",
    channel: "Ridaz"
    }

    const {firstName, lastName, address: {street, city, country}, ...others} = person
    console.info(firstName);
    console.info(lastName);
    console.table(street);
    console.table(city);
    console.table(country);
    console.table(others);
}

{
    function displayPerson({firstName, middleName, lastName}) {
        console.info(firstName);
        console.info(middleName);
        console.info(lastName);
    }

    const person = {
        firstName: "Muhammad",
        middleName: "Febrian",
        lastName: "Syah",
    };

    displayPerson(person)
}

{
    function sum([first, second]) {
        return first + second;
    }

    console.info(sum([1,2]))
    console.info(sum([10,20]))
}

{
    const names = ["Eko", "Budi", "Joko"];
    const [firstName = "Muhammad", middleName = "Febrian", lastName = "Syah"] = names;

    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

{
    const person = {
    firstName : "Muhammad",
    lastName : "Syah",
    }

    const {firstName, middleName = "Febrian", lastName} = person
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

{
    const person = {
    firstName : "Muhammad",
    lastName : "Syah",
    }

    const {
        firstName : namaDepan, 
        middleName : namaTengah= "Febrian", 
        lastName : namaBelakang
    } = person
    console.info(namaDepan);
    console.info(namaTengah);
    console.info(namaBelakang);
}