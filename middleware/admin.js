import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { checkAdmin } from '../models/database.js'


const auth = async (req, res, next) => {
    const {user_Email, user_Password} = req.body
    const hashedPassword = await checkAdmin(user_Email)
    bcrypt.compare(user_Password, hashedPassword, (err, result)=> {
        if(err){
            return res.status(500).json({
                error: "Internal Server Error."
            })
        }
        if(result === true){
            // const {user_Email} = req.body
            const {user_ID, user_Name, user_Email} = req.body
            const token = jwt.sign(
                // {user_Email:user_Email},
                {user_ID, user_Name, user_Email},
                process.env.SECRET_KEY,
                {expiresIn: '8h'}
            ) 
  
            res.send({
                token: token,
                msg: 'You have successfully logged in!'
            })
            next()
        }else{
            res.send({
                msg: 'The credetials are incorrect.'
            })
        }
    })
} 
  
export {auth}