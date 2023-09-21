const { Service: ServiceModel, Service } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
      };
      const respose = await ServiceModel.create(service);
      res.status(201).json({ respose, msg: "Serviço criado com sucesso" });
    } catch (error) {
      res.status(400).json({ error, msg: "Erro ao criar serviço" });
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.status(200).json(services);
    } catch (error) {
      console.error(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ message: "Service not found" });
        return;
      }

      res.status(200).json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findByIdAndDelete(id);

      if (!service) {
        res.status(404).json({ message: "Service not found" });
        return;
      }
      const deleteService = await ServiceModel.findByIdAndDelete(id);
      res.status(200).json({deleteService, msg:"Service deleted successfully"});
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const service ={
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
      };
      const updateService = await ServiceModel.findByIdAndUpdate(id, service, { new: true });  

      if(!updateService){
        res.status(404).json({ message: "Service not found" });
        return;
      }
      res.status(200).json({service,msg:"Service updated successfully"});
    } catch (error) {
        console.log(error);
    }
  }
};

module.exports = serviceController;
