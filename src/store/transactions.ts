import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type IStoreBaseData } from '@/interfaces/store';
import { type ITransaction } from '@/interfaces/transactions';
import { getStoreBaseData } from '@/utils/helpers/store';
import TransactionApi from '@/services/Transactions';


export const useTransactionsStore = defineStore('transactions', () => {
    const transactions = ref<IStoreBaseData<ITransaction[]>>(getStoreBaseData())

    const fetchTransactions = async () => {
        transactions.value.isLoading = true
        try {
            const res = await TransactionApi.getAll()
            transactions.value.data = res.data
        } catch (error) {
            transactions.value.isError = true
            console.error(error)
        }
        transactions.value.isLoading = false
    }

    return { transactions, fetchTransactions }
});
