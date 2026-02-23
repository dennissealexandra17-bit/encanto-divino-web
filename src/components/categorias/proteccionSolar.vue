<template>   
  <div class="proteccionSolar-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Protectores Solares</h1>
            </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        
        <!-- Beauty of Joseon -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Beauty of Joseon
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (bojProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
         <!-- Celimax -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Celimax
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (celimaxProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
        <!-- cosrx -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Cosrx
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (cosrxProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
        <!-- Mixsoon -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Mixsoon
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (mixsoonProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
        <!-- Skin1004 -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Skin1004
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (skin1004Products || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
             <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
         <!-- tocobo -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Tocobo
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (tocoboProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div class="product-image" :class="`image-${product.imageSize || 'medium'}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
    <!-- Modal para ver imagen en tamaño grande -->
    <div v-if="showModal" class="modal-overlay" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeImageModal">✕</button>
        <img :src="selectedImage" :alt="selectedImage" class="modal-image" />
      </div>
    </div>
    <div v-if="showToast" class="toast">
      {{ toastMessage }}
    </div>
  </div>
</template>
<script>
import { cartStore } from "@/store/cart.js";
import { computed, ref } from 'vue';

export default {
  name: "Categorias",
  setup() {

    const showModal = ref(false);
    const selectedImage = ref("");
    const showToast = ref(false);
    const toastMessage = ref("");
    let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
        //boj
      {
        id: "BOJ-protector-solar-relief-sun",
        name: "Protector solar Relief sun 50 ml",
        tamanio: "50 ml",
        price: "$23.50",
        src: "/images/mixsoon/9. mixsoon bean essence 20 ml.png",
        description: "Protector solar orgánico con textura ligera que se absorbe rápido y no deja rastro blanco.",
        benefits: ["Enriquecido con un 30 % de extracto de arroz y probióticos derivados de granos que hidratan y nutren la piel.","Es suave pero potente, ofrece un bloqueo UV eficaz con SPF50+ PA++++ de amplio espectro.","Contiene ingredientes con beneficios calmantes, adecuado para pieles sensibles."], 
        category: "boj",
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
        category: "boj",
        imageSize: "medium"
      },
      //celimax
      {
        id: "Celimax-bloqueador-solar-50ml",
        name: "Bloqueador solar oil control 50 ml",
        tamanio: "50 ml",
        price: "$25.50",
        src: "/images/celimax/8. bloqueador solar.png",
        description: "Este protector solar híbrido mineral y químico ofrece protección solar de amplio espectro de FPS 50+ PA++++ añadiendo beneficios reguladores del sebo.",
        benefits: ["Tiene un amplio espectro de FPS 50+ PA++++ .","Controla eficazmente el exceso de producción de sebo.","La textura sedosa, suave y ligera proporciona un acabado refrescante, sin dejar acabados blancos."], 
        category: "celimax",
        imageSize: "medium"
      },
      //cosrx
       {
        id: "COSRX-bloqueador-solar-50ml",
        name: "Bloqueador solar iluminador aloe 54.2 aqua",
        tamanio: "50 ml",
        price: "$18.50",
        src: "/images/varias-marcas/28. cosrx bloqueador solar.png",
        description: "Este protector solar utiliza filtros químicos para ofrecer protección SPF 50+ PA++++.",
        benefits: ["Protege la piel del daño de los rayos UV con SPF 50+ PA++++ mientras brinda propiedades calmantes e hidratantes.","Le da a la piel un tinte rosado natural y vivo y también difumina la apariencia de los poros y la textura de la piel.","Brinda un acabado suave y aireado y no deja una sensación grasosa en la piel."],  
        category: "cosrx",
        imageSize: "medium"
      },

      //mixsoon
      {
        id: "mixsoon-bloqueador-solar-50gr",
        name: "Bloqueador solar centella",
        tamanio: "50 gr",
        price: "$26",
        src: "/images/mixsoon/20. Bloqueador solar.png",
        description: "Crema solar hidratante y calmante sin tintes blancos",
        benefits: ["Proporciona FPS 50+ PA++++ de amplio espectro para proteger de los rayos UVB que causan quemaduras solares y de los rayos UVA que provocan el envejecimiento prematuro de la piel.","Su textura en forma de sérum se absorbe rápidamente, dejando la piel fresca y con una sensación agradable.","Contiene centella asiática y otros ingredientes nutritivos para mantener la piel hidratada y tersa, al tiempo que refuerza la barrera cutánea protectora."], 
        category: "mixsoon",
        imageSize: "medium"
      },

      //skin1004
      {
        id: "skin1004-bloqueador-solar-centella-madagascar-50ml",
        name: "Bloqueador Solar Centella Madagascar",
        tamanio: "50ml",
        price: "$23.50",
        src: "/images/skin1004/bloqueador-solar-centella-madagascar-50ml.jpg",
        description: "Tipo de piel: sensible, irritada y propensa al enrojecimiento.",
        benefits: ["Un protector solar físico con SPF 30+ protege la piel de los rayos UV.","Disminuye la posible irritación de la piel", "Contiene extracto de centella asiática de Madagascar para un efecto calmante suave pero potente."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-air-fit-plus-50ml",
        name: "Bloqueador Solar Air Fit Plus Centella Madagascar",
        tamanio: "50ml",
        price: "$21.00",
        src: "/images/skin1004/bloqueador-solar-air-fit-plus-centella-madagascar-50ml.jpg",
        description: "Tipo de piel: sensible, irritada y propensa al enrojecimiento.",
        benefits: ["Un protector solar físico con un potente SPF de amplio espectro protege la piel de los rayos UV.","Contiene extracto de Centella Asiática para un excelente efecto calmante",
         "Enriquecido con niacinamida, ayuda a mejorar el tono general de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-tono-iluminador-50ml",
        name: "Bloqueador Solar Tono Iluminador",
        tamanio: "50ml",
        price: "$25.50",
        src: "/images/skin1004/bloqueador-solar-tono-iluminador-50ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Calmante, corrector de manchas y opacidad de la piel",
         "Protector solar híbrido (combinación de filtros minerales y químicos) con alta protección UV FPS 50+ y PA++++."],
        category: "skin1004",
        imageSize: "medium"
      },
      
      {
        id: "skin1004-bloqueador-solar-liquido-hyalucica-50ml",
        name: "Bloqueador Solar Líquido Hyalu cica",
        tamanio: "50ml",
        price: "$22.00",
        src: "/images/skin1004/bloqueador-solar-liquido-hyalucica-50ml.jpg",
        description: "Tipo de piel: Seca, irritada y sensible.",
        benefits: ["Ayuda con el enrojecimiento de la piel.",
         "Combate los problemas con el acné e hipersensibilidad al sol.",
          "Hidrata profundamente la piel mientras la protege de los rayos UV con SPF50+ PA++++.",
        "Combate los poros dilatados y mejora la textura de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-bloqueador-solar-barra-hyalucica-20g",
        name: "Bloqueador Solar Barra Hyalu cica",
        tamanio: "20g",
        price: "$19.80",
        src: "/images/skin1004/bloqueador-solar-barra-hyalucica-20g.jpg",
        description: "Tipo de piel: Seca, irritada y sensible.",
        benefits: ["Ayuda con el enrojecimiento de la piel.",
         "Combate los problemas con el acné e hipersensibilidad al sol.",
          "Hidrata profundamente la piel mientras la protege de los rayos UV con SPF50+ PA++++.",
        "Combate los poros dilatados y mejora la textura de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
      //tocobo
       {
        id: "tocobo-bloqueador-solar-bio-watery-50ml",
        name: "Bloqueador solar bio watery de 50 ml",
        tamanio: "50 ml",
        price: "$24",
        src: "/images/varias-marcas/3. tocobo bloqueador azul liquido.png",
        description: "Este bloqueador solar calma la irritación y ataca las marcas del acné, contiene bio-ácido hialurónico que aumenta la humectación de la piel.",
        benefits: ["No deja residuos blancos ni grumos con otros cosméticos. Amplio espectro SPF 50 + PA.","Refuerza la hidratación de la piel con ácido hialurónico."], 
        category: "tocobo",
        imageSize: "medium"
      },
      {
        id: "tocobo-bloqueador-solar-bio-watery-19gr",
        name: "Bloqueador solar bio watery de 19 gramos",
        tamanio: "19 gr",
        price: "$24.60",
        src: "/images/varias-marcas/4. tocobo bloqueador azul barra.png",
        description: "Este bloqueador solar calma la irritación y ataca las marcas del acné, contiene bio-ácido hialurónico que aumenta la humectación de la piel. Con su presentación en barra para una fácil aplicación",
        benefits: ["No deja residuos blancos ni grumos con otros cosméticos. Amplio espectro SPF 50 + PA.","Refuerza la hidratación de la piel con ácido hialurónico."], 
        category: "tocobo",
        imageSize: "medium"
      },
      {
        id: "tocobo-bloqueador-solar-cica-calmante-50ml",
        name: "Bloqueador solar cica calmante 50 ml",
        tamanio: "50 ml",
        price: "$20.80",
        src: "/images/varias-marcas/5. tocobo verde liquido.png",
        description: "Protector solar químico que tiene un SPF50+ PA++++ para proteger la piel de los rayos del sol, y está formulado con extractos de centella asiática y aloe vera para calmar la inflamación y las quemaduras solares al instante.",
        benefits: ["Reduce la inflamación de la piel mientras retiene la humedad. Amplio espectro SPF 50 + PA","Brinda un efecto refrescante e hidratación"],
        category: "tocobo",
        imageSize: "medium"
      },
      {
        id: "tocobo-bloqueador-solar-cica-calmante-19gr",
        name: "Bloqueador solar cica calmante 19 gramos",
        tamanio: "19 gr",
        price: "$21",
        src: "/images/varias-marcas/6. tocobo bloqueador verde barra.png",
        description: "Protector solar químico que tiene un SPF50+ PA++++ para proteger la piel de los rayos del sol, y está formulado con extractos de centella asiática y aloe vera para calmar la inflamación y las quemaduras solares al instante.",
        benefits: ["Reduce la inflamación de la piel mientras retiene la humedad. Amplio espectro SPF 50 + PA","Brinda un efecto refrescante e hidratación"],
        category: "tocobo",
        imageSize: "medium"
      },
     
    ];


    // Computed properties para organizar productos por categoría
    const anuaProducts = computed(() => 
      (products.filter(product => product.category === 'anua') || []).filter(p => p && p.id)
    );
  const bojProducts = computed(() => 
      (products.filter(product => product.category === 'boj') || []).filter(p => p && p.id)
    );
     const mixsoonProducts = computed(() => 
      (products.filter(product => product.category === 'mixsoon') || []).filter(p => p && p.id)
    );
     const skin1004Products = computed(() => 
      (products.filter(product => product.category === 'skin1004') || []).filter(p => p && p.id)
    );
     const celimaxProducts = computed(() => 
      (products.filter(product => product.category === 'celimax') || []).filter(p => p && p.id)
    );
 const cosrxProducts = computed(() => 
      (products.filter(product => product.category === 'cosrx') || []).filter(p => p && p.id)
    );
   const tocoboProducts = computed(() => 
      (products.filter(product => product.category === 'tocobo') || []).filter(p => p && p.id)
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

    const openImageModal = (imageSrc) => {
      selectedImage.value = imageSrc;
      showModal.value = true;
      document.body.style.overflow = "hidden";
    };

    const closeImageModal = () => {
      showModal.value = false;
      selectedImage.value = "";
      document.body.style.overflow = "auto";
    };

    return {
    anuaProducts,
    bojProducts,
    mixsoonProducts,
    skin1004Products,
    celimaxProducts,
    cosrxProducts,
    tocoboProducts,
    addToCart,
    showToast,
    toastMessage,
    showModal,
    selectedImage,
    openImageModal,
    closeImageModal
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

.proteccionSolar-page {
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
  color: #26c0b1;
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
  color: #58bab0;
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

/* Estilos para el Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  background: rgba(104, 102, 102, 0.58);
  border-radius: 20px;
  padding: 20px;
  max-width: 90%;
  max-height: 90vh;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 15px;
}

.modal-close {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e71919, #d61e09e1,#eb0a0a);
  color: rgba(252, 255, 255, 0.989);
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.modal-close:hover {
  transform: scale(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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