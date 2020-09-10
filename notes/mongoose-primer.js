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