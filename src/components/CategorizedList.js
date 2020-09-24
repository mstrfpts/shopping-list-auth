import React from "react";
import { Accordion, Card } from "react-bootstrap";

const CategorizedList = (props) => {
  const { itemList, itemDeleteHandler } = props;

  console.log("derd categorized", props);

  let categoriesPresent = [];

  if (itemList.length) {
    itemList.map((item) => {
      if (categoriesPresent.indexOf(item.category) === -1)
        categoriesPresent.push(item.category);
    });
  }

  const getQuantityString = (quantity, type) => {
    if (quantity > 1) {
      if (type === "item") {
        return ` x ${quantity}`;
      } else {
        return `(${quantity})`;
      }
    } else {
      return ``;
    }
  };

  return (
    <Accordion className={"CategorizedListAcc"}>
      {categoriesPresent.map((category, cindex) => {
        const categorizedItems = itemList.filter((item) => {
          return item.category === category;
        });
        return (
          <Card key={cindex + 1} className={"CategorizedListAccCard"}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={cindex + 1}
              className={"CategorizedListAccCardHeader"}
            >
              {`${category}${getQuantityString(categorizedItems.length)}`}
            </Accordion.Toggle>
            {categorizedItems.map((item, index) => (
              <Accordion.Collapse key={index} eventKey={cindex + 1}>
                <Card.Body className={"CategorizedListAccCardData"}>
                  <span>{`${item.item}${getQuantityString(
                    item.quantity,
                    "item"
                  )}`}</span>
                  <button
                    className={"CategorizedListAccCardButton"}
                    onClick={() => itemDeleteHandler(item)}
                  >
                    X
                  </button>
                </Card.Body>
              </Accordion.Collapse>
            ))}
          </Card>
        );
      })}
    </Accordion>
  );
};

export default CategorizedList;
