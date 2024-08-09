import React from "react";
import { Table } from "antd";

function AdminTable(props) {
  //   const { data, column } = props;
  return (
    <div className="admin-table">
      <Table columns={props.columns} dataSource={props.data} />
    </div>
  );
}

export default AdminTable;
