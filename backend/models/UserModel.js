import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('User', userSchema);
