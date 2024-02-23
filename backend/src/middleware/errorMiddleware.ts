import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';


export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof Joi.ValidationError) {
    return res.status(400).json({ message: err.message })
  }

  // code P2002 -> "Unique constraint failed on the {constraint}"
  // https://www.prisma.io/docs/orm/reference/error-reference#error-codes
  if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
    return res.status(409).json({ message: 'Email informado já existe no banco de dados.' })
  }
  
    // code P2025 -> "An operation failed because it depends on one or more records that were required but not found. {cause}"
  if (err instanceof PrismaClientKnownRequestError && err.code === 'P2025') {
    return res.status(409).json({ message: 'Id informado não existe no banco de dados.' })
  }

  res.status(500).json({ error: 'Erro interno do servidor' });
};
