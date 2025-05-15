import type { NextFunction, Request, Response } from "express";
import { createOne, getAll, getOne, updateOne } from "../../db/users/emails";
import { emailsUsers, isEmptyObject } from "../../services/users";


export async function getAllEmails(req: Request, res: Response, next: NextFunction) {
    try {
        let responseMessage = {}
        const results = await getAll()
        responseMessage = results
        res.json(results) 
    } catch (error) {
        next(error)
    }
}
export async function createOneEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try{
        let resMessage = {}
        if (!req.body || isEmptyObject(req.body)) {
            const error = new Error("Request body is missing or empty")
            res.statusCode = 400;
            next(error)
        } else{
            let newEmail = req.body
            if (newEmail.name){
                const emailExist = await getOne(newEmail.name)
                console.log("isexist", emailExist)
                if (emailExist.length === 0){
                     newEmail.id = emailsUsers.generateRandomID(8)
                     newEmail.repeat = 0;
                     const results = await createOne(newEmail)
                     res.statusCode = 201
                     resMessage = {results}
                }
                else {
                    newEmail.repeat = 0;
                    let id = emailExist[0].id
                    console.log("www", id)
                    const results = await updateOne(id, emailExist)
                    console.log("res", emailExist)
                    res.statusCode = 200
                    resMessage = {results}
                }
            }  
            else {
                res.statusCode = 400
                resMessage = {message: "In request body is missing fields: name"}
            }
            res.json(resMessage)
        }
    } catch (error) {
        next(error)
    }
}