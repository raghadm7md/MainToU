import "../../App.css";
import React from "react";
import { Calendar, Badge } from "antd";
import CalendarBG from "../../images/calendarBG.svg";
function getListData(value) {
  let listData;

  return listData || [];
}
function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
function CalendarPage() {
  return (
    <>
      <div class="curved-div">
        <h1>Calendar</h1>
        <p>
          Find your appropriate time, book your appointment easily and fastly!
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,160C672,128,768,128,864,149.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        className="container"
        style={{
          background: `url(${CalendarBG})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
          />
        </div>
      </div>
    </>
  );
}

export default CalendarPage;
