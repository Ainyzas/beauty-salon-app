import Admin from '../models/AdminModel.js';

export async function loginAdmin(req, res) {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(404).json({ message: 'Incorrect Login' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
