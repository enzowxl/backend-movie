import prismaClient from "../../prisma";

class ListFavoritesService {
  async execute(user_id: string) {
    const favorites = await prismaClient.favorites.findMany({
      where: {
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

    if (favorites.length === 0) {
      throw new Error("Doesn't have any on the list");
    }

    return favorites;
  }
}

export { ListFavoritesService };
