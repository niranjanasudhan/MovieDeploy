const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@lib.zo6qogd.mongodb.net/movie?retryWrites=true&w=majority")
    .then(() => {
        console.log("DB coneected")
    })
    .catch(err => console.log(err))

let Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieName: String,
    actor: String,
    actress: String,
    director: String,
    releasedYear: String,
    camera: String,
    producer: String,
    language: String
});

var movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;