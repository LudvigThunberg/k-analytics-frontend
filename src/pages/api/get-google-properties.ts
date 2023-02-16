import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { GooglePropertiesResponse } from '../../models/responseModels';

const secret = process.env.SECRET;
/* let accessToken = ''; */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = await getToken({ req, secret });
  const auth = token?.accessToken;

  const config = {
    headers: {
      authorization: auth,
    },
  };

  try {
    const response = (
      await axios.get<GooglePropertiesResponse>(
        'http://localhost:8000/google/properties',
        config,
      )
    ).data;
    res.send(response);
  } catch (error) {
    console.log('ERRORRRS: ', error);
  }
}
