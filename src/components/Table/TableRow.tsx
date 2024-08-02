import { ITableRow, KeysITableRow } from "../../models/Table";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { editField, selectRow } from "../../redux/slice/app";

interface ITableRowComponent {
  row: ITableRow;
}

export const TableRow: FC<ITableRowComponent> = ({ row }) => {
  const dispatch = useAppDispatch();
  const [isEditRow, setIsEditRow] = useState<boolean>(false);
  const [dataRow, setDataRow] = useState<ITableRow>(row);

  const selectRowTable = () => {
    dispatch(selectRow(row));
    if (!row.checkbox) {
      setDataRow(row);
    }
  };

  const startToEditRow = () => {
    setIsEditRow((prevState) => !prevState);
  };

  const save = () => {
    dispatch(editField(dataRow));
    setIsEditRow((prevState) => !prevState);
  };

  const handlerRow = (e: ChangeEvent<HTMLInputElement>, key: KeysITableRow) => {
    setDataRow({ ...dataRow, [key]: e.target.value });
  };

  useEffect(() => {
    if (!row.checkbox) {
      setIsEditRow(false);
      setDataRow(row);
    }
  }, [row.checkbox]);

  return (
    <tr className={row.checkbox ? "table-success" : ""}>
      <th scope="row" className="col-1 text-break">
        {row.id}
      </th>
      <td className="col-4">
        {isEditRow ? (
          <input
            className="form-control"
            type="text"
            onChange={(e) => handlerRow(e, "title")}
            value={dataRow.title}
          />
        ) : (
          <div>{row.title} </div>
        )}
      </td>
      <td className="col-4">
        {isEditRow ? (
          <input
            className="form-control"
            type="text"
            onChange={(e) => handlerRow(e, "address")}
            value={dataRow.address}
          />
        ) : (
          <div>{row.address}</div>
        )}
      </td>
      <td className="col-1">
        <input
          className="form-check-input"
          onChange={selectRowTable}
          type="checkbox"
          checked={row.checkbox}
        />
      </td>
      <td className="col-2">
        <button
          disabled={!row.checkbox}
          className={isEditRow ? "btn btn-success" : "btn btn-secondary"}
          onClick={isEditRow ? save : startToEditRow}
        >
          {isEditRow ? "Сохранить" : "Редактировать"}
        </button>
      </td>
    </tr>
  );
};
