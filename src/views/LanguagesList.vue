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
        <div class="listContent mx-auto ml-2  grid grid-cols-12 gap-4 px-8">
          <div class="">

            <div class="mt-8 flex flex-col">
              <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle">
                  <div class="shadow-sm ring-1 ring-black ring-opacity-5">
                    <table class="min-w-full border-separate" style="border-spacing: 0">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Name</th>
                          <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Title</th>
                          <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Email</th>
                          <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Role</th>
                          <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white">
                        <tr v-for="(person, personIdx) in people" :key="person.email">
                          <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8']">{{ person.name }}</td>
                          <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell']">{{ person.title }}</td>
                          <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell']">{{ person.email }}</td>
                          <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500']">{{ person.role }}</td>
                          <td :class="[personIdx !== people.length - 1 ? 'border-b border-gray-200' : '', 'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8']">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900"
                              >Edit<span class="sr-only">, {{ person.name }}</span></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]


</script>