import React, { useState } from "react";
import CategorizedList from "./components/CategorizedList";
import "./App.css";

const App = () => {
  const categoryList = [
    "Fruits/Veggies",
    "Fizzy Drinks",
    "Snacks",
    "Bakery",
    "Deserts",
    "Spices",
    "Meats",
    "Pizzas",
    "Frozen Foods",
    "Stationary",
    "Toiletaries",
  ];
  const [item, setItem] = useState("");
  const [category, setCategory] = useState(categoryList[0]);
  const [itemCount, setItemCount] = useState(1);
  const [itemList, setItemList] = useState([]);

  const addClickHandler = (e) => {
    console.log("derd filter item", item);
    console.log("derd filter itemCount", itemCount);
    console.log("derd filter itemList", itemList);

    /*let itemDuplicate = itemList.filter(
      (itemFilter) =>
        itemFilter.category === category && itemFilter.item === item
    );*/

    let duplicateItemIndex = itemList.findIndex(
      (itemFilter) =>
        itemFilter.category === category && itemFilter.item === item
    );
    console.log("derd duplicate", duplicateItemIndex);

    if (duplicateItemIndex !== -1) {
      console.log("derd find index", itemList[duplicateItemIndex]);
      let newItemList = itemList;
      newItemList[duplicateItemIndex].quantity =
        newItemList[duplicateItemIndex].quantity + parseInt(itemCount, 10);
      setItemList(newItemList);
    } else {
      setItemList([
        ...itemList,
        { item: item, quantity: itemCount, category: category },
      ]);
    }
    setItem("");
    setItemCount(1);
  };

  return (
    <div className={"Container"}>
      <div className={"PageTitle"}>Shopping List</div>

      <div className={"ItemsContainer"}>
        <div className={"ItemContainer"}>
          <input
            className={"ItemInput"}
            type="text"
            value={item}
            placeholder="Add Item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></input>
          <div className={"CategoryList"}>
            <select onChange={(e) => setCategory(e.target.value)}>
              {categoryList.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>
          <div className={"AddbuttonsContainer"}>
            <button
              className={"AddButton"}
              onClick={addClickHandler}
              disabled={item ? false : true}
            >
              Add
            </button>
            <button
              className={"ClearButton"}
              onClick={() => setItem("")}
              disabled={item ? false : true}
            >
              Clear
            </button>
          </div>
        </div>
        <div className={"CountContainer"}>
          <input
            className={"CountInput"}
            type="text"
            maxLength="4"
            size="1"
            value={itemCount}
            placeholder="Count"
            onChange={(e) => {
              setItemCount(e.target.value);
            }}
          ></input>
          <div className={"CountButtonContainer"}>
            <button
              className={"IncButton"}
              onClick={() => setItemCount(itemCount + 1)}
              disabled={item ? false : true}
            >
              +
            </button>
            <button
              className={"DecButton"}
              onClick={() => setItemCount(itemCount - 1)}
              disabled={item ? false : true}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className={"CategorizedList"}>
        <CategorizedList itemList={itemList} />
      </div>
    </div>
  );
};

export default App;
