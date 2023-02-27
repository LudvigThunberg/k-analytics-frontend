/* eslint-disable arrow-body-style */
/* import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { metrics } from '../GAMetrics&Dimentions/metricsList';
import { dimensions } from '../GAMetrics&Dimentions/dimensionsList'; */

export const AnalyticsForm = () => {
  /*  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [properties, setProperties] = useState<GoogleProperties[]>([]);

  // GET Google logged in user analytics projects
  useEffect(() => {
    axios
      .get<GoogleProperties[]>('api/get-google-properties', {
        withCredentials: true,
      })
      .then((prop) => {
        console.log('PROPPERTIES ', prop.data);

        setProperties(prop.data);
      });
  }, []);

  const handleAnalyticsResponse = (data: AnalyticsModel) => {
    setAnalytics(data);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const chartLabel = metrics.find((metric) => metric.apiName === data.metric);
    axios
      .get<AnalyticsModel>(
        `api/get-google-analytics?property=${data.property}&fromDate=${data.fromDate}&toDate=${data.toDate}&metric=${data.metric}&dimension=${data.dimension}&label=${chartLabel?.displayName}`,
      )
      .then((response) => {
        handleAnalyticsResponse(response.data);
      });
  };

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

  const dimensionOptions = dimensions.map((d) => (
    <option key={d.apiName} value={d.apiName}>
      {d.displayName}
    </option>
  )); */

  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <select id="property" {...register('property', { required: true })}>
          {propertyOptions}
        </select>
        <input type="date" {...register('fromDate', { required: true })} />
        <input type="date" {...register('toDate', { required: true })} />
        <select id="dimension" {...register('dimension', { required: true })}>
          {dimensionOptions}
        </select>
        <select id="metric" {...register('metric', { required: true })}>
          {metricOptions}
        </select>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form> */}
    </div>
  );
};
