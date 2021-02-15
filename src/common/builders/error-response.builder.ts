import { Response } from 'express';

export default (res: Response, userMsg: string, devMsg = '', status = 500) => {
  const isDev = process.env.NODE_ENV === 'DEVELOPMENT';

  return res.status(status).json({
    userMsg: userMsg,
    devMsg: isDev ? devMsg : '',
  });
};
