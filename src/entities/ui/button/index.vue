<script setup lang="ts">
import { computed } from 'vue'
import buttonProps from './ButtonTypes'

const props = defineProps(buttonProps())

const btnType = computed(() => `${props.type}Btn`)
</script>

<template>
  <button :class="[$style[btnType], $style.btn]"><slot></slot></button>
</template>

<style lang="scss" module>
@import './index.module.scss';
</style>
