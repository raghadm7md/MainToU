import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import NewTechMen from "./NewTechMen";
import UdateTechMen from "./UdateTechMen";
import { Row, Col, Button, Card, Table, Input, Space } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import "./../../App.css";
// temporary data for visulization
const data = [
  {
    key: "1",
    id:"TM-1543",
    name: "John Brown",
    email: "john@gmail.com",
    phone: "+96654546378",
  },
  {
    key: "2",
    id:"TM-5567",
    name: "Joe Black",
    email: "jo@gmail.com",
    phone: "+96654549978",
  },

];
export default class TechMen extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  render() {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            ...this.getColumnSearchProps('id'),
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '20%',
          ...this.getColumnSearchProps('name'),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          width: '20%',
          ...this.getColumnSearchProps('email'),
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
          width: '20%',
          ...this.getColumnSearchProps('phone'),
        },
      ];
    return (
      <div className="Tech">
        <h2>Tech Men </h2>
        <Row>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}>
            {" "}
            <NewTechMen />
          </Col>
        </Row>
        <div className="TMtable">
        <Table columns={columns} dataSource={data} update={UdateTechMen} />
          {/* <Card title="Tech man name:" bordered={true} style={{ width: 300 }}>
            <p>Tech Man email:</p>
            <p>Tech Man phone:</p>
            <UdateTechMen />
            <Button>
              <CloseOutlined />
            </Button>
          </Card> */}

        </div>
      </div>
    );
  }
}
