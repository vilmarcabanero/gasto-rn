export const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        baseURL: 'https://entropiya-api.herokuapp.com/api',
        // baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
          // 'Cache-Control': 'no-cache',
        },
        timeout: 50000,
      },
    },
  },
};
