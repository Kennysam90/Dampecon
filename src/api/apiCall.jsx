import axios from 'axios';


// Base URL for your API
//const base = 'http://162.0.228.253:5000/api';
const base = 'https://api.dampecon.com/api'

// Axios instance with token interceptor
const axiosInstance = axios.create({
  baseURL: base,
  withCredentials: false,
});


// // Get wallet balance
// export const getWalletBalance = async () => {
//   try {
//     const response = await axiosInstance.get('/wallet_balance/');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching wallet balance:', error);
//     throw error;
//   }
// };

// // Get orders
// export const getOrders = async (status = '') => {
//   try {
//     const response = await axiosInstance.post(`/customer_orders_&_cancel/${status ? `?status=${status}` : ''}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     throw error;
//   }
// };

// // Get order products
// export const getOrderProduct = async (order_id) => {
//   try {
//     const response = await axiosInstance.get(`/orders/${order_id}/products/`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching order products:', error);
//     throw error;
//   }
// };

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get(`/projects/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};


export const createProject = async (data) => {
  const res = await axiosInstance.post("/projects", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// ================= COMMENTS =================
export const getComments = async () => {
  try {
    const response = await axiosInstance.get(`/comments/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const createComment = async (data) => {
  const res = await axiosInstance.post("/comments/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteComment = async (id) => {
  const res = await axiosInstance.delete(`/comments/${id}/`);
  return res.data;
};

export const getTeam = async () => {
  const res = await axiosInstance.get("/team");
  return res.data;
};

export const createTeam = async (data) => {
  // data must be FormData if uploading photo
  const res = await axiosInstance.post("/team", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteTeam = async (id) => {
  const res = await axiosInstance.delete(`/team/${id}`);
  return res.data;
};