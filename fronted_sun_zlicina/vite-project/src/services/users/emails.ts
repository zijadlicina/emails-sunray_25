import { ROOT_URL } from "../index"
import axios from "axios"

export interface email {
	id: String,
	name: String,
	repeat: Number,
}

export async function getAllEmails(): Promise<any> {
    return await axios.get(ROOT_URL + "/emails")
}
export async function createOneEmail(newEmail: email): Promise<any> {
	return await axios.post(ROOT_URL + "/emails/", newEmail, {
		headers:{
			"Content-Type": "application/json"
		}
	})
}
