import { Client } from "../Models/clientModel.js";

export class clientController{
    static async listarTodos(req, res){
        try{
            const cliente = await Client.SelectAll();
            return res.status(200).json(cliente);
        }
        catch(err){
            console.log("Error on client controller: " + err)
        }
    }
}