import { Request, Response } from 'express';
import { articlesService } from '../services/articles.service';

export const articlesController = {
  async create(req: Request, res: Response) {
    const { title, category, description, thumbnail, authorId } = req?.body;

    const createdArticle = await articlesService?.create({
      title,
      category,
      description,
      thumbnail,
      authorId,
    });

    res.status(201).json({
      success: true,
      message: 'Create article successful',
      data: {
        ...createdArticle,
      },
    });
  },
  async getAll(req: Request, res: Response) {
    const articles = await articlesService?.getAll();

    res.status(200).json({
      success: true,
      message: 'Get all articles successful',
      data: articles,
    });
  },
  async getDetail(req: Request, res: Response) {
    const { slug } = req?.params;

    const articles = await articlesService?.getDetail(slug as string);

    res.status(200).json({
      success: true,
      message: `Get detail article with slug = ${slug} successful`,
      data: articles,
    });
  },
  update() {},
  delete() {},
};
