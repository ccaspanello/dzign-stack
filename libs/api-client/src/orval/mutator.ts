import Axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';

let axiosClient: AxiosInstance | undefined;

export const createAxiosClientInstance = (baseUrl: string | undefined) => {
  if (!baseUrl) {
    throw new Error('VITE_BACKEND_API_URL is required.');
  }
  axiosClient = Axios.create({ baseURL: baseUrl });
};

export const axiosInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  if (!axiosClient) {
    const msg = 'Axios client is not initialized. Call createAxiosClientInstance() first.';
    console.error(msg);
    // This error was being swallowed by the client, hence the error logging.
    throw new Error(msg);
  }

  const { data } = await axiosClient({
    ...config,
    ...options,
  });

  return data;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
