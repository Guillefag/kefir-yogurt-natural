// Todos los datos editables de la landing están acá.
// Cambiá número de WhatsApp, precios y productos sin tocar el diseño.

export const site = {
  name: 'Kefir Natural',
  tagline: 'Yogurt de kefir artesanal, vivo y sin aditivos',
  description:
    'Kefir de leche artesanal, fermentado en pequeños lotes con gránulos vivos. Sin conservantes, sin azúcar agregada. Pedilo por WhatsApp.',
  // Número en formato internacional, sin "+" ni espacios. Ej: 5491112345678
  whatsapp: '5490000000000',
  instagram: '', // Ej: 'kefirnatural' (dejar vacío para ocultar)
  zone: 'Entregas a domicilio en tu zona', // Editar con barrios / ciudad
  deliveryDays: 'Entregas martes y viernes',
};

export type Product = {
  name: string;
  size: string;
  price: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    name: 'Kefir Natural',
    size: '500 ml',
    price: '$ 0.000',
    description: 'Clásico, suave y ácido. Ideal para arrancar el día.',
  },
  {
    name: 'Kefir Natural',
    size: '1 litro',
    price: '$ 0.000',
    description: 'El favorito de la casa. Rinde toda la semana.',
    featured: true,
  },
  {
    name: 'Kefir con miel',
    size: '500 ml',
    price: '$ 0.000',
    description: 'Endulzado apenas con miel pura. Perfecto para los chicos.',
  },
];

export const benefits = [
  {
    title: 'Probióticos vivos',
    text: 'Más variedad de bacterias y levaduras beneficiosas que un yogurt común.',
  },
  {
    title: 'Mejor digestión',
    text: 'Ayuda a equilibrar la flora intestinal. Muchas personas con intolerancia leve a la lactosa lo toleran bien.',
  },
  {
    title: '100% natural',
    text: 'Solo leche entera y gránulos de kefir. Sin conservantes, espesantes ni azúcar agregada.',
  },
  {
    title: 'Hecho a mano',
    text: 'Fermentado en pequeños lotes, frasco por frasco, y entregado fresco.',
  },
];

export const steps = [
  { title: 'Elegí', text: 'Mirá las presentaciones y elegí cuántos frascos querés.' },
  { title: 'Escribinos', text: 'Mandanos tu pedido por WhatsApp con tu dirección.' },
  { title: 'Recibilo', text: 'Te lo llevamos fresco, recién fermentado.' },
];

export const faqs = [
  {
    q: '¿Qué es el kefir?',
    a: 'Es una leche fermentada con gránulos de kefir, un cultivo de bacterias y levaduras. El resultado es una bebida cremosa, levemente ácida y llena de probióticos.',
  },
  {
    q: '¿Cuánto dura en la heladera?',
    a: 'Entre 10 y 14 días refrigerado. Con los días se pone un poco más ácido, eso es normal.',
  },
  {
    q: '¿Cómo se consume?',
    a: 'Solo, con frutas, granola, en licuados o como base de aderezos. Lo ideal es un vaso por día.',
  },
  {
    q: '¿Los frascos se devuelven?',
    a: 'Sí. Si nos devolvés el frasco limpio en la próxima entrega, te hacemos un descuento.',
  },
];

export function whatsappLink(message = 'Hola! Quiero hacer un pedido de kefir 🥛') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
