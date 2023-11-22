import Servicio from "../models/servicio.model.js";

export const getServicios = async (req, res) => {
  try {
    const servicios = await Servicio.find( req.params.id );
    res.json(servicios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createServicio = async (req, res) => {
  try {
    const { nombre, descripcion, tarifa } = req.body;
    const newServicio = new Servicio({
      nombre,
      descripcion,
      tarifa,
    });
    await newServicio.save();
    res.json(newServicio);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteServicio = async (req, res) => {
  try {
    const deletedServicio = await Servicio.findByIdAndDelete(req.params.id);
    if (!deletedServicio)
      return res.status(404).json({ message: "Servicio not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateServicio = async (req, res) => {
  try {
    const { nombre, descripcion, tarifa } = req.body;
    const servicioUpdated = await Servicio.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, descripcion, tarifa },
      { new: true }
    );
    return res.json(servicioUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) return res.status(404).json({ message: "Servicio not found" });
    return res.json(servicio);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};