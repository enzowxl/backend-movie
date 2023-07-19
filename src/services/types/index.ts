export interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

export interface WatchListRequest {
  name: string;
  movie_id: number;
  url_post: string;
  user_id: string;
}

export interface FavoritesRequest {
  name: string;
  movie_id: number;
  url_post: string;
  user_id: string;
}
