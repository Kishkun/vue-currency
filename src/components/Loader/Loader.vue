<template>
    <div class="loader">
        <div class="preloader-wrapper" :class="{ active: isLoading }">
            <div class="spinner-layer" :class="color">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Loader',
    props: {
      isLoading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      color() {
        const colors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only', 'spinner-yellow-only', 'spinner-brown-only'];
        return colors[Math.floor(Math.random() * 3)]
      }
    },
  }
</script>
<style scoped lang="scss">
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
