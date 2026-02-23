<template>   
  <div class="limpiadores-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Limpiadores</h1>
            </div>
        </div>
      </div>
    </section>
    <!-- Productos por categorías -->
    <section class="products-section">
      <div class="container">
        <!-- Anua -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
            Anua
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (anuaProducts || [])" 
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
          <!-- Tocobo -->
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
  // ANUA
      {
        id: "ANUA-Aceite-limpiador-200ml",
        name: "Aceite limpiador heartleaf control poros",
        tamanio: "200 ml",
        price: "$25.10",
        src: "/images/anua/1. aceite limpiador.png",
        description: "Este aceite limpiador elimina eficazmente las impurezas de la piel, dejando un acabado fresco e hidratado",
        benefits: ["Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.","Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana.","Perfecta para piel propensa al acné y poros abiertos."], 
        category: "anua",
        imageSize: "medium"
      },
      {
        id: "ANUA-espuma-limpiadora-150ml",
        name: "Espuma limpiador heartleaf control de poros",
        tamanio: "150 ml",
        price: "$18.40",
        src: "/images/anua/2. Espuma limpiadora.png",
        description: "Espuma limpiadora enriquecida con polvo de planta camaleón para eliminar las células muertas de la piel y purificar los poros.",
        benefits: ["Elimina las células muertas de la piel y las impurezas en los poros.","Calma la irritación causada por la limpieza. Incluye el ingrediente patentado Anti-Sebum P para eliminar el exceso de sebo.","Perfecta para piel propensa al acné y poros abiertos."], 
        category: "anua",
        imageSize: "medium"
      },
      //boj
   {
        id: "BOJ-limpiador-facial-green-plum-100ml",
        name: "Limpiador facial refrescante green plum",
        tamanio: "100 ml",
        price: "$19.50",
        src: "/images/boj/11. Limpiador facial green plum.png",
        description: "Limpiador facial multiusos que exfolia suavemente mientras brinda una limpieza profunda",
        benefits: ["Limpiador facial con pH bajo que contiene ingredientes herbales de origen natural para hidratar y refrescar la piel.","Elimina profundamente el exceso de sebo y las células muertas, además de proporcionar un efecto revitalizante.","Fórmula hipoalergénica, ligera e hidratante"], 
        category: "boj",
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
        category: "boj",
        imageSize: "medium"
      },
      //celimax
         {
        id: "Celimax-Aceite-limpiador-derma-natura-20ml",
        name: "Aceite limpiador derma nature fresh 20 ml",
        tamanio: "20 ml",
        price: "$8.90",
        src: "/images/celimax/1. aceite mini.png",
        description: "Aceite limpiador que desobstruye los poros y disuelve suavemente los puntos negros, los puntos blancos y el exceso de sebo, dejando la piel limpia.",
        benefits: ["Ayuda a eliminar a fondo el maquillaje, las impurezas y el exceso de sebo de la piel mediante la emulsificación.","Formulado con 8 tipos de aceites de origen vegetal que aportan una limpieza suave sin obstruir los poros y mantienen la piel fresca."], 
        category: "celimax",
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
        category: "celimax",
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
        category: "celimax",
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
        category: "celimax",
        imageSize: "medium"
      },
      //mixsoon
       {
        id: "mixsoon-cleansing-oil-20ml",
        name: "Aceite Limpiador de Frijol",
        tamanio: "20ml",
        price: "$9.50",
        src: "/images/mixsoon/1. Mixsoon aceite limpiador 30 ml.png", 
        description: "Aceite limpiador que hidrata la piel mientras elimina eficazmente el maquillaje y las impurezas de la piel",
        benefits: ["Textura ligera de aceite líquido que no deja residuos en la piel, dejando la piel fresca e hidratada después de su uso", "Ofrece una limpieza profunda que elimina sin esfuerzo incluso el maquillaje resistente al agua."],
        category: "mixsoon",
        imageSize: "large"
      },
      {
        id: "mixsoon-cleansing-oil-195ml",
        name: "Aceite Limpiador de Frijol",
        tamanio: "195ml",
        price: "$28.90",
        src: "/images/mixsoon/2. Mixsoon aceite limpiador 195 ml.png",
        description: "Aceite limpiador que hidrata la piel mientras elimina eficazmente el maquillaje y las impurezas de la piel",
        benefits: ["Textura ligera de aceite líquido que no deja residuos en la piel, dejando la piel fresca e hidratada después de su uso", "Ofrece una limpieza profunda que elimina sin esfuerzo incluso el maquillaje resistente al agua."],
        category: "mixsoon",
        imageSize: "large"
      },
	{
        id: "mixsoon-cleansing-foam-20ml",
        name: "Espuma limpiadora de Frijol",
        tamanio: "20ml",
        price: "$8",
        src: "/images/mixsoon/3. Mixsoon espuma mini 20 ml.png",
        description: "Una espuma limpiadora suave y delicada que calma la piel sin resecarla.",
        benefits: ["Una espuma limpiadora que contiene un 32,8 % de extracto de centella asiática y altermonas para hidratar y calmar la piel."," Fórmula ligeramente ácida con un pH de 3,0 a 5,0 que mantiene el equilibrio natural de la piel."],
        category: "mixsoon",
        imageSize: "large"
      },
 	{
        id: "mixsoon-cleansing-foam-150ml",
        name: "Espuma limpiadora de Frijol",
        tamanio: "150ml",
        price: "$22.10",
        src: "/images/mixsoon/4. Mixsoon espuma jumbo 150 ml.png",
        description: "Una espuma limpiadora suave y delicada que calma la piel sin resecarla.",
        benefits: ["Una espuma limpiadora que contiene un 32,8 % de extracto de centella asiática y altermonas para hidratar y calmar la piel."," Fórmula ligeramente ácida con un pH de 3,0 a 5,0 que mantiene el equilibrio natural de la piel."],
        category: "mixsoon",
        imageSize: "large"
      },
	{
        id: "mixsoon-cleasing-water-centella-300ml",
        name: "Agua micelar limpiadora de centella",
        tamanio: "300ml",
        price: "$21.50",
        src: "/images/mixsoon/8. mixsoon cleasing water 300 ml.png",
        description: "Agua micelar que elimina suavemente la suciedad, el exceso de grasa y las impurezas del rostro.",
        benefits: ["Elimina suavemente toda la suciedad e impurezas de tu piel sin causar irritación."," Reduce la sequedad después de la limpieza con el método Micelar."," Todos los ingredientes están clasificados como verdes EWG."],
        category: "mixsoon",
        imageSize: "large"
      },
      //skin1004
       {
        id: "skin1004-cleansing-oil-30ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "30ml",
        price: "$10.30",
        src: "/images/skin1004/aceite.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-cleansing-oil-200ml",
        name: "Aceite Limpiador Madagascar Centella",
        tamanio: "200ml",
        price: "$26.45",
        src: "/images/skin1004/aceite200ml.png",
        description: "Aceite limpiador suave que remueve maquillaje y protector solar sin irritar.",
        benefits: ["Elimina fácilmente todo rastro de maquillaje e impurezas de la piel.", "Formulado con aceites que no generan hidratación.", "Purifica los poros y absorbe las impurezas mientras hidrata la piel por completo"],       
         category: "skin1004",
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
        category: "skin1004",
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
       category: "skin1004",
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
       category: "skin1004",
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
       category: "skin1004",
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
       category: "skin1004",
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
       category: "skin1004",
       imageSize: "medium-large"

      },
      //tocobo 
        {
        id: "Tocobo-aceite-limpiador-200ml",
        name: "Aceite limpiador 200 ml",
        tamanio: "200 ml",
        price: "$22.30",
        src: "/images/varias-marcas/1. Tocobo aceite limpiador.png",
        description: "Este aceite limpiador vegano combina 5.000 ppm de polvo de calamina y 100 ppm de leche blanca vegana para eliminar eficazmente las impurezas, el exceso de sebo y los residuos de maquillaje en la piel.",
        benefits: ["Absorbe eficazmente las impurezas de los poros y ayudar a reducir el exceso de sebo.","Derrite y emulsiona rápidamente el maquillaje, el protector solar, el sebo y otros residuos que obstruyen los poros."], 
        category: "tocobo",
        imageSize: "medium"
      },
      {
        id: "Tocobo-espuma-limpiadora-150ml",
        name: "Espuma limpiadora de 150 ml",
        tamanio: "150 ml",
        price: "$18.10",
        src: "/images/varias-marcas/2. tocobo espuma limpiadora.png",
        description: "Esta espuma limpiadora vegana combina 5.000 ppm de polvo de calamina y 100 ppm de leche blanca vegana para eliminar eficazmente las impurezas, el exceso de sebo y los residuos de maquillaje en la piel.",
        benefits: ["Contiene extracto de coco natural que calma la piel y previene la irritación.","La combinación de arcilla mineral rosa y blanca actúa como exfoliante para eliminar las células muertas y las impurezas.","Forma una microespuma que penetra en los poros y elimina los residuos acumulados."], 
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

.limpiadores-page {
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