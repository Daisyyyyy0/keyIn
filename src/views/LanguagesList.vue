<template lang="">
    <div class="shown bg-gray-100 py-6 border-y-2 border-gray-400 toScroll">
        <div class=" flex mb-6 ml-8 ">
          <LookOver class="mr-3"  lang="key..."/>
          <LookOver class="mr-3" v-for="lang in languagesList" :key="lang.id" :lang="lang.name"/>
          <div class="flex mr-3">
            <button type="button" class="btn-grey">
              <svg class="h-4 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </button>
            <button type="button" class="btn-grey">
              <svg class="h-4 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="listContent mx-auto ml-2 max-w-7xl grid grid-cols-12 gap-7 px-8">
          <div class="col-span-4 ">
            <div class="sticky top-6 divide-y divide-gray-300">
              <!-- Your content -->
              <ul class="border-dashed border-2 border-gray-300 rounded-2xl py-2 px-3 min-h-70percent">
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
              </ul>
            </div>
          </div>
          <div class="col-span-8 ">
            <!-- Your content -->
            <ul class="border-dashed border-2 border-gray-300 rounded-2xl  py-2 px-3 min-h-70percent">
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
              </ul>
          </div>
        </div>
        <KeyIn/>
      </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const languageKeys = [
{ key: 'finance',  value: '金融' },
{ key: 'exchange',  value: '幣幣' },
{ key: 'selfmarket',  value:'自選' },
{ key: 'allmarket',  value: '全部行情' },
]

const languagesList = reactive([
  { id: 1, name: '繁體中文' },
  { id: 2, name: '簡體中文' },
  { id: 3, name: '英文' },
  { id: 4, name: '法文' },
  { id: 5, name: '日文' },
  { id: 6, name: '韓文' },
  { id: 7, name: '西班牙文' },
  { id: 8, name: '德文' },
  { id: 9, name: '義大利文' },
  { id: 10, name: '越南文' },
  { id: 11, name: '印尼文' },
  { id: 12, name: '泰文' },
])


</script>