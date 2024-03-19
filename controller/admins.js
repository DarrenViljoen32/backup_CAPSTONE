import bcrypt from 'bcrypt'
import {getAdmins, getOneAdmin, registerAdmin, deleteAdmin, editAdmin, checkAdmin} from '../models/database.js'

const saltRounds = 10
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
            res.send(await getOneAdmin(+req.params.user_ID))
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    registerAdmin: async (req,res)=>{
        // const bcrypt = require('bcrypt');
        try{
            const {user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image} = req.body
            const hashedPassword = await bcrypt.hash(user_Password, saltRounds);
            const post = await registerAdmin(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Role, user_Image, hashedPassword)
            res.send(await getAdmins()
                // {
                // msg: "You have successfully created an admin account."
                // }
            )
        }catch(error){
            res.status(500).send({
                error: "Internal Server Error."
            })
        }
        // bcrypt.hash(user_Password, 10, async(err,hash)=>{
        //     if(err) throw err
        //     await registerAdmin(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Role, user_Image, hash)
        //     res.send({
        //         msg: "You have successfully created an admin account."
        //     })  
        // })
    },


    deleteAdmin: async (req,res)=>{
        // await deleteAdmin(req.params.admin_ID)
        
        try{
            await deleteAdmin(req.params.user_ID)
            console.log(req.params.user_ID);
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
            const [user] = await getOneAdmin(+req.params.user_ID)
            let {user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image} = req.body
    
            user_Name ? user_Name = user_Name: {user_Name} = user
            user_Surname ? user_Surname = user_Surname: {user_Surname} = user
            user_Age ? user_Age = user_Age: {user_Age} = user
            user_Gender ? user_Gender = user_Gender: {user_Gender} = user
            user_Email ? user_Email = user_Email: {user_Email} = user
            user_Password ? user_Password = user_Password: {user_Password} = user
            user_Role ? user_Role = user_Role: {user_Role} = user
            user_Image ? user_Image = user_Image: {user_Image} = user
    
            console.log(user);
            await editAdmin(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image, +req.params.user_ID) 
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
