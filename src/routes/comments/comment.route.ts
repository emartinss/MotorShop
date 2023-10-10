import { Router } from "express";
import {
  addCommentController,
  getAdCommentsController,
  updateCommentController,
  deleteCommentController,
} from "../../controllers/comments/comment.controller";
import { validatedBody } from "../../middlewares/validatedBody.middleware";
import { commentCreateSchema } from "../../schemas/comments/comment.schema";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
import { isTokenOwnerComment, isTokenOwnerOrAdvertiser } from "../../middlewares/isTokenOwner.middleware";

export const commentsRoute: Router = Router();

commentsRoute.post("/:id", verifyToken, validatedBody(commentCreateSchema), addCommentController);
commentsRoute.get("/:id", verifyToken, getAdCommentsController);
commentsRoute.patch("/:userId/:commentId", verifyToken, isTokenOwnerComment, validatedBody(commentCreateSchema), updateCommentController);
commentsRoute.delete("/:id", verifyToken, isTokenOwnerOrAdvertiser, deleteCommentController);
