import { useMemo } from "react";

const CardContainer = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  propWidth,
  propFlex,
  propMinWidth,
  propMaxWidth,
}) => {
  const card1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]);

  return (
    <div
      className="rounded-3xs bg-gray-white box-border w-[350px]  flex flex-col flex-wrap py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card1Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionsText}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionsText2}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.42px] h-[17.42px]"
            alt=""
            src={imageDimensionsText3}
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
            alt=""
            src={imageDimensionsText4}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionsText5}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionsText6}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
            <img
              className="relative w-[14.51px] h-[14.51px]"
              alt=""
              src={imageDimensionsText7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
