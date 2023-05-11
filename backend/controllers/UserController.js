import User from '../models/UserModel.js';

export async function fetchUsers(req, res) {
  try {
    const users = await User.find({}, { __v: 0 }).sort({ surname: 1 });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function fetchUsersBySurname(req, res) {
  try {
    const { surname } = req.query;

    const capitalizedSurname = surname.charAt(0).toUpperCase() + surname.slice(1);

    const users = await User.find({ surname: { $regex: capitalizedSurname } }, { __v: 0 }).sort({
      surname: 1,
    });

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

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const capitalizedSurname = surname.charAt(0).toUpperCase() + surname.slice(1);

    const newUser = new User({
      name: capitalizedName,
      surname: capitalizedSurname,
      email,
      registrationDate,
    });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const updatedUser = await User.findByIdAndUpdate(id, { name, surname, email });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
