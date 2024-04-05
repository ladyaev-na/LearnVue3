<template>
  <header>
    <nav class="navbar navbar-brand bg-dark">
      <ul class="d-flex">
        <li class="nav-item"><RouterLink class="nav-link" to="/">Главная</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" to="/directives">Знакомство с директивами</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a{
  color: whitesmoke;
}
li{
  list-style-type: none;
}
a:hover{
  color: #8578ef;
}
</style>