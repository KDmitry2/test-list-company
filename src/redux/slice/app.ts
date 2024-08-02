import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IAddedField, IEditedField, ITableRow } from "../../models/Table";

interface AppState {
  dataTable: ITableRow[];
  isCheckedAll: boolean;
}

const initialState: AppState = {
  dataTable: [
    {
      id: 1,
      address: "400692, Тверская область, город Воскресенск, бульвар Славы, 02",
      title: "ОАО Рем",
      checkbox: false,
    },
    {
      id: 2,
      address: "325574, Тверская область, город Серпухов, наб. Космонавтов, 64",
      title: "ЗАО Строй",
      checkbox: false,
    },
    {
      id: 3,
      address: "093012, Смоленская область, город Ступино, пл. Гагарина, 80",
      title: "МФО ПивЛенТелекомБанк",
      checkbox: false,
    },
    {
      id: 4,
      address: "559204, Брянская область, город Зарайск, пер. Гоголя, 44",
      title: "ООО Компания CибАсбоцемент",
      checkbox: false,
    },
    {
      id: 5,
      address: "996621, Брянская область, город Зарайск, ул. Сталина, 10",
      title: "МКК КазаньДизайнМеталПром",
      checkbox: false,
    },
    {
      id: 6,
      address:
        "039521, Ленинградская область, город Ступино, шоссе 1905 года, 70",
      title: "ПАО ТелекомРыб",
      checkbox: false,
    },
    {
      id: 7,
      address: "470439, Новгородская область, город Мытищи, ул. Косиора, 23",
      title: "ЗАО ВостокХозПивОпт",
      checkbox: false,
    },
    {
      id: 8,
      address: "642992, Тверская область, город Шаховская, наб. Гоголя, 83",
      title: "ООО Компания КазаньФлотГаз",
      checkbox: false,
    },
    {
      id: 9,
      address: "723330, Тверская область, город Воскресенск, ул. Ленина, 21",
      title: "МКК Хмель",
      checkbox: false,
    },
    {
      id: 10,
      address: "153773, Тамбовская область, город Люберцы, бульвар Сталина, 34",
      title: "ООО Компания ЖелДор",
      checkbox: false,
    },
    {
      id: 11,
      address: "583303, Смоленская область, город Дмитров, бульвар Сталина, 88",
      title: "МКК ГлавПивГорТрест",
      checkbox: false,
    },
    {
      id: 12,
      address: "653819, Астраханская область, город Озёры, бульвар Ленина, 25",
      title: "МКК Сантех",
      checkbox: false,
    },
    {
      id: 13,
      address:
        "985074, Нижегородская область, город Павловский Посад, въезд Сталина, 48",
      title: "ПАО ГорКаз",
      checkbox: false,
    },
    {
      id: 14,
      address:
        "394212, Вологодская область, город Талдом, въезд Будапештсткая, 29",
      title: "ПАО ГорРадиоВекторТраст",
      checkbox: false,
    },
    {
      id: 15,
      address:
        "914256, Пензенская область, город Павловский Посад, бульвар Ленина, 07",
      title: "ООО АлмазСантехРос",
      checkbox: false,
    },
    {
      id: 16,
      address:
        "697661, Ульяновская область, город Дмитров, бульвар Ломоносова, 25",
      title: "ОАО ВостокТеле",
      checkbox: false,
    },
    {
      id: 17,
      address: "653819, Смоленская область, город Домодедово, ул. Гоголя, 52",
      title: "ООО РемЛифтГаз",
      checkbox: false,
    },
    {
      id: 18,
      address:
        "471022, Тульская область, город Сергиев Посад, пер. Домодедовская, 34",
      title: "ОАО ПивОрионСервис",
      checkbox: false,
    },
    {
      id: 19,
      address:
        "742344, Воронежская область, город Волоколамск, спуск Гагарина, 36",
      title: "ЗАО Текстиль",
      checkbox: false,
    },
    {
      id: 20,
      address: "856104, Самарская область, город Щёлково, пр. Ленина, 80",
      title: "ОАО ITРечГлав",
      checkbox: false,
    },
    {
      id: 21,
      address: "436582, Новосибирская область, город Озёры, шоссе Гагарина, 07",
      title: "ПАО КрепГазСевер",
      checkbox: false,
    },
    {
      id: 22,
      address:
        "817604, Тамбовская область, город Щёлково, проезд Космонавтов, 81",
      title: "ООО МетизХмель",
      checkbox: false,
    },
    {
      id: 23,
      address:
        "890490, Вологодская область, город Лотошино, пл. Балканская, 41",
      title: "МКК МоторГлавАлмазПроф",
      checkbox: false,
    },
    {
      id: 24,
      address:
        "233323, Курганская область, город Истра, бульвар Ломоносова, 76",
      title: "ОАО ТомскХоз",
      checkbox: false,
    },
    {
      id: 25,
      address: "037854, Костромская область, город Егорьевск, пр. Ладыгина, 52",
      title: "МФО Тех",
      checkbox: false,
    },
    {
      id: 26,
      address:
        "360610, Пензенская область, город Щёлково, спуск Бухарестская, 37",
      title: "ООО МоторОмскТекстильМаш",
      checkbox: false,
    },
    {
      id: 27,
      address:
        "828097, Кировская область, город Дорохово, пл. Будапештсткая, 20",
      title: "ООО Компания ЖелДорЭлектро",
      checkbox: false,
    },
    {
      id: 28,
      address:
        "906653, Псковская область, город Лотошино, спуск Бухарестская, 57",
      title: "МФО ЦементРеч",
      checkbox: false,
    },
  ],
  isCheckedAll: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    deleteRows(state) {
      state.dataTable = state.dataTable.filter((row) => !row.checkbox);
    },
    editField(state, action: PayloadAction<IEditedField>) {
      const { id, title, address } = action.payload;
      state.dataTable = state.dataTable.map((item) =>
        item.id === id ? { ...item, address, title } : item,
      );
    },
    addField(state, action: PayloadAction<IAddedField>) {
      const addedField = action.payload;
      state.dataTable = [
        ...state.dataTable,
        {
          ...addedField,
          checkbox: false,
        },
      ];
    },
    selectRow(state, action: PayloadAction<ITableRow>) {
      const { id } = action.payload;
      state.dataTable = state.dataTable.map((item) =>
        item.id === id ? { ...item, checkbox: !item.checkbox } : item,
      );
    },
    selectAllRows(state, action: PayloadAction<boolean>) {
      const isCheckedAll = action.payload;
      state.dataTable = state.dataTable.map((item) => {
        return { ...item, checkbox: !isCheckedAll };
      });
    },
    setIsCheckedAll(state, action: PayloadAction<boolean>) {
      state.isCheckedAll = action.payload;
    },
  },
});

export const {
  setIsCheckedAll,
  deleteRows,
  selectAllRows,
  selectRow,
  editField,
  addField,
} = appSlice.actions;

export const dataTableSelector = (state: RootState) => state.app.dataTable;
export const isCheckedAllSelector = (state: RootState) =>
  state.app?.isCheckedAll;
export default appSlice.reducer;
