<script setup lang="ts">
defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event:any) => {
    emit('update:modelValue', event.target.value)
}
</script>
<template>
            <input type="text" :value="modelValue" @input="updateValue" placeholder="What needs to be done" class="w-full h-12 px-3 rounded-md shadow-md">
</template>
