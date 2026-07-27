<template>
    <Try ref="tryRef" />
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import Try from '../samples/try.vue'

const tryRef = ref(null)
onMounted(() => {
    console.log(tryRef.value)
})
</script>

<style scoped lang="scss"></style>