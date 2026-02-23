<template>   
  <div class="serums-esencias-page">
    <section class="brand-header">
      <div class="container">
        <div class="brand-intro">
          <div class="brand-logo">
          </div>
          <div class="brand-info">
            <h1>Serums y Esencias</h1>
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
        <!-- varias marcas -->
        <div class="category-section">
          <h2 class="category-title">
            <span class="category-icon">🍃</span>
           Varias Marcas
          </h2>
          <div class="products-grid">
            <div
              v-for="product in variasProducts || []"
              :key="product.id || product.name"
              class="product-card"
              :class="{ featured: product.featured }"
            >
              <div
                class="product-image"
                :class="`image-${product.imageSize || 'medium'}`"
                @click="openImageModal(product.src)"
              >
                <img
                  v-if="product.src"
                  :src="product.src"
                  :alt="product.name"
                  style="cursor: pointer"
                />
                <span v-else class="product-placeholder">🍃</span>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <h4>{{ product.marca }}</h4>
                <p v-if="product.tamanio" class="product-size">
                  {{ product.tamanio }}
                </p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-benefits">
                  <span
                    v-for="benefit in product.benefits || []"
                    :key="benefit"
                  >
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
import Cosrx from "../marcas/Cosrx.vue";

export default {
  name: "Categorias",
  setup() {

    
    const showToast = ref(false);
    const toastMessage = ref("");
    const showModal = ref(false);
    const selectedImage = ref("");
    let toastTimer = null;
    // Productos de Skin1004 organizados
       const products = [
        //anua
     {
        id: "ANUA-Sérum-niacinamida-30ml",
        name: "Sérum con niacinamida 0%+ TXA 4%",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/anua/4. serum con niacinamida.png",
        description: "Este sérum contienen una poderosa combinación iluminadora de 10% de niacinamida y 4 % de ácido tranexámico, el cual ayuda a eliminar las manchas oscuras y las marcas postacné",
        benefits: ["Combate las manchas oscuras rebeldes y la hiperpigmentación ayudando a reducir la decoloración.",
        "Ayudar a corregir el tono desigual de la piel al limitar la producción de melanina.","Una textura ligera y sin pegajosidad."], 
        category: "anua",
        imageSize: "medium"
      },
      {
        id: "Anua-Sérum-ácido-hialurónico-30ml",
        name: "Sérum con ácido hialurónico",
        tamanio: "30 ml",
        price: "$35.50",
        src: "/images/anua/5. serum con ácido hialuronico.png",
        description: "Refuerza la barrera de hidratación y firmeza de la piel con este sérum hidratante que contiene PDRN, colágeno y 11 tipos de ácido hialurónico",
        benefits: ["Mejora la textura general de la piel y proporcionar una hidratación profunda a la piel deshidratada.","Ayuda a restaurar la vitalidad de la piel y a reducir la apariencia de líneas de expresión y arrugas."], 
        category: "anua",
        imageSize: "medium"
      },
      {
        id: "ANUA-Sérum-calmante-ácido-azelaico-30ml",
        name: "Sérum calmante con ácido azelaico 10%",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/anua/6. serum con acido azelaico.png",
        description: "Este sérum ligero se caracteriza por un 10% de ácido azelaico, un ingrediente estrella para aliviar el acné, la rosácea y la hiperpigmentación, mientras el ácido hialurónico da una hidratación de larga duración.",
        benefits: ["Calma la piel irritada debido a la sequedad.","Hidratación duradera a la piel y ayuda a calmar la piel con ingredientes de aceite de tansy azul y agua de hoja de té verde.","Ayuda a calmar el enrojecimiento de la piel causado por la sequedad."], 
        category: "anua",
        imageSize: "medium"
      },
      {
        id: "ANUA-serum-acido-hialuronico-30ml",
        name: "Sérum con extracto de durazno",
        tamanio: "30 ml",
        price: "$32.50",
        src: "/images/anua/7. serum peach 70.png",
        description: "Sérum con un 70% de extracto de durazno y un 5% de niacinamida que dejará tu piel más suave y con un tono más unificado",
        benefits: ["Mejora el tono de la piel mediante extracto de melocotón y niacinamida.","Elimina la piel muerta y limpia los poros cansados con Peach Yogurt Complex","Aporta un brillo hidratantegracias a tres tipos de ácido hidrónico y aceite de levadura del desierto"], 
        category: "anua",
        imageSize: "medium"
      },
      //boj
      {
        id: "BOJ-Esencia-de-agua-ginseng-150ml",
        name: "Esencia de agua de ginseng",
        tamanio: "150 ml",
        price: "$22.90",
        src: "/images/boj/4. BOJ limpiador en agua.png",
        description: "Tónico humectante que contiene un 80% de agua de raíz de ginseng ",
        benefits: ["Aporta a la piel abundante hidratación y nutrientes, además de una hidratación duradera.","Mantiene la piel hidratada en profundidad durante mucho tiempo y la mantiene sana."], 
        category: "boj",
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
        category: "boj",
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
        category: "boj",
        imageSize: "medium"
      },    {
        id: "BOJ-serum-resplandor-profundo-30ml",
        name: "Serúm resplandor profundo 30 ml",
        tamanio: "30 ml",
        price: "$25.50",
        src: "/images/boj/8.Serum_glow_deep.png",
        description: "Serúm facial con una fórmula mejorada para piel con manchas e imperfecciones",
        benefits: ["Diseñado para personas con problemas de pigmentación y piel con imperfecciones.","Enriquecido con un 68 % de agua de salvado de arroz y un 2 % de alfa arbutina, actúa eficazmente para iluminar y mejorar la salud de la piel."], 
        category: "boj",
        imageSize: "medium"
      },    {
        id: "BOJ-serum-calmante-te-verde+pantenol-30ml",
        name: "Serúm calmante de té verde y pantenol 30 ml",
        tamanio: "30 ml",
        price: "$20.50",
        src: "/images/boj/13. Serum de te verde.png",
        description: "Sérum con un 76% de extracto de té verde, un 2% de pantenol y vitamina C que calma la piel dañada y sensible",
        benefits: ["Repara la piel dañada, suaviza las arrugas y aumenta la elasticidad de la piel.","Hidrata profundamente la piel, previniendo el envejecimiento y la pigmentación, para crear un cutis claro y joven."], 
        category: "boj",
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
        category: "boj",
        imageSize: "medium"
      },
  
      //celimax
      {
        id: "Celimax-ampolla-the-real-noni-30ml",
        name: "Ampolla calmante the real noni 30 ml",
        tamanio: "30 ml",
        price: "$30.10",
        src: "/images/celimax/5. ampolla noni.png",
        description: "Con un 71.77% de extracto de la fruta noni rica en nutrientes, esta ampolla hidrata la piel y proporciona más luminosidad para un aspecto saludable",
        benefits: ["Hidratar la piel y darle un aspecto fresco y saludable.","Ayuda a calmar y revitalizar la piel irritada para un acabado suave y radiante con aceite de romero.","Ayuda a reducir la apariencia de líneas finas y arrugas."], 
        category: "celimax",
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
        category: "celimax",
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
        category: "celimax",
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
        category: "celimax",
        imageSize: "medium"
      },    //cosrx
        {
        id: "COSRX-esencia-caracol-100ml",
        name: "Esencia con baba de caracol 96 de 100 ml",
        tamanio: "100 ml",
        price: "$18.70",
        src: "/images/varias-marcas/7.cosrx esencia.png",
        description: "La esencia de mucina de caracol agrega humectación intensa para hidratar la piel mientras ayuda a repararla, reduce el enrojecimiento y mejora la textura y pigmentación de la piel.",
        benefits: ["Hidrata la piel y alivia la sequedad de la piel. Ayuda a reparar la piel dañada y reducir la hiperpigmentación y las líneas finas.","Está dirigido a diversos problemas de la piel y es  adecuado."],  
        category: "cosrx",
        imageSize: "medium"
      },
      //mixsoon
      	{
        id: "mixsoon-glacier-water-hyaluronic-acid-serum-30ml",
        name: "Serúm con ácido hialurónico",
        tamanio: "30ml",
        price: "$18.20",
        src: "/images/mixsoon/5. Ácido hiaulurónico.png",
        description: "Sérum de ácido hialurónico con agua glacial ofrece un efecto hidratante instantáneo para la piel seca.",
        benefits: ["Efecto hidratante instantáneo para piel seca. ","Forma una barrera humectante con 3 capas de ácido hialurónico. ","La textura densa y rica del suero ayuda a crear una piel radiante."],
        category: "mixsoon",
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
        category: "mixsoon",
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
        category: "mixsoon",
        imageSize: "medium-large"
      },
		{
        id: "mixsoon-bean-essence-30ml",
        name: "Esencia de frijol",
        tamanio: "30ml",
        price: "$26.10",
        src: "/images/mixsoon/9. mixsoon bean essence 20 ml.png",
        description: "Esencia refrescante que contiene extracto fermentado de soja.",
        benefits: ["Reduce las células muertas mientras hidrata la piel seca."," Revitaliza y suaviza la textura de piel."," La rica textura puede parecer pegajosa pero en realidad deja un acabado refrescante."], 
        category: "mixsoon",
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
        category: "mixsoon",
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
        category: "mixsoon",
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
        category: "mixsoon",
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
        category: "mixsoon",
        imageSize: "large"
      },
      //skin1004
     {
        id: "skin1004-serum-centella-madagascar-30ml",
        name: "Serum Centella Madagascar",
        tamanio: "30ml",
        price: "$12.30",
        src: "/images/skin1004/serum-centella-madagascar-30ml.jpg",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
        {
        id: "skin1004-serum-centella-madagascar-55ml",
        name: "Serum Centella Madagascar",
        tamanio: "55ml",
        price: "$22.10",
        src: "/images/skin1004/serum-centella-madagascar-55ml.png",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
        {
        id: "skin1004-serum-centella-madagascar-100ml",
        name: "Serum Centella Madagascar",
        tamanio: "100ml",
        price: "$30.00",
        src: "/images/skin1004/serum-centella-madagascar-100ml.jpg",
        description: "Tipo de piel: sensible, mixta con tendencia a seca.",
        benefits: ["Adecuada para todo tipo de piel y mejora su salud",
         "Hidrata, calma y fortalece la barrera cutánea con un 100% de extracto de centella asiática de Madagascar.",
          "Equilibra el nivel natural agua - aceite y repara piel dañada, ayuda con el irritamiento de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-serum-tono-iluminador-30ml",
        name: "Serum Tono Iluminador",
        tamanio: "30ml",
        price: "$13.10",
        src: "/images/skin1004/serum-tono-iluminador-30ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-serum-tono-iluminador-50ml",
        name: "Serum Tono Iluminador",
        tamanio: "50ml",
        price: "$21.00",
        src: "/images/skin1004/serum-tono-iluminador-50ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-serum-tono-iluminador-100ml",
        name: "Serum Tono Iluminador",
        tamanio: "100ml",
        price: "$30.00",
        src: "/images/skin1004/serum-tono-iluminador-100ml.jpg",
        description: "Tipo de piel: hiperpigmentación, descoloración e inflamación.",
        benefits: ["Elimina celulas muertas de la piel",
         "Contiene MadeWhite™ con beneficios calmantes y aclarantes de piel.",
          "Doble función, hidratación profunda y mejora el tono de piel."],
        category: "skin1004",
        imageSize: "medium"
      },
       	{
        id: "skin1004-ampolla-serum-poremizing-30ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "30ml",
        price: "$12.95",
        src: "/images/skin1004/ampolla-serum-poremizing-30ml.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "skin1004",
        imageSize: "medium"
      },
      
       	{
        id: "skin1004-ampolla-serum-poremizing-50ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "50ml",
        price: "$21.50",
        src: "/images/skin1004/ampolla-serum-poremizing-50ml.png",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "skin1004",
        imageSize: "medium"
      },
       	{
        id: "skin1004-ampolla-serum-poremizing-100ml",
        name: "Ampolla - Serúm Poremizing",
        tamanio: "100ml",
        price: "$27.40",
        src: "/images/skin1004/ampolla-serum-poremizing-100ml.webp",
        description: "Tipo de piel: Grasa con poros abiertos y puntos negros.",
        benefits: ["Fortalece la barrera de la piel.",
         "Diseñada para pieles grasas para minimizar la apariencia de los poros.",
        "Elimina células muertas de la piel y desechos de los poros."],
        category: "skin1004",
        imageSize: "medium"
      },
 	{
        id: "skin1004-ampolla-serum-teatrica-30ml",
        name: "Ampolla - Serúm Tea-Trica",
        tamanio: "30ml",
        price: "$12.30",
        src: "/images/skin1004/ampolla-serum-teatrica-30ml.jpg",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["Efectivo para el cuidado de poros y textura de la piel.",
        "Regula la producción de sebo.",
         "Apto para la piel propensa a ser grasa y al acné.",
        "Efectos calmantes para la irritación de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },

 	{
        id: "skin1004-ampolla-serum-teatrica-100ml",
        name: "Ampolla - Serúm Tea-Trica",
        tamanio: "100ml",
        price: "$30.10",
        src: "/images/skin1004/ampolla-serum-teatrica-100ml.jpg",
        description: "Tipo de piel: Grasa propensa al acné.",
        benefits: ["Efectivo para el cuidado de poros y textura de la piel.",
        "Regula la producción de sebo.",
         "Apto para la piel propensa a ser grasa y al acné.",
        "Efectos calmantes para la irritación de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-ampolla-serum-probio-cica-30ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "30ml",
        price: "$13.30",
        src: "/images/skin1004/ampolla-serum-probio-cica-30ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "skin1004",
        imageSize: "medium"
      },
 {
        id: "skin1004-ampolla-serum-probio-cica-50ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "50ml",
        price: "$25.20",
        src: "/images/skin1004/ampolla-serum-probio-cica-50ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-serum-probio-cica-95ml",
        name: "Ampolla - Serúm Probi-Cica",
        tamanio: "95ml",
        price: "$31.00",
        src: "/images/skin1004/ampolla-serum-probio-cica-95ml.jpg",
        description: "Tipo de piel: Piel seca y con líneas finas de expresión. Anti-edad.",
        benefits: ["No contiene fragancias ni colorantes artificiales, es apta para todo tipo de piel.",
        "Mantiene la humedad de la piel sin ninguna sensación pegajosa o grasosa.",
         "Repara la barrera cutánea débil y dañada para evitar la evaporación de la humedad."],
        category: "skin1004",
        imageSize: "medium"
      },
 {
        id: "skin1004-hyalu-cica-blue-serum-30ml",
        name: "Blue Serúm Hyalu-Cica",
        tamanio: "30ml",
        price: "$16.40",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-blue-30ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Un serum diseñado para pieles deshidratadas, secas y sensibles que necesitan una hidratación profunda y duradera.",
         "Contiene 5 tipos de ácido hialurónico y ceramida que ayudan a aumentar el nivel de hidratación de la piel.",
        "Alivia las molestias cutáneas y calma las irritaciones, repara la barrera cutánea débil y sensible."],
        category: "skin1004",
        imageSize: "medium"
      }, {
        id: "skin1004-hyalu-cica-blue-serum-50ml",
        name: "Blue Serúm Hyalu-Cica",
        tamanio: "50ml",
        price: "$22.90",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-blue-50ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Un serum diseñado para pieles deshidratadas, secas y sensibles que necesitan una hidratación profunda y duradera.",
         "Contiene 5 tipos de ácido hialurónico y ceramida que ayudan a aumentar el nivel de hidratación de la piel.",
        "Alivia las molestias cutáneas y calma las irritaciones, repara la barrera cutánea débil y sensible."],
        category: "skin1004",
        imageSize: "medium"
      },
      {
        id: "skin1004-ampolla-serum-hyalu-cica-50ml",
        name: "Ampolla - Serúm Hyalu-Cica",
        tamanio: "50ml",
        price: "$23.60",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-50ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Apto para uso posterior a limpieza facial.",
         "Hidratación profunda y duradera mientras calma la piel.",
        "Fortalece la barrera cutánea débil y sensible para mejorar la salud general de la piel.",
      "Se encuentra conformada por 5 tipos de ácido hialurónico y ceramida para aumentar el nivel de hidratación de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-serum-hyalu-cica-100ml",
        name: "Ampolla - Serúm Hyalu-Cica",
        tamanio: "100ml",
        price: "$26.50",
        src: "/images/skin1004/ampolla-serum-hyalu-cica-100ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Apto para uso posterior a limpieza facial.",
         "Hidratación profunda y duradera mientras calma la piel.",
        "Fortalece la barrera cutánea débil y sensible para mejorar la salud general de la piel.",
      "Se encuentra conformada por 5 tipos de ácido hialurónico y ceramida para aumentar el nivel de hidratación de la piel."],
        category: "skin1004",
        imageSize: "medium"
      },
        {
        id: "skin1004-ampolla-shot-retinol-0.2-30ml",
        name: "Ampolla Shot Retinol 0.2%",
        tamanio: "30ml",
        price: "$26.50",
        src: "/images/skin1004/ampolla-shot-retinol-0.2-30ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Ampolla enriquecida con retinol y microespiculas para potenciar la elasticidad y firmeza de la piel.",
         "La combinación de retinol y escualano potencia la elasticidad y fortalece la barrera cutánea",
        "Su fórmula elastica se adhiere perfectamente a la piel para brindarle un cuidado intensivo que realza su elasticidad y firmeza."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-shot-niacinamida-30ml",
        name: "Ampolla Shot Niacinamida",
        tamanio: "30ml",
        price: "$23.50",
        src: "/images/skin1004/ampolla-shot-niacinamida-30ml.jpg",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Ampolla iluminadora con microespiculas para mejorar el tono desigual de la piel, reducir los poros y potenciar su luminosidad.",
         "Combaten los poros horizontales, verticales y pigmentados, a lavez que refinan y suavizan la piel.",
        "Enriquecida con glucósido de ascorbillo para unificar el tono y lograr un efecto iluminador general."],
        category: "skin1004",
        imageSize: "medium"
      },
       {
        id: "skin1004-ampolla-shot-matrixyl-10-30ml",
        name: "Ampolla Shot Matrixyl 10%",
        tamanio: "30ml",
        price: "$30.50",
        src: "/images/skin1004/ampolla-shot-matrixyl-10-30ml.webp",
        description: "Tipo de piel: Piel seca, irritada y sensible.",
        benefits: ["Aporta principios activos hidratantes a la piel para restaurar la firmeza y elasticidad de la piel.",
         "Las espículasas contienen centella asiática de Madagascar y pantenol para nutrir en profundiad y mejorar su salud general de la piel.",
        "Enriquecida con Maxtrixyl y ácido hialurónico, hidrata hasta las capas más profundas de la piel, fortaleciendo al mismo tiempo la piel debilitada y sensible."],
        category: "skin1004",
        imageSize: "medium"
      },
      //varias marcas
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 50 agujas",
        tamanio: "50 ml",
        marca: "VT cosmetics",
        price: "$37.50",
        src: "/images/varias-marcas/20. VT reedle shot 50.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 100 agujas",
        tamanio: "50 ml",
        marca: "VT cosmetics",
        price: "$43",
        src: "/images/varias-marcas/19. VT REEDLE SHOT 100.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 300 agujas",
        marca: "VT cosmetics",
        tamanio: "50 ml",
        price: "$57",
        src: "/images/varias-marcas/21. VT reedle shot 300.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      {
        id: "VT-reddle-shot-50ml",
        name: "Reddle shot 700 agujas",
        marca: "VT cosmetics",
        tamanio: "50 ml",
        price: "$63.50",
        src: "/images/varias-marcas/22. VT reedle shot 700.png",
        description:
          "Esta ampolla esta llena con varios calmante para la piel como extracto de cica, madecassoside y extracto de propóleos que ofrecen beneficios anti-inflamatorios.",
        benefits: [
          "Contiene extracto de Centella Asiática y ácido hialurónico de molécula pequeña, eficaz en la hidratación y protección de la piel.",
          "Utiliza ingredientes en forma de microagujas que proporcionan una mejor absorción y eficacia.",
          "Producto para el tratamiento de la piel, apto para todo tipo de puel , incluidas las pieles sensibles y propensas al acné.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      {
        id: "Medicube-serum-one-day-30ml",
        name: "sérum obe day exosome 7500",
        marca: "Medicube",
        tamanio: "30 ml",
        price: "$30.30",
        src: "/images/varias-marcas/24. medicube one day shot.png",
        description:
          "Este sérum esta infusionado con 7,500ppm de exosomas más pantenol y adenosina para barrer las impurezas de los poros, aumenta la elasticidad de la piel y aumenta los neveles de hidratción en la piel.",
        benefits: [
          "Reafirmación inmediata y definitiva de los poros notables.",
          "Las inyecciones de exosomas penetran la piel profunda y directamente, lo que mejora su absorción.",
          "Penetra en diez capas de la piel sin dejar sensación pegajosa.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      //ARENCIA
      {
        id: "Arencia-ampolla-holy-hyssop-50gr",
        name: "Sérum holy hyssop 30",
        marca: "Arencia",
        tamanio: "50 gramos",
        price: "$26.40",
        src: "/images/varias-marcas/25. Arencia holy hysoop.png",
        description:
          "Este sérum como gelatina esta formulado con extracto de hisopo francés, complejo de vitamina ACE y niacinamida para combatir la hiperpigmentación y redefine la textura de la piel.",
        benefits: [
          "Revitaliza e ilumina la piel apagada. Cuida los poros y ayuda a mejorar la textura de la piel.",
          "Potencia la luminosidad de la piel. Textura elástica que se siente ligera, fresca e hidratante.",
        ],
        category: "varias",
        imageSize: "medium",
      },
      {
        id: "Seoul-1988-serum-30ml",
        name: "Sérum facial: retinal liposome 2% + frijol fermentado",
        marca: "Seoul 1988",
        tamanio: "30 ml",
        price: "$30",
        src: "/images/varias-marcas/30. seoul 1988 crema.png",
        description:
          "El sérum SEOUL 1988 aporta los potentes efectos antiedad del 2% de retinal en liposomas a las capas más profundas de la piel para mejorar la elasticidad y combatir líneas finas, manchas oscuras y textura irregular.",
        benefits: [
          "Enriquecido con un 2% de retinal en liposomas y extracto de ginseng negro, el sérum SEOUL 1988 suaviza las líneas finas y las arrugas.",
          "Contiene niacinamida para difuminar la decoloración y aportar luminosidad a las zonas apagadas, logrando una apariencia más clara y uniforme.",
          "Contiene humectantes como la glicerina para atraer la humedad a la piel, junto con ingredientes calmantes como el bakuchiol. Esta combinación ayuda a reforzar la barrera cutánea y a minimizar los efectos secundarios comunes del retinal.",
        ],
        category: "varias",
        imageSize: "medium",
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
     const variasProducts = computed(() => 
      (products.filter(product => product.category === 'varias') || []).filter(p => p && p.id)
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
    anuaProducts,
    bojProducts,
    mixsoonProducts,
    skin1004Products,
    celimaxProducts,
    cosrxProducts,
      variasProducts,
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

.serums-esencias-page {
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
.product-info h4 {
  color: #b218ca;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
  line-height: 1.3;
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