<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: null //0 web 1 mobile
    }
  },
  methods: {},
  mounted() {
    if (document.documentElement.offsetWidth > 1024) {
      this.site = 0
    } else {
      this.site = 1
    }
    window.onresize = () => {
      if (document.documentElement.offsetWidth > 1024) {
        this.site = 0
      } else {
        this.site = 1
      }
      this.$store.commit('GET_WINDOW_WIDTH', this.$refs.app.clientWidth)
    }
  },
  watch: {
    site(val) {
      if (val == 0) {
        if (this.$route.path == this.$route.meta.pcPath) {
          return
        } else {
          this.$router.replace(this.$route.meta.pcPath)
        }
      } else {
        if (this.$route.path == this.$route.meta.mobilePath) {
          return
        } else {
          this.$router.replace(this.$route.meta.mobilePath)
        }
      }
    },
    $route() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
