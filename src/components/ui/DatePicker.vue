<template>
  <div class="w-full max-w-sm">
    <Datepicker
      v-model="selectedDate"
      :enable-time-picker="false"
      :dark="false"
      :teleport="true"
      :placeholder="placeholder"
      auto-apply
      @update:modelValue="emitUpdate"
    >
      <template #trigger>
        <button
          class="w-full px-4 py-2 border-2 rounded-lg text-primary bg-white cursor-pointer flex justify-between items-center relative"
        >
          {{ formattedDate || placeholder }}
          <button
            v-if="selectedDate"
            @click="handleNullifyDate"
            class="absolute right-2 top-1/2 -translate-y-1/2 z-[3] cursor-pointer rounded-full duration-200 hover:bg-secondary"
          >
            <img
              src="../../assets/icons/close.svg"
              class="w-6 h-6"
              alt=""
            />
          </button>
        </button>
      </template>
    </Datepicker>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch, computed } from 'vue';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  interface Props {
    modelValue?: Date | string | null;
    placeholder?: string;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: Date | string | null): void;
  }>();

  const selectedDate = ref<Date | string | null | undefined>(props.modelValue);

  const emitUpdate = (value: Date | string | null) => {
    emit('update:modelValue', value);
  };

  const handleNullifyDate = (e: MouseEvent) => {
    e.stopPropagation();
    emitUpdate(null);
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      selectedDate.value = newValue;
    }
  );

  const formattedDate = computed(() => {
    if (!selectedDate.value) return '';
    const date = new Date(selectedDate.value);
    return date.toISOString().split('T')[0];
  });
</script>
