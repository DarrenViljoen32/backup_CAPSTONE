import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// import userRouter from './routes/users.js'
import adminRouter from './routes/admins.js'
import postRouter from './routes/posts.js'

// import { registerAdmin, checkAdmin } from './models/database.js'
import {auth} from './middleware/admin.js'
// import {authorize} from './middleware/users.js'

config();
 
const PORT = process.env.PORT
    
const app = express();
    
app.use(cors(
    {
    origin: 'http://localhost:8080',
    credentials: true
    }
)); 

app.use(express.json());
app.use(cookieParser())

// app.use(express.static('../frontend/src/views/FriendsView.vue'))
app.use(express.static('../frontend/src/views/LogInView.vue'))
 

// app.use('/users', userRouter)
app.use('/admins', adminRouter)
app.use('/posts', postRouter)


app.post('/login', auth, (req,res)=>{
})

 
app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})
  