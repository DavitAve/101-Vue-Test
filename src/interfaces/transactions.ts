import { type TTransactionSortType, type TTransactionType } from "../types/transactions";

export interface ITransaction {
    id: number
    date: string
    type: TTransactionType
    amount: number
    description: string
}

export interface ITransactionFilter {
    type?: TTransactionType | 'all'
    dateFrom?: string
    dateTo?: string
}

export interface ITransactionSort {
    amount?: TTransactionSortType
    date?: TTransactionSortType
}