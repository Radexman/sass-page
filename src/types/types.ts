export type featureType = {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
};

export type detailsType = {
  id: string;
  icon: string;
  title: string;
};

export type plansType = {
  id: string;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  caption: string;
  features: string[];
  icon: string;
  logo: string;
};

export type faqType = {
  id: string;
  question: string;
  answer: string;
};

export type testimonialsType = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
};

export type linkType = {
  id: string;
  title: string;
  url: string;
};
