import React, { useCallback, useEffect, useState } from "react";
import "./Package.scss";
import {
  Row,
  Col,
  Card,
  Dropdown,
  Typography,
  Button,
  Select,
  message as antMessage,
} from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { subscribeNeuroSpeechPackageRequest } from "../../../../modules/subscription/reducer";
const { Text } = Typography;
const pkgArray = ["monthly", "biAnnual", "lifeTime", "custom"];
const Package = ({ data: { voices = [], displayName = "", _id, ...rest } }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [pkgData, setPkgData] = useState({});
  useEffect(() => {
    setItems([
      ...(voices?.map((v, i) => ({
        label: v,
        key: i + 1,
        icon: <AudioOutlined />,
      })) ?? []),
    ]);
  }, [voices]);

  const menuProps = {
    items,
  };
  const subscribePackage = useCallback(() => {
    if (pkgData) {
      dispatch(
        subscribeNeuroSpeechPackageRequest({
          ...pkgData,
        })
      );
    } else {
    }
  }, [dispatch, pkgData]);
  const selectPackage = useCallback(
    (value) => {
      setPkgData({
        moduleName: "NeuroSpeech",
        packageId: _id,
        packageName: value,
      });
    },
    [_id]
  );
  return (
    <Col span={6}>
      <Card title={displayName} bordered={false} className="light-grey-card">
        <Text style={{ textAlign: "left" }}></Text>
        <Row>
          <Col span={10}>
            <Dropdown.Button menu={menuProps}>Voices</Dropdown.Button>
          </Col>
          <Col span={14}>
            <Select
              showSearch
              placeholder="Select a Package"
              optionFilterProp="children"
              onChange={selectPackage}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                ...Object.keys(rest)
                  ?.filter((x) => pkgArray?.includes(x))
                  ?.map((entry) => ({
                    value: entry,
                    label: entry,
                  })),
              ]}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row
          style={{
            flexDirection: "row-reverse",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0px 10px 0px",
          }}
        >
          <Button type="primary" onClick={subscribePackage}>
            subscribe
          </Button>
          <Button>info</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default Package;
