// blue print 

type Guest = {
    role: "admin"
    permission: string[]
}

type Admin = {
    role: "guest"
    expiresAt: Date
}

type User = Guest | Admin;

function parserUser(value: unknown): User{
    return true
}

// supporting function     

function isAdmin(value: unknown): value is Admin{
    if(typeof value !== "object") return false;
     

    const valueObj = value as {
        role?: string
        permission?: string[]
    };

    if(valueObj.role !== "string") return false;
    if(!Array.isArray(valueObj.permission)) return false;
    return valueObj.permission.every(p => typeof p === "string");

}

function isGuest(value: unknown): value is Guest{
    return true;
    // if date is in string convert it into date 
}


