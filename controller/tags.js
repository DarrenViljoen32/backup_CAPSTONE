import {getTags, getOneTag, addTag, deleteTag, editTag} from '../models/tags.js'

export default{
    getTags: async (req,res)=>{
        try{
            res.send(await getTags())            
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    getOneTag: async (req,res)=>{
        try{
            res.send(await getOneTag(+req.params.tag_ID))
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    addTag: async (req,res)=>{
        const {tag_Name, post_ID} = req.body
        const tag = await addTag(tag_Name, post_ID)

        try{
            await getTags()
            res.send({
                msg: "You have successfully created a tag."
            })
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    deleteTag: async (req,res)=>{
        try{
            // res.send(await deletePost(req.params.post_ID))
            await deleteTag(req.params.tag_ID)
            console.log(req.params.tag_ID);
            res.send({
                msg: "You have successfully deleted the tag."
            })
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    editTag: async (req,res)=>{
        try{
            const [tag] = await getOneTag(+req.params.tag_ID)
            let {tag_Name, post_ID} = req.body
    
            tag_Name ? tag_Name = tag_Name: {tag_Name} = tag
            post_ID ? post_ID = post_ID: {post_ID} = tag
    
            console.log(tag);
            await editTag(tag_Name, post_ID, +req.params.tag_ID)
            res.send({
                msg: "You have successfully updated the data."
            }) 
            res.json(await getTags())

        }catch(err){
            console.error(err);
            res.json({
                msg: "An error has occured when updating the data."
            })
        }
    }
}