import type { TTransactionType } from "@/types/transactions";

export const TransactionType: Record<TTransactionType, string> = {
    expense: 'Расход',
    income: 'Доход'
}

export const TransactionIconType: Record<TTransactionType, string> = {
    expense: '-',
    income: '+'
}