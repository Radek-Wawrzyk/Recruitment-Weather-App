<template>
  <transition name="fade-error" >
    <div class="error">
      <h2 class="error-title">Error!</h2>
      <p class="error-message">{{error.message}}</p>
      <button class="error-btn" aria-label="Close alert" @click="closeAlert">
        <svg enable-background="new 0 0 31.112 31.112" version="1.1" viewBox="0 0 31.112 31.112" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <polygon points="31.112 1.414 29.698 0 15.556 14.142 1.414 0 0 1.414 14.142 15.556 0 29.698 1.414 31.112 15.556 16.97 29.698 31.112 31.112 29.698 16.97 15.556"/>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>

export default {
  name: "Alert",
  props: [
    'error'
  ],
  methods: {
    closeAlert() {
      this.$emit('closeAlert');
    }
  }
}

</script>

<style lang="scss" src="./Alert.scss" scoped />