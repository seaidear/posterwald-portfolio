// types
import { FooterProps } from "./Footer";

const mockData: FooterProps = {
  copyrightText: "Phillip Osterwald. All rights reserved.",
  navigationLinks: [
    { id: "94064251", title: "/uses", isExternalLink: false, url: "/uses" },
    { id: "99902435", title: "Blog", isExternalLink: false, url: "/blog" },
    {
      id: "94064257",
      title: "Privacy Notice",
      isExternalLink: false,
      url: "/privacy-notice",
    },
    { id: "94064259", title: "Imprint", isExternalLink: false, url: "/imprint" },
  ],
  socialMediaIcons: [
    {
      id: "99884427",
      url: "mailto:seaidear323@gmail.com",
      name: "Email",
      reactIconIdentifier: "email",
      icon: { url: "https://www.datocms-assets.com/60761/1641478157-icon_mail.svg" },
    },
    {
      id: "94031955",
      url: "",
      name: "LinkedIn",
      reactIconIdentifier: "linkedin",
      icon: { url: "https://www.datocms-assets.com/60761/1641478156-icon_linkedin.svg" },
    },
    {
      id: "94031960",
      url: "https://twitter.com/Seaidear323",
      name: "Twitter",
      reactIconIdentifier: "twitter",
      icon: { url: "https://www.datocms-assets.com/60761/1641478158-icon_twitter.svg" },
    },
    {
      id: "94031963",
      url: "https://github.com/seaidear",
      name: "GitHub",
      reactIconIdentifier: "github",
      icon: { url: "https://www.datocms-assets.com/60761/1641478154-icon_github.svg" },
    },
  ],
};

export default mockData;
