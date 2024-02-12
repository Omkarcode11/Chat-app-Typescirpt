export const getAvatarUrl = (firstName,lastName,gender)=>{
    if(gender=="male"){

       return `https://avatar.iran.liara.run/public/boy?username=${firstName}${lastName}`
        
    }
    return `https://avatar.iran.liara.run/public/girl?username=${firstName}${lastName}`
}