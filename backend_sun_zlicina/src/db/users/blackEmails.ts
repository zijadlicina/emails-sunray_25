import { Query } from "../query"

export interface blackEmail {
	id:  string,      
	name: string,      
}

async function getAll() {
    return await Query<blackEmail[]>("SELECT * FROM blackemails;")
}
async function createOne(newBlackEmail: blackEmail) {
    return await Query(`INSERT INTO blackemails VALUES (?);`, 
        [newBlackEmail.name])
}

export {
    getAll,
    createOne
}