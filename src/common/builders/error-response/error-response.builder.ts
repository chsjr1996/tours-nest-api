import { Response } from 'express';

export default (
  status: number,
  res: Response,
  userMsg: string,
  devMsg?: any,
  forceIsDev = false,
) => {
  const isDev = forceIsDev
    ? forceIsDev
    : process.env.NODE_ENV === 'DEVELOPMENT';

  return res.status(status).json({
    userMsg: userMsg,
    devMsg: isDev ? devMsg : '',
  });
};
