import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { AddWatchListController } from "./controllers/watchlist/AddWatchListController";
import { ListWatchListController } from "./controllers/watchlist/ListWatchListController";

import { AddFavoritesController } from "./controllers/favorites/AddFavoritesController";
import { ListFavoritesController } from "./controllers/favorites/ListFavoritesController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/create/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/details/user", isAuthenticated, new DetailUserController().handle);

router.post("/create/watchList", isAuthenticated, new AddWatchListController().handle);
router.get("/details/watchList", isAuthenticated, new ListWatchListController().handle);

router.post("/create/favorites", isAuthenticated, new AddFavoritesController().handle);
router.get("/details/favorites", isAuthenticated, new ListFavoritesController().handle);

export { router };
