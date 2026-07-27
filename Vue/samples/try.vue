<template>
    <div class="car-company">

        <!-- 初始 -->
        <!-- <h2 id="title2">北京</h2> -->

        <!-- 标签ref标记DOM元素 -->
        <!--
          当前Vue文件标记的ref与其他文件内的同名标记是隔离开的
          即使同名也不冲突（有点局部变量的is）
        -->
        <div ref="title2">北京</div>

        <!-- <el-button @click="showLog">点击打印</el-button> -->

    </div>

</template>

<script setup lang="ts">
import { watchEffect, reactive, ref, watch, defineExpose } from 'vue';

//创建一个title2，用于存储ref标记的内容
// let title2 = ref(null);与下面等价
let title2 = ref();
let divRef = ref(null);

//用id操作页面DOM元素，将其输出在控制台
function showLog() {
    // console.log(title2.value);

    divRef.value = title2.value;
    console.log(divRef.value);
    divRef.value.style.fontSize = '30px';
    divRef.value.style.color = 'red';
}

window.addEventListener('load', showLog);

defineExpose({
    divRef
})
</script>