import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockTextBlock extends Schema.Component {
  collectionName: 'components_block_text_blocks';
  info: {
    displayName: 'block';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.String;
    color: Attribute.String;
  };
}

export interface CarnetPrise extends Schema.Component {
  collectionName: 'components_carnet_prises';
  info: {
    displayName: 'prise';
    description: '';
  };
  attributes: {
    date: Attribute.DateTime;
    glycemie: Attribute.Component<'prise.glycemie'>;
  };
}

export interface DossierAntecedant extends Schema.Component {
  collectionName: 'components_dossier_antecedants';
  info: {
    displayName: 'antecedant';
  };
  attributes: {
    medicaux: Attribute.String;
    chirurgicaux: Attribute.String;
    familiaux: Attribute.String;
  };
}

export interface DossierFacteursRisque extends Schema.Component {
  collectionName: 'components_dossier_facteurs_risques';
  info: {
    displayName: 'facteursRisque';
  };
  attributes: {
    tabagisme: Attribute.Enumeration<['Non', 'Oui']>;
    alcool: Attribute.Enumeration<['Non', 'Oui']>;
    sedentarite: Attribute.Enumeration<['Non', 'Oui']>;
    cholesterol: Attribute.Enumeration<['Non', 'Oui']>;
    age: Attribute.Enumeration<['Non', 'Oui']>;
    heredite: Attribute.Enumeration<['Non', 'Oui']>;
  };
}

export interface HomeBlockImage extends Schema.Component {
  collectionName: 'components_home_block_images';
  info: {
    displayName: 'blockImage';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    card: Attribute.Component<'image-card.block-image', true>;
  };
}

export interface HomeBlockText extends Schema.Component {
  collectionName: 'components_home_block_texts';
  info: {
    displayName: 'blockText';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    block: Attribute.Component<'block-text.block', true>;
  };
}

export interface HomeCover extends Schema.Component {
  collectionName: 'components_image_covers';
  info: {
    displayName: 'cover';
    description: '';
  };
  attributes: {
    desktop: Attribute.Media;
    mobile: Attribute.Media;
  };
}

export interface HomeImages extends Schema.Component {
  collectionName: 'components_home_images';
  info: {
    displayName: 'Images';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface HomeLocalisation extends Schema.Component {
  collectionName: 'components_home_localisations';
  info: {
    displayName: 'localisation';
  };
  attributes: {
    title: Attribute.String;
    map: Attribute.Component<'localisation.map', true>;
  };
}

export interface ImageCardBlockImage extends Schema.Component {
  collectionName: 'components_image_card_block_images';
  info: {
    displayName: 'blockImage';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cover: Attribute.Media;
    date: Attribute.Date;
  };
}

export interface LocalisationMap extends Schema.Component {
  collectionName: 'components_home_maps';
  info: {
    displayName: 'map';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    Iframe: Attribute.Text;
    link: Attribute.String;
  };
}

export interface PriseGlycemie extends Schema.Component {
  collectionName: 'components_prise_glycemies';
  info: {
    displayName: 'glycemie';
    description: '';
  };
  attributes: {
    avantRepas: Attribute.Float;
    apresRepas: Attribute.Float;
    repas: Attribute.Enumeration<
      ['Petit D\u00E9jeuner', 'D\u00E9jeuner', 'Diner']
    >;
  };
}

export interface PrisePetitDejeuner extends Schema.Component {
  collectionName: 'components_prise_petit_dejeuners';
  info: {
    displayName: 'petitDejeuner';
  };
  attributes: {
    avant: Attribute.Decimal;
    apres: Attribute.Float;
  };
}

export interface UserContactAccompagnant extends Schema.Component {
  collectionName: 'components_user_contact_accompagnants';
  info: {
    displayName: 'accompagnant';
  };
  attributes: {
    nom: Attribute.String;
    tel: Attribute.Integer;
    lienParente: Attribute.String;
    adress: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block-text.block': BlockTextBlock;
      'carnet.prise': CarnetPrise;
      'dossier.antecedant': DossierAntecedant;
      'dossier.facteurs-risque': DossierFacteursRisque;
      'home.block-image': HomeBlockImage;
      'home.block-text': HomeBlockText;
      'home.cover': HomeCover;
      'home.images': HomeImages;
      'home.localisation': HomeLocalisation;
      'image-card.block-image': ImageCardBlockImage;
      'localisation.map': LocalisationMap;
      'prise.glycemie': PriseGlycemie;
      'prise.petit-dejeuner': PrisePetitDejeuner;
      'user-contact.accompagnant': UserContactAccompagnant;
    }
  }
}
