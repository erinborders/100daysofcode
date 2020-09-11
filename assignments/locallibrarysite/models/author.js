var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: { type: String, required: true, maxlength: 100 },
        family_name: { type: String, required: true, maxlength: 100},
        date_of_birth: { type: Date},
        date_of_death: {type: Date}
    }
)

// virtual property for author's full name
AuthorSchema
.virtual('name')
.get(function () {
    var fullname = '';

    // to make sure we don't get an error if the author doesn't have a 
    // first and last name
    if(this.first_name && this.family_name){
        fullname = this.family_name + ', ' + this.first_name
    }
    if(!this.first_name || !this.family_name){
        fullname = '';
    }

    return fullname;
})

// virtual property for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
    return (this.date_of_death.getYear() - this.date_of_death.getYear()).toString();
})

// virtual property for author's url
AuthorSchema
.virtual('url')
.get(function () {
    return '/catalog/author/' + this._id;
})

// export model
module.exports = mongoose.Model('Author', AuthorSchema);