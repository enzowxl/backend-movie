import prismaClient from "../../prisma";

class ListWatchListService {
  async execute(user_id: string) {
    const watchList = await prismaClient.watchList.findMany({
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

    if (watchList.length === 0) {
      throw new Error("Doesn't have any on the list");
    }

    return watchList;
  }
}

export { ListWatchListService };
