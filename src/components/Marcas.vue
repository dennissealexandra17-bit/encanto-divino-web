<template>
  <section class="marcas" id="marcas">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">Marcas</h2>
      </div>
      <div class="marcas-grid">
        <router-link to="/skin1004" class="marcas-card">
          <div class="marcas-icon">
            <img src="@/assets/skin1004.webp" alt="Skin1004 logo" />
          </div>
        </router-link>
        <router-link to="/mixsoon" class="marcas-card">
          <div class="marcas-icon">
            <img src="@/assets/mixsoon.webp" alt="Mixsoon logo" />
          </div>
        </router-link>
        <router-link to="/corsx" class="marcas-card">
          <div class="marcas-icon">
            <img class="corsx" src="@/assets/corsx.webp" alt="Corxs logo" />
          </div>
        </router-link>
        <router-link to="/anua" class="marcas-card">
          <div class="marcas-icon">
            <img class="anua" src="@/assets/anua.png" alt="Anua logo" />
          </div>
        </router-link>
        <router-link to="/beauty-of-joseon" class="marcas-card">
          <div class="marcas-icon">
            <img
              class="beauty-of-joseon"
              src="@/assets/joseon.png"
              alt="Beauty of Joseon logo"
            />
          </div>
        </router-link>
        <router-link to="/dr-althea" class="marcas-card">
          <div class="marcas-icon">
            <img
              class="dr-althea"
              src="@/assets/dr-althea.webp"
              alt="Dr. Althea logo"
            />
          </div>
        </router-link>
        <router-link to="/celimax" class="marcas-card">
          <div class="marcas-icon">
            <img
              class="celimax"
              src="@/assets/celimax.webp"
              alt="Celimax logo"
            />
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 1rem 1rem;
  margin-top: 2rem;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #e6adec;
  box-shadow: 0 4px 18px #e6adec33;
}
.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #a447e2;
  margin-bottom: 2rem;
  background: none;
  padding: 0;
}
.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #8129bc;
  margin: 8px auto 0;
  border-radius: 10px;
}

.titulo {
  display: flex;
  justify-content: center;
}

.marcas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.marcas-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff 80%, #ff0000 110%);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s,
    background 0.3s;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  overflow: hidden; /* importante */
  border: 2px double #ff000067; /* para evitar que el borde afecte el tamaño del elemento */
}

/* Animación para la imagen y el texto */
.marcas-icon,
.marcas-card h3 {
  transition: transform 0.35s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s;
}
.marcas-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 2px; /* grosor del borde */
  border: 1px solid #ff0000; /* para evitar que el borde afecte el tamaño del elemento */
  background: linear-gradient(45deg, #ff0000, #ff6b6b, #ff0000);

  background-size: 200% 200%;
  animation: borderMove 4s linear infinite;

  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  opacity: 0;
  transition: opacity 0.3s ease;
}

.marcas-card:hover {
  background: linear-gradient(135deg, #ff0000a9 10%, #ffffff 80%);
  background-position: left top;

  transform: translateY(-6px);
  border: 2px solid #ff0000;
  box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.25);
}
.marcas-card:hover .marcas-icon,
.marcas-card:hover h3 {
  transform: translateY(-10px) scale(1.07);
  box-shadow: 0 8px 24px 0 rgba(164, 71, 226, 0.1);
}

.marcas-icon {
  width: 120px;
  height: 80px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marcas-icon img {
  width: 150%;
  height: 150%;
  object-fit: contain;
}

.marcas-card h3 {
  color: #333;
  margin-top: 0.75rem;
  font-size: 1.05rem;
  font-weight: 500;
}
@media (max-width: 900px) {
  .container {
    padding: 0.7rem 0.7rem;
  }
  .marcas-grid {
    gap: 1rem;
  }
  .marcas-card {
    padding: 1.2rem 0.7rem;
    font-size: 0.95rem;
  }
  .marcas-icon {
    height: 60px;
    width: 80px;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0.7rem 0.7rem;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .marcas-card {
    padding: 0.7rem 0.3rem;
    font-size: 0.85rem;
  }
  .marcas-icon {
    height: 40px;
    width: 50px;
  }
}
</style>
