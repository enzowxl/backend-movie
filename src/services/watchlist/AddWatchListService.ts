import { WatchListRequest } from "../types";
import prismaClient from "../../prisma";

class AddWatchListService {
  async execute({ name, movie_id, url_post, user_id }: WatchListRequest) {
    const watchList = await prismaClient.watchList.create({
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

    return watchList;
  }
}

export { AddWatchListService };
