<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        
        <!-- Menú izquierdo -->
        <ul class="nav-menu nav-left">
          <li><router-link to="/" class="letras">Inicio</router-link></li>
          <li><router-link to="/skin1004" class="letras">Productos</router-link></li>
        </ul>
        
        <!-- Logo al centro -->
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/image.png" alt="Encanto Divino K-Beauty" />
          </router-link>
        </div>
        
        <!-- Menú derecho -->
        <ul class="nav-menu nav-right">
          <li><a class="letras" href="#nosotros" @click="scrollToSection('nosotros')">Nosotros</a></li>
          <li><a class="letras" href="#contacto" @click="scrollToSection('contacto')">Contacto</a></li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MenuSuperior',
  methods: {
    scrollToSection(sectionId) {
      // Si estamos en la página principal, hacer scroll
      if (this.$route.path === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si estamos en otra página, ir a inicio y luego hacer scroll
        this.$router.push('/').then(() => {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        });
      }
    }
  }
}
</script>


<style scoped>
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
  font-size: 16px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  color: #5a189a;
}

.navbar {
  padding: 10px 0;
}
.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.router-link-active::after {
  width: 100%;
}


.nav-menu a {
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  background: rgba(255, 255, 255, 0.35);
}

.logo img {
  height: 56px;
  width: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}
.logo:hover img {
  transform: scale(1.05);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15));
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