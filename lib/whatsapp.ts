export const WHATSAPP_NUMBER = '919100404352'

export const WHATSAPP_BOOKING_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book an appointment')}`

export interface AppointmentFormData {
  name: string
  phone: string
  specialty: string
  date: string
  message?: string
}

export function buildWhatsAppMessage(data: AppointmentFormData): string {
  const text =
    `Hi Elite Plus Medical Centre,\n\nAppointment Request:\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Specialty: ${data.specialty}\n` +
    `Preferred Date: ${data.date}\n` +
    `Message: ${data.message || 'None'}`
  return encodeURIComponent(text)
}

export function openWhatsApp(data: AppointmentFormData): void {
  const msg = buildWhatsAppMessage(data)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
}
