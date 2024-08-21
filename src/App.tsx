import React from "react";
import "./App.css";
import Table from "./components/Table/Table";
import FormControl from "./components/Form/Form-control";
import { deleteRows, setIsCheckedAll } from "./redux/slice/app";
import { useAppDispatch } from "./hooks/redux-hooks";

function App() {
  const dispatch = useAppDispatch();
  const deleteRowsTable = () => {
    dispatch(deleteRows());
    dispatch(setIsCheckedAll(false));
  };

  return (
    <div className="App">
      <div className="container mb-5">
        branch
        <div className="mb-5">
          <FormControl />
        </div>
        <div className="table-responsive mb-5" style={{ height: "50vh" }}>
          <Table />
        </div>
        <button className="btn btn-danger" onClick={deleteRowsTable}>
          Удалить выделенные строки
        </button>
      </div>
    </div>
  );
}

export default App;
