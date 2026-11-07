
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Lourdes Llera Rico",
  "description": "Tu inmobiliaria de confianza en Gijón y toda Asturias. Compra, venta, alquiler y financiación.",
  "socialLinks": {

},
  "officeLocations": [{
  "name": "Oficina Gijón — Centro",
  "address": ["Calle Covadonga 50, Bajo 2", "Gijón, Asturias"],
  "phone": "+34684664207",
  "email": "comercial@maisonpropiedades.es"
}],
  "copyright": "© 2026 Maison Propiedades. Todos los derechos reservados."
};
}
