<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <!-- <a class="nav-link" href="/">Home</a> -->
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <!-- <a class="nav-link" href="/edit">Edit</a> -->
          <router-link class="nav-link" to="/about">About</router-link>
        </li>

      </ul>

    </div>
  </nav>
</template>