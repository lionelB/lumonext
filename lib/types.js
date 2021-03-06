// @flow


export type Meta = {
  bio: string[],
  email: string,
  mobile: string,
  socialLinks: SocialLink[],
}
export type SocialLink = {
  name: string,
  url: string,
  value: string,
}

export type Project = {
  title: string,
  description: string[],
  slug: string,
  year: string,
  image: string,
  client: Client,
}

export type Client = {
  name: string,
  logo: string,
}
