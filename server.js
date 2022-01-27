const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor(){
        this.id = faker.datatype.uuid(); 
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}

class Company {
    constructor(){
        this.id = faker.datatype.uuid(); 
        // this.companyName = faker.name.companyName();
    }
}

// make sure these lines are above any app.get or app.post code blocks
// These are Express middleware fxns
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
    newUser = new User()
    res.json({ employee: newUser});
});

app.get("/api/companies/new", (req, res) => {
    newCompany = new Company()
    res.json({ corporation: newCompany });
});

app.get("/api/user/company", (req, res) => {
    newUser = new User()
    newCompany = new Company()
    res.json({ employee: newUser, corporation: newCompany });
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));




