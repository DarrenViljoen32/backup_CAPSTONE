import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { checkAdmin } from '../models/database.js'


const auth = async (req, res, next) => {
    const {admin_Name, admin_Password} = req.body
    const hashedPassword = await checkAdmin(admin_Name)
    bcrypt.compare(admin_Password, hashedPassword, (err, result)=> {
        if(err) throw err
        if(result === true){
            const {admin_Name} = req.body
            const token = jwt.sign(
                {admin_Name:admin_Name},
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