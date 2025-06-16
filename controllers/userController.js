import * as userRepo from '../repositories/userRepository.js';

export const getUserProfile = async (req, res) => {
  try {
    const user = await userRepo.getUserById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
