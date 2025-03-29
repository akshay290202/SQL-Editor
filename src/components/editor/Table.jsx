import { getTableHeadFromData, getTableRowsFromData } from "../../utils/tableHelpers"

const Table = (props) => {
  return (
    <div className='query-table'>
      {props.result.length > 0 ? (
        <table>
          <thead>
            {getTableHeadFromData(props.result)}
          </thead>
          {getTableRowsFromData(props.result)}
        </table>
      ) : null}
    </div>
  )
}

export default Table