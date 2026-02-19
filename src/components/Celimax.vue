<template>   
  <div class="celimax-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/celimax.webp" alt="Celimax" />
          </div>
          <div class="brand-info">
            <h1>Celimax</h1>
            <p class="brand-description">
                Celimax es una marca coreana que se distingue por su honestidad y transparencia 
                en la formulación de productos para el cuidado de la piel. Su filosofía se basa 
                en escuchar las necesidades reales de los usuarios y ofrecer soluciones efectivas, 
                seguras y libres de ingredientes irritantes. Celimax utiliza ingredientes 
                cuidadosamente seleccionados y fórmulas minimalistas para garantizar resultados 
                visibles, priorizando la salud y el bienestar de la piel sensible. Es ideal para 
                quienes buscan rutinas sencillas, efectivas y confiables, especialmente para 
                personas con piel propensa al acné o imperfecciones.
            </p>
            <div class="brand-features">
              <span class="feature">🌸 Ingredientes Naturales</span>
              <span class="feature">🧖‍♀️ Texturas Ligeras</span>
              <span class="feature">🌱 Aptas para pieles sensibles</span>
              <span class="feature">💎 Enfoque en poros</span>
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
            <span class="category-icon">🫧</span>
            Limpiadores
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (cleansingProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🫧</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
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

        <!-- Serums -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">💧</span>
            Serums
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (serumsProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
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
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
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
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Cremas Humectantes
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (moisturizerProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🍃</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
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
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Protector Solar
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (sunscreenProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🍃</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
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
         <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
Exfoliantes          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (exfoliantesProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🍃</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p v-if="product.tamanio" class="product-size">{{ product.tamanio }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span v-for="benefit in (product.benefits || [])" :key="benefit">
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
      </div>
    </section>
  </div>
     <div v-if="showToast" class="toast">
  {{ toastMessage }}
</div>
</template>

<script>
import { cartStore } from "@/store/cart.js";
import { computed, ref } from 'vue';

export default {
  name: "Skin1004Page",
  setup() {

    
    const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;
    // Productos de Skin1004 organizados
      const products = [
      // CELIMAX
      {
        id: "Celimax-Aceite-limpiador-derma-natura-20ml",
        name: "Aceite limpiador derma nature fresh 20 ml",
        tamanio: "20 ml",
        price: "$8.90",
        src: "/images/celimax/1. aceite mini.png",
        description: "Aceite limpiador que desobstruye los poros y disuelve suavemente los puntos negros, los puntos blancos y el exceso de sebo, dejando la piel limpia.",
        benefits: ["Ayuda a eliminar a fondo el maquillaje, las impurezas y el exceso de sebo de la piel mediante la emulsificación.","Formulado con 8 tipos de aceites de origen vegetal que aportan una limpieza suave sin obstruir los poros y mantienen la piel fresca."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "Celimax-Aceite-limpiador-derma-natura-1500ml",
        name: "Aceite limpiador derma nature fresh 150 ml",
        tamanio: "150 ml",
        price: "$25.50",
        src: "/images/celimax/2. aceite limpiador jumbo.jpg",
        description: "Aceite limpiador que desobstruye los poros y disuelve suavemente los puntos negros, los puntos blancos y el exceso de sebo, dejando la piel limpia.",
        benefits: ["Ayuda a eliminar a fondo el maquillaje, las impurezas y el exceso de sebo de la piel mediante la emulsificación.","Formulado con 8 tipos de aceites de origen vegetal que aportan una limpieza suave sin obstruir los poros y mantienen la piel fresca."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "celimax-bruma-facial-the-real-noni-50ml",
        name: "Bruma facial the real noni mist 50 ml",
        tamanio: "50 ml",
        price: "$30",
        src: "/images/celimax/3. Bruma facial.png",
        description: "Bruma facial que te ayuda a eliminar las impurezas de la piel al mismo tiempo que te deja suave e hidratada.",
        benefits: ["Limpia a fondo y con suavidad las impurezas de la piel y elimina el exceso de sebo.","Elimina suavemente las células muertas y ayuda a calmar la piel con tendencia acneica.","Su fórmula hipoalergénica es apta para todo tipo de piel, incluidas las sensibles y con tendencia acneica."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "celimax-espuma-facial-the-real-noni-150ml",
        name: "Bruma facial the real noni mist 150 ml",
        tamanio: "150 ml",
        price: "$28.90",
        src: "/images/celimax/4. espuma limpiadora facial.png",
        description: "Elimina a fondo las impurezas de la piel y el exceso de sebo sin resecarla, gracias a esta espuma limpiadora con pH balanceado.",
        benefits: ["Limpia a fondo y con suavidad las impurezas de la piel y elimina el exceso de sebo.","Elimina suavemente las células muertas y ayuda a calmar la piel con tendencia acneica.","Su fórmula hipoalergénica es apta para todo tipo de piel, incluidas las sensibles y con tendencia acneica."], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "Celimax-ampolla-the-real-noni-30ml",
        name: "Ampolla calmante the real noni 30 ml",
        tamanio: "30 ml",
        price: "$30.10",
        src: "/images/celimax/5. ampolla noni.png",
        description: "Con un 71.77% de extracto de la fruta noni rica en nutrientes, esta ampolla hidrata la piel y proporciona más luminosidad para un aspecto saludable",
        benefits: ["Hidratar la piel y darle un aspecto fresco y saludable.","Ayuda a calmar y revitalizar la piel irritada para un acabado suave y radiante con aceite de romero.","Ayuda a reducir la apariencia de líneas finas y arrugas."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "Celimax-ampolla-the-real-noni-50ml",
        name: "Ampolla calmante the real noni 50 ml",
        tamanio: "50 ml",
        price: "$45.10",
        src: "/images/celimax/5. ampolla noni.png",
        description: "Con un 71.77% de extracto de la fruta noni rica en nutrientes, esta ampolla hidrata la piel y proporciona más luminosidad para un aspecto saludable",
        benefits: ["Hidratar la piel y darle un aspecto fresco y saludable.","Ayuda a calmar y revitalizar la piel irritada para un acabado suave y radiante con aceite de romero.","Ayuda a reducir la apariencia de líneas finas y arrugas."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "Celimax-the-vita-A-retinol-shot-20ml",
        name: "The vita A retinal shot 20 ml",
        tamanio: "20 ml",
        price: "$26.80",
        src: "/images/celimax/6. retina shot vita A.png",
        description: "Este tratamiento antiedad combina 0.1% de retinal en tamaño nano con liposomas para cuidar suavemente los poros y mejorar la elasticidad. ",
        benefits: ["Formulado con una alta concentración de retinal, para un cuidado más eficaz de la elasticidad interna.","Cuanto más hormigueo, más notable el cambio en la piel.","Contiene maxytryl similar al retinol."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "Celimax-serum-the-vita-A-50ml",
        name: "Sérum the vita A retinal shot 50 ml",
        tamanio: "50 ml",
        price: "$25.90",
        src: "/images/celimax/7. ampolla retinal shot.png",
        description: "Este tratamiento antiedad combina 0.1% de retinal en tamaño nano con liposomas para cuidar suavemente los poros y mejorar la elasticidad.",
        benefits: ["Aumenta la elasticidad, suaviza las líneas de expresión y la textura, y minimiza la apariencia de los poros.","Penetra profundamente para llevar los ingredientes activos justo donde la piel más los necesita.","Enriquecido con ingredientes calmantes para aliviar los efectos secundarios del retinol, como la sequedad o la sensibilidad."], 
        category: "sérum",
        imageSize: "medium"
      },
      {
        id: "Celimax-bloqueador-solar-50ml",
        name: "Bloqueador solar oil control 50 ml",
        tamanio: "50 ml",
        price: "$25.50",
        src: "/images/celimax/8. bloqueador solar.png",
        description: "Este protector solar híbrido mineral y químico ofrece protección solar de amplio espectro de FPS 50+ PA++++ añadiendo beneficios reguladores del sebo.",
        benefits: ["Tiene un amplio espectro de FPS 50+ PA++++ .","Controla eficazmente el exceso de producción de sebo.","La textura sedosa, suave y ligera proporciona un acabado refrescante, sin dejar acabados blancos."], 
        category: "protector solar",
        imageSize: "medium"
      },
      {
        id: "Celimax-crema-reparadora-50ml",
        name: "Crema facual reparadora de noni de 50 ml",
        tamanio: "50 ml",
        price: "$39.10",
        src: "/images/celimax/9. Crema reparadora.png",
        description: "Crema facial reparadora, enriquecida con un 55% de extracto de noni y un 1% de aceite de semilla de noni, que calma e ilumina la piel dañada.",
        benefits: ["Calma e hidrata la piel seca y dañada. Contiene ceramida para fortalecer la barrera de humedad y ayudar a prevenir la pérdida de agua de la piel.","Mejora las arrugas, y se funde en la piel con una textura ligera y suave y deja un aroma a romero."], 
        category: "cream",
        imageSize: "medium"
      },
         {
        id: "Celimax-pad-exfoliante-60pcs",
        name: "Pad exfoliante jowoogae heartleaf BHA 60 piezas",
        tamanio: "60 piezas",
        price: "$26",
        src: "/images/celimax/10. peeling pad.png",
        description: ["Estas almohadillas multitarea empapadas en tónico de ácido hialurónico eliminan y pulen las impurezas de la piel, como la suciedad y las células muertas.",
        "Su suave formulación y sus ingredientes que fortalecen la piel lo hacen adecuado para el uso diario.","BHA ayuda a exfoliar las células muertas de la piel y el sebo sin causar estimulación.",
        "El ácido hialurónico suave y agradable a la piel se infiltra profundamente en la piel para una hidratación duradera."], 
        category: "exfoliante",
        imageSize: "medium"
      }
    ];


    // Computed properties para organizar productos por categoría
    const cleansingProducts = computed(() => 
      (products.filter(product => product.category === 'cleansing') || []).filter(p => p && p.id)
    );
    const tonicosProducts = computed(() => 
      (products.filter(product => product.category === 'tónico') || []).filter(p => p && p.id)
    );
    const moisturizerProducts = computed(() => 
      (products.filter(product => product.category === 'cream') || []).filter(p => p && p.id)
    );
    const serumsProducts = computed(() => 
      (products.filter(product => product.category === 'sérum') || []).filter(p => p && p.id)
    );
    const sunscreenProducts = computed(() => 
      (products.filter(product => product.category === 'protector solar') || []).filter(p => p && p.id)
    );
    const exfoliantesProducts = computed(() => 
      (products.filter(product => product.category === 'exfoliante') || []).filter(p => p && p.id)
    );

  const addToCart = (product) => {
      try {
        // Verificar que cartStore existe antes de usarlo
        if (cartStore && cartStore.addItem) {
          cartStore.addItem(product);
          

      toastMessage.value = `🛒 ${product.name} ${product.tamanio ? `(${product.tamanio})` : ""} agregado al carrito`;
      showToast.value = true;

      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        showToast.value = false;
      }, 3000);
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
  moisturizerProducts,
  serumsProducts,
  sunscreenProducts,
  exfoliantesProducts,
  addToCart,
  showToast,
  toastMessage
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

.celimax-page {
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
  background: linear-gradient(135deg, #1100ffaf,#564fea90, #1100ffaf);
  color: rgb(7, 7, 7);
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
.toast {
  position: fixed;
  top: 34px;
  left: 40%;
  transform:translateX(-50%);
  background: linear-gradient(130deg, #c28e00, rgb(250, 168, 46), #FFBC0A);
  color: #02090d;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: toastSlideIn 0.3s ease;
  z-index: 5000;
}

  .product-card {
    max-width: 100%;
  }

</style>