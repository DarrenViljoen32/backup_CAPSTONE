import bcrypt from 'bcrypt'
import {getAdmins, getOneAdmin, registerAdmin, deleteAdmin, editAdmin, checkAdmin} from '../models/database.js'


export default{
    getAdmins: async (req,res)=>{
        try{
            res.send(await getAdmins())
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    getOneAdmin: async (req,res)=>{
        try{
            res.send(await getOneAdmin(+req.params.admin_ID))
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    registerAdmin: async (req,res)=>{
        const {admin_Name, admin_Email, admin_Password} = req.body
        bcrypt.hash(admin_Password, 10, async(err,hash)=>{
            if(err) throw err
            await registerAdmin(admin_Name, admin_Email, hash)
            res.send({
                msg: "You have successfully created an admin account."
            })  
        })
    },


    deleteAdmin: async (req,res)=>{
        // await deleteAdmin(req.params.admin_ID)
        
        try{
            await deleteAdmin(req.params.admin_ID)
            console.log(req.params.admin_ID);
            res.send({
                msg: "You have successfully deleted the account."
            })
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when deleting the data.'
            })
        }
    },

    editAdmin: async (req,res)=>{
        try{
            const [admin] = await getOneAdmin(+req.params.admin_ID)
            let {admin_Name, admin_Email, admin_Password} = req.body
    
            admin_Name ? admin_Name = admin_Name: {admin_Name} = admin
            admin_Email ? admin_Email = admin_Email: {admin_Email} = admin
            admin_Password ? admin_Password = admin_Password: {admin_Password} = admin
    
            console.log(admin);
            await editAdmin(admin_Name, admin_Email, admin_Password, +req.params.admin_ID) 
            res.send({
                msg: "You have successfully updated the data."
            })
            res.json(await getAdmins())

        }catch(err){
            console.error(err);
            res.json({
                msg: "An error has occured when updating the data."
            })
        }

    },

}
