<template>
  <header>
    <nav class="navbar navbar-expand">
      <a href="javascript:void(0)" class="sidebar-toggle text-light mr-3">
        <fa icon="server" class="text-light"></fa>
      </a>
      <router-link to="/" href class="navbar-brand">S3 Manager</router-link>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link font-weight-bold" href="#">
              <fa icon="plus" class="text-success"></fa>&nbsp;Add Host
            </a>
          </li>
          <li class="nav-item" v-if="state && state.host && state.host.name">
            <a class="nav-link font-weight-bold" href="javascript:void(0)" @click="$set(state, 'host', {})">
              <fa icon="times" class="text-danger"></fa>&nbsp;Disconnect
            </a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              <i class="fa fa-user"></i> Hello, username!
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="javascript:void(0)" @click="state.peer = {}">Logout</a>
            </div>
          </li>-->
        </ul>
      </div>
      <!-- <div class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              <i class="fa fa-user"></i> Hello, username!
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="javascript:void(0)" @click="state.peer = {}">Logout</a>
            </div>
          </li>
        </ul>
      </div>-->
    </nav>
  </header>
</template>

<script>
export default {
  props: ['state'],
  mounted() {
    const sidebar = $('[data-sidebar]')
    sidebar.userSet = false

    $('.sidebar-toggle').on('click', function () {
      sidebar.toggleClass('hidden');
      sidebar.userSet = true
    });

    $(window).on('resize', function () {
      if (!sidebar.userSet) {
        if (document.body.clientWidth >= 768) {
          sidebar.removeClass('hidden');
        } else {
          sidebar.addClass('hidden');
        }
      }
    })
  }
}
</script>

<style scoped>
.minio-logo {
  max-width: 100px;
}

.navbar {
  background: #c72c48;
}

.navbar-brand {
  color: white;
  font-weight: bold;
}

.navbar-brand svg {
  color: rgb(51, 51, 51);
  font-size: 110%;
  margin-right: 10px;
}

.nav-link {
  border: #354052 2px solid;
  background: rgba(255, 255, 255, .975);
  color: #354052 !important;
  border-radius: 5px;
  padding: 4px 10px;
}

.nav-link:hover {
  background: rgb(255, 255, 255);
}

.nav-link:not(:nth-last-child(2)) {
  margin-right: 5px;
}
/*
.navbar .navbar-nav .nav-link,
.navbar .navbar-text {
  color: rgba(255, 255, 255, 0.75);
}

.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 1);
} */
</style>
