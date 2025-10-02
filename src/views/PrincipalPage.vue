<template>
  <div class="principal-page">
<!-- Header/Navbar -->
<header class="header">
  <nav class="navbar">
    <div class="nav-container">
      
      <!-- Menú izquierdo -->
      <ul class="nav-menu nav-left">
        <li><a class="letras" href="#productos">Productos</a></li>
        <li><a class="letras" href="#marcas">Marcas</a></li>
      </ul>
      
      <!-- Logo al centro -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/image.png" alt="Logo" />
        </router-link>
      </div>
      
      <!-- Menú derecho -->
      <ul class="nav-menu nav-right">
        <li><a class="letras" href="#nosotros">Nosotros</a></li>
        <li><a class="letras" href="#contacto">Contacto</a></li>
      </ul>

    </div>
  </nav>
</header>
<div class="container">
  <Marcas/>
  <Categoria/>
  <ProductosDes/>
  <Rutinas/>
  <Footer/>
</div>

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

/* Header */
.header {
  background: linear-gradient(135deg, #ffc8dd 30%, #ffafcc 70%);
  box-shadow: 0 4px 20px rgba(255, 175, 204, 0.25);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-radius: 0 0 15px 15px;
  backdrop-filter: blur(10px);
}

.letras {
  font-size: 25px;
  font-weight: bold;
  border: 2px outset #a153ce;
  border-radius: 5px;
  padding: 5px 10px;
  background: #cdb4dbb3;
  color: #400a4e; 
  /* font-family: 'Courier New', Courier, monospace; */
}


.navbar {
  padding: 5px 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 5rem;
}

.nav-menu a {
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  background: #edafb8;
}

.logo img {
  height: 80px;
  width: auto;
}
/* Hero Section */
.hero {
  background: linear-gradient(135deg, #ffafcc 0%, #ffc8dd 50%, #bde0fe 100%);
  padding: 4rem 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 0 2rem;
}

.hero-text h2 {
  font-size: 3rem;
  color: #4a5759;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-text p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(131, 197, 190, 0.4);
}

.hero-placeholder {
  background: linear-gradient(135deg, #ffc8dd, #bde0fe);
  height: 300px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #4a5759;
  border: 3px dashed #83c5be;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 10px;
  padding: 0 10px;
}

/* Section Titles */
.section-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: #4a5759;
  margin-bottom: 3rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  border-radius: 2px;
}

.section-title::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: rgba(131, 197, 190, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  .nav-menu {
    gap: 1rem;
  }

  .letras {
    font-size: 14px;
    padding: 8px 15px;
  }

  .logo img {
    height: 70px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text h2 {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-text h2 {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .letras {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
