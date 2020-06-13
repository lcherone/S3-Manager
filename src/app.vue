<template>
  <div>
    <layout-header :state="state"></layout-header>
    <main role="main">
      <article class="d-flex">
        <layout-sidebar :state="state"></layout-sidebar>
        <router-view :state="state"></router-view>
        <layout-footer :state="state"></layout-footer>
      </article>
    </main>
  </div>
</template>

<script>
import LayoutHeader from './layout/header'
import LayoutFooter from './layout/footer'
import LayoutSidebar from './layout/sidebar'

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutSidebar
  },
  beforeMount() { },
  data() {
    return {
      state: {
        errors: {},
        alert: {},
        form: {},
        hosts: {
          // "gcs": {
          //   "url": "https://storage.googleapis.com",
          //   "accessKey": "YOUR-ACCESS-KEY-HERE",
          //   "secretKey": "YOUR-SECRET-KEY-HERE",
          //   "api": "S3v2",
          //   "lookup": "dns"
          // },
          // "local": {
          //   "url": "http://localhost:9000",
          //   "accessKey": "",
          //   "secretKey": "",
          //   "api": "S3v4",
          //   "lookup": "auto"
          // },
          "play": {
            "url": "https://play.min.io:9000",
            "accessKey": "Q3AM3UQ867SPQQA43P2F",
            "secretKey": "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",
            "api": "S3v4",
            "lookup": "auto"
          },
          // "s3": {
          //   "url": "https://s3.amazonaws.com",
          //   "accessKey": "YOUR-ACCESS-KEY-HERE",
          //   "secretKey": "YOUR-SECRET-KEY-HERE",
          //   "api": "S3v4",
          //   "lookup": "dns"
          // }
        },
        config: {}
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import "./assets/css/bootstrap-custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/css/style.scss";
</style>
