<template>
  <section class="marcas" id="marcas">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">Marcas</h2>
      </div>
      <div class="marcas-grid">
        <router-link to="/skin1004" class="marcas-card">
          <div class="marcas-icon">
            <img src="@/assets/skin10042.webp" alt="Skin1004 logo" />
          </div>
          <h3>Skin1004</h3>
        </router-link>

        <router-link to="/mixsoon" class="marcas-card">
          <div class="marcas-icon">
            <img src="@/assets/mixsoon.webp" alt="Mixsoon logo" />
          </div>
          <h3>Mixsoon</h3>
        </router-link>
        <router-link to="/corsx" class="marcas-card">
          <div class="marcas-icon">
            <img class="corsx" src="@/assets/corsx.webp" alt="Corxs logo" />
          </div>
          <h3>Corxs</h3>
        </router-link>
        <router-link to="/anua" class="marcas-card">
          <div class="marcas-icon">🌸</div>
          <h3>Anua</h3>
        </router-link>
        <router-link to="/beauty-of-joseon" class="marcas-card">
          <div class="marcas-icon">🍃</div>
          <h3>Beauty of Joseon</h3>
        </router-link>
        <router-link to="/dr-althea"     class="marcas-card">
          <div class="marcas-icon">☀️</div>
          <h3>Dr. Althea</h3>
        </router-link>
        <router-link to="/celimax" class="marcas-card">
          <div class="marcas-icon">☀️</div>
          <h3>Celimax</h3>
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
  border: 2px solid #E6ADEC;
  box-shadow: 0 4px 18px #E6ADEC33;
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
  background: linear-gradient(135deg, #FFFFFF 80%, #E8B4A2 110%);
  background-size: 200% 200%;
  background-position: right bottom;

  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-position 0.35s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

}

.marcas-card:hover {
    background: linear-gradient(135deg, #E8B4A2 10%,#FFFFFF 80%);
     background-size: 200% 200%;
  background-position: right bottom;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-position 0.35s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  aspect-ratio: 1 / 1.2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.marcas-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
   width: 140px;
  height: 100px;
  margin-bottom: 1rem;
}

.marcas-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
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
  width: 100%;
  height: 100%;
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
    padding: 0.5rem 0.2rem;
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
    padding: 0.6rem 0.1rem;
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
