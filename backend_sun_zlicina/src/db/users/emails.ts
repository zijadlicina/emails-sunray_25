import { Query } from "../query"
import { makeSqlUpdateQuery } from "../../services/users/users/emailsUsers"

export interface email {
	id:  string,      
	name: string,      
	repeat: Number,      // Total repeat numbers of email
}

async function getAll() {
    return await Query<email[]>("SELECT * FROM emails;")
}
async function createOne(newEmail: email) {
    return await Query(`INSERT INTO emails VALUES (?,?,?);`, 
		[newEmail.id, newEmail.name, newEmail.repeat])
}
async function getOne(name: string) {
    return await Query<email>("SELECT * FROM emails WHERE name=?;", name)
}
async function updateOne(idEmail: string, updatedEmail: any) {
	let sqlQueryVal = makeSqlUpdateQuery(updatedEmail, idEmail)
	//if (sqlQueryVal[0] === 0) return {status: 400, message: "No fields were provided. Please ensure you include one of the fields: title, pages, published and image."}
    return await Query<email>(sqlQueryVal[0], sqlQueryVal[1])
}
async function removeOne(idEmail: Number) {
    return await Query<email>("DELETE FROM emails WHERE id=?;", idEmail)
}
export {
    getAll,
	createOne,
	getOne,
	updateOne,
	removeOne
}