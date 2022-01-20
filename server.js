const express = (require("express"));
const app = express();
const port = 8000;
const faker = (require("faker"));


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User{
    constructor(){
        this._id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        }

    }
}


app.get("/api/users/new", (req, res) => {
    let user1 = new User();
    res.json({"result": user1});
});

app.get("/api/companies/new", (req, res) => {
    let company1 = new Company();
    res.json({"result": company1});
});

app.get("/api/user/company", (req, res) => {
    let user1 = new User();
    let company1 = new Company();
    res.json({"result" : {
        user: user1,
        company: company1
    }});
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );