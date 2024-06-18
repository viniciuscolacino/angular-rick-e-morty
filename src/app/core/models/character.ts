export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  fav?: boolean,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: Date
}
