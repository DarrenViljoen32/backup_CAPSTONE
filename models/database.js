import {pool} from '../config/config.js'

//USERS

//get all users
// const getUsers = async()=>{
//     const [result] = await pool.query(`
//         SELECT * 
//         FROM users
//     `)
//     return result  
// }

//get single user
// const getOneUser = async(user_ID)=>{
//     const [result] = await pool.query(`
//         SELECT * 
//         FROM users
//         WHERE user_ID = ?
//     `,[user_ID])
//     return result
// }

//add user
// const addUser = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image)=>{
//     const [user] = await pool.query(`
//         INSERT INTO users (user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image) VALUES (?,?,?,?,?,?,?)
//     `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image])
//     return getOneUser(user.insertId)
// }  

//delete user
// const deleteUser = async(user_ID)=>{
//     const [result] = await pool.query(`
//         DELETE 
//         FROM users
//         WHERE user_ID = ?
//     `,[user_ID])
//     return result
// }

//edit user
// const editUser = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image, user_ID)=>{
//     const [user] = await pool.query(`
//     UPDATE users SET user_Name=?, user_Surname=?, user_Age=?, user_Gender=?, user_Email=?, user_Password=?, user_Image=? 
//     WHERE (user_ID=?)
//     `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image, user_ID])
//     return user
// } 


//ADMINS

//get all admins
const getAdmins = async()=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM admins
    `)
    return result  
}

//get single admin
const getOneAdmin = async(admin_ID)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM admins
        WHERE admin_ID = ?
    `,[admin_ID])
    return result
}
 
//register new admin
const registerAdmin = async(admin_Name, admin_Email, admin_Password)=>{
    // const [admin] = 
    await pool.query(`
        INSERT INTO admins (admin_Name, admin_Email, admin_Password) VALUES (?,?,?)
    `,[admin_Name, admin_Email, admin_Password])
    // return getOneAdmin(admin.insertId)
}  

//delete admin
const deleteAdmin = async(admin_ID)=>{
    const [result] = await pool.query(`
        DELETE 
        FROM admins
        WHERE admin_ID = ?
    `,[admin_ID])
    return result
}

//edit admin
const editAdmin = async(admin_Name, admin_Email, admin_Password, admin_ID)=>{
    const [admin] = await pool.query(`
    UPDATE admins SET admin_Name=?, admin_Email=?, admin_Password=?
    WHERE (admin_ID=?)
    `,[admin_Name, admin_Email, admin_Password, admin_ID])
    return admin
} 

//check admin
const  checkAdmin = async (admin_Name) =>{
    const [[{admin_Password}]] = await pool.query(`
        SELECT admin_Password FROM admins WHERE admin_Name = ?
    `,[admin_Name])
    return admin_Password
}

export {getAdmins, getOneAdmin, registerAdmin, deleteAdmin, editAdmin, checkAdmin} 
