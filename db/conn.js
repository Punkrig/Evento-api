const mongoose = require('mongoose');   

async function main(){
    try {
        await mongoose.connect(
            "mongodb+srv://igorbrandaao:eventos-senha123@cluster0.cxsfoxq.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado com o banco!");
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}
module.exports = main;