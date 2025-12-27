<template>
<div class="container">
  <Marcas/>
  <Categoria/>
  <ProductosDes/>
  <Rutinas/>
  <Footer/>
</div>

</template>

<script>
import Marcas from "@/components/Marcas.vue";
import Categoria from "@/components/Categoria.vue";
import ProductosDes from "@/components/ProductosDes.vue";
import Rutinas from "@/components/Rutinas.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PrincipalPage",
  components: {
    Marcas,
    Categoria,
    ProductosDes,
    Rutinas,
    Footer
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
}


</style>
