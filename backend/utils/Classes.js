export class UserClass {
    constructor(_id,firstName,lastName,email,profilePic,gender){
        this.id = _id
        this.firstName = firstName
        this.lastName =lastName
        this.email = email
        this.profilePic = profilePic
        this.gender = gender
    }
}

export class ResponseClass {
     constructor(message,status,data){
        this.message = message
        this.status  = status
        this.data = data || null
     }
}