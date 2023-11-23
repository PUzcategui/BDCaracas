import Mascota from "../models/mascota.model.js";

export const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.find({ iddueño : req.user.id }).populate('iddueño');
    res.json(mascotas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMascota = async (req, res) => {
  try {
    const { nombre, tipo, raza, genero } = req.body;
    const newMascota = new Mascota({
      iddueño: req.user.id,
      nombre,
      tipo,
      raza,
      genero,
    });
    await newMascota.save();
    res.json(newMascota);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMascota = async (req, res) => {
  try {
    const deletedMascota = await Mascota.findByIdAndDelete(req.params.id);
    if (!deletedMascota)
      return res.status(404).json({ message: "Mascota not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMascota = async (req, res) => {
  try {
    const { nombre, tipo, raza, genero } = req.body;
    const mascotaUpdated = await Mascota.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, tipo, raza, genero },
      { new: true }
    );
    return res.json(mascotaUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMascota = async (req, res) => {
  try {
    const mascota = await Mascota.findById(req.params.id);
    if (!mascota) return res.status(404).json({ message: "Mascota not found" });
    return res.json(mascota);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
