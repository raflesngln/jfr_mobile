/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosInstance from '@/config/api_services';

type UparamData = {
  endpoint: Number | any; // Define the data type appropriately
  page: any;
  per_page: any;
  order_by: any;
  order_direction: any;
};

const ListMasterTracking = async (params: UparamData) => {
  try {
    const response = await axiosInstance.get(`${params.endpoint}`, {
      params: {
        page: params.page,
        per_page: params.per_page,
        order_by: params.order_by,
        order_direction: params.order_direction,
      },
    });
    const result = await response.data;

    // return response.data;
    return result.data;
  } catch (error) {
    // throw error;
    return {message: 'error login'};
  }
};
const DetailMasterTracking = async ({endpoint}: any) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    const result = await response.data;
    // return response.data;
    return result.data;
  } catch (error) {
    return {message: 'error login'};
  }
};

export {ListMasterTracking, DetailMasterTracking};
