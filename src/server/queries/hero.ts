import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Gijón"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Tu inmobiliaria en Gijón y en toda Asturias",
  "subtitle": "Inmobiliaria joven y dinámica en Gijón. Compra, venta y alquiler de pisos, chalets, casas y fincas en Gijón y en toda Asturias.",
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/background_SfcOHen5.jpg",
  "backgroundVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/154/hero/background_qnR8ktiS.mp4",
  "backgroundType": "video",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos"
};
}
