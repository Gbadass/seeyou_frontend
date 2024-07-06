export const BASE_URL = process.env.REACT_APP_IS_PRODUCTION === 'false'
? process.env.REACT_APP_BASE_URL_DEV  : process.env.REACT_APP_BASE_URL_PROD;

