import express from 'express'
import controller from '../controller/admins.js'

const router = express.Router()

router.get('/userDetails', controller.getLoggedInUserDetails)

export default router;