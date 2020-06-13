<template>
  <div class="container py-5" style="min-height:calc(100vh - 194px)">
    <h1>Error!</h1>
    <h2>404 Not Found</h2>
    <p>The page you are looking for was not found, it might have been renamed, move, removed or temporary unavailable. Check the link/url and try again.</p>
    <div class="error-actions">
      <router-link class="btn btn-primary btn-lg" to="/">Take Me Home</router-link>
      <router-link class="btn btn-default btn-lg" to="/contact">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
