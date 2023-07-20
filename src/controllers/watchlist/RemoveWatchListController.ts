import { Request, Response } from "express";
import { RemoveWatchListService } from "../../services/watchlist/RemoveWatchListService";
import prismaClient from "../../prisma";

class RemoveWatchListController {
  async handle(req: Request, res: Response) {
    const watchList_id = req.query.watchlist_id as string;

    const removeWatchList = new RemoveWatchListService();

    const watchList = await removeWatchList.execute(watchList_id);

    return res.json(watchList);
  }
}

export { RemoveWatchListController };
