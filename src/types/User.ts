export default interface User {
  _id: string;
  email: string;
  password: string;
  role: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}
