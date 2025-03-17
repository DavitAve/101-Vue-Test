<template>
  <div class="grid grid-cols-[30%_70%] gap-6 py-5">
    <div class="px-6 py-3 rounded-l shadow-md bg-light flex flex-col gap-3">
      <Filters @change="handleFilterData" />
      <Sort @change="handleSortData" />
    </div>
    <div class="flex flex-col gap-3">
      <h3 class="text-2xl font-bold">Transactions</h3>
      <TransactionsTable
        :transactions="sortedAndFilteredData"
        :loading="transactions.isLoading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';
  import { useTransactionsStore } from '@/store/transactions';
  import TransactionsTable from '@/components/transactions/TransactionsTable.vue';
  import Filters from '@/components/transactions/Filters.vue';
  import Sort from '@/components/transactions/Sort.vue';

  import type {
    ITransactionFilter,
    ITransactionSort,
  } from '@/interfaces/transactions';

  const transactionsStore = useTransactionsStore();

  const transactions = computed(() => transactionsStore.transactions);

  const filters = ref<ITransactionFilter>({});
  const sorts = ref<ITransactionSort>({});

  const sortedAndFilteredData = computed(() => {
    let data = transactions.value.data || [];

    data = data.filter((transaction) => {
      const typeCond =
        filters.value.type === 'all' ||
        !filters.value.type ||
        transaction.type === filters.value.type;

      const dateFromCond =
        !filters.value.dateFrom ||
        new Date(transaction.date) >= new Date(filters.value.dateFrom);

      const dateToCond =
        !filters.value.dateTo ||
        new Date(transaction.date) <= new Date(filters.value.dateTo);

      return typeCond && dateFromCond && dateToCond;
    });

    if (sorts.value.date && sorts.value.date !== 'all') {
      data.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sorts.value.date === 'ascending' ? dateA - dateB : dateB - dateA;
      });
    }

    if (sorts.value.amount && sorts.value.amount !== 'all') {
      data.sort((a, b) => {
        const amountA = a.amount;
        const amountB = b.amount;
        return sorts.value.amount === 'ascending'
          ? amountA - amountB
          : amountB - amountA;
      });
    }

    return data;
  });

  const handleFilterData = (newFilters: ITransactionFilter) => {
    filters.value = newFilters;
  };

  const handleSortData = (newSorts: ITransactionSort) => {
    sorts.value = newSorts;
  };

  onMounted(async () => {
    if (!transactions.value.data) {
      await transactionsStore.fetchTransactions();
    }
  });
</script>

<style lang="scss" scoped></style>
