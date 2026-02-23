<template>
  <section class="categories" id="productos">
    <div class="container">
      <div class="titulo">
        <h2 class="section-title">Maquillaje Asiático</h2>
      </div>
      <div class="categories-grid">
         <router-link to="/sombras" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-sombras"
                src="../assets/maquillaje/sombras.webp"
                alt="Sombras"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Sombras de ojos</h3>
            </div>
          </div>
        </router-link>
        <router-link to="/labiales" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-labiales"
                src="../assets/maquillaje/labiales.webp"
                alt="Labiales"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Labiales</h3>
            </div>
          </div>
        </router-link>
        <router-link to="/mascaras" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-mascarillas"
                src="../assets/maquillaje/mascara.png"
                alt="Mascarillas"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Máscaras de pestañas</h3>
            </div>
          </div>
        </router-link>
        <router-link to="/otros" class="link">
          <div class="category-card">
            <div class="category-icon">
              <img
                class="img-otros"
                src="../assets/maquillaje/otros.jpg"
                alt="Otros productos"
              />
            </div>
            <div class="texto">
              <h3 class="category-title">Otros productos</h3>
            </div>
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
/* Categories */
.categories {
  padding: 1rem 1rem;
  margin: 0.5rem auto;
  border-radius: 14px;
  background: #efb9cb37;
  border: 2px solid #e6adec;
  box-shadow: 0 4px 18px #e6adec33;
  max-width: 1400px;
  width: calc(100% - 2rem);
}

.section-title {
  font-size: clamp(1.5rem, 5vw, 28px);
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: linear-gradient(135deg, #ffffff 40%, #e68c06 110%);
  border-radius: 20px;
  aspect-ratio: 1 / 1.1;
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  text-align: center;
  overflow: hidden;
  border: 2px double #6d696a;
  transition: transform 0.35s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s;
}

.marcas-icon,
.marcas-card h3 {
  transition: transform 0.35s cubic-bezier(0.4, 1.5, 0.5, 1), box-shadow 0.3s;
}

.texto {
  align-self: start;
}

.category-title {
  margin: 0;
  font-size: clamp(0.7rem, 3vw, 0.95rem);
  font-weight: 600;
  color: #333;
}

.category-icon {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.category-icon img {
  max-width: 85%;
  max-height: 200px;
  object-fit: contain;
}

.category-card:hover {
  background: linear-gradient(135deg, #e68c06 30%, #ffffff 80%);
  background-position: left top;
  transform: translateY(-6px);
  border: 2px solid #6d696a;
  box-shadow: 0 0 0 3px rgba(133, 133, 133, 0.25);
}

.link {
  text-decoration: none;
}

.category-card h3 {
  color: #333;
  margin-top: 0.75rem;
  font-size: 1.05rem;
  font-weight: 500;
}

.category-card p {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Desktop grande */
@media (min-width: 1200px) {
  .categories {
    padding: 1.5rem 1.5rem;
  }

  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

/* Desktop normal */
@media (max-width: 1199px) and (min-width: 901px) {
  .categories {
    padding: 1.2rem 1.2rem;
  }

  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

/* Tablet horizontal */
@media (max-width: 900px) {
  .categories {
    padding: 1rem 0.8rem;
    margin: 0.5rem 1rem;
  }

  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  .section-title {
    margin-bottom: 1.5rem;
  }
}

/* Tablet vertical */
@media (max-width: 768px) {
  .categories {
    padding: 0.9rem 0.8rem;
    margin: 0.4rem 0.8rem;
    border-radius: 12px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  .category-card {
    border-radius: 15px;
  }
}

/* Móvil */
@media (max-width: 600px) {
  .categories {
    padding: 0.8rem 0.6rem;
    margin: 0.4rem 0.6rem;
    border-radius: 10px;
  }

  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .category-card {
    border-radius: 12px;
    aspect-ratio: 1 / 1.15;
  }

  .category-title {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  .category-icon img {
    max-height: 120px;
  }
}

/* Móvil pequeño */
@media (max-width: 480px) {
  .categories {
    padding: 0.7rem 0.5rem;
    margin: 0.3rem 0.5rem;
    border-radius: 8px;
  }

  .section-title {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .section-title::after {
    width: 50px;
    height: 3px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .category-card {
    border-radius: 10px;
    aspect-ratio: 1 / 1.2;
  }

  .category-title {
    font-size: 0.65rem;
    margin-top: 0.4rem;
  }

  .category-icon img {
    max-height: 100px;
  }

  .category-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 2px rgba(133, 133, 133, 0.2);
  }
}

/* Extra pequeño */
@media (max-width: 360px) {
  .categories {
    padding: 0.6rem 0.4rem;
    margin: 0.2rem 0.4rem;
  }

  .section-title {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  .categories-grid {
    gap: 0.5rem;
  }

  .category-card {
    aspect-ratio: 1 / 1.25;
  }

  .category-title {
    font-size: 0.6rem;
  }

  .category-icon img {
    max-height: 80px;
  }
}
</style>
