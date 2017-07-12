function Field(value) {
    this.value = value;
}
Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('Hashem');
var password = new Field('Password*@@');
var birthdate = new Field('08/08/1988');

// username.validate() && password.validate() && birthdate.validate();

var fields = [username, password, birthdate]

fields.every(function(field) {
    console.log(field.validate())
    return field.validate()
})