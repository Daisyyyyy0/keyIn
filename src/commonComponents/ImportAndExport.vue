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

        <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
          <div class="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :aria-current="item.current ? 'page' : undefined" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']">{{ item.name }}</a>
          </div>
          <div class="border-t border-gray-200 pt-4 pb-3">
            <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
            </div>
          </div>
        </PopoverPanel>
      </header>
    </Popover>

    <div class="py-6">
      <div class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
          <nav aria-label="Sidebar" class="sticky top-6 divide-y divide-gray-300 bg-red-100">
            <!-- Your content -->
            <ul>
              <li>aaa</li>
              <li>bbb</li>
              <li>ccc</li>
            </ul>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">
          <!-- Your content -->
          <ul>
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
          </ul>
        </main>
        <aside class="hidden xl:col-span-4 xl:block">
          <div class="sticky top-6 space-y-4">
            <!-- Your content -->
            <ul>
              <li>aaa</li>
              <li>bbb</li>
              <li>ccc</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>