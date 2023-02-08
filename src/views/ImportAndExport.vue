<template lang="">
    <div class="example container mx-auto mt-8">
        <p>範例：</p>
            <ul class="content-area py-2 px-4">
                <li class="text-red-600">[</li>
                <li class="text-red-600">["key","簡體中文","英文","泰文","越南文"],</li>
                <li class="text-red-600">["key2","簡體中文","法文","西班牙文","日文"]</li>
                <li class="text-red-600">]</li>
            </ul>
        <p class="text-red-700 my-4">**這裡不會擋重複的Key，請放心</p>
    </div> 
    <div class="import container mx-auto mt-8">
        <div class="importTitle mb-2">
            <span class="mr-4">批次輸入語系</span> 
            <button class="mr-2 text-blue-400 hover:text-blue-600">更新</button>
            <button class="mr-2 text-blue-400 hover:text-blue-600">取消</button>
        </div>
        <div class="importContent w-full h-80 flex border border-blue-500 border-1 border-t-25">
            <div class="w-8 pt-2 text-sm bg-gray-300 flex flex-col items-center">
                <div class="w-4 mb-1 text-gray-600 text-center">1</div>
                <div class="w-4 mb-1 text-gray-600 text-center">2</div>
                <div class="w-4 mb-1 text-gray-600 text-center">3</div>
                <div class="w-4 mb-1 text-gray-600 text-center">4</div>
                <div class="w-4 mb-1 text-gray-600 text-center">5</div>
                <div class="w-4 mb-1 text-gray-600 text-center">6</div>
                <div class="w-4 mb-1 text-gray-600 text-center">7</div>
                <div class="w-4 mb-1 text-gray-600 text-center">8</div>
                <div class="w-4 mb-1 text-gray-600 text-center">9</div>
                <div class="w-4 mb-1 text-gray-600 text-center">10</div>
            </div>
            <textarea rows="10" cols="10" class="h-full w-full bg-gray-50 border-0">

            </textarea>
        </div>


    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>