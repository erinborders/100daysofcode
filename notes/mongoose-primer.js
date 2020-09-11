// installing mongoose doesn't install mongodb itself
// CONNECTING TO MONGODB

// import the mongoose module
var mongoose = require('mongoose');

// set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database_name';
mongoose.connect(mongoDB, { useNewUrlParser: true}); 

// get the default connection
var db = mongoose.connection;

// if you need to create additional connections
mongoose.createConnection() // takes the same form of db URI (with host, db, port, options, etc) as connect and returns a connection object

// bing the connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// DEFINING AND CREATING MODELS
// models are defined using the Schema interface, then compiled into models using mongoose.model()

// require mongoose
var mongoose = require('mongoose')

// use the schema constructor to create a new schema instance
var Schema = mongoose.Schema;

// define the fields inside the schema
var modelSchema = new Schema({
    a_string: String,
    a_date: Date
})

// CREATING A MODEL
// models represent a collection of documents and documents are single instances of the model
// compile model from above schema with the name of the collection and the schema you want to use
var SomeModel = mongoose.model('SomeModel', mongoose.modelSchema);

// once you've defined your model classes you can use them for CRUD actions and run 
// queries to get all, or subsets of, records

// COMMON SCHEMA TYPES
var schema = new Schema(
    {
        name: String,
        binary: Buffer,
        living: Boolean,
        updated: { type: Date, default: Date.now() },
        age: { type: Number, min: 18, max: 65, required: true },
        mixed: Schema.Types.Mixed, // an arbitrary schema type (anything goes), but Mongoose doesn't automatically detect changes
        _someId: Schema.Types.ObjectId, // we can use populate() to pull in the associated info when needed
        array: [],
        ofString: [String], // you can also have an array of each of the other types
        nested: {
            stuff: {
                type: String,
                lowercase: true,
                trim: true
            }
        }
    }
)

// VALIDATION

// mongoose provides built in and custom validators, and sync and async validators
// all schema types have the required validator
// numbers have the min and max validators
// strings have enum (specifies the set of allowed values for the field), match (specifies
// a regular expression that the string must match), maxlength and minlength

// EXAMPLE
var breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: 12,
      required: [true, 'Why no eggs?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea', 'Water',]
    }
  });

  // VIRTUAL PROPERTIES
  // document properties that you can get and set but that don't get persisted to 
  // mongodb

  // EXAMPLE
   // define a schema
   var personSchema = new Schema({
    name: {
      first: String,
      last: String
    }
  });

  // compile our model
  var Person = mongoose.model('Person', personSchema);

  // create a document
  var axl = new Person({
    name: { first: 'Axl', last: 'Rose' }
  });

  // becomes this with a virtual property:
  personSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
  });

  // methods and query helpers
  // a schema can have instance methods (methods you put on the schema that you can then
  // call from any of the models and instances created off them), static methods (regular
  // methods on a particular model) and query helpers (what we were using in the bootcamp)

  // creating and modifying documents
  // to create a record you can define an instance of the model and then call save()
var awesome_instance = new SomeModel ({ name: 'awesome'})
awesome_instance.save(function (err) {
    if (err) return handleError(err)
    //saved!
})

// creation of records (along with updates, deletes and queries) are async
// the first argumnet for the callback will always be an error value
// you can also use create() to create the instance at the same time you save it

SomeModel.create({ name: 'also awesome' }, function (err, awesome_instance) {
    if (err) return handleError(err)
})

// Every model has an associated connection (this will be the default connection when 
// you use mongoose.model()). You create a new connection and call .model() on it to 
// create the documents on a different database.
