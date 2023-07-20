import { Request, Response } from "express"
import { RemoveFavoritesService } from "../../services/favorites/RemoveFavoritesService"
import prismaClient from "../../prisma"

class RemoveFavoritesController {
    async handle(req: Request, res: Response){

        const favorite_id = req.query.favorite_id as string

        const removeFavorite = new RemoveFavoritesService()

        const favorite = await removeFavorite.execute(favorite_id)

        return res.json(favorite)

    }
}

export { RemoveFavoritesController }