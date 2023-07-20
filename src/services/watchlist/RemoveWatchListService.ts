import prismaClient from "../../prisma";

class RemoveWatchListService {
  async execute(watchList_id: string) {
    const watchList = await prismaClient.watchList.delete({
      where: {
        id: watchList_id,
      },
    });

    return watchList;
  }
}

export { RemoveWatchListService };
