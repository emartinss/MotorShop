import { Request, Response } from "express";
import {
  addCommentService,
  updateCommentService,
  deleteCommentService,
  getAdCommentsService,
} from "../../services/comments/comment.service";

export const addCommentController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;
  const adId = req.params.id;
  const userId = res.locals.decoded.sub;

  const comment = await addCommentService(body, adId, userId);
  return res.status(201).json(comment);
};

export const getAdCommentsController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const comment = await getAdCommentsService(id);

  return res.status(200).json(comment);
};

export const updateCommentController = async (req: Request, res: Response): Promise<Response> => {
  const body = res.locals.validated;
  const id = req.params.commentId;
  const comment = await updateCommentService(id, body);

  return res.status(200).json(comment);
};

export const deleteCommentController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const comment = deleteCommentService(id);

  return res.status(204).json();
};
