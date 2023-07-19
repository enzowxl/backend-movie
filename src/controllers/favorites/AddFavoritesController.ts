import { Response, Request } from "express";
import { AddFavoritesService } from "../../services/favorites/AddFavoritesService";

class AddFavoritesController {
  async handle(req: Request, res: Response) {
    const { name, movie_id, url_post, user_id } = req.body;

    const addFavoritesService = new AddFavoritesService();

    const watchList = await addFavoritesService.execute({
      name,
      movie_id,
      url_post,
      user_id,
    });

    return res.json(watchList);
  }
}

export { AddFavoritesController };
