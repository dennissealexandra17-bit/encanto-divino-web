<template>
  <section class="marcas" id="marcas">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">Marcas</h2>
      </div>
      <div class="marcas-grid">
        <router-link to="/skin1004">
        <div class="marcas-card">
          <div class="marcas-icon">
            <img class="skin1004" src="@/assets/skin10042.webp" alt="Skin1004 logo" />
          </div>
          <h3>Skin1004</h3>
        </div>
        </router-link>
        <div class="marcas-card">
          <div class="marcas-icon">
            <img  class="mixsoon" src="@/assets/mixsoon.webp" alt="Mixsoon logo" />
          </div>
          <h3>Mixsoon</h3>
        </div>
        <div class="marcas-card">
          <div class="marcas-icon">
            <img class="corsx" src="@/assets/corsx.webp" alt="Corxs logo" />
          </div>
          <h3>Corxs</h3>
        </div>
        <div class="marcas-card">
          <div class="marcas-icon">🌸</div>
          <h3>Anua</h3>
        </div>
        <div class="marcas-card">
          <div class="marcas-icon">🍃</div>
          <h3>Beauty of Joseon</h3>
        </div>
        <div class="marcas-card">
          <div class="marcas-icon">☀️</div>
          <h3>Dr. Althea</h3>
        </div>
        <div class="marcas-card">
          <div class="marcas-icon">☀️</div>
          <h3>Celimax</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 35px;
  color: #8338ec;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background: #ffe5eca6;
  padding: 1px 10px;
  width: fit-content;
  border-radius: 5px;
}

.titulo {
  display: flex;
  justify-content: center;
}

.marcas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.marcas-card {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;
  aspect-ratio: 1 / 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.marcas-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 175, 204, 0.4);
  border-color: #83c5be;
}

.marcas-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.marcas-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.marcas-icon .mixsoon {
  max-width: 200%;
  max-height: 2000%;
  object-fit: contain;
  border-radius: 8px;
}

.marcas-icon .skin1004 {
  max-width: 230%;
  max-height: 2000%;
  object-fit: contain;
  border-radius: 8px;
}

.marcas-icon .corsx {
  max-width: 190%;
  max-height: 2000%;
  object-fit: contain;
  border-radius: 8px;
}

.marcas-card h3 {
  color: #000000;
  font-size: 1.1rem;
  margin-bottom: 0;
  font-weight: 600;
}

</style>
