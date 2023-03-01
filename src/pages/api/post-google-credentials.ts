import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = await getToken({ req, secret });

  const { username } = req.query;
  const accessToken = token?.accessToken;
  const refreshToken = token?.refreshToken;
  const expiresIn = token?.expiresIn;
  const googleId = token?.userId;

  console.log('TOKEN', token);

  const config = {
    headers: {
      accessToken,
      refreshToken,
      expiresIn,
      username,
      googleId,
    },
  };

  console.log('CONFIG', config);

  try {
    await axios.get(`${process.env.BASE_URL}/google/login`, config);

    res.send(200);
  } catch (error) {
    console.log('ERRORRRSAUNss: ', error);
  }
}
