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
.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #5a189a;
  margin-bottom: 2rem;
  background: none;
  padding: 0;
}
.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #ffafcc;
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
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  aspect-ratio: 1 / 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.marcas-card:hover {

  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(223, 65, 176, 0.575);
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
</style>
