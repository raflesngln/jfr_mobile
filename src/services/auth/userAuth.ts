/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosInstance from '@/config/api_services';

type DataFetchingResult = {
  data: any[]; // Define the data type appropriately
  loading: boolean;
  error: any;
};

const getLogin = async ({email, password}: any) => {
  try {
    const response = await axiosInstance.post('login', {
      email: email,
      password: password,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // throw error;
    return {message: 'error login'};
  }
};

export {getLogin};
