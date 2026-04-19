export const WHATSAPP_NUMBER = '919100404352'

export const WHATSAPP_BOOKING_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book an appointment')}`

// Note: AppointmentFormData and openWhatsApp are deprecated as we moved to a direct WhatsApp link approach.
// Keeping the base URL for simple redirections.
