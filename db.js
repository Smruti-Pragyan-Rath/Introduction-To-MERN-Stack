const mongoose= require("mongoose");
const URI=" mongodb+srv://smrutipragyanrath5:7shOxM8NA7UqKpFN@cluster0.20t6d.mongodb.net/"
//mongoose.connect(URI);

const connectdb= async()=>{
    try{
        await mongoose.connect(URI);
        console.log(`connection to database is succesful`)
    }
    catch(error){
        console.log("database connection failed");
        process.exit(0);

    }

}
module.exports= connectdb;
