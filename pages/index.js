import Head from "next/head";
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
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import FooterContainer from "../components/footer-container";

const PropertiesGridView = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your dream home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
        <Header hamburger={false} />
        <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <div className="relative leading-[72px] font-semibold">
              Properties
            </div>
            <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
              <span>{`Home / `}</span>
              <span className="font-medium text-gray-white">Properties</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
          <div className="w-[272px] flex flex-row items-center justify-start">
            <div className="flex flex-row items-end justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/listbullets.svg"
                />
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/squaresfour.svg"
                />
              </div>
              <div className="relative leading-[24px]">Sort by:</div>
              <Dropdown
                overlay={
                  <Menu>
                    {[
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
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
                  {`Default Order `}
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
          <PropertiesGridContainer />
          <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
            <div className="rounded bg-primary-50 flex flex-row p-2.5 items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
            </div>
            <div className="rounded-10xs bg-primary-500 flex flex-col py-2.5 px-[9px] items-start justify-start text-gray-white">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                1
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                2
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                3
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                ...
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                54
              </div>
            </div>
            <div className="rounded bg-primary-500 flex flex-row p-2.5 items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
            </div>
          </div>
        </div>
        <FooterContainer
          houseLine="/houseline1.svg"
          socialMediaLogo="/social-media-logo.svg"
          socialMediaLogo1="/social-media-logo1.svg"
          socialMediaLogo2="/social-media-logo2.svg"
          socialMediaLogo3="/social-media-logo3.svg"
          socialMediaLogo4="/social-media-logo4.svg"
        />
      </div>
    </>
  );
};

export default PropertiesGridView;
