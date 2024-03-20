import express from 'express'
import controller from '../controller/tags.js'

const router = express.Router();

//TAGS

router
    .route('/')
        .get(controller.getTags)
        .post(controller.addTag)

router
    .route('/:tag_ID')
        .get(controller.getOneTag)
        .patch(controller.editTag) 
        .delete(controller.deleteTag) 
        

export default router