import prismaClient from "../../prisma";

class RemoveFavoritesService {
  async execute(favorite_id: string) {
    const favorite = await prismaClient.favorites.delete({
      where: {
        id: favorite_id,
      },
    });

    return favorite;
  }
}

export { RemoveFavoritesService };
