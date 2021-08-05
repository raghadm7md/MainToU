import { Table, Row, Divider } from "antd";
import React, { useState, useEffect, Component } from "react";
import AppointsCard from './AppointmentsCard/AppointsCard'
const columns = [
  {
    title: "Appointments",
    dataIndex: "title",
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
];
class Trash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments:this.props.array
    };
  }

  
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   TrashAppointments()
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("API ERROR:", error);
  //     });
  // }, []);
  // function onChange(pagination, filters, sorter, extra) {
  //   console.log("params", pagination, filters, sorter, extra);
  // }
  
render (){
  console.log("delete11111",this.props.array)
  // const cards =this.props.array.map((element, index) => {
  //   return (
  //     <Table
  //         className="TMtable"
  //         size="middle"
  //         style={{textAlign:"center"}}
  //          columns={columns}
  //          dataSource={element}
  //         // onChange={onChange}
  //       />
  //   );
  // });
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
           dataSource={this.props.trash}
          // onChange={onChange}
        />
      </div>
    </div>
  );
}
}

export default Trash;
