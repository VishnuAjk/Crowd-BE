import User from '../models/User.js';

export const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};
