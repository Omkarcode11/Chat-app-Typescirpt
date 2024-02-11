import jwt from "jsonwebtoken";
import { ResponseClass } from "../utils/Classes.js";
import User from "../model/User.js";

export const jwtAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send(new ResponseClass("Token not found", false));
    }

    let decode = jwt.decode(token, process.env.JWT_KEY);
    if (!decode) {
      return res.status(401).send(new ResponseClass("UnAuthorize", false));
    }
    if (decode.exp <= Math.floor(Date.now() / 1000)) {
      return res.status(401).send(new ResponseClass("Token is Expire", false));
    }
    let user = await User.findById(decode.data.id).select("-password");

    if (!user) {
      return res.status(401).send(new ResponseClass("User is not found (Token)", false));
    }
    req.user = user;

    next();
  } catch (err) {
    return res.status(500).send(new ResponseClass(err.message, false));
  }
};



export default jwtAuthentication