<template lang="">
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="Tab" data-tabs-toggle="#TabContent" role="tablist">
        <li class="mr-2" role="presentation">
            <button @click="clickTab" :class="['tabBtn','tabBtnHover', {tabBtnActive: isActive}]"
                id="languageListTab" data-tabs-target="#languageList" type="button" role="tab">
                <RouterLink to="/languagesList">語言列表</RouterLink>
            </button>
        </li>
        <li class="mr-2" role="presentation">

            <button  @click="clickTab" :class="['tabBtn','tabBtnHover',{tabBtnActive: isActive}]"
                    id="batchImportTab" data-tabs-target="#batchImport" type="button" role="tab">
                    <RouterLink to="/importAndExport">批次匯入</RouterLink>
            </button>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const isActive = ref(true)

const clickTab = () => {
    isActive.value = !isActive.value
    console.log('isActive.value',isActive.value);
}


</script>

<style lang="">
    
</style>