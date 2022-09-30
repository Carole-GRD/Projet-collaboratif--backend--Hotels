class UserDTO{
    constructor(id,pseudo,email,firstname,lastname,country,phone){
        this.id=id;
        this.pseudo=pseudo;
        this.email=email;
        this.firstname=firstname;
        this.lastname=lastname;
        this.country=country;
        this.phone=phone;
    }
}

module.exports=UserDTO;