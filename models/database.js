import {pool} from '../config/config.js'

//USERS

//get all users
const getAdmins = async()=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM users
    `)
    return result  
}

//get single user
const getOneAdmin = async(user_ID)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM users
        WHERE user_ID = ?
    `,[user_ID])
    return result
}
 
//register new user
const registerAdmin = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image)=>{
    // const [user] = 
    await pool.query(`
        INSERT INTO users (user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image) VALUES (?,?,?,?,?,?,?,?)
    `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image])
    // return getOneAdmin(user.insertId)
}  

//delete user
const deleteAdmin = async(user_ID)=>{
    const [result] = await pool.query(`
        DELETE 
        FROM users
        WHERE user_ID = ?
    `,[user_ID])
    return result
}

//edit user
const editAdmin = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image, user_ID)=>{
    const [user] = await pool.query(`
    UPDATE users SET user_Name=?, user_Surname=?, user_Age=?, user_Gender=?, user_Email=?, user_Password=?, user_Role=?, user_Image=?
    WHERE (user_ID=?)
    `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Role, user_Image, user_ID])
    return user
} 

//check user
const  checkAdmin = async (user_Email) =>{
    const [[{user_Password}]] = await pool.query(`
        SELECT user_Password FROM users WHERE user_Email = ?
    `,[user_Email])
    return user_Password
}

export {getAdmins, getOneAdmin, registerAdmin, deleteAdmin, editAdmin, checkAdmin} 
