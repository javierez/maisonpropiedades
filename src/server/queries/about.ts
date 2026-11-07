import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Nosotros",
  "subtitle": "Tu inmobiliaria en Gijón y en toda Asturias",
  "content": "Somos Maison Propiedades, una inmobiliaria joven y dinámica con oficina en el centro de Gijón, en la calle Covadonga. Nos dedicamos a la compra, venta y alquiler de pisos, chalets, casas, fincas, solares y garajes en todas las zonas de Gijón y en el resto de Asturias, acompañando a cada cliente desde el primer momento hasta la firma.",
  "content2": "Nuestra forma de trabajar se basa en el trato cercano y la gestión integral de cada operación. Nos ocupamos de la valoración, la publicación, las visitas y el cierre, y también tramitamos la financiación hipotecaria con las mejores condiciones del mercado, incluyendo hipotecas de hasta el 100% para viviendas, chalets y fincas.",
  "image": "/placeholder-about.jpg",
  "services": [{
  "title": "Compra de vivienda",
  "icon": "Home"
}, {
  "title": "Venta de tu inmueble",
  "icon": "Handshake"
}, {
  "title": "Alquiler",
  "icon": "Key"
}, {
  "title": "Gestión hipotecaria",
  "icon": "Calculator"
}, {
  "title": "Fincas, solares y garajes",
  "icon": "LandPlot"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Nuestros Servicios",
  "aboutSectionTitle": "Nuestra Misión",
  "buttonName": "Contacta a Nuestro Equipo",
  "showKPI": false,
  "kpi3Name": "Zonas de actuación",
  "kpi3Data": "7",
  "values": [{
  "title": "Cercanía",
  "description": "Una agencia joven y dinámica: te atendemos de forma directa y personal en cada paso de la operación.",
  "icon": "Heart"
}, {
  "title": "Acompañamiento completo",
  "description": "Estamos a tu disposición para resolver cualquier consulta y te acompañamos durante todo el proceso de compra o venta.",
  "icon": "Users"
}, {
  "title": "Las mejores garantías del mercado",
  "description": "Trabajamos la financiación y las condiciones de cada operación buscando las mejores garantías económicas para nuestros clientes.",
  "icon": "ShieldCheck"
}],
  "team": [{
  "name": "Lourdes Llera Rico",
  "role": "Titular de la agencia",
  "email": "comercial@maisonpropiedades.es",
  "phone": "+34684664207"
}],
  "extendedServices": [{
  "title": "Compra de vivienda",
  "description": "Te ayudamos a encontrar tu casa entre pisos, chalets, casas y villas en Gijón y en toda Asturias, y te acompañamos en cada visita hasta la firma.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-card-1_ngvlGliu.jpg",
  "icon": "Home"
}, {
  "title": "Venta de tu inmueble",
  "description": "Nos encargamos de la gestión integral de la venta: valoración, publicación en los principales portales, visitas y negociación.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-card-2_nra1iHCT.jpg",
  "icon": "Handshake"
}, {
  "title": "Alquiler",
  "description": "Gestionamos el alquiler de tu vivienda o local y buscamos inquilinos con las mejores garantías del mercado.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-card-3_3D_C14ol.jpg",
  "icon": "Key"
}, {
  "title": "Gestión hipotecaria",
  "description": "Tramitamos hipotecas de hasta el 100% para viviendas, chalets o fincas, con las mejores condiciones económicas del mercado.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-card-4_-iYevaBK.jpg",
  "icon": "Calculator"
}, {
  "title": "Fincas, solares y garajes",
  "description": "Comercializamos también fincas edificables, solares y plazas de garaje en Gijón y su área de influencia.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-card-5_9saWryIc.jpg",
  "icon": "LandPlot"
}],
  "nosotrosPageTitle": "Sobre Nosotros",
  "nosotrosPageSubtitle": "Una inmobiliaria joven, cercana y comprometida con cada cliente en Gijón y toda Asturias",
  "servicesPageTitle": "Nuestros Servicios",
  "servicesPageSubtitle": "Todo lo que necesitas para comprar, vender o alquilar tu inmueble en Asturias, en un solo lugar",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/nosotros-hero_xZMzAlEQ.jpg",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-hero_fVEquOw6.jpg",
  "servicesHeroVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/servicios-hero_ZTryNrfZ.mp4",
  "nosotrosHeroVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/nosotros-hero_jMrXukz4.mp4"
};
}
