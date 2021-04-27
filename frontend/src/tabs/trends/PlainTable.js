import React from "react";
import propTypes from "prop-types";

export default function PlainTable(props) {
  function getBackground(amount) {
    if (amount < 10) {
      return "";
    } else if (amount < 50) {
      return "success";
    } else if (amount < 100) {
      return "info";
    } else if (amount < 500) {
      return "warning";
    } else {
      return "danger";
    }
  }
  
  function dateData() {
    const data = [
      {
        id: "Expense",
        data: [],
      },
      {
        id: "Income",
        data: [],
      },
    ];
    if (Object.keys(props.dateGroup).length !== 0) {
      Object.keys(props.dateGroup).map((key) => {
        const items = props.dateGroup[key];
        for (let i = 0; i < items.length; i++) {
          try {
            const item = items[i];
            const type = item.type === "Expense" ? 0 : 1;
            const amount = item.amount;
            let dateString = new Date(item.date);
            dateString = new Date(
              dateString.getTime() - dateString.getTimezoneOffset() * 60000
            )
              .toISOString()
              .slice(0, 10);
            let exist = false;
            for (let cor of data[type].data) {
              if (cor.x === dateString) {
                cor.y += amount;
                exist = true;
                break;
              }
            }
            if (!exist) {
              data[type].data.push({ x: dateString, y: amount });
            }
          } catch (err) {
            // initial date range might cross two months
            console.log(err);
            void 0;
          }
        }
      });
    }
    return data;
  }
  
  return (
    <div className="flex-container">
      <div className="d-flex justify-content-center">
        <div className="mb-3" style={{width: "80%"}}>
          <div className="mb-3">
            <h2 className="fw-bold mb-2 pt-3">Expense</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {dateData()[0].data.map((item, index) => (
                  <tr key={"tr-expense"+index}>
                    <th scope="row">{item.x}</th>
                    <td >{item.y.toFixed(2)}</td>
                    <td className={"bg-" + getBackground(item.y)}/>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          <div className="pb-3">
            <h2 className="fw-bold mb-2">Income</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {dateData()[1].data.map((item, index) => (
                  <tr key={"tr-income"+index}>
                    <th>{item.x}</th>
                    <td>{item.y.toFixed(2)}</td>
                    <td className={"bg-" + getBackground(item.y)}/>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
        </div>
      </div>
    </div>
  );
}

PlainTable.propTypes = {
  dateGroup: propTypes.object.isRequired,
};
