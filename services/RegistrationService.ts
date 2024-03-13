import axios from "axios";
import { UserFormData, DoctorFormData } from "../types/RegistrationTypes"; // Import the type
import { API } from "../constants/endpoints";

const registerUser = async (userData: UserFormData): Promise<void> => {
  try {
    const response = await axios.post(API.REGISTER_USER, userData);
    console.log("User registered:", response.data);
    // Handle response data
  } catch (error) {
    console.error("Error registering user:", error);
    // Handle error
  }
};

const registerDoctor = async (doctorData: DoctorFormData): Promise<void> => {
  try {
    const response = await axios.post(API.REGISTER_DOCTOR, doctorData);
    console.log("Doctor registered:", response.data);
    // Handle response data
  } catch (error) {
    console.error("Error registering doctor:", error);
    // Handle error
  }
};
