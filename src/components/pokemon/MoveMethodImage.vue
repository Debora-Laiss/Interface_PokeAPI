<template>
  <div>
    <v-img
      v-if="method == 'level-up'"
      :src="levelUpIcon"
      width="80px"
    ></v-img>
    <v-img
      v-else-if="method == 'egg'"
      :src="eggIcon"
      width="40px"
    ></v-img>
    <v-img
      v-else-if="method == 'machine'"
      :src="bookIcon"
      width="90px"
    ></v-img>
    <v-img
      v-else-if="method == 'tutor'"
      :src="teacherIcon"
      width="40px"
    ></v-img>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import levelUpSvg from '../../assets/level-up.svg'
import eggSvg from '../../assets/egg.svg'
import bookSvg from '../../assets/book.svg'
import teacherSvg from '../../assets/teacher.svg'

const props = defineProps({
  method: String,
})


const levelUpIcon = levelUpSvg
const eggIcon = eggSvg
const bookIcon = bookSvg
const teacherIcon = teacherSvg
</script>

<style lang="scss" scoped></style>