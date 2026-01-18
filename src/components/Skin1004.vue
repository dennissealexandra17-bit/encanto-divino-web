<template>
  <div class="skin1004-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/skin1004.webp" alt="Skin1004" />
          </div>
          <div class="brand-info">
            <h1>SKIN1004</h1>
            <p class="brand-description">
              SKIN1004 es una popular marca coreana de skincare famosa
               por su uso de la Centella Asiática de Madagascar como 
               ingrediente estrella, ofreciendo productos calmantes 
               y reparadores, especialmente para pieles sensibles o 
               irritadas, con fórmulas minimalistas, veganas, hipoalergénicas 
               y cruelty-free, enfocándose en la pureza y la efectividad para 
               lograr una "piel de ángel"
            </p>
            <div class="brand-features">
              <span class="feature">🌿 Ingredientes Naturales</span>
              <span class="feature">✨ Piel Sensible</span>
              <span class="feature">🇰🇷 K-Beauty Auténtico</span>
              <span class="feature">🍃 Centella Asiática</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        <!-- Limpiadores -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🧴</span>
            Limpiadores
          </h2>
          <div class="products-grid">
            <!-- Producto dinámico usando v-for -->
            <div 
              v-for="product in cleansingProducts" 
              :key="product.id"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🧴</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in product.benefits" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tonicos -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">✨</span>
            Tónicos
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in tonicosProducts" 
              :key="product.id"
              class="product-card"
              :class="{ featured: product.featured }"
            >
            <!--  <div v-if="product.featured" class="featured-badge">Bestseller</div>-->
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">✨</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in product.benefits" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Hidratantes -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Hidratantes y Protección
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in moisturizerProducts" 
              :key="product.id"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">💧</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in product.benefits" :key="benefit">
                    • {{ benefit }}
                  </span>
                </div>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Rutina completa -->
        <div class="routine-section">
          <h2 class="routine-title">Rutina Completa SKIN1004</h2>
          <div class="routine-steps">
            <div class="routine-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Aceite Limpiador</h4>
                <p>Remueve maquillaje y protector solar</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Espuma Limpiadora</h4>
                <p>Limpieza profunda y suave</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Ampolla de Centella</h4>
                <p>Calma e hidrata intensamente</p>
              </div>
            </div>
            <div class="routine-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Crema Hidratante</h4>
                <p>Sella la hidratación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart.js";
import { computed } from 'vue';

export default {
  name: "Skin1004Page",
  setup() {
    // Productos de Skin1004 organizados
    const products = [
      // LIMPIADORES
      {
        id: "skin1004-cleansing-oil-30ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "30ml",
        price: "$10.30",
        src: "/images/skin1004/aceite.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "skin1004-cleansing-oil-200ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "200ml",
        price: "$26.45",
        src: "/images/skin1004/aceite200ml.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "skin1004-foaming-cleanser-20ml",
        name: "Espuma Limpiadora Madagascar Centella",
        tamanio: "20ml",
        price: "$8.75",
        src: "/images/skin1004/20mlampoulefoam.jpg",
        description: "Espuma limpiadora suave con centella asiatica para limpieza profunda.",
        benefits: ["Adecuada para piel sensible", "Calma e hidrata la piel irritada", "Limpia los poros y elimina las impurezas de la piel"],
        category: "cleansing",
        imageSize: "medium"
      },
       {
        id: "skin1004-cleansing-foam-125ml",
        name: "Espuma Limpiadora Madagascar Centella",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/foam125ml.webp",
         description: "Espuma limpiadora suave con centella asiatica para limpieza profunda.",
        benefits: ["Adecuada para piel sensible", "calma e hidrata la piel irritada", "Limpia los poros y elimina las impurezas de la piel"],
       category: "cleansing",
        imageSize: "medium"
      },
        {
        id: "skin1004-cleansing-foam-poremizing-125ml",
        name: "Gel Limpiador Poremizing",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/Poremizing-foam-gel.png",
         description: "Gel limpiador para piel con poros abiertos y puntos negros.",
        benefits: ["Elimina los residuos de los poros, incluido el protector solar, al mismo tiempo que refina la textura de la piel",
         "Contiene sal rosa del Himalaya con ricos minerales que purifican y rejuvenecen la piel"],
       category: "cleansing",
       imageSize: "large-medium"

      },
      {
        id: "skin1004-cleansing-foam-teatrica",
        name: "Espuma Limpiadora Tea-Trica BHA",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/tea-trica-bha-foam.jpg",
         description: "Espuma Limpiadora para piel grasa propensa al acné.",
        benefits: ["Adecuada para piel sensible",
         "Diseñada para piel propensa al acné", 
         "Ayuda a eliminar el exceso de secreción de sebo, las células muertas de la piel y los desechos de los poros."],
       category: "cleansing",
        imageSize: "medium-large"
      },
     
       {
        id: "skin1004-cleansing-foam-iluminador-125ml",
        name: "Gel Limpiador Tono Iluminador",
        tamanio: "125ml", 
        price: "$22.00",
        src: "/images/skin1004/125ml-tone-brightening-cleansing-gel-foam.jpg",
         description: "Gel limpiador para piel con hiperpigmentación, decoloración e inflmación",
        benefits: ["Elimina cualquier resto de maquillaje e impurezas, a la vez que ayuda a eliminar las células muertas de la piel.", 
         "Exfolian suavemente la suciedad, favoreciendo una tez suave y tersa.",
          "Con MadeWhite™ ,mejora el tono de la piel."],
       category: "cleansing",
       imageSize: "medium-large"
      },
      {
        id: "skin1004-cleansing-foam-limpiador-de-leche",
        name: "Espuma Limpiadora Hyalu-Cica Limpiador de Leche",
        tamanio: "200ml", 
        price: "$24.90",
        src: "/images/skin1004/limpiador-leche.jpg",
         description: "Limpiador de leche para piel seca, irritada y sensible.",
        benefits: ["Elimina el maquillaje y las células muertas de la piel.", 
        "Fortalece la barrera de hidratación de la piel gracias a la ceramida, el péptido de proteína vegetal y la vitamina E.", 
        "Su textura cremosa se extiende fácilmente sobre la piel y proporciona un acabado hidratante."],
       category: "cleansing",
       imageSize: "medium-large"

      },

      // TONICOS
      {
        id: "skin1004-ampoule-tonico-30ml",
        name: "Tonico Madagascar Centella",
        tamanio: "30ml",
        price: "$12.00",
        src: "/images/skin1004/toner-centella-toning-toner.jpg",
        description: "Ampolla concentrada con 100% centella asiatica para calmar e hidratar, para piel sensible, mixta con tendencia a seca.",
        benefits: ["Calmar e hidratar la piel irritada",
        "Proporciona una exfoliación suave con PHA para pieles sensibles", 
        "Aclara la piel con Niacinamida y mejora las arrugas con Adenosina."],
        category: "tonicos",
        featured: true,
        imageSize: "large"
      },
      {
        id: "skin1004-ampoule-tonico-210ml",
        name: "Tonico Madagascar Centella",
        tamanio: "210ml",
        price: "$28.50",
        src: "/images/skin1004/toner-210ml-centella-toning-toner.jpg",
        description: "Ampolla concentrada con 100% centella asiatica para calmar e hidratar, para piel sensible, mixta con tendencia a seca.",
        benefits: ["Calmar e hidratar la piel irritada",
        "Proporciona una exfoliación suave con PHA para pieles sensibles", 
        "Aclara la piel con Niacinamida y mejora las arrugas con Adenosina."],
        category: "tonicos",
        featured: true,
        imageSize: "large"
      },
{
        id: "skin1004-ampoule-tonico-tono-iluminador-210ml",
        name: "Tónico Madagascar Centella Tono Iluminador",
        tamanio: "210ml",
        price: "$26.50",
        src: "/images/skin1004/tonico-tono-iluminador.jpg",
        description: "Tónico Tono Iluminador para pieles con hiperpigmentación, decoloración e inflamación.",
        benefits: ["Doble acción que ayuda a reponer la hidratación y mejorar el tono de la piel.",
        "MadeWhite™ , mantiene una piel radiante.", 
        "Elimina suavemente las células muertas.",
      "Deja la piel tersa, revitalizada y con un aspecto juvenil."],
        category: "tonicos",
        featured: true,
        imageSize: "large"
      },


      //Mascarillas
      {
        id: "skin1004-tone-brightening",
        name: "Madagascar Centella Tone Brightening Capsule Ampoule",
        tamanio: "100ml",
        price: "$35.90",
        src: "/images/skin1004/tone-brightening.webp",
        description: "Ampolla iluminadora con niacinamida y centella para unificar el tono.",
        benefits: ["Ilumina la piel", "Reduce manchas", "Niacinamida"],
        category: "treatment",
        imageSize: "medium"
      },
      
      {
        id: "skin1004-probio-cica",
        name: "Madagascar Centella Probio-Cica Intensive Ampoule",
        tamanio: "95ml",
        price: "$38.90",
        src: "/images/skin1004/probio-cica.webp",
        description: "Ampolla intensiva con probióticos y centella para piel sensible.",
        benefits: ["Probióticos", "Fortalece barrera", "Anti-inflamatorio"],
        category: "treatment",
        imageSize: "small"
      },
      {
        id: "skin1004-hyalu-cica",
        name: "Madagascar Centella Hyalu-Cica Blue Toning Toner",
        tamanio: "210ml",
        price: "$26.90",
        src: "/images/skin1004/hyalu-cica-toner.webp",
        description: "Tónico azul con ácido hialurónico y centella para hidratación.",
        benefits: ["Ácido hialurónico", "Calma rojeces", "Hidratación intensa"],
        category: "treatment",
        imageSize: "extra-large"
      },

      // HIDRATANTES Y PROTECCIÓN
      {
        id: "skin1004-sun-serum",
        name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum",
        tamanio: "50ml",
        price: "$26.90",
        src: "/images/skin1004/sun-serum.webp",
        description: "Protector solar con ácido hialurónico y centella. SPF 50+ PA++++",
        benefits: ["SPF 50+ PA++++", "Hidratante", "No deja residuo"],
        category: "moisturizer",
        imageSize: "medium"
      },
      {
        id: "skin1004-soothing-cream",
        name: "Madagascar Centella Soothing Cream",
        tamanio: "75ml",
        price: "$25.90",
        src: "/images/skin1004/soothing-cream.webp",
        description: "Crema calmante e hidratante para finalizar tu rutina de skincare.",
        benefits: ["Textura ligera", "Calma rojeces", "Hidratación 24h"],
        category: "moisturizer",
        imageSize: "large"
      },
      {
        id: "skin1004-air-fit-serum",
        name: "Madagascar Centella Air-Fit Suncream",
        tamanio: "50ml",
        price: "$24.90",
        src: "/images/skin1004/air-fit-suncream.webp",
        description: "Protector solar ligero con textura aérea y centella.",
        benefits: ["Textura ligera", "SPF 50+", "No pegajoso"],
        category: "moisturizer",
        imageSize: "small"
      },
      {
        id: "skin1004-hyalu-cica-gel",
        name: "Madagascar Centella Hyalu-Cica Silky-Fit Sun Stick",
        tamanio: "20g",
        price: "$18.90",
        src: "/images/skin1004/sun-stick.webp",
        description: "Protector solar en stick para reaplicaciones fáciles.",
        benefits: ["Formato stick", "Fácil reaplicación", "SPF 50+"],
        category: "moisturizer",
        imageSize: "extra-large"
      }
    ];

    // Computed properties para organizar productos por categoría
    const cleansingProducts = computed(() => 
      products.filter(product => product.category === 'cleansing')
    );

    const tonicosProducts = computed(() => 
      products.filter(product => product.category === 'tonicos')
    );

    const treatmentProducts = computed(() => 
      products.filter(product => product.category === 'treatment')
    );

    const moisturizerProducts = computed(() => 
      products.filter(product => product.category === 'moisturizer')
    );

    const addToCart = (product) => {
      try {
        // Verificar que cartStore existe antes de usarlo
        if (cartStore && cartStore.addItem) {
          cartStore.addItem(product);
          
          // Feedback visual
          const event = new CustomEvent("product-added", {
            detail: { productName: product.name },
          });
          window.dispatchEvent(event);

          // Notificación mejorada
          alert(`✅ ${product.name} ${product.tamanio ? `(${product.tamanio})` : ''} agregado al carrito!`);
        } else {
          console.error("Cart store no está disponible");
          alert("Error: No se pudo agregar al carrito");
        }
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
        alert("Error al agregar el producto al carrito");
      }
    };

    return {
      cleansingProducts,
      tonicosProducts,
      treatmentProducts,
      moisturizerProducts,
      addToCart
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.skin1004-page {
  font-family: "Nunito", "Segoe UI", sans-serif;
  line-height: 1.6;
}

/* Header de la marca */
.brand-header {
  background: linear-gradient(135deg, #ffafcc 0%, #ffc8dd 50%, #bde0fe 100%);
  padding: 4rem 0;
  margin-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.brand-intro {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.brand-logo img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  background: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(255, 175, 204, 0.3);
}

.brand-info h1 {
  font-size: 3rem;
  color: #4a5759;
  margin-bottom: 1rem;
  font-weight: 800;
}

.brand-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.brand-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #4a5759;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 175, 204, 0.2);
}

/* Secciones de productos */
.category-section {
  margin-bottom: 4rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.2rem;
  color: #4a5759;
  margin-bottom: 2rem;
  font-weight: 700;
}

.category-icon {
  font-size: 3.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  justify-items: center;
  max-width: 100%;
}

.product-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(189, 224, 254, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(131, 197, 190, 0.2);
  border-color: #cdb4db;
}

.product-card.featured {
  border: 3px solid #83c5be;
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 6px;
}


.image-small {
  height: 120px;
}

.image-medium {
  height: 160px;
}

.image-medium-large {
  height: 170px;
}
.image-large-medium {
  height: 180px;
}

.image-large {
  height: 200px;
}

.image-extra-large {
  height: 240px;
}


.product-image img {
  width: 90%;
  height: 90%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px;
  box-sizing: border-box;
}

/* Tamaños específicos para cada imagen */
.image-small img {
  width: 70%;
  height: 70%;
}

.image-medium img {
  width: 85%;
  height: 85%;
}

.image-large img {
  width: 95%;
  height: 95%;
}

.image-extra-large img {
  width: 100%;
  height: 100%;
  padding: 2px;
}

.product-info {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  color: #4a5759;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  line-height: 1.3;
}

.product-size {
  color: #83c5be;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-description {
  color: #666;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

.product-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1rem;
}

.product-benefits span {
  color: #83c5be;
  font-size: 0.8rem;
  font-weight: 500;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 800;
  color: #4a5759;
  margin-bottom: 1rem;
  margin-top: auto;
  text-align: center;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(131, 197, 190, 0.4);
}

/* Sección de rutina */
.routine-section {
  background: linear-gradient(135deg, #bde0fe 0%, #fff 50%, #cdb4db 100%);
  padding: 3rem;
  border-radius: 25px;
  margin-top: 4rem;
}

.routine-title {
  text-align: center;
  font-size: 2.5rem;
  color: #4a5759;
  margin-bottom: 3rem;
  font-weight: 800;
}

.routine-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.routine-step {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(189, 224, 254, 0.2);
}

.step-number {
  background: linear-gradient(135deg, #83c5be, #cdb4db);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
}

.step-content h4 {
  color: #4a5759;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.step-content p {
  color: #666;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .brand-intro {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }
  
  .brand-header {
    padding: 2rem 0;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .product-card {
    max-width: 100%;
  }
}
</style>

