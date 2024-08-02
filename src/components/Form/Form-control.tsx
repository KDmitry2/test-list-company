import React, { ChangeEvent, useState } from "react";
import { IAddedField, KeysIAddedField } from "../../models/Table";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addField } from "../../redux/slice/app";

const FormControl = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<IAddedField>({
    address: "",
    title: "",
    id: Date.now(),
  });

  const handlerForm = (
    e: ChangeEvent<HTMLInputElement>,
    key: KeysIAddedField,
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.address.trim() || !formData.title.trim()) {
      alert("Все поля должны быть заполнены!");
      return;
    }
    dispatch(addField(formData));
    setFormData({ title: "", address: "", id: Date.now() });
  };

  return (
    <form>
      <h1 className="mb-4">Добавление компании</h1>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Компания
        </span>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handlerForm(e, "title")}
          className="form-control"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Адресс
        </span>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => handlerForm(e, "address")}
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
        onClick={(e) => submit(e)}
      >
        Добавить
      </button>
    </form>
  );
};

export default FormControl;
