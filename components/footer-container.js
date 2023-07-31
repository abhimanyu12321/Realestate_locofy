
const FooterContainer = () => {
  return (
    <div
      className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start md:w-auto md:flex-row sm:flex-col"

    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] ">
        <div className="w-[312px]  flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className=" w-11 h-11" alt="" src="/houseLine.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className=" leading-[24px] font-semibold">REIS</div>
              <div className=" text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className=" leading-[24px]">Call : +123 400 123</div>
            <div className=" leading-[24px] flex items-end">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className=" leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-[21.67px]"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo2.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo3.svg"
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo4.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className=" leading-[24px]">Home</div>
            <div className=" leading-[24px]">Become a Host</div>
            <div className=" leading-[24px]">Pricing</div>
            <div className=" leading-[24px]">Blog</div>
            <div className=" leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className=" leading-[24px]">About Us</div>
            <div className=" leading-[24px]">Press</div>
            <div className=" leading-[24px]">Contact</div>
            <div className=" leading-[24px]">Careers</div>
            <div className=" leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className=" h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className=" leading-[24px]">Terms of servies</div>
            <div className="leading-[24px]">Privacy Policy</div>
            <div className=" leading-[24px]">Security</div>
          </div>
        </div>
      </footer>az
    </div>
  );
};

export default FooterContainer;
