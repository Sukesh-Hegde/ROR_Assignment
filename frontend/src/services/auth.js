import api from "./api";

// Sign up function
export const signup = (name, email, password, address) => {
  return api.post("/auth/signup", { name, email, password, address });
};

// Login function
export const login = (email, password) => {
  return api.post("/auth/login", { email, password });
};
