import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  addField,
  dataTableSelector,
  isCheckedAllSelector,
  selectAllRows,
  setIsCheckedAll,
} from "../../redux/slice/app";
import { TableRow } from "./TableRow";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

const Table = () => {
  const dataTable = useAppSelector(dataTableSelector);
  const isCheckedAll = useAppSelector(isCheckedAllSelector);
  const currentPageRef = useRef<number>(0);

  const { isVisible, containerRef } = useElementOnScreen();

  const dispatch = useAppDispatch();

  const selectRows = () => {
    dispatch(selectAllRows(isCheckedAll));
    dispatch(setIsCheckedAll(!isCheckedAll));
  };

  function loadMoreDataTable() {
    if (currentPageRef.current >= 5) return;
    for (let i = 0; i < 28; i++) {
      dispatch(
        addField({
          title: "new Company",
          address: "new address",
          id: Date.now() + i,
        }),
      );
    }
    currentPageRef.current += 1;
  }

  useEffect(() => {
    if (isVisible) loadMoreDataTable();
  }, [isVisible]);

  return dataTable.length === 0 ? (
    <h1>Данных нет</h1>
  ) : (
    <>
      <table className="table table-bordered">
        <thead className="position-sticky z-999 sticky-top" style={{ top: -1 }}>
          <tr>
            <th scope="col" colSpan={4}>
              Компании
            </th>
            <th scope="col">
              Выделить всё{" "}
              <input
                type="checkbox"
                className="form-check-input"
                onChange={selectRows}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((row) => (
            <TableRow row={row} key={row.id} />
          ))}
          <tr ref={containerRef} className="loader" />
        </tbody>
      </table>
    </>
  );
};

export default Table;
