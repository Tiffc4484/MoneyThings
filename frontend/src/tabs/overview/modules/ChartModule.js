import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import PlainTable from "../../trends/PlainTable";

export default function ChartModule(props) {
  const [dateGroup, setDateGroup] = useState({});

  useEffect(() => {
    setDateGroup({});
    const dateArray = [
      ...new Set(
        props.recent.map((item) => new Date(item.date).toDateString())
      ),
    ];
    for (let date of dateArray) {
      const array = props.recent.filter(
        (item) => new Date(item.date).toDateString() === date
      );
      setDateGroup((prev) => ({ ...prev, [date]: array }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.recent]);
  
  return (
    <div className="flex-container border d-flex flex-column">
      <div
        className="overview-item border-bottom py-2 px-3 fw-bold text-black"
        style={{ fontFamily: "Halant serif" }}
      >
        Table
      </div>
      <div className="d-flex flex-grow-1 pb-3">
        <div style={{width: "100%"}}>
          <div className="flex-container">
            <div className="hide-scroll" style={{height: "calc(50vh - 9rem)", overflowY: "scroll"}} tabIndex="0">
              <PlainTable dateGroup={dateGroup}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ChartModule.propTypes = {
  recent: propTypes.array.isRequired,
};
