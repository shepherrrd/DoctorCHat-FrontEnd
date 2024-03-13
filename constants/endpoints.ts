const isLive = false;
const API_URL = isLive ? "https://doctor.onrender.com" : "localhost:3000";

export const API = {
  REGISTER_USER: API_URL + "/api/registeruser",
  REGISTER_DOCTOR: API_URL + "/api/registerdoctor",
};
