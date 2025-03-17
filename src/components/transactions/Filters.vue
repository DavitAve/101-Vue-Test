<template>
  <div class="flex flex-col gap-1">
    <div class="font-bold text-2xl">Filters</div>
    <div class="flex flex-col gap-3">
      <Select
        v-model="filters.type"
        label="Transaction Type"
        :options="transactionTypeOptions"
        @update:model-value="handleUpdate"
      />
      <div class="flex flex-col gap-1">
        <div>Transaction Date</div>
        <div class="flex gap-3 items-center h-11">
          <DatePicker
            v-model="filters.dateFrom"
            placeholder="From"
            @update:model-value="handleUpdate"
          />
          <DatePicker
            v-model="filters.dateTo"
            placeholder="To"
            @update:model-value="handleUpdate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type { ISelectOption } from '@/interfaces/select';
  import type { ITransactionFilter } from '@/interfaces/transactions';
  import Select from '../ui/Select.vue';
  import DatePicker from '../ui/DatePicker.vue';

  const emit = defineEmits<{
    (e: 'change', value: ITransactionFilter): void;
  }>();

  const transactionTypeOptions: ISelectOption[] = [
    {
      label: 'Income',
      value: 'income',
    },
    {
      label: 'Expense',
      value: 'expense',
    },
  ];

  const filters = ref<ITransactionFilter>({});

  const handleUpdate = () => emit('change', filters.value);
</script>

<style lang="scss" scoped></style>
