import {pool} from '../config/config.js'

//TAGS

//get all tags
const getTags = async()=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM tags
    `)
    return result  
}

//get single tag
const getOneTag = async(tag_ID)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM tags
        WHERE tag_ID = ?
    `,[tag_ID])
    return result
}

//add tag
const addTag = async(tag_Name, post_ID)=>{
    const [tag] = await pool.query(`
        INSERT INTO tags (tag_Name, post_ID) VALUES (?,?)`,
        [tag_Name, post_ID])
    return getOnePost(tag.insertId)
}

//delete tag
const deleteTag = async(tag_ID)=>{
    const [result] = await pool.query(`
        DELETE 
        FROM tags
        WHERE tag_ID = ?
    `,[tag_ID])
    return result
}

//edit tag
const editTag = async(tag_Name, post_ID, tag_ID)=>{
    const [tag] = await pool.query(`
    UPDATE tags SET tag_Name=?, post_ID=?
    WHERE (tag_ID=?)
    `,[tag_Name, post_ID, tag_ID])
    return tag
} 

export {getTags, getOneTag, addTag, deleteTag, editTag}