export interface JikanAnimeResponse {
  pagination: Pagination;
  data: AnimeData[];
}

export interface AnimeData {
  mal_id: number;
  url: string;
  images: any;
  trailer: Trailer;
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: any;
  source: any;
  episodes: number | null;
  status: any;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: any;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: null | string;
  season: any;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface Aired {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: null | string;
  time: null | string;
  timezone: any;
  string: null | string;
}

export interface Demographic {
  mal_id: number;
  type: any;
  name: string;
  url: string;
}


export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}


export interface Trailer {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: Images;
}

export interface Images {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
}


export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}
