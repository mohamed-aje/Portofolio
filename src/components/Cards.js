import { skills } from "../data";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Cards = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 overflow-y-auto h-80">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
        Key Skills & Technologies
      </h5>
      <p class="text-sm font-normal text-gray-500 "></p>
      <div className=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
        {skills.map((skill) => (
          <div key={skill}>
            <div className="bg-gray-800 rounded flex p-4 h-full items-center my-2 text-center hover:bg-green-800 ">
              <span className=" flex flex-wrap title-font font-medium text-white ">
                <CheckBadgeIcon className="h-6 w-6 text-blue-500 mx-2 " />{" "}
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
