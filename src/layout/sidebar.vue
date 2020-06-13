<template>
  <aside>
    <nav class="sidebar bg-dark" data-sidebar>
      <ul class="list-unstyled">
        <li>
          <span>Navigation</span>
        </li>
        <!-- <li class="active">
          <router-link to="/">
            <fa icon="home"></fa>&nbsp;Home
          </router-link>
        </li>-->
        <li>
          <a href="#host-collapse" data-toggle="collapse">
            <fa icon="server"></fa>&nbsp;Hosts
            <fa icon="angle-down" class="float-right mr-2 mt-1"></fa>
          </a>
          <ul id="host-collapse" class="list-unstyled collapse">
            <li v-for="(host, index) in state.hosts" :key="index">
              <template v-if="host.buckets">
                <a :href="`#buckets-collapse-${index}`" data-toggle="collapse">
                  {{ index }}
                  <fa icon="angle-down" class="float-right mr-2 mt-1"></fa>
                </a>
                <ul :id="`buckets-collapse-${index}`" class="list-unstyled collapse">
                  <li v-for="(bucket, bucket_index) in host.buckets" :key="index + '_' + bucket_index">
                    <router-link :to="`/host/${index}/${bucket.name}`">
                      <i class="fa fa-angle-right"></i>
                      {{ bucket.name }}
                    </router-link>
                  </li>
                </ul>
              </template>
              <template v-else>
                <router-link :to="`/host/${index}`">
                  <i class="fa fa-angle-right"></i>
                  {{ index }}
                </router-link>
              </template>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <pre>{{ state }}</pre> -->
    </nav>

  </aside>
</template>

<script>
export default {
  props: ['state']
  //   mounted() {
  //     var sidebar = $('.sidebar')
  //     sidebar.userSet = false

  //     $('.sidebar-toggle').on('click', function () {
  //       sidebar.toggleClass('hidden');
  //       sidebar.userSet = true
  //     });

  //     $(window).on('resize', function () {
  //       if (!sidebar.userSet) {
  //         if (document.body.clientWidth >= 768) {
  //           sidebar.removeClass('hidden');
  //         } else {
  //           sidebar.addClass('hidden');
  //         }
  //       }
  //     })
  //   }
}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 1);
}

.sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: calc(100vh - 56px);
  max-height: calc(100vh - 56px);
  transition: all 0.25s;
  overflow-y: auto;
}

@media screen and (max-width: 770px) {
  .sidebar {
    z-index: 9999;
    position: absolute;
  }
}

.sidebar ul li a {
  font-size: 90%;
  display: block;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}

.sidebar ul li a:hover,
.sidebar ul .active a {
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, 0.25);
}

.sidebar ul ul a {
  background: rgba(0, 0, 0, 0.25);
  font-size: 90%;
  display: block;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}

.sidebar ul ul a:hover {
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
}

.sidebar ul i {
  margin-top: 3px;
  padding-right: 3px;
}

.sidebar [data-toggle="collapse"] {
  position: relative;
}

.sidebar [aria-expanded="true"] {
  background: rgba(0, 0, 0, 0.25);
}

.sidebar li span {
  display: block;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px rgba(255, 255, 255, 0.19) solid;
}

.sidebar.hidden {
  margin-left: -250px;
}
</style>
