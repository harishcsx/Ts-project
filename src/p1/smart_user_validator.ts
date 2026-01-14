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

function parserUser(value: unknown): value as User{
    
}