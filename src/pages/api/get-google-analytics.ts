import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = await getToken({ req, secret });
  const auth = token?.accessToken;

  const { property, fromDate, toDate, metric, dimension, label } = req.query;

  const config = {
    headers: {
      authorization: auth,
    },
  };

  try {
    const response = (
      await axios.get(
        `http://localhost:8000/google/analytics/?property=${property}&fromDate=${fromDate}&toDate=${toDate}&metric=${metric}&dimension=${dimension}&label=${label}`,
        config,
      )
    ).data;

    res.send(response);
  } catch (error) {
    console.log('ERROR: ', error);
    res.send(error);
  }
}
