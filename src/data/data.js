export const img = (id, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=70&auto=format&fit=crop`

export const CONTACT = {
  phone: '+92 300 1234567',
  phoneShort: '0300 1234567',
  helpline: '111-090-ZEBI',
  phoneLink: '+923001234567',
  whatsapp: '923154567890',
  email: 'info@zebisalon.com',
  address: 'Plot 12-A, Shahrah-e-Faisal, Clifton, Karachi, Pakistan',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop Services', href: '#shop' },
  { label: 'Skin Care', href: '#shop', category: 'Skin' },
  { label: 'Hair Care', href: '#shop', category: 'Hair' },
  { label: 'Spa', href: '#shop', category: 'Spa' },
  { label: 'Makeover', href: '#shop', category: 'Makeover' },
  { label: 'Offers', href: '#offers' },
  { label: 'Branches', href: '#ateliers' },
  { label: 'Contact', href: '#contact' },
]

export const heroSlides = [
  {
    image: img('photo-1560066984-138dadb4c035', 1600),
    eyebrow: 'Premium Hair Studio',
    title: 'Style That Speaks',
    sub: 'Precision cuts, keratin therapy and boutique colour by master stylists.',
    ctaLabel: 'Book an Appointment',
    ctaHref: '#contact',
  },
  {
    image: img('photo-1516975080664-ed2fc6a32937', 1600),
    eyebrow: 'Luxury Spa & Makeover',
    title: 'Look Stunning, Feel Radiant',
    sub: 'Signature facials, spa rituals and bridal makeovers for every occasion.',
    ctaLabel: 'Explore Offers',
    ctaHref: '#offers',
  },
  {
    image: img('photo-1521590832167-7bcbfaa6381f', 1600),
    eyebrow: 'Karachi · Since 2011',
    title: 'Your Beauty Destination',
    sub: 'Three branches across the city, one promise of premium care.',
    ctaLabel: 'Find a Branch',
    ctaHref: '#ateliers',
  },
]

export const services = [
  { id: 'hair-1', category: 'Hair', name: 'Hair Cut & Styling', price: 500, oldPrice: 700, rating: 4.8, reviews: 214, image: img('photo-1560066984-138dadb4c035'), tag: 'Bestseller', description: 'Precision cut and style by senior stylists.' },
  { id: 'hair-2', category: 'Hair', name: 'Keratin Treatment', price: 5000, oldPrice: 6500, rating: 4.9, reviews: 188, image: img('photo-1580618672591-eb180b1a973f'), tag: 'Signature', description: 'Frizz-free, silky-smooth hair lasting months.' },
  { id: 'hair-3', category: 'Hair', name: 'Hair Styling + Blow Dry', price: 350, oldPrice: 400, rating: 4.7, reviews: 96, image: img('photo-1595476108010-b4d1f102b1b1'), description: 'Salon blowout with long-lasting volume.' },
  { id: 'hair-4', category: 'Hair', name: 'Hair Extensions', price: 8000, rating: 4.6, reviews: 74, image: img('photo-1521590832167-7bcbfaa6381f'), tag: 'New', description: 'High-quality human hair extensions.' },
  { id: 'hair-5', category: 'Hair', name: 'Beard & Shaving', price: 200, oldPrice: 250, rating: 4.7, reviews: 132, image: img('photo-1516975080664-ed2fc6a32937'), description: 'Classic hot-towel shave and beard sculpting.' },
  { id: 'hair-6', category: 'Hair', name: 'Hair Colour & Global', price: 3500, rating: 4.5, reviews: 61, image: img('photo-1583001931096-959e9a1a6223'), soldOut: true, description: 'Professional ammonia-free colouring.' },
  { id: 'skin-1', category: 'Skin', name: 'Whitening Facial', price: 2500, oldPrice: 3200, rating: 4.8, reviews: 240, image: img('photo-1570172619644-dfd03ed5d881'), tag: 'Bestseller', description: 'Brightening facial for radiant, even skin.' },
  { id: 'skin-2', category: 'Skin', name: 'Gold Facial', price: 2500, oldPrice: 3000, rating: 4.9, reviews: 175, image: img('photo-1600334129128-685c5582fd35'), tag: 'Luxury', description: '24k gold facial for a dewy, youthful glow.' },
  { id: 'skin-3', category: 'Skin', name: 'Hydra Facial', price: 2500, rating: 4.7, reviews: 158, image: img('photo-1596178065887-1198b6148b2b'), description: 'Deep-hydration infusion for dull skin.' },
  { id: 'skin-4', category: 'Skin', name: 'Face Wash & Steam', price: 400, oldPrice: 500, rating: 4.6, reviews: 203, image: img('photo-1470259078422-826894b933aa'), description: 'Cleanse, steam and blackhead removal.' },
  { id: 'skin-5', category: 'Skin', name: 'Face & Body Waxing', price: 500, rating: 4.6, reviews: 142, image: img('photo-1522337660859-02fbefca4702'), description: 'Gentle waxing for silky-smooth skin.' },
  { id: 'skin-6', category: 'Skin', name: 'Threading & Eyebrow', price: 250, rating: 4.7, reviews: 318, image: img('photo-1503236823255-94609f598e71'), description: 'Precise facial threading and brow shaping.' },
  { id: 'spa-1', category: 'Spa', name: 'Manicure & Pedicure', price: 200, oldPrice: 350, rating: 4.7, reviews: 120, image: img('photo-1610992015732-2449b76344bc'), tag: 'Popular', description: 'Relaxing nail care with gel finish.' },
  { id: 'spa-2', category: 'Spa', name: 'Full Body Massage', price: 3000, rating: 4.9, reviews: 167, image: img('photo-1544161515-4ab6ce6db874'), tag: 'Luxury', description: 'Swedish & deep-tissue relaxation massage.' },
  { id: 'spa-3', category: 'Spa', name: 'Nail Art & Gel Polish', price: 800, rating: 4.5, reviews: 90, image: img('photo-1503236823255-94609f598e71'), soldOut: true, description: 'Custom nail art and premium gel polish.' },
  { id: 'spa-4', category: 'Spa', name: 'Spa Facial Ritual', price: 4500, oldPrice: 5500, rating: 4.8, reviews: 64, image: img('photo-1519823551278-64ac92734fb1'), description: 'Full luxury spa facial with massage.' },
  { id: 'mk-1', category: 'Makeover', name: 'Party Makeover', price: 1200, oldPrice: 1500, rating: 4.6, reviews: 210, image: img('photo-1633681926022-84c23e8cb2d6'), tag: 'Popular', description: 'Full glam makeup for any occasion.' },
  { id: 'mk-2', category: 'Makeover', name: 'Bridal Makeover', price: 15000, oldPrice: 18000, rating: 5.0, reviews: 88, image: img('photo-1560066984-138dadb4c035'), tag: 'Signature', description: 'Complete bridal hair & makeup package.' },
  { id: 'mk-3', category: 'Makeover', name: 'Guest Makeover', price: 800, rating: 4.5, reviews: 155, image: img('photo-1583001931096-959e9a1a6223'), tag: 'New', description: 'Soft glam look for wedding guests.' },
]

function findService(id) {
  return services.find((s) => s.id === id)
}

export const signature = [
  'hair-2',
  'mk-2',
  'hair-1',
  'skin-2',
  'spa-2',
  'hair-5',
]
  .map((id) => findService(id))
  .filter(Boolean)

export const offers = [
  'hair-1',
  'mk-1',
  'skin-1',
  'hair-4',
  'spa-1',
  'skin-4',
  'spa-4',
  'mk-3',
]
  .map((id) => findService(id))
  .filter(Boolean)

export const categories = [
  { name: 'Skin Care', tabId: 'Skin', image: img('photo-1570172619644-dfd03ed5d881') },
  { name: 'Hair Care', tabId: 'Hair', image: img('photo-1560066984-138dadb4c035') },
  { name: 'Spa', tabId: 'Spa', image: img('photo-1544161515-4ab6ce6db874') },
  { name: 'Makeover', tabId: 'Makeover', image: img('photo-1633681926022-84c23e8cb2d6') },
]

export const shopTiles = [
  { label: 'Whitening Facial', href: '#shop', image: img('photo-1570172619644-dfd03ed5d881') },
  { label: 'Hair & Keratin', href: '#shop', image: img('photo-1580618672591-eb180b1a973f') },
  { label: 'Spa & Massage', href: '#shop', image: img('photo-1544161515-4ab6ce6db874') },
  { label: 'Makeup & Bridal', href: '#shop', image: img('photo-1633681926022-84c23e8cb2d6') },
  { label: 'Nails & Waxing', href: '#shop', image: img('photo-1610992015732-2449b76344bc') },
  { label: 'Eye & Brow', href: '#shop', image: img('photo-1503236823255-94609f598e71') },
]

export const galleryMarquee = [
  'photo-1521590832167-7bcbfaa6381f',
  'photo-1560066984-138dadb4c035',
  'photo-1516975080664-ed2fc6a32937',
  'photo-1570172619644-dfd03ed5d881',
  'photo-1544161515-4ab6ce6db874',
  'photo-1633681926022-84c23e8cb2d6',
  'photo-1580618672591-eb180b1a973f',
  'photo-1596178065887-1198b6148b2b',
]

export const beforeAfter = {
  before: img('photo-1570172619644-dfd03ed5d881', 800),
  after: img('photo-1522337660859-02fbefca4702', 800),
}

export const ateliers = [
  {
    name: 'Zebi Atelier — Clifton',
    address: 'Plot 12-A, Shahrah-e-Faisal, Block 4, Clifton, Karachi',
    timings: 'Mon-Sun: 10:00 AM – 10:00 PM PST',
    phone: '+92 300 1234567',
    image: img('photo-1521590832167-7bcbfaa6381f', 1200),
  },
  {
    name: 'Zebi Atelier — Gulshan',
    address: 'Shop 8, Alamgir Center, Block 6, Gulshan-e-Iqbal, Karachi',
    timings: 'Mon-Sun: 11:00 AM – 11:00 PM PST',
    phone: '+92 300 1234567',
    image: img('photo-1516975080664-ed2fc6a32937', 1200),
  },
  {
    name: 'Zebi Atelier — DHA Phase 5',
    address: 'Commercial Area, Phase 5, DHA, Karachi',
    timings: 'Mon-Fri: 10:00 AM – 9:00 PM PST',
    phone: '+92 300 1234567',
    image: img('photo-1560066984-138dadb4c035', 1200),
  },
]

export const testimonials = [
  { name: 'Ayesha Khan', role: 'Bridal Makeover', quote: 'Zebi made my wedding day magical. The makeup lasted all night!', rating: 5, image: img('photo-1633681926022-84c23e8cb2d6', 200) },
  { name: 'Fatima Ahmed', role: 'Keratin Treatment', quote: 'Best keratin treatment in Karachi. My hair has never felt this smooth.', rating: 5, image: img('photo-1560066984-138dadb4c035', 200) },
  { name: 'Hira Raza', role: 'Spa & Facial', quote: 'The hydra facial was pure bliss. Very professional team.', rating: 5, image: img('photo-1522337660859-02fbefca4702', 200) },
]

export const timingBadge = 'Mon-Sun: 10:00 AM – 10:00 PM PST'

export function formatPKR(amount) {
  return `PKR ${amount.toLocaleString('en-PK')}`
}

export function discountOf(service) {
  if (!service.oldPrice) return null
  return Math.round((1 - service.price / service.oldPrice) * 100)
}

export function findByCategory(category) {
  return services.filter((s) => s.category === category)
}