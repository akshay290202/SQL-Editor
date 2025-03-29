import { queryDataAlt as queryData } from "../../utils/data"
import { getTableColumns } from "../../utils/tableHelpers"

const ColumnDetails = () => {
  return (
    <div>
      <table>
        {getTableColumns(queryData)}
      </table>
    </div>
  )
}

export default ColumnDetails