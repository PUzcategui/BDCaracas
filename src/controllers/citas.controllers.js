import Cita from "../models/cita.model.js";

export const getCitas = async (req, res) => {
  try {
    const citas = await Cita.find({ iddueño : req.params.id }).populate('iddueño idmascota idespecialista idservicio');
    res.json(citas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCitasEspecialista = async (req, res) => {
  try {
    const citas = await Cita.find({ idespecialista : req.user.id }).populate('iddueño idmascota idespecialista idservicio');
    res.json(citas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCita = async (req, res) => {
  try {
    const { iddueño, idmascota, idespecialista, idservicio, fecha, costototal} = req.body;
    const newCita = new Cita({
      iddueño,
      idmascota,
      idespecialista,
      idservicio,
      fecha,
      costototal,
    });
    await newCita.save();
    res.json(newCita);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCita = async (req, res) => {
  try {
    const deletedCita = await Cita.findByIdAndDelete(req.params.id);
    if (!deletedCita)
      return res.status(404).json({ message: "Cita not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCita = async (req, res) => {
  try {
    const { idmascota, idespecialista, idservicio, fecha, costototal } = req.body;
    const citaUpdated = await Cita.findOneAndUpdate(
      { _id: req.params.id },
      { idmascota, idespecialista, idservicio, fecha, costototal },
      { new: true }
    );
    return res.json(citaUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCita = async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id);
    if (!cita) return res.status(404).json({ message: "Cita not found" });
    return res.json(cita);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
