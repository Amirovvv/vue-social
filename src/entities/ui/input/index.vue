<script setup lang="ts">
import inputProps from './InputTypes'

const props = defineProps(inputProps())
</script>

<template>
  <div :class="$style.myInput">
    <label for="myInput">{{ props.label }}</label>
    <input :type="props.type" name="myInput" />
  </div>
</template>

<style module>
@import './index.module.scss';
</style>
