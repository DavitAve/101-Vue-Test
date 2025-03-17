<template>
  <div class="flex flex-col gap-1">
    <div class="font-bold text-2xl">Sort</div>
    <div class="flex flex-col gap-3">
      <Select
        v-model="sorts.date"
        label="Sort by Date"
        :options="sortOptions"
        @update:model-value="handleUpdate('amount')"
        default-option-label="Default"
      />
      <Select
        v-model="sorts.amount"
        label="Sort by Amount"
        :options="sortOptions"
        @update:model-value="handleUpdate('date')"
        default-option-label="Default"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type { ISelectOption } from '@/interfaces/select';
  import type { ITransactionSort } from '@/interfaces/transactions';
  import Select from '../ui/Select.vue';

  const sortOptions: ISelectOption[] = [
    {
      label: 'Ascending',
      value: 'ascending',
    },
    {
      label: 'Descending',
      value: 'descending',
    },
  ];

  const emit = defineEmits<{
    (e: 'change', value: ITransactionSort): void;
  }>();

  const sorts = ref<ITransactionSort>({});

  const handleUpdate = (nulledKey: keyof ITransactionSort) => {
    sorts.value[nulledKey] = undefined;
    emit('change', sorts.value);
  };
</script>

<style lang="scss" scoped></style>
