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
            <router-link to="/marcas" class="letras">Productos</router-link>
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
   border-radius: 8px;

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
  gap: 10rem;
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

.letras {
  font-size: 17px;
  font-weight: 550;
  padding: 12px 38px; 
  min-width: 140px;    
  text-align: center;
  border-radius: 999px;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #003459;
  box-shadow: 0 2px 8px #00A8E8;
  background: #007EA7;
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
  background: #E39695;
  color: #CC444B;
  border: dashed 2px #CC444B;
}

/* LINK ACTIVO */
.letras.router-link-active {
  background: linear-gradient(135deg, #F283B6, #E06C9F,#F283B6);
  color: #990D35;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(126, 75, 171, 0.3);
  border: double  3px #D52941;
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
    background: linear-gradient(135deg, #ff758f, #ff8fa3,#ffb3c1, #ffccd5);

}

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    flex-direction: column;
    display: flex;
    align-items: center;
  }
  .nav-menu {
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .nav-left,
  .nav-right {
    justify-content: center;
    width: 100%;
  }
  .letras {
    min-width: 100px;
    padding: 10px 18px;
    font-size: 15px;
    margin: 0 2px;
  }
  .logo img {
    height: 48px;
    margin-bottom: 10px;
  }
}

</style>
