import { useContext } from "react";
import MainContext from "../../MainContext";
import { queryDataAlt as queryData } from "../../utils/data";
import { queryData2 } from "../../utils/data";
import { notification } from "antd";


const EditorPanel = () => {
  const { query, setQueryHistory, setQuery } = useContext(MainContext);
  const [api, contextHolder] = notification.useNotification();

  const runQuery = () => {
    if (query.trim() === "") {
      api['error']({
        message: "Error",
        description: "Oops, that was a Null Query.Please type another query, or select from the ones previously saved.",
        duration: 3,
      })
      return;
    }
    if (query === "SELECT * FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    }
    else if (query === "SELECT id, first_name, last_name FROM internetData;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData2,
      }));
    }
    else {
      api['info']({
        message: "Note:",
        description: "Please try the test query.",
        duration: 3,
      });
    }
    setQueryHistory((prev) => ({
      ...prev,
      history: [...prev.history, query],
    }));
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      api['error']({
        message: "Query can't be null",
        duration: 3,
      })
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <>
      {contextHolder}
      <div className='editor-panel'>
        <div className='btn primary-btn'>
          <button onClick={() => runQuery()}>
            <span className='fa fa-play me-1'></span>Run
          </button>
        </div>
        <div className='btn secondary-btn'>
          <button onClick={() => saveQuery()}>
            <span className='fa fa-save me-1'></span>Save
          </button>
        </div>
        <div className='btn alert-btn'>
          <button onClick={() => clearQuery()}>
            <span className='fa fa-times me-1'></span>Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default EditorPanel;
