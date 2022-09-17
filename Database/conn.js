//mongodb+srv://VictorinoAdmin:HAjd7YQe4cL2wB2@cluster01.wovl4uk.mongodb.net/?retryWrites=true&w=majority
const Mongoose = require("mongoose")
class Server {
    static #connected
    #connect() {
        Mongoose.connect(process.env.URL, {
            useNewUrlParser: true
        }, function (error) {
            if (!error) return;
            console.log('Falha na conexão!', error)
        })
        Server.#connected = Mongoose.connection

        Server.#connected.once('open', () => console.log('database rodando!!'))
        return Server.#connected;
        
    }

    connection(){
        return this.#connect()
    }
   

}

module.exports = Server