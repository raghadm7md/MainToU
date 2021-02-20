import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography , Space , Button} from 'antd';
import Highlighter from 'react-highlight-words';
import { EditOutlined , DeleteOutlined  , SearchOutlined} from "@ant-design/icons";
import NewCompany from "./NewCompany";

const originData = [
  {
    key: "1",
    Name: "TWAIK",
    Email: "twaik@gmail.com",
    Phone: "+96654546378",
  },
  {
    key: "2",
    Name: "Mosook",
    Email: "mosook@gmail.com",
    Phone: "+96654549978",
  },
];


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Company = () => {
  let [searchText,setSearchText] = useState('');
  let [ searchedColumn,setSearchedColumn] = useState('');


  const getColumnSearchProps = dataIndex => ({
     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchText = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
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
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchText.select(), 100);
      }
    },
    render: text =>
        searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
      setSearchText(selectedKeys[0])
      setSearchedColumn(dataIndex)
    
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('') 
    
  };

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const handleDelete = (key) => {
    const dataSource = [...data];
    setData( dataSource.filter((item) => item.key !== key))
  };
  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      width: '25%',
      editable: true,
      ...getColumnSearchProps('Name'),
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      width: '15%',
      editable: true,
      ...getColumnSearchProps('Email'),
    },
    {
      title: 'Phone',
      dataIndex: 'Phone',
      width: '40%',
      editable: true,
      ...getColumnSearchProps('FullName'),
    },
    {
      title: 'Update',
      dataIndex: 'Update',
      
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            <EditOutlined/>
          </Typography.Link>
          

        );
      },
  },
  {
    title: 'Delete',
    dataIndex: 'Delete',
    render: (_, record) =>
      data.length >= 1 ? (
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
          <a><DeleteOutlined/></a>
        </Popconfirm>
      ) : null,
  },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    
    <Form form={form} component={false}>
      <h2>Maintenance Companies</h2>
      <NewCompany rowClassName ='addBtn'/>
      <Table 
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default Company;