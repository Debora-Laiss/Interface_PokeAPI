<template>
  <div>
    <Header />
    <div>
      <router-view></router-view>
    </div>
  <Footer />
  </div>
</template>
<script>
import Header from './components/layout/header/Header.vue'
import Footer from './components/layout/footer/Footer.vue'

export default {
  data: function() {
    return {
      app_name: "Search"
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>