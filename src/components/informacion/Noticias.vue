<template>
  <!-- Modal de Noticias -->
  <div v-if="showNewsModal" class="news-modal-overlay" @click="closeNewsModal">
    <div class="news-modal" @click.stop>
      <!-- Botón cerrar -->
      <button class="close-btn" @click="closeNewsModal">✕</button>

      <!-- Carrusel de noticias -->
      <div class="news-carousel">
        <div class="carousel-slides">
          <div 
            v-for="(news, index) in newsItems" 
            :key="index"
            class="news-slide"
            :class="{ active: currentNewsIndex === index }"
          >
            <div class="news-icon">{{ news.icon }}</div>
            <h2 class="news-title">{{ news.title }}</h2>
            <p class="news-description">{{ news.description }}</p>
            <button class="news-cta" @click="handleNewsCTA(news)">{{ news.cta }}</button>
          </div>
        </div>

        <!-- Puntos indicadores de navegación -->
        <div class="carousel-dots">
          <button 
            v-for="(n, index) in newsItems"
            :key="index"
            class="dot"
            :class="{ active: currentNewsIndex === index }"
            @click="currentNewsIndex = index"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Noticias',
  setup() {
    const showNewsModal = ref(false)
    const currentNewsIndex = ref(0)
    let autoPlayInterval = null

    const newsItems = [
      {
        icon: '✨',
        title: 'Nuevo Catálogo K-Beauty',
        description: 'Acabamos de agregar marcas premium coreanas exclusivas. Descubre productos revolucionarios para tu rutina diaria.',
        cta: 'Ver Productos'
      },
      {
        icon: '🎁',
        title: 'Promoción Especial',
        description: 'Compra 2 productos y obtén 15% descuento. Válido hasta el próximo viernes en toda nuestra colección.',
        cta: 'Comprar Ahora'
      },
      {
        icon: '💚',
        title: 'Tips de Skincare',
        description: 'Aprende cómo crear la rutina perfecta según tu tipo de piel con nuestros expertos en cosética coreana.',
        cta: 'Leer Consejos'
      },
      {
        icon: '🚚',
        title: 'Envíos Rápidos',
        description: 'Ahora con entregas al día siguiente en Quito y cobertura nacional en 3-5 días hábiles.',
        cta: 'Saber Más'
      }
    ]

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        currentNewsIndex.value = (currentNewsIndex.value + 1) % newsItems.length
      },57000)
    }

    const stopAutoPlay = () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
      }
    }

    const closeNewsModal = () => {
      showNewsModal.value = false
      stopAutoPlay()
    }

    const handleNewsCTA = (news) => {
      console.log('CTA clicked:', news.title)
      // Aquí puedes agregar navegación o acciones según la noticia
    }

    onMounted(() => {
      // Mostrar modal cada vez que se ingresa a la página
      setTimeout(() => {
        showNewsModal.value = true
        startAutoPlay()
      }, 500) // Pequeño delay para mejor UX
    })

    return {
      showNewsModal,
      closeNewsModal,
      currentNewsIndex,
      newsItems,
      handleNewsCTA
    }
  }
}
</script>

<style scoped>
.news-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.news-modal {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.4s ease;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  z-index: 10;
}

.close-btn:hover {
  transform: scale(1.1);
}

.news-carousel {
  position: relative;
}

.carousel-slides {
  position: relative;
  min-height: 350px;
}

.news-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease;
  pointer-events: none;
  text-align: center;
  padding: 1rem 0;
}

.news-slide.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.news-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.news-title {
  font-size: 1.8rem;
  color: #4a5759;
  margin-bottom: 1rem;
  font-weight: 700;
}

.news-description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.news-cta {
  background: linear-gradient(135deg, #1100ffaf, #564fea90, #1100ffaf);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(17, 0, 255, 0.3);
}

.carousel-dots {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #83c5be, #26c0b1);
  transform: scale(1.3);
}

.dot:hover {
  background: #bbb;
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

/* Responsive */
@media (max-width: 600px) {
  .news-modal {
    padding: 1.5rem;
    max-width: 95%;
  }

  .news-title {
    font-size: 1.4rem;
  }

  .news-description {
    font-size: 0.85rem;
  }

  .carousel-slides {
    min-height: 300px;
  }
}
</style>
