import React, { useContext } from 'react';
import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { Config } from '../config';

const ApiClient = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  config.baseURL = Config.urlSocket;

  const instance = Axios.create(config);
  return instance;
};

export default ApiClient;
