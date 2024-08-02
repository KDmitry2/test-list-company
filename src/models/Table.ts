export interface ITableRow {
  id: number;
  title: string;
  checkbox: boolean;
  address: string;
}
export type IEditedField = Omit<ITableRow, "checkbox">;

export type IAddedField = Omit<ITableRow, "checkbox">;

export type KeysITableRow = keyof ITableRow;

export type KeysIAddedField = keyof IAddedField;
