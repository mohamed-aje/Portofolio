import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(null);
  return (
    <section
      id="certificates"
      className="dark:bg-gradient-to-r from-sky-700 via-cyan-900 to-sky-700 "
    >
      <div className="flex flex-col w-full mb-14 items-center	">
        <em className=" text-center font-medium title-font text-gray dark:text-white mt-4">
          ‹Documents & Certificates›
        </em>
        <h1 className="text-center sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white ">
          Documents :
          <br />
        </h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap p-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 my-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-gray bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Certificate of Study
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 my-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-gray bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Internship Certificate
              </a>
            </li>
            <li className="-mb-px mr-2 my-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase 	 px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-gray bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words dark:bg-gradient-to-r from-sky-700 via-cyan-900 to-sky-700 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <img
                    src="cof.png"
                    alt="cof"
                    className="h-auto max-w-lg mx-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none max-w-sm max-w-xs		"
                  />
                </div>
                <div className={openTab === 2 ? "block " : "hidden"} id="link2">
                  <img
                    src="internshio.png"
                    alt="intern"
                    className="h-auto max-w-lg mx-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none max-w-sm max-w-xs	"
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <img
                    src="resume.png"
                    alt="resume"
                    className="h-auto max-w-lg mx-auto transition-all duration-300 rounded-lg blur-sm hover:blur-none max-w-sm max-w-xs	"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
