import User from "../model/User.js";
import { getAvatarUrl } from "../utils/Constatns.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { ResponseClass, UserClass } from "../utils/Classes.js";

export let login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      let isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        let data = new UserClass(
          user._id,
          user.firstName,
          user.lastName,
          user.email,
          user.profilePic,
          user.gender
        );

        await generateToken(data, res);
        return res
          .status(200)
          .send(new ResponseClass("Login Success", true, data));
      } else {
        return res
          .status(400)
          .send(new ResponseClass("password is incorrect", true));
      }
    } else {
      return res.status(404).send(new ResponseClass("User not found", false));
    }
  } catch (err) {
    return res.status(500).send(new ResponseClass(err.message, false));
  }
};

export let signup = async (req, res) => {
  try {
    let { firstName, lastName, email, password, gender } = req.body;
    let profilePic = getAvatarUrl(firstName, lastName, gender);
    let salt = await bcryptjs.genSalt(10);
    let hashPass = await bcryptjs.hash(password, salt);

    console.log(hashPass);
    let user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPass,
      gender,
      profilePic,
    });

    if (user) {
      return res.status(400).send(new ResponseClass("Success to create", true));
    }
    return res.status(400).send(new ResponseClass("Failed to create", false));
  } catch (err) {
    return res.status(500).send(new ResponseClass(err.message, false));
  }
};
export let logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send(new ResponseClass("Logout successfully", true));
  } catch (err) {
    return res.status(500).send(new ResponseClass(err.message, false));
  }
};
