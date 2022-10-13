const Mongoose = require("mongoose")
class Server {
    static #connected
    #connect() {
        Mongoose.connect(process.env.Url, {
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


module.exports = new Server()