const defaultPhone = "51999999999";

export function buildWhatsAppLink(message: string, phone = defaultPhone) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}