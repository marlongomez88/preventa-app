exports.getByOpportunity = (req, res) => {
  res.json({ message: 'Listar notas de oportunidad ' + req.params.opportunityId });
};

exports.create = (req, res) => {
  res.json({ message: 'Crear nota para oportunidad ' + req.params.opportunityId });
};
