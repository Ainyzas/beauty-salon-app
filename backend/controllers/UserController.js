import User from '../models/UserModel.js';

export async function fetchUsers(req, res) {
  try {
    const users = await User.find({}, { _id: 0, __v: 0 });

    // Put date conversion in frontend
    users.forEach((user) => {
      const date = new Date(user.registrationDate);
      user.registrationDate = date.toLocaleString('lt-LT');
    });
    console.log(users);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function registerUser(req, res) {
  try {
    const { name, surname, email, registrationDate } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, surname, email, registrationDate });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateUser(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteUser(req, res) {
  try {
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
