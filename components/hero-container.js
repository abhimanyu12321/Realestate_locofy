import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const HeroContainer = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/");
  };

  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-regular-600">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <Dropdown
                  overlay={
                    <Menu>
                      {[].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Studio apartments" },
                        { value: "One-bedroom apartments" },
                        { value: "Two-bedroom apartments" },
                        { value: "Three-bedroom apartments" },
                        { value: "Four or more bedroom apartments/houses" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "$500-$2000" },
                        { value: "$2500-$10000" },
                        { value: "$10000+" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row box-border items-center justify-center"
                onClick={onSearchCTAClick}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
