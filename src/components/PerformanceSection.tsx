import { IoMdInformationCircle } from "react-icons/io";

function PerformanceSection() {
  return (
    <div className="bg-white mt-5 rounded-lg lg:p-6 p-2 h-max">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between items-center">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                46,930.22
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4 relative">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt"></div>
              <div
                className="absolute left-[50%] top-[-10px] transform -translate-x-1/2 flex items-center"
                style={{ marginTop: "15px" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="lg:w-3 w-2 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100"></polygon>
                </svg>
                <span className="text-[#44475B] text-sm font-normal ml-2">
                  $48,637.83
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,343.83
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22
              </div>
            </div>
            <div className="w-[500px] h-2 mx-4">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="text-[#44475B] font-semibold text-xl">
              Fundamentals
            </div>
            <div>
              <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
            </div>
          </div>
          <div className="lg:flex mb-8">
            <div className="lg:w-1/2 lg:mr-10 mt-3">
              {[
                { label: "Bitcoin Price", value: "$16,815.46" },
                { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
                { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
                { label: "Trading Volume", value: "$23,249,202,782" },
                { label: "Market Cap Rank", value: "#1" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between py-5 border-b-2 border-[#D3E0E6]"
                >
                  <div className="text-[#768396] text-sm font-semibold">
                    {label}
                  </div>
                  <div className="text-[#111827] text-sm font-semibold mr-4">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 lg:ml-10 lg:mt-3">
              {[
                { label: "Market Cap", value: "$323,507,290,047" },
                { label: "Market Cap Dominance", value: "38.343%" },
                { label: "Volume / Market Cap", value: "0.0718" },
                {
                  label: "All-Time High",
                  value: (
                    <div className="text-end">
                      $69,044.77{" "}
                      <span className="text-red-500">-75.6%</span>
                      <div className="text-xs font-normal">
                        Nov 10, 2021 (about 1 year)
                      </div>
                    </div>
                  ),
                },
                {
                  label: "All-Time Low",
                  value: (
                    <div className="text-end">
                      $67.81{" "}
                      <span className="text-green-500">24729.1%</span>
                      <div className="text-xs font-normal">
                        Jul 06, 2013 (over 9 years)
                      </div>
                    </div>
                  ),
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center"
                >
                  <div className="text-[#768396] text-sm font-semibold">
                    {label}
                  </div>
                  <div className="text-[#111827] text-sm font-semibold mr-4">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
