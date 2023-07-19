import { Response, Request } from "express";
import { AddWatchListService } from "../../services/watchlist/AddWatchListService";

class AddWatchListController {
  async handle(req: Request, res: Response) {
    const { name, movie_id, url_post, user_id } = req.body;

    const addWatchListService = new AddWatchListService();

    const watchList = await addWatchListService.execute({
      name,
      movie_id,
      url_post,
      user_id,
    });

    return res.json(watchList);
  }
}

export { AddWatchListController };
