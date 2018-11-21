<template>
  <div class="headerNav">
    <top-bar />
    <category-nav />
  </div>
</template>

<script>
import topBar from './components/top-bar'
import categoryNav from './components/category-nav'
export default {
  name: 'headerNav',
  components: {
    topBar,
    categoryNav
  }
}
</script>

<style>
</style>
