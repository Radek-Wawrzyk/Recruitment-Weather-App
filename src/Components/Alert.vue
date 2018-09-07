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

<style lang="scss" scoped>

.error {
  position: relative;
  width: 100%;
  max-width: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #eec8c5;
  border: 1px solid #ab8481;
  border-radius: 4px;
  padding: 25px;
  &-title {
    font-size: 26px;
    font-weight: 600;
    color: #b12822;
    margin: 0 0 15px 0;
  }
  &-message {
    color: #6e4845;
  }
  &-btn {
    position: absolute;
    top: 25px;
    width: 25px;
    height: 25px;
    right: 25px;
    background: none;
    border: 1px solid #6e4845;
    border-radius: 100%;
    &:hover, &:focus {
      cursor: pointer;
      outline-color: #b12822;
    }
  }
}

//Animation

.fade-error {
  &-enter-active, &-leave-active {
    transition: all 0.5s ease-out;
  }
  &-enter, &-leave-to, &-leave-active {
    opacity: 0;
    transform: translate(-50%, -200px);
  }
}

@media screen and (max-width: 576px) {
  .error {
    width: 96%;
  }
}

</style>