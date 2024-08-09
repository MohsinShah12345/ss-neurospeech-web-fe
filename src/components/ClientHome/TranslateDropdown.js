import { DownOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Space, theme, Card, Input } from "antd";
import {
  SearchOutlined,
  CloseOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import React from "react";
import { languageArray } from "../../modules/common/utils";
import "./TranslateDropdown.scss";

const { useToken } = theme;
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];
const TranslateDrowpdown = ({ buttonEnabled }) => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: "none",
  };
  let array = new Array();
  languageArray.map((values, index) => {
    const obj = new Object({
      key: `${index}`,
      label: `${values}`,
    });
    array.push(obj);
  });
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      trigger={["click"]}
      dropdownRender={(menu) => (
        <Card className="languages-dashboad">
          <Input
            className="lang-search"
            size="large"
            placeholder="Translate to"
            suffix={<SearchOutlined className="my-icon" />}
          ></Input>
          <CloseOutlined
            className="closedropdown"
            size="small"
            style={{ fontSize: "10px" }}
          />
          <div className="item-list">
            {array.map((item) => (
              <a className="items">{item.label}</a>
            ))}
          </div>
        </Card>
      )}
    >
      {/* <Button
        type="primary"
        size="large"
        icon={<GlobalOutlined />}
        className="translate-btn"
        style={
          buttonEnabled
            ? { backgroundColor: "#4C4FAC" }
            : { backgroundColor: "#b0b0b0" }
        }
        disabled={!buttonEnabled}
      >
        Translate to
        {<img src="/icons/downoutline.png" />}
      </Button> */}
      <button
        style={{
          backgroundColor: "#b0b0b0",
          color: "#ffffff",
          border: "none",
          boxShadow: "0 0 0 0",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: "5px",
          width: "160px",
        }}
      >
        <GlobalOutlined />
        <p className="ml-2 mr-2 " style={{ wordWrap: "no-wrap" }}>
          Generate Audio
        </p>
        <img src="/icons/downoutline.png" />
      </button>
    </Dropdown>
  );
};
export default TranslateDrowpdown;
