// Datos centrales del sitio — editá todo desde acá para reutilizar la demo.

export const site = {
  name: "Clínica Vida Plus",
  tagline: "Salud, estética y bienestar",
  description:
    "Clínica moderna de salud, odontología y estética en Ciudad del Este. Atención personalizada con profesionales certificados.",
  whatsapp: {
    // Formato internacional sin signos para el enlace wa.me (Paraguay +595).
    number: "595981123456",
    display: "0981 123 456",
    message:
      "Hola, quiero reservar un turno en Clínica Vida Plus. ¿Podrían pasarme los horarios disponibles?",
  },
  instagram: "https://instagram.com",
  address: "Av. San José, Ciudad del Este, Paraguay",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ciudad+del+Este+Paraguay",
  mapsEmbed:
    "https://www.google.com/maps?q=Ciudad%20del%20Este%20Paraguay&output=embed",
  hours: [
    { day: "Lunes a viernes", time: "08:00 — 18:00" },
    { day: "Sábados", time: "08:00 — 12:00" },
    { day: "Domingos", time: "Cerrado" },
  ],
};

export function waLink(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Antes y Después", href: "#resultados" },
  { label: "Profesionales", href: "#profesionales" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const stats = [
  { value: "+8", label: "Años de experiencia" },
  { value: "+3.500", label: "Pacientes atendidos" },
  { value: "100%", label: "Atención personalizada" },
  { value: "+12", label: "Profesionales certificados" },
];

export const services = [
  {
    icon: "Tooth",
    name: "Odontología general",
    description:
      "Diagnóstico, prevención y tratamientos integrales para una sonrisa sana y duradera.",
  },
  {
    icon: "Sparkles",
    name: "Blanqueamiento dental",
    description:
      "Tecnología segura para una sonrisa más blanca y luminosa en pocas sesiones.",
  },
  {
    icon: "Droplets",
    name: "Limpieza facial profunda",
    description:
      "Higiene y revitalización de la piel para un rostro fresco, limpio y radiante.",
  },
  {
    icon: "Flower2",
    name: "Tratamientos estéticos",
    description:
      "Procedimientos personalizados para realzar tu belleza natural con resultados sutiles.",
  },
  {
    icon: "Zap",
    name: "Depilación láser",
    description:
      "Eliminación progresiva del vello con equipos de última generación y máxima comodidad.",
  },
  {
    icon: "Stethoscope",
    name: "Consulta médica estética",
    description:
      "Evaluación profesional y plan a medida según tus objetivos de salud y estética.",
  },
];

export const results = [
  {
    title: "Blanqueamiento dental",
    detail: "Sonrisa más blanca en 2 sesiones",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Limpieza facial profunda",
    detail: "Piel revitalizada y luminosa",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tratamiento estético facial",
    detail: "Rostro fresco y rejuvenecido",
    before: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  },
];

export const professionals = [
  {
    name: "Dra. Camila Benítez",
    role: "Odontóloga",
    bio: "Especialista en odontología estética y rehabilitación oral con enfoque en sonrisas naturales.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    tags: ["Odontología estética", "+8 años"],
  },
  {
    name: "Dr. Rodrigo Martínez",
    role: "Medicina estética",
    bio: "Médico estético dedicado a tratamientos faciales mínimamente invasivos y resultados armónicos.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    tags: ["Medicina estética", "Certificado"],
  },
  {
    name: "Lic. Sofía Gómez",
    role: "Cosmetología profesional",
    bio: "Cosmetóloga apasionada por el cuidado de la piel y los tratamientos de belleza personalizados.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    tags: ["Cosmetología", "Skincare"],
  },
];

export const testimonials = [
  {
    name: "María Fernanda",
    text: "Excelente atención de principio a fin. El equipo es súper profesional y el resultado de mi blanqueamiento superó mis expectativas.",
    rating: 5,
  },
  {
    name: "Lucas Ramírez",
    text: "Me sentí cómodo y bien atendido en todo momento. La clínica es impecable y muy moderna. ¡100% recomendable!",
    rating: 5,
  },
  {
    name: "Andrea Villalba",
    text: "Hice un tratamiento facial y quedé encantada. Notan cada detalle y te explican todo el proceso con mucha paciencia.",
    rating: 5,
  },
  {
    name: "José Caballero",
    text: "Profesionales de primer nivel. Reservé el turno por WhatsApp y fue rapidísimo. Volveré sin dudas.",
    rating: 5,
  },
];
