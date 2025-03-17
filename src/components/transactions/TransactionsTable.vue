<template>
  <div class="flex flex-col gap-3">
    <div class="overflow-x-auto shadow-md">
      <table
        class="w-full border-collapse bg-light shadow-lg rounded-lg overflow-hidden"
      >
        <thead>
          <tr class="bg-primary text-light text-left">
            <th class="px-6 py-3">ID</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Type</th>
            <th class="px-6 py-3">Amount</th>
            <th class="px-6 py-3">Description</th>
          </tr>
        </thead>
        <tbody v-if="!loading">
          <tr
            v-for="transaction in paginatedTransactions"
            :key="transaction.id"
            class="border-b hover:bg-secondary hover:text-light transition duration-200 last:border-b-0"
            :class="
              transaction.type === 'income' ? 'text-primary' : 'text-orange'
            "
          >
            <td class="px-6 py-4">
              {{ transaction.id }}
            </td>
            <td class="px-6 py-4">
              {{ transaction.date }}
            </td>
            <td class="px-6 py-4 capitalize">
              <span
                class="px-3 py-1 rounded-full text-sm font-semibold"
                :class="
                  transaction.type === 'income'
                    ? 'bg-primary text-white'
                    : 'bg-orange-100 text-orange'
                "
              >
                {{ transaction.type }}
              </span>
            </td>
            <td class="px-6 py-4 font-bold">${{ transaction.amount }}</td>
            <td class="px-6 py-4">
              {{ transaction.description }}
            </td>
          </tr>
        </tbody>
      </table>
      <Loader
        v-if="loading"
        class="mt-10"
      />
    </div>
    <Pagination
      v-model="currentPage"
      :total-pages="totalPages"
    />
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import type { ITransaction } from '@/interfaces/transactions';
  import Pagination from '@/components/ui/Pagination.vue';
  import Loader from '@/components/ui/Loader.vue';

  const props = defineProps<{
    transactions?: ITransaction[];
    loading?: boolean;
  }>();

  const currentPage = ref(1);
  const itemsPerPage = 10;

  const totalPages = computed(() => {
    currentPage.value = 1;
    return Math.ceil((props.transactions?.length || 0) / itemsPerPage);
  });

  const paginatedTransactions = computed(() => {
    if (!props.transactions) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return props.transactions.slice(start, end);
  });
</script>
