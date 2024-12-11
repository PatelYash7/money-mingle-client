'use server'

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export const bankTransaction = async()=>{
    const session = await getServerSession(authOptions);

    if(session?.user){
        // const response  = await prisma.user.update({
        //     where:{
        //         id:'isaifasf'
        //     },
        //     conn:
        // })
    }
}