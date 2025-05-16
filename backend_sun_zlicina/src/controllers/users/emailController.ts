import type { NextFunction, Request, Response } from "express";
import { createOne, getAll, getOne, updateOne } from "../../db/users/emails";
import { getAll as getAllBlackList } from "../../db/users/blackemails";
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
            if (newEmail){
                resMessage = createOrUpdateEmail(newEmail, res)
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
export async function createMoreEmails(req: Request, res: Response, next: NextFunction) {
    try {
        let responseMessage = {}
        let reqBody = req.body;
        const emailChips = reqBody.emailChips;
        const blackemails = await getAllBlackList()
        const setBlackEmails = new Set(blackemails.map(item => item.name)); // set of all black emails without "id"
        let isAnyBelongToBlackList = emailChips.some(item => setBlackEmails.has(item.name.split('@')[1]));
        console.log("isAnyBelongToBlackList", isAnyBelongToBlackList)
        if (isAnyBelongToBlackList){
            res.statusCode = 400
            responseMessage = {message: "Please insert emails that not belong to blacklist domains!"}
        } else{
            for (let i = 0; i < emailChips.length; i++){
                createOrUpdateEmail(emailChips[i], res)
            }
            responseMessage = {message: "Sucessfully created or updated more emails!"};
        }
        res.json(responseMessage) 
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// utility function for createOne and createMore functions
const createOrUpdateEmail = async (newEmail, res) => {
    console.log("newwww", newEmail)
    const emailExist = await getOne(newEmail.name)
    if (emailExist.length === 0){
        newEmail.id = emailsUsers.generateRandomID(8)
        newEmail.repeat = 0;
        const results = await createOne(newEmail)
        res.statusCode = 201
        return results
    }
    else {
        newEmail.repeat = 0;
        let id = emailExist[0].id
        const results = await updateOne(id, emailExist)
        res.statusCode = 200
        return results
    }
}