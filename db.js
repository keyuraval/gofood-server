const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://keyur:shivam6503@cluster0.bxsbf1r.mongodb.net/gofood?retryWrites=true&w=majority';
const mongoURI = 'mongodb://keyur:shivam6503@ac-9owmljc-shard-00-00.bxsbf1r.mongodb.net:27017,ac-9owmljc-shard-00-01.bxsbf1r.mongodb.net:27017,ac-9owmljc-shard-00-02.bxsbf1r.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-zyjz8g-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};