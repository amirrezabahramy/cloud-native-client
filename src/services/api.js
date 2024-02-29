import axios, { HttpStatusCode } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000,
});

export const setHeader = (key, value) => {
  api.defaults.headers[key] = value;
};

export const removeHeader = (key) => {
  delete api.defaults.headers[key];
};

const {
  Ok,
  Created,
  Accepted,
  //
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  TooManyRequests,
  //
  InternalServerError,
} = HttpStatusCode;

export const httpMessages = {
  success: {
    [Ok]: "Operation was successful.",
    [Created]: "Created successfully.",
    [Accepted]: "Accepted.",
  },
  error: {
    client: {
      [BadRequest]: "Invalid parameters.",
      [Unauthorized]: "Authentication failed.",
      [Forbidden]: "Access is not allowed.",
      [NotFound]: "404 Not found.",
      [TooManyRequests]: "Too many requests attempted.",
    },
    server: {
      [InternalServerError]: "Internal server error.",
    },
    network: {
      ["ERR_NETWORK"]: "Network error.",
    },
  },
};

export default api;
