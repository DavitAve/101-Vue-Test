<template>
  <div class="flex justify-center items-center space-x-2 py-4">
    <button
      :disabled="modelValue === 1"
      @click="updatePage(modelValue - 1)"
      :class="[
        'px-4 py-2 bg-light text-primary rounded-lg shadow transition duration-200 disabled:bg-gray-300',
        modelValue === 1
          ? ''
          : 'hover:bg-secondary hover:text-white cursor-pointer ',
      ]"
    >
      Previous
    </button>

    <span
      v-for="page in totalPages"
      :key="page"
    >
      <button
        :class="[
          'px-4 py-2 rounded-lg cursor-pointer',
          page === modelValue
            ? 'bg-primary text-light'
            : 'bg-light text-primary hover:bg-secondary hover:text-white transition duration-200',
        ]"
        @click="updatePage(page)"
      >
        {{ page }}
      </button>
    </span>

    <button
      :disabled="modelValue === totalPages"
      @click="updatePage(modelValue + 1)"
      :class="[
        'px-4 py-2 bg-light text-primary rounded-lg shadowtransition duration-200 disabled:bg-gray-300',
        modelValue === totalPages
          ? ''
          : 'hover:bg-secondary hover:text-white cursor-pointer ',
      ]"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts" setup>
  interface IProps {
    modelValue: number;
    totalPages: number;
  }

  const props = defineProps<IProps>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
  }>();

  const updatePage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
      emit('update:modelValue', page);
    }
  };
</script>
