const Airtable = require("airtable");

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

export default function getTable(tableName) {
  const testTable = base(tableName);
  return testTable;
}




