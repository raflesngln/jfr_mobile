/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosInstance from '@/config/api_services';

type UparamData = {
  endpoint: Number | any; // Define the data type appropriately
  page: any;
  per_page: any;
  order_by: any;
  order_direction: any;
};

const ListData = async (params: UparamData) => {
  try {
    // const token = '461|5QIjabDLaTCcecAokZZGWM0DFS4RJug9ETmcoF9ifae976bb';
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };

    const response = await axiosInstance.get(`${params.endpoint}`, {
      params: {
        page: params.page,
        per_page: params.per_page,
        order_by: params.order_by,
        asal: params.order_direction,
      },
      // headers,
    });
    const result = await response.data;

    // return response.data;
    return result.data;
  } catch (error) {
    // throw error;
    return {message: 'error login'};
  }
};
const DetailData = async ({endpoint}: any) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    const result = await response.data;
    // return response.data;
    return result.data;
  } catch (error) {
    return {message: 'error login'};
  }
};

export {ListData, DetailData};
