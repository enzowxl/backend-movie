import { FavoritesRequest } from "../types";
import prismaClient from "../../prisma";

class AddFavoritesService {
  async execute({ name, movie_id, url_post, user_id }: FavoritesRequest) {
    const favorites = await prismaClient.favorites.create({
      data: {
        name: name,
        movie_id: movie_id,
        url_post: url_post,
        user_id: user_id,
      },
      select: {
        id: true,
        name: true,
        movie_id: true,
        url_post: true,
        user_id: true,
      },
    });

    return favorites;
  }
}

export { AddFavoritesService };
