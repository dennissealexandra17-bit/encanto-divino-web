import { reactive } from 'vue'

// Store global del carrito
export const cartStore = reactive({
  items: [],
  isOpen: false,

  // Agregar producto al carrito
  addItem(product) {
    // Crear una clave única que incluya el tono si existe
    const tonoKey = product.tonoSeleccionado ? `_${product.tonoSeleccionado.nombre.replace(/\s+/g, '-')}` : ''
    const uniqueId = product.id + tonoKey
    
    const existingItem = this.items.find(item => item.uniqueId === uniqueId)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.items.push({
        id: product.id,
        uniqueId: uniqueId,
        name: product.name,
        price: product.price,
        image: product.image,
        tonoSeleccionado: product.tonoSeleccionado || null,
        quantity: 1
      })
    }
  },

  // Remover producto del carrito
  removeItem(productId) {
    // Aceptar tanto productId como uniqueId
    const index = this.items.findIndex(item => item.uniqueId === productId || item.id === productId)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  },

  // Actualizar cantidad
  updateQuantity(productId, quantity) {
    // Aceptar tanto productId como uniqueId
    const item = this.items.find(item => item.uniqueId === productId || item.id === productId)
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId)
      } else {
        item.quantity = quantity
      }
    }
  },

  // Obtener total de productos
  get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0)
  },

  // Obtener precio total
  get totalPrice() {
    return this.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
      return total + (price * item.quantity)
    }, 0)
  },

  // Limpiar carrito
  clearCart() {
    this.items = []
  },

  // Abrir/cerrar carrito
  toggleCart() {
    this.isOpen = !this.isOpen
  },

  // Generar mensaje de WhatsApp
  generateWhatsAppMessage() {
    if (this.items.length === 0) return ''
    
    let message = '¡Hola! Me interesa comprar los siguientes productos de Encanto Divino K-Beauty:\n\n'
    
    this.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}`
      if (item.tonoSeleccionado) {
        message += ` - ${item.tonoSeleccionado.nombre}`
      }
      message += `\n`
      message += `   Cantidad: ${item.quantity}\n`
      message += `   Precio unitario: ${item.price}\n`
      message += `   Subtotal: $${(parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity).toLocaleString()}\n\n`
    })
    
    message += `💰 TOTAL: $${this.totalPrice.toLocaleString()}\n\n`
    message += '¿Podrías confirmar la disponibilidad y el método de pago? ¡Gracias!'
    
    return encodeURIComponent(message)
  },

  // Enviar a WhatsApp
  sendToWhatsApp() {
    const phoneNumber = '+593967372026' // Reemplaza con tu número
    const message = this.generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }
})