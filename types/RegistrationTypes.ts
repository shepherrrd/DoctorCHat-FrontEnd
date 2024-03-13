export interface UserFormData {
  username: string;
  password: string;
  email: string;
  name: string;
  dateOfBirth: Date | null;
}

export interface DoctorFormData {
  username: string;
  password: string;
  email: string;
  name: string;
  hospital: string;
  qualification: string;
  specialization: string;
}
