import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;
/* let accessToken = ''; */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const token = await getToken({ req, secret });
  const auth = token?.accessToken;

  const property = req.query?.property;
  const fromDate = req.query?.fromDate;
  const toDate = req.query?.toDate;
  const metric = req.query?.metric;
  const dimention = req.query?.dimention;

  const config = {
    headers: {
      authorization: auth,
    },
  };

  try {
    const response = (
      await axios.get(
        `http://localhost:8000/google/analytics/?property=${property}&fromDate=${fromDate}&toDate=${toDate}&metric=${metric}&dimention=${dimention}`,
        config,
      )
    ).data;
    console.log('API-RESPONSE', response);

    res.send(response);
  } catch (error) {
    console.log('ERRORRRS: ', error);
    res.send(error);
  }
}
