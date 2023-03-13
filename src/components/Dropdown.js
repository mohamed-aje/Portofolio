import "flowbite";

export const Dropdown = () => {
  return (
    <div className="relative right-0 my-2 mx-2 origin-top-right ">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent   md:p-0 md:w-auto dark:text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        Personal Documents{" "}
        <svg
          class="w-5 h-5 ml-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="dropdownNavbar"
        class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <a
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:animate-bounce "
              href="cv_m.pdf"
              download={"cv_m.pdf"}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="Transcript_of_records.pdf"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:animate-bounce"
              download={"Transcript_of_records.pdf"}
            >
              Transcript of Records
            </a>
          </li>
          <li>
            <a
              href="Certificate_of_study.pdf"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:animate-bounce"
              download={"Certificate_of_study.pdf"}
            >
              Certificate Of Study
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
