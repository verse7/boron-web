<template>
<div id="app">
  <router-view/>
</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.p-4 {
  padding: 16px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
