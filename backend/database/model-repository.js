async function find(resourceModel, params) {
  const parsedParams = parseParams(params);
  const resources = await resourceModel
    .find(parsedParams.filters)
    .populate(parsedParams.populate)
    .select(parsedParams.select)
    .sort({ createdAt: 'desc'})
    .exec();
  return resources;
}

async function findById(resourceModel, id, params) {
  const parsedParams = parseParams(params);
  const resources = await resourceModel
    .findById(id, parsedParams.filters)
    .populate(parsedParams.populate)
    // .select()
    // .sort()
    .exec();
  return resources;
}

async function create(resourceModel, resource) {
  try {
    const savedResource = await resource.save();
    return savedResource;
  } catch (error) {
    console.error("Error creating resource:", error);
    throw error;
  }
}

async function update(resourceModel, id, resource) {
  const resources = await resourceModel
    .findOneAndUpdate({ _id: id }, resource)
    .exec();
  return resources;
}

async function deleteAll(resourceModel, params) {
  const response = resourceModel.collection.drop();
  return response;
}

async function deleteById(resourceModel, id) {
  const response = resourceModel.deleteOne({ _id: id });
  return response;
}

//implement this if many params are to be passed
function parseParams(params) {
  let parsedParams = {
    populate: "",
    select: "",
    filters: {},
  };
  parsedParams.filters = JSON.parse(JSON.stringify(params));
  if (params?.populate) {
    parsedParams.populate = params.populate;
    delete parsedParams.filters.populate;
  }
  if (params?.select) {
    parsedParams.select = params.select;
    delete parsedParams.filters.select;
  }
  return parsedParams;
}


module.exports = {
  find,
  findById,
  create,
  update,
  deleteAll,
  deleteById,
};
