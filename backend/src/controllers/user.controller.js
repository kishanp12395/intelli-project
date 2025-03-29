import User from '../models/User.model.js';
import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password){
    throw new ApiError(400, "All fields are required");
   }

   const existedUser =  await User.findOne({ email})

   if(existedUser){
    throw new ApiError(409, "User already exists");
   }

  const user = new User({
    email,
    password,
  });
    await user.save();

    return res.status(201).json(new ApiResponse(200, user,"User created successfully"));

});

export { registerUser };
