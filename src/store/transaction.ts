import { TransactionsWithUsers } from "@/types/type";
import axios from "axios";
import { selector } from "recoil";

export const transactionsSelector = selector<TransactionsWithUsers[]>({
    key:'transactionsSelector',
    get:async()=>{
        const result = await axios.get('/api/get-transactions')
        return result.data.data
    }
})