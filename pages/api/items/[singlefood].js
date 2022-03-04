import getTable from "../../../utils/getTable";

const table = getTable("Food");

const handler = async (req, res) => {
  // console.log(req.params.productId);

  const { singlefood } = req.query;
  const records = await table.select({}).firstPage();
  const singleFood = records.find((item) => item.id == singlefood);
  res.status(200).json(singleFood);
};

export default handler;
