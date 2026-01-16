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


function isObject(value: unknown): boolean{
    return typeof value === "object" && value !== null;
}

function isAdmin(value: unknown): value is Admin{
    if(!isObject(value)) return false;

    let temp_obj = value as {
        role?: unknown
        permission?: unknown
    };


    if(typeof temp_obj.role !== "string") return false;
    if(temp_obj.role.toLowerCase() !== "admin") return false;


    if(!Array.isArray(temp_obj.permission)) return false;
    return temp_obj.permission.every(p => typeof p === "string");
    
}


function isGuest(value: unknown): value is Guest{
    if(!isObject(value)) return false;

    let temp_obj = value as {
        role?: string
        expiresAt?: Date
    }

    if(typeof temp_obj.role !== "string") return false;
    if(temp_obj.role.toLowerCase() !== "guest") return false;
    if(temp_obj.expiresAt === undefined) return false;

    if(temp_obj.expiresAt instanceof Date){
        return !isNaN(temp_obj.expiresAt.getTime());
    }
    
}

function parserUser(value: unknown): User{
    return true 
}

