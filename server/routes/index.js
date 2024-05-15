import express from 'express'
import userRoute from './user.routes.js'
import employeeRoute from './employee.routes.js'



const router = express.Router();

const path = "/api-v1/";


router.use(`${path}user`,userRoute)
router.use(`${path}employee`,employeeRoute)

export default router