import React, { useRef, useState, useEffect } from "react";
import "./Users.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined, EditFilled } from "@ant-design/icons";
import { Typography, Button, Input, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { getAllUsersRequest } from "../../modules/auth/reducer";
const { Title } = Typography;

function Users() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const users = useSelector((state) => state.auth);
  const searchInput = useRef(null);

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  // const getColumnSearchProps = (dataIndex) => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters,
  //     close,
  //   }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //       onKeyDown={(e) => e.stopPropagation()}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={(e) =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: "block",
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({
  //               closeDropdown: false,
  //             });
  //             setSearchText(selectedKeys[0]);
  //             setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: (filtered) => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? "#1890ff" : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) =>
  //     record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //   onFilterDropdownOpenChange: (visible) => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current?.select(), 100);
  //     }
  //   },
  //   render: (text) => (searchedColumn === dataIndex ? text : text),
  // });
  const userColumns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      width: "8%",
      // ...getColumnSearchProps("firstName"),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: "10%",
      //   ...getColumnSearchProps("age"),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      //   ...getColumnSearchProps("address"),
      // sorter: (a, b) => a.country.length - b.country.length,
      // sortDirections: ["descend", "ascend"],
      width: "6%",
    },
    {
      title: "Subscription",
      // dataIndex: "subscriptions",
      key: "subscriptions",
      // sorter: (a, b) => a.subscriptions.length - b.subscriptions.length,
      // sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: (user) => (
        <Link to={`/admin/user-details/${user._id}`}>
          {<img src="/images/edit.png" />}
        </Link>
      ),
      width: "5%",
    },
  ];
  return (
    <div className="admin-users-wrapper">
      <Table
        className="table"
        columns={userColumns}
        dataSource={users.users}
        loading={users.loading}
        // Pagination={{
        //   pageSize: 15,
        // }}
      />
    </div>
  );
}

export default Users;
