<template>
<div class="container">
  <Noticias/>
  <Marcas/>
  <Categoria/>
  <Maquillaje/>
  <Rutinas/>
</div>

</template>

<script>
import Noticias from "@/components/Noticias.vue";
import Marcas from "@/components/Marcas.vue";
import Categoria from "@/components/Categoria.vue";
import Maquillaje from "@/components/Maquillaje.vue";
import Rutinas from "@/components/Rutinas.vue";

export default {
  name: "PrincipalPage",
  components: {
    Noticias,
    Marcas,
    Categoria,
    Maquillaje,
    Rutinas,
  },
  data() {
    return {
      // Aquí puedes agregar datos reactivos si es necesario
    };
  },
  methods: {
    // Aquí puedes agregar métodos para interactividad
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.principal-page {
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #d2d6ca; /* Ash Grey, fondo general */
  min-height: 100vh;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 2.5rem 2.5rem;
  background: #FFFFFFCC; /* Blanco translúcido para resaltar el contenido */
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(200, 135, 232, 0.10);
  border: 2px solid #E6ADEC;
}

</style>
