export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "dazp.xyz",
  description: "Building things for the web, one line at a time",
  mainNav: [
    {
      title: "About",
      id: "about",
      disabled: false,
    },
    {
      title: "Tech",
      id: "technologies",
      disabled: false,
    },
    {
      title: "Career",
      id: "career",
      disabled: false,
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/diogoparentedev/",
    github: "https://github.com/diogoparente",
    email: "hello@diogocodes.com",
  },
}
