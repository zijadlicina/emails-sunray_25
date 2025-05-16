import { ROOT_URL } from "../index"
import axios, { Axios } from "axios"

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
export async function createEmails(emailChipStr: string[]): Promise<any> {
	// we need to send this req body of emailChips in correct way (with "name" type)
	const emailChips = emailChipStr.map(item => ({ name: item }));
	return await axios.post(ROOT_URL + "/emails/chips", JSON.stringify({emailChips: emailChips}), {
			headers:{
			"Content-Type": "application/json"
		}
	})
}
