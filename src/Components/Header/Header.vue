<template>
  <header class="header">
    <h1 class="header-title">Recruitment Task</h1>
  </header>
</template>

<script>

export default {
  name: 'Header'
}

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 25px;
    background: white;
    box-shadow: 0 4px 6px -6px rgba(34,34,34,.6);
    &-title {
      font-size: 26px;
      color: #414141;
    }
  }
</style>