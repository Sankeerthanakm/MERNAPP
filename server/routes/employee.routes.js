import express from 'express'
import { createEmployee, deleteEmp, getEmployee, updateEmp } from '../controllers/employee.controller.js'

const router=express.Router()

router.post("/createEmp",createEmployee)
router.get("/allEmployee",getEmployee)
router.patch("/update/:id",updateEmp)
router.delete("/delete/:id",deleteEmp)

export default router