<template>
  <div id="app">
    <MenuSuperior class="menu-superior"/>
    
    <router-view />
    <CartSystem />
  </div>
</template>

<script>
import CartSystem from '@/components/CartSystem.vue'
import MenuSuperior from '@/components/MenuSuperior.vue'

export default {
  name: "App",
  components: {
    CartSystem,
    MenuSuperior
  }
};
</script>
<style>
.logo img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.menu-superior {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  margin-bottom: 10px;
}
</style>
