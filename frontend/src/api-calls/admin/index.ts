import axios from 'axios';

const API_URI = 'http://localhost:4000/auth';

export async function AdminLoginHandler(username: string, password: string): Promise<boolean> {
  try {
    const response = await axios.post(API_URI, { username, password });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error: any) {
    console.log(error.response.data.message);
    return false;
  }
}
