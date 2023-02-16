import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { GoogleProperties } from '../models/responseModels';
import { metrics } from '../GAMetrics&Dimentions/metricsList';
import { dimentions } from '../GAMetrics&Dimentions/dimentionsList';

/* interface AnalyticsFormData {
  property: string;
  fromDate: string;
  toDate: string;
} */

export const AnalyticsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [properties, setProperties] = useState<GoogleProperties[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .get(
        `api/get-google-analytics?property=${data.property}&fromDate=${data.fromDate}&toDate=${data.toDate}&metric=${data.metric}&dimention=${data.dimention}`,
      )
      .then((response) => console.log('RESPONSE.DATA: ', response.data));
  };
  // GET Google logged in user analytics projects
  useEffect(() => {
    axios
      .get<GoogleProperties[]>('api/get-google-properties', {
        withCredentials: true,
      })
      .then((prop) => {
        setProperties(prop.data);
      });
    // setProperties(propertiesResponse)
  }, []);

  const propertyOptions = properties.map((property) => (
    <option key={property.property} value={property.property}>
      {property.displayName}
    </option>
  ));

  const metricOptions = metrics.map((metric) => (
    <option key={metric.apiName} value={metric.apiName}>
      {metric.displayName}
    </option>
  ));

  const dimentionOptions = dimentions.map((dimention) => (
    <option key={dimention.apiName} value={dimention.apiName}>
      {dimention.displayName}
    </option>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select id="property" {...register('property', { required: true })}>
          {propertyOptions}
        </select>
        <input type="date" {...register('fromDate', { required: true })} />
        <input type="date" {...register('toDate', { required: true })} />
        <select id="dimention" {...register('dimention', { required: true })}>
          {dimentionOptions}
        </select>
        <select id="metric" {...register('metric', { required: true })}>
          {metricOptions}
        </select>
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};
