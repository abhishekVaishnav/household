import { NextFunction, Request, Response } from "express";
import * as NewsService from './../services/news.service';

export async function index(req: Request, res: Response, next: NextFunction) {
  await NewsService.index();
  res.status(200).json({
    data: [
      {
        id: 1,
        date: '2022-06-01',
        status: true,
      },
      {
        id: 2,
        date: '2022-06-02',
        status: false,
      }
    ]
  })
}