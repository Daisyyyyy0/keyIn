<template>
    <div class="min-h-screen bg-gray-100">
      <Popover as="template" v-slot="{ open }">
        <header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
              <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                  <div class="w-full">
                    <label for="search" class="sr-only">Search</label>
                    <div class="relative">
                      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Popover>
  
      <div class="shown py-6 outline outline-1 outline-gray-400">
        <div class="container flex mb-6 ml-8 ">
          <LookOver class="mr-3"  lang="繁體中文"/>
          <LookOver class="mr-3"  lang="簡體中文"/>
          <LookOver class="mr-3"  lang="英文"/>
          <LookOver class="mr-3"  lang="法文"/>
          <LookOver class="mr-3"  lang="義大利文"/>
          <LookOver class="mr-3"  lang="西班牙文"/>
          <div class="flex">
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
        <div class="mx-auto max-w-7xl grid grid-cols-12 gap-7 px-8">
          <div class="col-span-4">
            <div class="sticky top-6 divide-y divide-gray-300">
              <!-- Your content -->
              <ul class="border-dashed border-2 border-gray-300 rounded-2xl py-2 px-3">
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
              </ul>
            </div>
          </div>
          <div class="col-span-8">
            <!-- Your content -->
            <ul class="border-dashed border-2 border-gray-300 rounded-2xl  py-2 px-3">
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
              </ul>
          </div>
        </div>
        <KeyIn/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const languageKeys = [
    { key: 'finance',  value: '金融' },
    { key: 'exchange',  value: '幣幣' },
    { key: 'selfmarket',  value:'自選' },
    { key: 'allmarket',  value: '全部行情' },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]


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
  </script>