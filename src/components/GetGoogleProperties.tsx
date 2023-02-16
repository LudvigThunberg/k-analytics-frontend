import axios from 'axios';
import { GooglePropertiesResponse } from '../models/responseModels';

export const GetGoogleProperties = () => {
  const getGoogleProperties = () => {
    const properties = axios.get<GooglePropertiesResponse>(
      'api/get-google-properties',
      {
        withCredentials: true,
      },
    );
    console.log('properties: ', properties);
  };
  return (
    <div>
      <button type="button" onClick={getGoogleProperties}>
        Get Google Properties
      </button>
    </div>
  );
};
