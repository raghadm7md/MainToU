import { Table, Row, Divider } from "antd";
import React, { useState, useEffect } from "react";
import { TrashAppointments } from "../API/Api";
const columns = [
  {
    title: "Appointments",
    dataIndex: "name",
  },
  {
    title: "Date",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
];
function Trash() {
  const [data, setData] = useState("");
  useEffect(() => {
    TrashAppointments()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
      });
  }, []);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Row>
        <Divider>
          <h2>Trash</h2>
        </Divider>
      </Row>
      <div>
        <Table
          className="TMtable"
          size="middle"
          style={{textAlign:"center"}}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Trash;
