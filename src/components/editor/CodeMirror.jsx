import EditorPanel from "./EditorPanel";
import { useContext } from "react";
import MainContext from "../../MainContext";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className='editor'>
      <div className='row'>
        <div className='col-md-8 col-lg-9 col-xl-10 col-12 no-gutters'>
          <CodeMirror
            value={query}
            height="300px"
            extensions={[sql(), keymap.of(defaultKeymap)]}
            theme={oneDark}
            onChange={(value) => setQuery(value)}
            aria-label="code-editor"
          />
          <p style={{ fontSize: "0.8rem" }} className='text-2 pt-3 mb-0'>
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-2'>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;
