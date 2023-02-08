<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">選擇語言</ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton class="relative w-40 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span class="block truncate">{{ selected.name }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="lang in languages" :key="lang.id" :value="lang" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-500' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ lang.name }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-500', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const languages = [
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
]

const selected = ref(languages[3])
</script>