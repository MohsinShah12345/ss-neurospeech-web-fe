import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ClientHome.scss";
import { io } from "socket.io-client";
import ReactAudioPlayer from "react-audio-player";
import CardsHeader from "../../common/CardsHeader";
import { USERS_BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import { getVoicesRequest } from "../../modules/voices/reducer";
import SegmentedBar from "../../common/SegmentedBar/SegmentedBar";
import { createVoiceOverRequest } from "../../modules/voiceOvers/reducer";
import { getUser } from "../../modules/common/utils";
import { languageArray } from "../../modules/common/utils";

import {
  createProjectRequest,
  getProjectRequest,
  getSingleProjectRequest,
} from "../../modules/project/reducer";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SoundOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  GlobalOutlined,
  SearchOutlined,
  DownOutlined,
  CloseOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";
import {
  Space,
  Card,
  Col,
  Row,
  MenuProps,
  Select,
  Button,
  Dropdown,
  Input,
  List,
  Typography,
  Switch,
  Table,
  Tag,
  Radio,
  Spin,
  Divider,
  message as antMessage,
} from "antd";
import TranslateDrowpdown from "./TranslateDropdown";
import VoiceCard from "../VoiceCard/VoiceCard";

const socket = io.connect(USERS_BASE_URL);
const { Text } = Typography;

export default function ClientHome() {
  const dispatch = useDispatch();
  const voiceOverz = useSelector((state) => state.voiceOvers);
  const ClientState = useSelector((state) => state.project);
  const allVoices = useSelector((state) => state.voices);

  const { singleProject } = ClientState;

  const projectName = useRef();
  const textRef = useRef();
  let textVal = textRef.current;
  const { TextArea } = Input;
  const [textAreaValue, setTextAreaValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [toneValue, setToneValue] = useState("Angry");
  const [toneTag, setToneTag] = useState("chat");
  const [voiceTag, setVoiceTag] = useState("en-US-NancyNeural");
  const [engineTypeValue, setEngineTypeValue] = useState("Neural");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [projectsData, setProjectsData] = useState([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [hideAudioPlayer, setHideAudioPlayer] = useState(true);
  const [disableGenerateBtn, setDisableGenerateBtn] = useState(true);
  const [charactersCount, setCharactersCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  {
    /* NEW AREA FOR STATES,FUNCTIONS & OTHER WORK*/
  }
  const onSpeechTextChange = ({ target }) => {
    console.log(target.value);
  };
  {
    /* NEW AREA FOR STATES & OTHER WORK TILL HERE ENDS*/
  }
  useEffect(() => {
    dispatch(getProjectRequest());
    dispatch(getVoicesRequest());
  }, []);

  useEffect(() => {
    setAudioSrc(voiceOverz.voiceOvers.fileName);
  }, [voiceOverz.voiceOvers]);

  useEffect(() => {
    setProjectsData(singleProject?.voiceOversList);
  }, [singleProject.voiceOversList]);

  socket.on("voiceOverResponse", (arg1) => {
    // here we will call dispatch to update our reducer
  });

  const handleVoiceText = (txt) => {
    setTextAreaValue(txt);
    setCharactersCount(txt.length);
    setWordsCount(txt.split(" ").filter((word) => word !== "").length);
  };

  // const handleSelectedText = () => {
  //   console.log("start index....: ", textVal?.selectionStart);
  //   console.log("end index......: ", textVal?.selectionEnd);
  // };
  const addBreakTag = useCallback(() => {
    const formatedText = textAreaValue
      .slice(0, textVal?.selectionStart)
      .concat(`<break>${" "}`)
      .concat(
        textAreaValue.slice(textVal?.selectionStart, textVal.selectionEnd)
      )
      .concat(`${" "}</break>`)
      .concat(textAreaValue.slice(textVal.selectionEnd));

    setTextAreaValue(formatedText);
  }, [textVal?.selectionStart, textVal?.selectionEnd]);

  const handleProjectTableRowClick = (record, index) => {
    setHideAudioPlayer(false);
    setAudioSrc(record.outputUri);
  };

  const onProjectChange = (id) => {
    setSelectedProjectId(id);
    dispatch(getSingleProjectRequest(id));
    setDisableGenerateBtn(false);
  };
  const onVoiceChange = (voiceName) => {
    setVoiceTag(voiceName);
  };

  const onProjectSearch = (value) => {
    console.log("search:", value);
  };
  const onVoiceSearch = (value) => {
    console.log("searched Voice:", value);
  };

  const engineType = ({ target: { value } }) => {
    setEngineTypeValue(value);
  };

  const onToneSelection = ({ target: { value } }) => {
    setToneTag(value);
    setToneValue(value);
  };

  const addProject = () => {
    dispatch(
      createProjectRequest({ projectName: projectName?.current.input.value })
    );
    setVisible(false);
  };

  const cancelProject = () => {
    setVisible(false);
  };

  const engineValues = [
    {
      label: "Neural",
      value: "Neural",
    },
    {
      label: "Standard",
      value: "Standard",
    },
  ];
  // const voiceGenerator = () => {
  // socket.emit("voiceOver", {
  //   projectId: selectedProjectId,
  //   userId: userInfo?._id ?? ClientState.project?.userId,
  //   voice: {
  //     voiceId: "Arthur",
  //     text: textAreaValue,
  //     Engine: engineTypeValue.toLowerCase(),
  //     textType: "text",
  //     LanguageName: "British English",
  //     outputFormat: "mp3",
  //     LanguageCode: "en-GB",
  //   },
  // });
  // antMessage.loading("Generating Voice-Over", 2.5);
  // setTextAreaValue("");
  // setCharactersCount(0);
  // setWordsCount(0);
  // };
  const handleVoiceGenerator = () => {
    let speakTag = `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="${voiceTag}"><mstts:express-as style="${toneTag}">`;
    const resultWithSpeakTag = speakTag.concat(
      " ",
      textAreaValue,
      " ",
      "</mstts:express-as></voice></speak>"
    );
    // setTextAreaValue(resultWithSpeakTag);
    textAreaValue
      ? dispatch(
          createVoiceOverRequest({
            data: resultWithSpeakTag,
          })
        )
      : console.log("It is empty");

    antMessage.loading("Generating Voice-Over", 3);
    setTextAreaValue("");
    setCharactersCount(0);
    setWordsCount(0);
    setHideAudioPlayer(false);
  };

  const tableColumns = [
    {
      title: "Voice Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Language",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender Preview",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Subscription",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: "Spanish",
      address: "Male",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Sofi Green",
      age: "Urdu / Hindi",
      address: "Female",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: "English",
      address: "Male",
      tags: ["cool", "teacher"],
    },
  ];
  const projectColumns = [
    {
      title: "Id",
      dataIndex: "languageCode",
      key: "languageCode",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "sampleRate",
      key: "sampleRate",
    },
    {
      title: "Voice",
      dataIndex: "engine",
      key: "engine",
    },
    {
      title: "Language",
      key: "taskStatus",
      dataIndex: "taskStatus",
    },
  ];
  const mainBreadcrumbsRoute = {
    name: "Home",
    route: "/client/home",
  };

  const breadcrumbsRoutes = [
    {
      name: "Dashboard",
      route: "/client/home",
    },
  ];

  const [show, setShow] = useState(false);

  let array = new Array();
  languageArray.map((values, index) => {
    const obj = new Object({
      key: `${index}`,
      label: `${values}`,
    });
    array.push(obj);
  });

  const [buttonEnabled, setButtonEnabled] = useState(false);
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setTextAreaValue(newText);
    setButtonEnabled(newText.trim().length > 0);
  };

  return (
    {
      /* PREVIOUS RETURN WORK
    <div className="client-dashbord-wrapper">
      <SegmentedBar defaultPage={"Neurospeech"} />

      <div className="ground-container mt-1">
        <Row gutter={16}>
          <Col span={16}>
            <Card title="Voice Over" bordered={false}>
              <Select
                showSearch
                placeholder="Select a voice"
                optionFilterProp="children"
                className="project-dropdown"
                onChange={onVoiceChange}
                // onSearch={onVoiceSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={allVoices.voices.map((voice) => ({
                  label: voice.privLocalName,
                  value: voice.privShortName,
                }))}
              />
              <Button
                type="primary"
                danger
                className="mb-5"
                onClick={addBreakTag}
              >
                Break Tag
              </Button>
              {hideAudioPlayer ? (
                ""
              ) : (
                <div className="audio-player-container">
                  <ReactAudioPlayer
                    src={`http://localhost:5000/uploads/voiceOvers/${audioSrc}`}
                    controls
                  />
                </div>
              )}
              <textarea
                value={textAreaValue}
                onChange={(e) => handleVoiceText(e.target.value)}
                // onSelect={() => handleSelectedText()}
                placeholder="Write VoiceOver Text..."
                autoSize={{ minRows: 10, maxRows: 5 }}
                ref={textRef}
                style={{ width: "100%", height: "200px" }}
                // onClick={() => {
                //   textVal.selectionStart = "";
                // }}
              />

              <span>
                <Text>
                  Characters count: <Text strong>{charactersCount} </Text> /
                  limit
                  <Text strong> 5000 </Text>
                  charactersWords count: <Text strong> {wordsCount}</Text>
                </Text>
              </span>
            </Card>
            <Row>
              <Col span={16}>
                <Card title="Available Voices" bordered={false}>
                  <Table
                    columns={tableColumns}
                    dataSource={tableData}
                    pagination={false}
                    size="small"
                    bordered
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Engines" bordered={false}>
                  <div className="engine-container">
                    <Radio.Group
                      options={engineValues}
                      onChange={engineType}
                      value={engineTypeValue}
                      optionType="button"
                      buttonStyle="solid"
                      className="mt-5"
                    />
                    <div className="engine-tone">
                      <h4>Engine Tone</h4>
                      <Radio.Group
                        name="voice-tones"
                        onChange={onToneSelection}
                        value={toneValue}
                        defaultValue={1}
                      >
                        <Radio value={"angry"}>Angry</Radio>
                        <Radio value={"sad"}>Sad</Radio>
                        <Radio value={"cheerful"}>Cheerful</Radio>
                        <Radio value={"whispering"}>Whispering</Radio>
                      </Radio.Group>
                    </div>
                    <span className="engine-buttons">
                      <Button
                        className="primary-btn-color mr-2 mt-5"
                        type="primary"
                        shape="round"
                        size="small"
                      >
                        Preview
                      </Button>
                      <Button
                        className="primary-btn-color mt-5"
                        type="primary"
                        shape="round"
                        size="small"
                        style={
                          disableGenerateBtn
                            ? { backgroundColor: "#454545", color: "#999999" }
                            : {}
                        }
                        disabled={disableGenerateBtn}
                        onClick={handleVoiceGenerator}
                      >
                        Generate
                      </Button>
                    </span>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div className="right-ground-container">
              <Card title="Project" className="project-card">
                <div className="porject-inner-div">
                  {visible ? (
                    <Input.Group compact>
                      <Input
                        ref={projectName}
                        style={{
                          width: "calc(100% - 50px)",
                        }}
                        suffix={
                          <Tooltip title="add project">
                            <CheckCircleOutlined
                              style={{ color: "green" }}
                              onClick={addProject}
                            />
                          </Tooltip>
                        }
                        placeholder="New Project Name"
                      />
                      <Tooltip title="cancel">
                        <span className="cancel-project-btn">
                          <CloseCircleOutlined
                            style={{ color: "red" }}
                            onClick={cancelProject}
                          />
                        </span>
                      </Tooltip>
                    </Input.Group>
                  ) : (
                    <Select
                      showSearch
                      placeholder="Select a project"
                      optionFilterProp="children"
                      className="project-dropdown"
                      onChange={onProjectChange}
                      onSearch={onProjectSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={ClientState?.projects?.map((pro) => ({
                        label: pro.projectName,
                        value: pro._id,
                      }))}
                    />
                  )}
                  <div className="porject-control-buttons">
                    <Button
                      className="primary-btn-color mr-2"
                      type="primary"
                      shape="round"
                      icon={<PlusOutlined />}
                      size="middle"
                      onClick={() => {
                        setVisible(true);
                      }}
                    />
                    <Button
                      className="primary-btn-color mr-2"
                      type="primary"
                      shape="round"
                      icon={<EditOutlined />}
                      size="middle"
                    />
                    <Button
                      className="primary-btn-color"
                      type="primary"
                      shape="round"
                      icon={<DeleteOutlined />}
                      size="middle"
                    />
                  </div>
                </div>
                <div className="project-table">
                  <Table
                    columns={projectColumns}
                    dataSource={projectsData}
                    loading={ClientState.projectLoading}
                    pagination={{ pageSize: 5 }}
                    onRow={(record, index) => {
                      return {
                        onClick: (event) => {
                          handleProjectTableRowClick(record, index);
                        },
                      };
                    }}
                  />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    */
    },
    (
      <Row>
        <Col span="18">
          <div className="client-dashbord-wrapper ">
            <SegmentedBar defaultPage={"Neurospeech"} />
            <Row style={{ marginTop: "20px" }}>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    height: "30vh",
                    maxHeight: "350px",
                    marginBottom: "50px",
                  }}
                >
                  <div className="custom-textarea">
                    <Row
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                        flexGrow: 1,
                      }}
                    >
                      <TextArea
                        autoSize={false}
                        rows={4}
                        style={{ flexG: 1 }}
                        maxLength={500}
                        suffix={"RMB"}
                        className="speech-textarea"
                        onChange={handleTextChange}
                        placeholder="Enter your text here to convert it to speech"
                      />

                      <Dropdown
                        placement="bottom"
                        trigger={["click"]}
                        dropdownRender={(menu) => (
                          <div
                            style={{
                              background: "#F48E99 ",
                              padding: "20px",
                              borderRadius: "10px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={"/images/getSubtitles.svg"}
                                width="15px"
                                height="15px"
                              />
                              <p
                                style={{
                                  margin: "0 0 0 10px",
                                  fontSize: "18px",
                                  color: "white",
                                }}
                              >
                                Import Caption
                              </p>
                            </div>
                            <Divider
                              style={{ color: "#FFBCC4", margin: "7px 0" }}
                            />
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                src={"/images/getSubtitles.svg"}
                                width="15px"
                                height="15px"
                              />
                              <p
                                style={{
                                  margin: "0 0 0 10px",
                                  fontSize: "18px",
                                  color: "white",
                                }}
                              >
                                Import Subtitles
                              </p>
                            </div>
                          </div>
                        )}
                      >
                        <span
                          style={{
                            background: "#F48E99",
                            width: "35px",
                            height: "35px",
                            padding: "7px",
                            borderRadius: "50%",
                          }}
                        >
                          <img
                            src={"/images/getSubtitles.svg"}
                            width="100%"
                            height="100%"
                          />
                        </span>
                      </Dropdown>
                    </Row>

                    <div className="align-btn">
                      <div className="align-inside-btn2">
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
                          }}
                        >
                          <img src="/icons/playoutline.png" />
                          <p className="ml-2">Preview Audio</p>
                        </button>
                        {/* <Button
                      type="primary"
                      icon={<img src="/icons/playoutline.png" />}
                      size="large"
                      className="preview-btn"
                      style={
                        buttonEnabled
                          ? { backgroundColor: "#07C4A2" }
                          : { backgroundColor: "#b0b0b0" }
                      }
                      disabled={!buttonEnabled}
                    >
                      Preview Audio
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
                          }}
                        >
                          <img src="/icons/playfilled.png" />
                          <p className="ml-2">Generate Audio</p>
                        </button>
                      </div>
                      <div className="align-inside-btn1">
                        <TranslateDrowpdown buttonEnabled={buttonEnabled} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* {show && (
              <Card className="languages-dashboad">
                <Input
                  className="lang-search"
                  size="large"
                  placeholder="Translate to"
                  suffix={<SearchOutlined className="my-icon" />}
                ></Input>
                <CloseOutlined
                  className="closedropdown"
                  onClick={() => setShow(!show)}
                />
                <div className="item-list">
                  {array.map((item) => (
                    <a className="items">{item.label}</a>
                  ))}
                </div>
              </Card>
            )} */}
                <div>
                  <p className="voice-heading">Generated Voices</p>
                </div>

                <Card className="voice-record">
                  No generated voices in this project yet.
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span="6" className="pl-5 flex" style={{ height: "100vh" }}>
          <div className="w-full bg-[#F8FBFF] p-4 h-full overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-5 ">
                <img
                  src={"/images/BellActive.svg"}
                  width="33px"
                  height="29px"
                />
                <Switch defaultChecked />
              </div>

              <div className="flex items-center gap-4">
                <img src="/images/profile.png" width="50" height="50" />
                <h2 className="font-sans font-bold	text-md text-primary">
                  Henry Shaw
                </h2>
              </div>
            </div>
            <div className="bg-white px-4 py-5 rounded">
              <h4 className="font-bold text-sm font-body ">Voices Used</h4>
              <p className="font-number text-2xl text-primary mb-6">32</p>
              <div className="flex items-center justify-around">
                <div className="flex-col items-center">
                  <img
                    src="/icons/male.svg"
                    width="20px"
                    height="20px"
                    className="mx-auto"
                  />
                  <p className="font-number text-2xl text-primary">09</p>
                </div>
                <div className="flex-col items-center">
                  <img
                    src="/icons/male.svg"
                    width="20px"
                    height="20px"
                    className="mx-auto"
                  />
                  <p className="font-number text-2xl text-primary">09</p>
                </div>
                <div className="flex-col items-center">
                  <img
                    src="/icons/male.svg"
                    width="20px"
                    height="20px"
                    className="mx-auto"
                  />
                  <p className="font-number text-2xl text-primary">09</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 gap-3 ">
              <div className="bg-white p-3 rounded ">
                <h4 className="font-bold text-sm font-body ">
                  Characters Used
                </h4>
                <p className="font-number text-2xl text-primary ">32</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-bold text-sm font-body ">
                  Characters Used
                </h4>
                <p className="font-number text-2xl text-primary ">32</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-bold text-sm font-body ">
                  Characters Used
                </h4>
                <p className="font-number text-2xl text-primary ">32</p>
              </div>
            </div>
            <div className="bg-white px-5 py-5 rounded">
              <h2 className="font-body text-lg font-bold text-left">
                Most Popular Voices
              </h2>
              <div className="voiceCardsContainer">
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
                <VoiceCard />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  );
}
