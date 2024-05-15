import express from 'express'
import { createUsers, userLogin } from '../controllers/user.controller.js'

const router=express.Router()

router.post("/signup",createUsers)
router.post("/login",userLogin)


export default router