import axios from 'axios';
import { resetUser } from './slicers/userSlice';
import { BASE_URL } from '../variables';

const axiosInstance = axios.create({
  baseURL: BASE_URL+"api/v1"
  // Add other configurations as needed
});

console.log("base_url",BASE_URL)


export const setupAxiosInterceptors = (dispatch) => {
  // Add an interceptor to include a token in each request
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && token !== "null") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Add an interceptor for responses
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {


      if (error.response && error.response.data && error.response.data.status === false) {
        const errorMessage = error.response.data.message;

        if (errorMessage === "Token expired." || errorMessage=== "No Token: Unauthorized Access") {

          dispatch(resetUser()); // Dispatch your logout action
          // navigate('/login'); // Navigate to the login page
        }
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
