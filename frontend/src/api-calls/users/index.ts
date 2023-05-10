import axios from 'axios';

const API_URI = 'http://localhost:4000/';

export async function createUser(
  name: string,
  surname: string,
  email: string,
  registrationDate: string,
) {
  try {
    const response = await axios.post(API_URI + 'users', {
      name,
      surname,
      email,
      registrationDate,
    });
    return response.data;
  } catch (error) {
    console.log('Fetch Unsuccessful');
  }
}

export async function fetchUsers() {
  try {
    const response = await axios.get(API_URI + 'users');
    return response.data;
  } catch (error) {
    console.log('Fetch Unsuccessful');
  }
}

export async function fetchUsersBySurname(surname: string) {
  try {
    const response = await axios.get(API_URI + 'users/search', {
      params: {
        surname: surname,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Fetch Unsuccessful');
  }
}

export async function deleteUser(id: string) {
  try {
    const response = await axios.delete(API_URI + `users/${id}`);
    return response.data;
  } catch (error) {
    console.log('Fetch Unsuccessful');
  }
}
