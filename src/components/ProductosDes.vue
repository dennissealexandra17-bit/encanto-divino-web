<template>
  
    <!-- Productos Destacados -->
    <section class="featured-products">
      <div class="container">
        <h2 class="section-title">Productos Destacados</h2>
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Cleanser Gentle</h3>
            <p class="brand">CosRX</p>
            <p class="price">$25.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Snail Mucin Essence</h3>
            <p class="brand">COSRX</p>
            <p class="price">$32.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Glow Deep Serum</h3>
            <p class="brand">Beauty of Joseon</p>
            <p class="price">$28.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
          <div class="product-card">
            <div class="product-image">
              <span>📦</span>
            </div>
            <h3>Centella Toner</h3>
            <p class="brand">Purito</p>
            <p class="price">$19.900</p>
            <button class="add-to-cart">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>

/* Featured Products */
.featured-products {
  padding: 5rem 0;
  background: linear-gradient(135deg, #bde0fe 0%, #fff 50%, #ffafcc 100%);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(189, 224, 254, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(131, 197, 190, 0.4);
  border-color: #cdb4db;
}

.product-image {
  background: linear-gradient(135deg, #ffafcc, #ffc8dd);
  height: 150px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-card h3 {
  color: #4a5759;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.brand {
  color: #83c5be;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.price {
  color: #4a5759;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.add-to-cart {
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  font-size: 0.9rem;
}

.add-to-cart:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(131, 197, 190, 0.4);
}
</style>