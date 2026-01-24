<template>
  <header class="header">
    <nav class="navbar">
      <div class="container nav-container">

        <!-- Menú izquierdo -->
        <ul class="nav-menu nav-left">
          <li>
            <router-link to="/" class="letras">Inicio</router-link>
          </li>
          <li>
            <router-link to="/skin1004" class="letras">Productos</router-link>
          </li>
        </ul>

        <!-- Logo centro -->
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/image.png" alt="Encanto Divino K-Beauty" />
          </router-link>
        </div>

        <!-- Menú derecho -->
        <ul class="nav-menu nav-right">
          <li>
            <a class="letras" @click.prevent="scrollToSection('nosotros')">
              Nosotros
            </a>
          </li>
          <li>
            <a class="letras" @click.prevent="scrollToSection('contacto')">
              Contacto
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MenuSuperior",
  methods: {
    scrollToSection(id) {
      if (this.$route.path !== "/") {
        this.$router.push("/").then(() => {
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>
/* CONTENEDOR GENERAL */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

/* HEADER */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(180deg, #fe9dcc 0%, #f9c6db 60%, #fcf2f6 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

/* NAVBAR */
.navbar {
  padding: 1.2rem 0;
}

/* GRID */
.nav-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

/* MENÚS */
.nav-menu {
  display: flex;
 gap: 12rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-left {
  justify-content: flex-start;
}

.nav-right {
  justify-content: flex-end;
}

/* LINKS */
.letras {
  font-size: 15px;
  font-weight: 500;
   padding: 10px 26px;
  max-width: 100px;
  text-align: center;
  border-radius: 999px;
  color: #5a189a;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo::before,
.logo::after {
  content: "";
  height: 1px;
  width: 60px;
  background: linear-gradient(to right, transparent, #d8b4fe, transparent);
  display: block;
}


.letras:hover {
  background: #f3e8ff;
  color: #7b2cbf;
}

/* LINK ACTIVO */
.letras.router-link-active {
  background: linear-gradient(135deg, #7b2cbf, #9d4edd);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(123, 44, 191, 0.3);
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}


.logo img {
  height: 65px;
  padding: 6px;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.05);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .nav-left,
  .nav-right {
    justify-content: center;
  }

  .logo img {
    height: 55px;
  }
}

</style>
