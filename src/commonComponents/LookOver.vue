//上層:shown.vue
<template>
    <div>
        <div class="flex rounded-md shadow-sm ">
            <span class="inline-flex items-center w-full rounded-l-md border border-r-0 border-gray-300 bg-gray-50 pl-3 text-gray-500 ">
                {{ lang }}
            </span>
            <input type="text" class=" block w-full rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Search..." />
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'

    defineProps({
    lang: String,
    })
</script>