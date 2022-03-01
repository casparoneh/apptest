import getTable from "../../utils/getTable";

const table = getTable("FoodCategory");

export default async (_req, res) => {
  try {
    const records = await table.select({}).firstPage();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};