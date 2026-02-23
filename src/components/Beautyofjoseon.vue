<template>   
  <div class="boj-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/boj.jpg" alt="BOJ" />
          </div>
          <div class="brand-info">
            <h1>Beauty of Joseon</h1>
            <p class="brand-description">
              Beauty of Joseon es una marca coreana inspirada en la sabiduría ancestral y 
              la elegancia de la dinastía Joseon. Sus fórmulas combinan ingredientes tradicionales
               como el ginseng, arroz y hierbas medicinales con tecnología moderna para cuidar
                la piel de manera suave y efectiva. Cada producto está diseñado para restaurar
                 el equilibrio, iluminar y fortalecer la piel, respetando su sensibilidad
                  y promoviendo una belleza natural. Ideal para quienes buscan resultados visibles, 
                  pureza y una experiencia de lujo en su rutina diaria.
            </p>
            <div class="brand-features">
              <span class="feature">🌸 Tradición Coreana</span>
              <span class="feature">🧖‍♀️ Ritual de Belleza</span>
              <span class="feature">🌱 Ingredientes Naturales</span>
              <span class="feature">💎 Piel Radiante</span>
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

        <!-- Tonicos -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Tónicos
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (tonicosProducts || [])" 
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

        <!-- Cremas Hidratantes -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🥛</span>
            Cremas Hidratantes
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (moisturizerProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">🥛</span>
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
        <!-- Protectores Solares-->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">☀️</span>
            Protectores Solares
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (sunscreenProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
                <img v-if="product.src" :src="product.src" :alt="product.name" />
                <span v-else class="product-placeholder">☀️</span>
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
            <!-- Exfoliantes -->
            <div class="category-section">
              <h2 class="category-title">
                <span class="category-icon">🫧</span>
                Exfoliantes
              </h2>
              <div class="products-grid">
                <div 
                  v-for="product in (exfoliantesProducts || [])" 
                  :key="product.id || product.name"
                  class="product-card"
                >
                  <div class="product-image" :class="`image-${product.imageSize || 'medium'}`">
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
     
//BEAUTY OF JOSEON - BOJ
      {
        id: "BOJ-Aceite-limpiador-ginseng-210ml",
        name: "Aceite limpiador de ginseng",
        tamanio: "210 ml",
        price: "$25.90",
        src: "/images/boj/3. BOJ Aceite limpiador de ginseg.png",
        description: "Aceite limpiador ligero con aceites e soya y semilla de  ginseng",
        benefits: ["Formulado con 50% de aceite de soya y 0.1% de aceite de semilla de ginseng para una limpieza facial delicada.","Absorbe y elimina suavemente residuos de maquillaje e impurezas, dejando la piel suave y fresca.","Protege la piel de agresores externos y aporta una hidratación profunda.","Su textura ligera y fluida se aplica fácilmente sin sensación grasosa.","El aroma herbal del aceite de semilla de ginseng brinda una experiencia de limpieza relajante"], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "BOJ-Esencia-de-agua-ginseng-150ml",
        name: "Esencia de agua de ginseng",
        tamanio: "150 ml",
        price: "$22.90",
        src: "/images/boj/4. BOJ limpiador en agua.png",
        description: "Tónico humectante que contiene un 80% de agua de raíz de ginseng ",
        benefits: ["Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.","Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "serum-esencia",
        imageSize: "medium"
      },
      {
        id: "BOJ-Esencia-de-agua-ginseng-40ml",
        name: "Esencia mini de agua de ginseng",
        tamanio: "40 ml",
        price: "$12.10",
        src: "/images/boj/4. BOJ limpiador en agua.png",
        description: "Tónico humectante que contiene un 80% de agua de raíz de ginseng ",
        benefits: ["Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.","Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "serum-esencia",
        imageSize: "medium"
      },
      {
        id: "BOJ-serum-ginseng-baba-de-caracol-30ml",
        name: "Serúm revive ginseng + baba de caracol",
        tamanio: "30 ml",
        price: "$25.50",
        src: "/images/boj/5. serum revive ginseng.png",
        description: "Enriquecido con 63% de agua de raíz de ginseng y 3% de baba de caracol",
        benefits: ["Repara la piel dañada, suaviza las arrugas y aumenta la elasticidad de la piel.","Hidrata profundamente la piel, previniendo el envejecimiento y la pigmentación, para crear un cutis claro y joven."], 
        category: "serum-esencia",
        imageSize: "medium"
      },
      {
        id: "BOJ-serúm-para-ojos-30ml",
        name: "Crema para ojos",
        tamanio: "30 ml",
        price: "$19",
        src: "/images/boj/6. Serum de ojos.png",
        description: "Crema para contornos de ojos",
        benefits: ["Mejora las arrugas en el área sensible de los ojos. Brinda una rica hidratación profunda en la piel y la mantienen completamente hidratada durante todo el día.","Aplicación suave y deja un acabado sedoso no pegajoso."], 
        category: "cream",
        imageSize: "medium"
      },
      {
        id: "BOJ-tónico-leche-arroz-150ml",
        name: "Tónico de arroz reponedora de brillo 150 ml",
        tamanio: "150 ml",
        price: "$23.10",
        src: "/images/boj/7. Tónico de arroz.png",
        description: "Tónico hidratante infusionado con extracto de arroz y aminoácidos del arroz que combate la resequedad de la piel",
        benefits: ["Ofrece nutrientes a piel seca y sensible para lograr un cutis suave y brillante.","Ofrece un cuidado adicional a los poros para pieles propensas al acné","Contiene aminoácidos que mejoran los efectos antioxidantes e hidratantes para la piel seca."], 
        category: "tónico",
        imageSize: "medium"
      },
      {
        id: "BOJ-serum-resplandor-profundo-30ml",
        name: "Serúm resplandor profundo 30 ml",
        tamanio: "30 ml",
        price: "$25.50",
        src: "/images/boj/8.Serum_glow_deep.png",
        description: "Serúm facial con una fórmula mejorada para piel con manchas e imperfecciones",
        benefits: ["Diseñado para personas con problemas de pigmentación y piel con imperfecciones.","Enriquecido con un 68 % de agua de salvado de arroz y un 2 % de alfa arbutina, actúa eficazmente para iluminar y mejorar la salud de la piel."], 
        category: "serum-esencia",
        imageSize: "medium"
      },
      {
        id: "BOJ-protector-solar-relief-sun",
        name: "Protector solar Relief sun 50 ml",
        tamanio: "50 ml",
        price: "$23.50",
        src: "/images/mixsoon/9. mixsoon bean essence 20 ml.png",
        description: "Protector solar orgánico con textura ligera que se absorbe rápido y no deja rastro blanco.",
        benefits: ["Enriquecido con un 30 % de extracto de arroz y probióticos derivados de granos que hidratan y nutren la piel.","Es suave pero potente, ofrece un bloqueo UV eficaz con SPF50+ PA++++ de amplio espectro.","Contiene ingredientes con beneficios calmantes, adecuado para pieles sensibles."], 
        category: "protector solar",
        imageSize: "medium"
      },
      {
        id: "BOJ-protector-solar-barra-18gr",
        name: "Protector solar mate en barra 18 gr",
        tamanio: "18 gr",
        price: "$19.40",
        src: "/images/mixsoon/10. Protector solar en barra mate.png",
        description: "Protector solar ideal para quienes prefieren una protección solar práctica en barra",
        benefits: ["Rico en vitamica A y C y minerales, ayuda a nutrir y calmar la piel. SPF 50 - Amplio espectro.","Aplicación suave y fresca sin grumos ni sensación grasosa"], 
        category: "protector solar",
        imageSize: "medium"
      },
      {
        id: "BOJ-limpiador-facial-green-plum-100ml",
        name: "Limpiador facial refrescante green plum",
        tamanio: "100 ml",
        price: "$19.50",
        src: "/images/boj/11. Limpiador facial green plum.png",
        description: "Limpiador facial multiusos que exfolia suavemente mientras brinda una limpieza profunda",
        benefits: ["Limpiador facial con pH bajo que contiene ingredientes herbales de origen natural para hidratar y refrescar la piel.","Elimina profundamente el exceso de sebo y las células muertas, además de proporcionar un efecto revitalizante.","Fórmula hipoalergénica, ligera e hidratante"], 
        category: "cleansing",
        imageSize: "medium"
      },
      {
        id: "BOJ-gel-exfoliante-apricot-100ml",
        name: "Gel exfoliante apricot",
        tamanio: "100 ml",
        price: "$17.75",
        src: "/images/boj/12. Exfoliante  apricot blossom.png",
        description: "Gel exfoliante ideal que elimina suavemente las células muertas y revela una piel más clara y fabulosa",
        benefits: ["Efecto hidratante que exfolia suavemente la piel sin irritarla.","Elimina las células muertas y las impurezas","Previene el envejecimiento y la pigmentación, creando una piel radiante y joven"], 
        category: "exfoliante",
        imageSize: "medium"
      },
      {
        id: "BOJ-serum-calmante-te-verde+pantenol-30ml",
        name: "Serúm calmante de té verde y pantenol 30 ml",
        tamanio: "30 ml",
        price: "$20.50",
        src: "/images/boj/13. Serum de te verde.png",
        description: "Sérum con un 76% de extracto de té verde, un 2% de pantenol y vitamina C que calma la piel dañada y sensible",
        benefits: ["Repara la piel dañada, suaviza las arrugas y aumenta la elasticidad de la piel.","Hidrata profundamente la piel, previniendo el envejecimiento y la pigmentación, para crear un cutis claro y joven."], 
        category: "serum-esencia",
        imageSize: "medium"
      },
      {
        id: "BOJ-serum-propolis+niacinamida-30ml",
        name: "Serúm con propolis y niacinamida de 30 ml",
        tamanio: "30 ml",
        price: "$20.50",
        src: "/images/boj/14. Serum con niacinamida + propolis.png",
        description: "Mejora la piel apagada con este potente sérum facial infusionado con un 60% de propolis y 2% de niacinamida para atacar la inflamación, controlar la producción de sebo y tratar la hiperpigmentación",
        benefits: ["Este sérum está diseñado para quienes sufren de poros dilatados y enrojecimiento de la piel.","Con una mezcla de 60% de extracto de propóleo y 2 % de niacinamida, hidrata la piel."], 
        category: "serum-esencia",
        imageSize: "medium"
      },


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
      (products.filter(product => product.category === 'serum-esencia') || []).filter(p => p && p.id)
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

.beautyofjoseon-page {
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