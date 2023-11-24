import Usuario from "../models/usuario.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { cedula, nombre, apellido, email, telefono, password } = req.body;

    const usuarioFound = await Usuario.findOne({ email });

    if (usuarioFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });
    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUsuario = new Usuario({
      cedula,
      nombre,
      apellido,
      email,
      telefono,
      password: passwordHash,
    });

    // saving the user in the database
    const usuarioSaved = await newUsuario.save();

    res.json({
      id: usuarioSaved._id,
      nombre: usuarioSaved.nombre,
      apellido: usuarioSaved.apellido,
      email: usuarioSaved.email,
      telefono: usuarioSaved.telefono,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioFound = await Usuario.findOne({ email });

    if (!usuarioFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    const isMatch = await bcrypt.compare(password, usuarioFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccessToken({
      id: usuarioFound._id,
    });

    res.json({
      id: usuarioFound._id,
      nombre: usuarioFound.nombre,
      apellido: usuarioFound.apellido,
      email: usuarioFound.email,
      telefono: usuarioFound.telefono,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const profile = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const usuarioFound = await Usuario.findById(user.id);
    if (!usuarioFound) return res.sendStatus(401);

    return res.json({
      id: usuarioFound._id,
      nombre: usuarioFound.nombre,
      apellido: usuarioFound.apellido,
      email: usuarioFound.email,
      telefono: usuarioFound.telefono,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
