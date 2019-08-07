 export interface InfoPage {
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    address?: string;
    social_media?: Socialmedia;
    about_section?: Aboutsection;
    skills_section?: Skillssection;
    services_section?: Servicessection;
  }

interface Servicessection {
    services?: Habilities;
  }

interface Skillssection {
    desc1?: string;
    desc2?: string;
    habilities?: Habilities;
  }

// tslint?:disable-next-line?: no-empty-interface
interface Habilities {
  }

interface Aboutsection {
    birthday?: string;
    city?: string;
    study?: string;
    website?: string;
    phone?: string;
    age?: string;
    interests?: string;
    degree?: string;
    mail?: string;
    twitter?: string;
  }

 export interface Socialmedia {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkin?: string;
  }
