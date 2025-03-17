import axios, { type AxiosPromise } from "axios";
import { type ITransaction } from "@/interfaces/transactions";

export default class TransactionApi {
    private static jsonPath = `src/data/transactions.json`;

    public static getAll(): AxiosPromise<ITransaction[]> {
        return axios.get(this.jsonPath);
    }
}