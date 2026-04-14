import { Article } from '../../generated/prisma/client';
import { prisma } from '../configs/prisma-client.config';
import slugify from 'slugify';

export const articlesService = {
  async create({
    title,
    category,
    description,
    thumbnail,
    authorId,
  }: Pick<
    Article,
    'title' | 'category' | 'description' | 'thumbnail' | 'authorId'
  >) {
    const slug = await slugify(title, {
      replacement: '-',
      remove: undefined,
      lower: true,
    });

    await prisma.article.create({
      data: {
        title,
        category,
        description,
        thumbnail,
        slug,
        authorId,
      },
    });

    return {
      title,
      category,
      description,
      thumbnail,
      slug,
    };
  },
  getAll() {},
  getDetail() {},
  update() {},
  delete() {},
};
