import { Request } from 'express';

export type ProductReq = Request<ReqParams, ResBody, ProductReqBody, ReqQuery>;
export type CommentReq = Request<ReqParams, ResBody, CommentReqBody, ReqQuery>;
export type VideoReq = Request<ReqParams, ResBody, VideoReqBody, ReqQuery>;

interface ProductReqBody extends ReqBody {
  price: number;
  urlProduct: string;
}

interface CommentReqBody {
  username: string;
  comment: string;
}

interface VideoReqBody extends ReqBody {
  url: string
}

interface ReqParams {
  videoID: string;
}

interface ReqBody {
  title: string;
}

interface ReqQuery {
  title: string;
}

interface ResBody {}
