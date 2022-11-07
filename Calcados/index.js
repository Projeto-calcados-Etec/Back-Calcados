import express from "express";
import cors from "cors";
import { teste_conexao } from "./utils/database.js";
import { routes } from "./routes.js";

/*import { testConnect } from "./testConnect.js";
 */

const port = process.env.PORT = 4000
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}),
)

app.use(routes)

teste_conexao().then((res) => {
    if(res == true){
        app.listen(port, ()=>{
            console.log('Server Running on Port ' + port)
        })
    }
})
