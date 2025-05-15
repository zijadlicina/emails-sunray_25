import crypto from "crypto"
import { email } from "../../../db/users/emails";

export function makeSqlUpdateQuery(updatedEmail: email, idEmail: string): any[]{
    console.log("IDDDD", idEmail)
    let sqlQuery: string = "UPDATE emails SET ";
	let queryParams = [];
	let queryValues: any[] = [];
    const newRepeat = updatedEmail[0].repeat.valueOf() + 1;
    console.log("newwreep", updatedEmail.repeat,newRepeat)
	queryParams.push("`repeat` = ?") 
	queryValues.push(newRepeat)
	sqlQuery += queryParams.join(", ")
	sqlQuery += " WHERE id=?;"
	queryValues.push(idEmail)
    return [sqlQuery, queryValues]
}
export function generateRandomID(bytes: number): string{
    return crypto.randomBytes(bytes).toString('hex');
}