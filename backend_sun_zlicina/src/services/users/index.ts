export * as emailsUsers from "./users/emailsUsers"

export function isEmptyObject(obj: any) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}