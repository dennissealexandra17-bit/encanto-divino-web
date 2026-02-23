<template>
      
  <div class="mixsoon-page">
    <!-- Header de la marca -->
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
            <img src="@/assets/mixsoon.webp" alt="Mixsoon" />
          </div>
          <div class="brand-info">
            <h1>MIXSOON</h1>
            <p class="brand-description">
                Mixsoon es una marca coreana de skincare premium especializada en fórmulas minimalistas 
                y efectivas. Destaca por su uso de la Centella Asiática de Madagascar y el frijol como ingredientes principales, 
                ofreciendo productos calmantes y reparadores ideales para pieles sensibles e irritadas. 
                Todos sus productos son veganos, hipoalergénicos y cruelty-free, comprometidos con la pureza de ingredientes y 
                resultados visibles. Perfecta para lograr una piel radiante, sana y equilibrada.
            </p>
            <div class="brand-features">
              <span class="feature">🌿 Ingredientes Naturales</span>
              <span class="feature">✨ Piel Sensible</span>
              <span class="feature">🇰🇷 K-Beauty Auténtico</span>
              <span class="feature">🍃 Frijol Fermentado</span>
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
                          <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
                           <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
                          <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
                           <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
                           <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
        <!-- Balsamos en barra y crema de ojos-->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🧴</span>
            Balsamos en Barra y Cremas de Ojos
          </h2>
          <div class="products-grid">
            <div 
              v-for="product in (balsamoProducts || [])" 
              :key="product.id || product.name"
              class="product-card"
            >
                           <div class="product-image" :class="`image-${product.imageSize}`" @click="openImageModal(product.src)">
                <img v-if="product.src" :src="product.src" :alt="product.name" style="cursor: pointer;" />
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
<!-- Modal para ver imagen en grande -->
<div v-if="showModal" class="modal-overlay" @click="closeImageModal">
  <div class="modal-content" @click.stop>
    <button class="modal-close" @click="closeImageModal">✕</button>
    <img :src="selectedImage" :alt="selectedImage" class="modal-image" />
  </div>
</div>
</template>

<script>
import { cartStore } from "@/store/cart.js";
import { computed, ref } from 'vue';

export default {
  name: "MixsoonPage",
  setup() {
const showModal = ref(false);
const selectedImage = ref("");
    const showToast = ref(false);
const toastMessage = ref("");
let toastTimer = null;
    // Productos de Skin1004 organizados
      const products = [
      // LIMPIADORES
      {
        id: "mixsoon-cleansing-oil-20ml",
        name: "Aceite Limpiador de Frijol",
        tamanio: "20ml",
        price: "$9.50",
        src: "/images/mixsoon/1. Mixsoon aceite limpiador 30 ml.png", 
        description: "Aceite limpiador que hidrata la piel mientras elimina eficazmente el maquillaje y las impurezas de la piel",
        benefits: ["Textura ligera de aceite líquido que no deja residuos en la piel, dejando la piel fresca e hidratada después de su uso", "Ofrece una limpieza profunda que elimina sin esfuerzo incluso el maquillaje resistente al agua."],
        category: "cleansing",
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
        category: "cleansing",
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
        category: "cleansing",
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
        category: "cleansing",
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
        category: "cleansing",
        imageSize: "large"
      },
//Serum
	{
        id: "mixsoon-glacier-water-hyaluronic-acid-serum-30ml",
        name: "Serúm con ácido hialurónico",
        tamanio: "30ml",
        price: "$18.20",
        src: "/images/mixsoon/5. Ácido hiaulurónico.png",
        description: "Sérum de ácido hialurónico con agua glacial ofrece un efecto hidratante instantáneo para la piel seca.",
        benefits: ["Efecto hidratante instantáneo para piel seca. ","Forma una barrera humectante con 3 capas de ácido hialurónico. ","La textura densa y rica del suero ayuda a crear una piel radiante."],
        category: "serum-essence",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-glacier-water-hyaluronic-acid-serum-100ml",
        name: "Serúm con ácido hialurónico",
        tamanio: "100ml",
        price: "$22.50",
        src: "/images/mixsoon/6. Ácido hiaulurónico 100 ml.png",
        description: "Sérum de ácido hialurónico con agua glacial ofrece un efecto hidratante instantáneo para la piel seca.",
        benefits: ["Efecto hidratante instantáneo para piel seca. ","Forma una barrera humectante con 3 capas de ácido hialurónico. ","La textura densa y rica del suero ayuda a crear una piel radiante."],
        category: "serum-essence",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-glacier-water-hyaluronic-acid-serum-300ml",
        name: "Serúm con ácido hialurónico",
        tamanio: "300ml",
        price: "$34.00",
        src: "/images/mixsoon/7. Ácido hiaulurónico 300 ml.png",
        description: "Sérum de ácido hialurónico con agua glacial ofrece un efecto hidratante instantáneo para la piel seca.",
        benefits: ["Efecto hidratante instantáneo para piel seca. ","Forma una barrera humectante con 3 capas de ácido hialurónico. ","La textura densa y rica del suero ayuda a crear una piel radiante."],
        category: "serum-essence",
        imageSize: "medium-large"
      },
	
//ESENCIA
	{
        id: "mixsoon-bean-essence-30ml",
        name: "Esencia de frijol",
        tamanio: "30ml",
        price: "$26.10",
        src: "/images/mixsoon/9. mixsoon bean essence 20 ml.png",
        description: "Esencia refrescante que contiene extracto fermentado de soja.",
        benefits: ["Reduce las células muertas mientras hidrata la piel seca."," Revitaliza y suaviza la textura de piel."," La rica textura puede parecer pegajosa pero en realidad deja un acabado refrescante."], 
        category: "serum-essence",
        imageSize: "large"
      },
	{
        id: "mixsoon-bean-essence-50ml",
        name: "Esencia de frijol",
        tamanio: "50ml",
        price: "$39",
        src: "/images/mixsoon/10. mixsoon bean essence 50 ml.png",
        description: "Esencia refrescante que contiene extracto fermentado de soja.",
        benefits: ["Reduce las células muertas mientras hidrata la piel seca."," Revitaliza y suaviza la textura de piel."," La rica textura puede parecer pegajosa pero en realidad deja un acabado refrescante."], 
        category: "serum-essence",
        imageSize: "large"
      },
	{
        id: "mixsoon-centella-essence-20ml",
        name: "Esencia de centella",
        tamanio: "20ml",
        price: "$12",
        src: "/images/mixsoon/11. mixsoon esencia de centella asiatica.png",
        description: "Esencia facial de Mixsoon, que trata diversas preocupaciones de la piel",
        benefits: ["Brinda un efecto calmante inmediato para la piel irritada y sensible."," Compuesta al 100 % por ingredientes derivados de centella asiática."," Aporta nutrientes y ayuda a reducir la irritación."], 
        category: "serum-essence",
        imageSize: "large"
      },
	{
        id: "mixsoon-bifida-essence-20ml",
        name: "Esencia de bifida",
        tamanio: "20ml",
        price: "$12",
        src: "/images/mixsoon/12. mixsoon esencia de bifida.png",
        description: "Esencia facial de Mixsoon, que trata diversas preocupaciones de la piel",
        benefits: ["Forma una barrera de humedad para una piel saludable con extracto de fermento de Bífida puro. ","Hidrata la piel cansada y ofrece un excelente efecto revitalizante."], 
        category: "serum-essence",
        imageSize: "large"
      },
	{
        id: "mixsoon-galactomices-essence-20ml",
        name: "Esencia de galactomices",
        tamanio: "20ml",
        price: "$12",
        src: "/images/mixsoon/13. esencia de galactomices.png",
        description: "Esencia facial de Mixsoon, que trata diversas preocupaciones de la piel",
        benefits: ["Proporciona hidratación profunda para mejorar la piel apagada y cansada con filtrado de fermento de Galactomyces puro. ","Revitaliza la piel y crea una tez luminosa y transparente."], 
        category: "serum-essence",
        imageSize: "large"
      },
//CREMA
	{
        id: "mixsoon-bean-cream-15ml",
        name: "Crema de frijol mini",
        tamanio: "15ml",
        price: "$13",
        src: "/images/mixsoon/14. mixsoon crema mini de frijol.png",
        description: "Crema altamente hidratante y rica en nutrientes.",
        benefits: ["Ayuda a mantener el equilibrio hidro-oleoso de la piel con extracto de fermento de soja. ","Suaviza la textura de la piel y reduce las células muertas gracias al extracto de fermento de fruta de Lactobacillus. ","Su textura densa y firme ayuda a mantener la piel hidratada durante mucho tiempo con un acabado no pegajoso."], 
        category: "cream",
        imageSize: "large"
      },
	{
        id: "mixsoon-bean-cream-50ml",
        name: "Crema de frijol",
        tamanio: "50ml",
        price: "$30.90",
        src: "/images/mixsoon/15. mixsoon crema de frijol .png",
        description: "Crema altamente hidratante y rica en nutrientes.",
        benefits: ["Ayuda a mantener el equilibrio hidro-oleoso de la piel con extracto de fermento de soja. ","Suaviza la textura de la piel y reduce las células muertas gracias al extracto de fermento de fruta de Lactobacillus. ","Su textura densa y firme ayuda a mantener la piel hidratada durante mucho tiempo con un acabado no pegajoso."], 
        category: "cream",
        imageSize: "large"
      },
//TÓNICOS
	{
        id: "mixsoon-centella-toner-pad-280ml",
        name: "Discos de algodón con tónico de centella",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/16. mixsoon centella toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de centella para calmar la piel irritada. ","Contiene extracto de Centella Asiática que tiene sinergia con alatoína, betaína y ceramida NP para proporcionar fuertes propiedades calmantes, calmantes y reparadoras de la piel. Las almohadillas se pueden dividir fácilmente en 2 pedazos para aplicarlas en diferentes áreas de la piel."], 
        category: "tónico",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-galactomices-toner-pad-280ml",
        name: "Discos de algodón con tónico de galactomices",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/17. mixsoon galactomices toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Toner pads hidratantes con galactomyces que ayudan a iluminar y mejorar el tono desigual de la piel. ","El galactomyces es rico en nutrientes como aminoácidos, vitaminas, proteínas y homo-péptidos que revitalizan la piel opaca para un acabado suave tipo porcelana. ","Formulado con alantoína para hidratar la piel y darle un brillo saludable. Los pads pueden dividirse fácilmente en 2 partes para aplicarlos en diferentes zonas del rostro."], 
        category: "tónico",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-bean-toner-pad-280ml",
        name: "Discos de algodón con tónico de frijól",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/19. mixsoon frijol toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de frijoles ricos en proteínas para nutrir profundamente la piel. ","Contiene 7 tipos de extractos de frijol, como semillas de frijol, lentejas y soja silvestre, que contienen ricos aminoácidos con Lactobacillus para recargar nutrientes y proporcionar beneficios antienvejecimiento. ","Formulado con ácido hialurónico y alatoína para hidratar la piel y fortalecer la barrera de humedad de la piel. El material de la almohadilla está hecho de algodón natural que es suave y también contiene semillas de algodón para una exfoliación suave. Las almohadillas se pueden dividir fácilmente en 2 pedazos para aplicarlas en diferentes áreas de la piel."], 
        category: "tónico",
        imageSize: "medium-large"
      },
	{
        id: "mixsoon-bifida-toner-pad-280ml",
        name: "Discos de algodón con tónico de frijól",
        tamanio: "280ml",
        price: "$32.20",
        src: "/images/mixsoon/18. mixsoon bifida toner pad.png",
        description: "Almohadillas tónicas hidratantes con ingredientes.",
        benefits: ["Almohadillas tónicas hidratantes con ingredientes de fermento bífida para ayudar a restaurar el equilibrio saludable de agua y grasa de la piel. ","Contiene 4 tipos de ingredientes fermentados, que ayudan a reparar la barrera cutánea colapsada y a equilibrar el nivel de agua y grasa de la piel. ","Formulado con 3 tipos de ácidos hialurónicos que hacen sinergia con pantenol, ceramida NP y aceite de semilla de Limnanthes alba (espuma de prado) para hidratar profundamente y formar una barrera contra la humedad."], 
        category: "tónico",
        imageSize: "medium"
      },

       // PROTECTOR SOLAR
  	{
        id: "mixsoon-bloqueador-solar-50gr",
        name: "Bloqueador solar centella",
        tamanio: "50 gr",
        price: "$26",
        src: "/images/mixsoon/20. Bloqueador solar.png",
        description: "Crema solar hidratante y calmante sin tintes blancos",
        benefits: ["Proporciona FPS 50+ PA++++ de amplio espectro para proteger de los rayos UVB que causan quemaduras solares y de los rayos UVA que provocan el envejecimiento prematuro de la piel.","Su textura en forma de sérum se absorbe rápidamente, dejando la piel fresca y con una sensación agradable.","Contiene centella asiática y otros ingredientes nutritivos para mantener la piel hidratada y tersa, al tiempo que refuerza la barrera cutánea protectora."], 
        category: "protector solar",
        imageSize: "medium"
      },
      //crema de ojos
      {
        id: "mixsoon-crema-de-ojos-20ml",
        name: "Crema de ojos",
        tamanio: "20 ml",
        price: "$26",
        src: "/images/mixsoon/1. mixsoon crema de ojos.png",
        description: "Crema hidratante  para el contorno de ojos ",
        benefits: ["Brinda un efecto calmante, a la vez que minimiza las arrugas y estimula la renovación celular.","Potencia la hidratación de la piel y la síntesis de colágeno.","Test de irritación cutánea superado."], 
        category: "Balsamo en barra",
        imageSize: "medium"
      },
      {
        id: "mixsoon-balsamo-en-barra-11.5ml",
        name: "Bálsamo en barra de frijol",
        tamanio: "11.5 ml",
        price: "$26",
        src: "/images/mixsoon/2. balsamo en barra.png",
        description: "Bálsamo en barra que hidrata y nutre la piel en cualquier momento del día.",
        benefits: ["Formulado con aceite de soya (Glycine soja), ingrediente exclusivo de mixsoon, que brinda nutrición profunda y refuerza la barrera cutánea.","Enriquecido con 9 tipos de probióticos que ayudan a mantener el equilibrio natural de la piel.","Deja la piel con un brillo saludable y un aspecto visiblemente más relleno."], 
        category: "Balsamo en barra",
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
      (products.filter(product => product.category === 'serum-essence') || []).filter(p => p && p.id)
    );
    const sunscreenProducts = computed(() => 
      (products.filter(product => product.category === 'protector solar') || []).filter(p => p && p.id)
    );
  
    const balsamoProducts = computed(() => 
      (products.filter(product => product.category === 'Balsamo en barra') || []).filter(p => p && p.id)
    );
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
  balsamoProducts,
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

.mixsoon-page {
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