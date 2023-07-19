import { Request, Response } from "express";
import { ListWatchListService } from "../../services/watchlist/ListWatchListService";

class ListWatchListController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const listWatchListService = new ListWatchListService();

    const watchList = await listWatchListService.execute(user_id);

    return res.json(watchList);
  }
}

export { ListWatchListController };
