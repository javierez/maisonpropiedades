

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina Gijón — Centro",
  "address": {
  "street": "Calle Covadonga 50, Bajo 2",
  "city": "Gijón",
  "state": "Asturias",
  "country": "España"
},
  "phoneNumbers": {
  "main": "+34684664207"
},
  "emailAddresses": {
  "info": "comercial@maisonpropiedades.es"
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 19:00",
  "saturday": "Sábado: 10:00 - 14:00",
  "sunday": "Domingo: Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Calle%20Covadonga%2050%2C%20Bajo%202%2C%20Gij%C3%B3n%2C%20Asturias%2C%2033206",
  "isDefault": true
}]
};
}

