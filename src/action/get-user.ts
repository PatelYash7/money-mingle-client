import prisma from "@/db";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export const getUser = async()=>{
    const session = await getServerSession(authOptions);
    if(session?.user){
        const User = await prisma.user.findFirst({
            where:{
                id:session.user.id
            },
            include:{
                Wallet:true
            }
        })
        if(User){
            return User
        }
    }
    return null
}