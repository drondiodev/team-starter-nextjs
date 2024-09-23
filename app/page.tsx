import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="relative z-50 flex w-full flex-wrap bg-white/80 py-4 backdrop-blur-md lg:flex-nowrap lg:justify-start lg:bg-transparent lg:backdrop-blur-none">
        <nav className="mx-auto flex w-full max-w-[85rem] basis-full flex-wrap items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center sm:gap-x-2">
            <a
              className="flex-none rounded-md focus:opacity-80 focus:outline-none"
              href="/"
            >
              <svg
                className="h-auto w-28"
                width="116"
                height="32"
                viewBox="0 0 116 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.5696 30.2968V10.7968H37.4474V13.1789H37.6229C37.7952 12.7972 38.0445 12.4094 38.3707 12.0155C38.7031 11.6154 39.134 11.283 39.6634 11.0183C40.1989 10.7475 40.8636 10.6121 41.6577 10.6121C42.6918 10.6121 43.6458 10.8829 44.5199 11.4246C45.3939 11.9601 46.0926 12.7695 46.6158 13.8529C47.139 14.93 47.4006 16.2811 47.4006 17.9061C47.4006 19.488 47.1451 20.8237 46.6342 21.9132C46.1295 22.9966 45.4401 23.8183 44.5661 24.3784C43.6982 24.9324 42.7256 25.2094 41.6484 25.2094C40.8852 25.2094 40.2358 25.0832 39.7003 24.8308C39.1709 24.5785 38.737 24.2615 38.3984 23.8799C38.0599 23.4921 37.8014 23.1012 37.6229 22.7073H37.5028V30.2968H33.5696ZM37.4197 17.8877C37.4197 18.7309 37.5367 19.4665 37.7706 20.0943C38.0045 20.7222 38.343 21.2115 38.7862 21.5624C39.2294 21.9071 39.768 22.0794 40.402 22.0794C41.0421 22.0794 41.5838 21.904 42.027 21.5532C42.4702 21.1961 42.8056 20.7037 43.0334 20.0759C43.2673 19.4419 43.3842 18.7125 43.3842 17.8877C43.3842 17.069 43.2704 16.3488 43.0426 15.7272C42.8149 15.1055 42.4794 14.6192 42.0362 14.2683C41.593 13.9175 41.0483 13.7421 40.402 13.7421C39.7618 13.7421 39.2202 13.9113 38.777 14.2499C38.34 14.5884 38.0045 15.0685 37.7706 15.6902C37.5367 16.3119 37.4197 17.0444 37.4197 17.8877ZM49.2427 24.9786V10.7968H53.0559V13.2712H53.2037C53.4622 12.391 53.8961 11.7262 54.5055 11.2769C55.1149 10.8214 55.8166 10.5936 56.6106 10.5936C56.8076 10.5936 57.02 10.6059 57.2477 10.6306C57.4754 10.6552 57.6755 10.689 57.8478 10.7321V14.2222C57.6632 14.1668 57.4077 14.1175 57.0815 14.0745C56.7553 14.0314 56.4567 14.0098 56.1859 14.0098C55.6073 14.0098 55.0903 14.136 54.6348 14.3884C54.1854 14.6346 53.8284 14.9793 53.5638 15.4225C53.3052 15.8657 53.176 16.3765 53.176 16.9551V24.9786H49.2427ZM64.9043 25.2556C63.4455 25.2556 62.1898 24.9601 61.1373 24.3692C60.0909 23.7721 59.2845 22.9289 58.7182 21.8394C58.1519 20.7437 57.8688 19.448 57.8688 17.9523C57.8688 16.4935 58.1519 15.2132 58.7182 14.1114C59.2845 13.0096 60.0816 12.1509 61.1096 11.5354C62.1437 10.9199 63.3563 10.6121 64.7474 10.6121C65.683 10.6121 66.5539 10.7629 67.3603 11.0645C68.1728 11.36 68.8806 11.8062 69.4839 12.4033C70.0932 13.0004 70.5672 13.7513 70.9057 14.6561C71.2443 15.5548 71.4135 16.6074 71.4135 17.8138V18.8941H59.4384V16.4566H67.7111C67.7111 15.8903 67.588 15.3886 67.3418 14.9516C67.0956 14.5146 66.754 14.1729 66.317 13.9267C65.8861 13.6744 65.3844 13.5482 64.812 13.5482C64.2149 13.5482 63.6856 13.6867 63.2239 13.9637C62.7684 14.2345 62.4114 14.6007 62.1529 15.0624C61.8944 15.5179 61.762 16.0257 61.7559 16.5858V18.9033C61.7559 19.605 61.8851 20.2113 62.1437 20.7222C62.4083 21.2331 62.7807 21.627 63.2608 21.904C63.741 22.181 64.3103 22.3195 64.9689 22.3195C65.406 22.3195 65.8061 22.2579 66.1692 22.1348C66.5324 22.0117 66.8432 21.8271 67.1018 21.5808C67.3603 21.3346 67.5572 21.033 67.6927 20.676L71.3304 20.9161C71.1458 21.7901 70.7672 22.5534 70.1948 23.2058C69.6285 23.8522 68.896 24.3569 67.9974 24.7201C67.1048 25.0771 66.0738 25.2556 64.9043 25.2556ZM77.1335 6.06949V24.9786H73.2003V6.06949H77.1335ZM79.5043 24.9786V10.7968H83.4375V24.9786H79.5043ZM81.4801 8.96863C80.8954 8.96863 80.3937 8.77474 79.9752 8.38696C79.5628 7.99302 79.3566 7.52214 79.3566 6.97431C79.3566 6.43265 79.5628 5.96792 79.9752 5.58014C80.3937 5.1862 80.8954 4.98923 81.4801 4.98923C82.0649 4.98923 82.5635 5.1862 82.9759 5.58014C83.3944 5.96792 83.6037 6.43265 83.6037 6.97431C83.6037 7.52214 83.3944 7.99302 82.9759 8.38696C82.5635 8.77474 82.0649 8.96863 81.4801 8.96863ZM89.7415 16.7797V24.9786H85.8083V10.7968H89.5569V13.2989H89.723C90.037 12.4741 90.5632 11.8216 91.3019 11.3415C92.0405 10.8552 92.9361 10.6121 93.9887 10.6121C94.9735 10.6121 95.8322 10.8275 96.5647 11.2584C97.2971 11.6893 97.8665 12.3048 98.2728 13.105C98.679 13.899 98.8821 14.8469 98.8821 15.9487V24.9786H94.9489V16.6505C94.9551 15.7826 94.7335 15.1055 94.2841 14.6192C93.8348 14.1268 93.2162 13.8806 92.4283 13.8806C91.8989 13.8806 91.4311 13.9944 91.0249 14.2222C90.6248 14.4499 90.3109 14.7823 90.0831 15.2193C89.8615 15.6502 89.7477 16.1703 89.7415 16.7797ZM107.665 25.2556C106.206 25.2556 104.951 24.9601 103.898 24.3692C102.852 23.7721 102.045 22.9289 101.479 21.8394C100.913 20.7437 100.63 19.448 100.63 17.9523C100.63 16.4935 100.913 15.2132 101.479 14.1114C102.045 13.0096 102.842 12.1509 103.87 11.5354C104.905 10.9199 106.117 10.6121 107.508 10.6121C108.444 10.6121 109.315 10.7629 110.121 11.0645C110.934 11.36 111.641 11.8062 112.245 12.4033C112.854 13.0004 113.328 13.7513 113.667 14.6561C114.005 15.5548 114.174 16.6074 114.174 17.8138V18.8941H102.199V16.4566H110.472C110.472 15.8903 110.349 15.3886 110.103 14.9516C109.856 14.5146 109.515 14.1729 109.078 13.9267C108.647 13.6744 108.145 13.5482 107.573 13.5482C106.976 13.5482 106.446 13.6867 105.985 13.9637C105.529 14.2345 105.172 14.6007 104.914 15.0624C104.655 15.5179 104.523 16.0257 104.517 16.5858V18.9033C104.517 19.605 104.646 20.2113 104.905 20.7222C105.169 21.2331 105.542 21.627 106.022 21.904C106.502 22.181 107.071 22.3195 107.73 22.3195C108.167 22.3195 108.567 22.2579 108.93 22.1348C109.293 22.0117 109.604 21.8271 109.863 21.5808C110.121 21.3346 110.318 21.033 110.454 20.676L114.091 20.9161C113.907 21.7901 113.528 22.5534 112.956 23.2058C112.389 23.8522 111.657 24.3569 110.758 24.7201C109.866 25.0771 108.835 25.2556 107.665 25.2556Z"
                  fill="currentColor"
                  className="fill-blue-600 dark:fill-white"
                ></path>
                <path
                  d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12"
                  className="stroke-blue-600 dark:stroke-white"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
                <path
                  d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12"
                  className="stroke-blue-600 dark:stroke-white"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
                <circle
                  cx="13"
                  cy="16"
                  r="5"
                  fill="currentColor"
                  className="fill-blue-600 dark:fill-white"
                ></circle>
              </svg>
            </a>
            <div className="hidden items-center space-x-0.5 rounded-full border border-gray-200 p-0.5 sm:flex">
              <a
                className="inline-flex items-center gap-x-3 rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-white hover:bg-gray-900 focus:bg-gray-900 focus:outline-none dark:bg-white dark:text-neutral-800"
                href="./index.html"
              >
                Open Source
              </a>
              <a
                className="inline-flex items-center gap-x-3 rounded-full px-2 py-1 text-xs font-medium text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                href="./pro/index.html"
              >
                Boilerplate
                <span className="relative -ms-1">
                  <span className="absolute start-0 top-[5px] flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75 dark:bg-green-600"></span>
                    <span className="relative inline-flex size-1.5 rounded-full bg-green-500"></span>
                  </span>

                  <span className="ps-2.5 text-xs text-green-500">
                    Work in progress
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="ms-auto flex items-center lg:order-3 lg:gap-x-1">
            <div className="group relative z-10 transition">
              <form>
                <div className="relative mx-auto max-w-2xl">
                  <label className="sr-only">Quick search</label>
                  <button
                    type="button"
                    className="group inline-flex size-7 shrink-0 items-center justify-center rounded-full focus:outline-none"
                  >
                    <svg
                      className="size-4 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <div
                id="quick-search"
                className="absolute start-0 top-0 size-7 cursor-pointer after:absolute after:inset-0 after:-z-[1] after:rounded-full after:hover:bg-gray-200 dark:after:hover:bg-neutral-800"
              >
                <button
                  type="button"
                  className="DocSearch DocSearch-Button"
                  aria-label="Search"
                >
                  <span className="DocSearch-Button-Container">
                    <svg
                      width="20"
                      height="20"
                      className="DocSearch-Search-Icon"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                        stroke="currentColor"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="DocSearch-Button-Placeholder">Search</span>
                  </span>
                  <span className="DocSearch-Button-Keys">
                    <kbd className="DocSearch-Button-Key">⌘</kbd>
                    <kbd className="DocSearch-Button-Key">K</kbd>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative z-10 flex items-center before:hidden before:h-4 before:w-px before:bg-gray-300 lg:before:block xl:gap-x-1 dark:before:bg-neutral-700">
              <div className="flex lg:ms-1 xl:gap-x-1">
                <a
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <svg
                    className="size-4 shrink-0"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
                      fill="#0ACF83"
                    ></path>
                    <path
                      d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
                      fill="#A259FF"
                    ></path>
                    <path
                      d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
                      fill="#F24E1E"
                    ></path>
                    <path
                      d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
                      fill="#FF7262"
                    ></path>
                    <path
                      d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
                      fill="#1ABCFE"
                    ></path>
                  </svg>
                </a>
                <a
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="https://github.com/htmlstreamofficial/preline"
                  target="_blank"
                >
                  <svg
                    className="size-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a
                  className="inline-flex size-7 shrink-0 items-center justify-center rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="https://x.com/prelineUI"
                  target="_blank"
                >
                  <svg
                    className="size-3.5 shrink-0"
                    width="48"
                    height="50"
                    viewBox="0 0 48 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5665 20.7714L46.4356 0H42.2012L26.6855 18.0355L14.2931 0H0L18.7397 27.2728L0 49.0548H4.23464L20.6196 30.0087L33.7069 49.0548H48L28.5655 20.7714H28.5665ZM22.7666 27.5131L5.76044 3.18778H12.2646L42.2032 46.012H35.699L22.7666 27.5142V27.5131Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <button
                type="button"
                className="hs-dark-mode-active:hidden hs-dark-mode block rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                data-hs-theme-click-value="dark"
              >
                <span className="group inline-flex size-7 shrink-0 items-center justify-center">
                  <svg
                    className="size-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className="hs-dark-mode-active:block hs-dark-mode hidden rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                data-hs-theme-click-value="light"
              >
                <span className="group inline-flex size-7 shrink-0 items-center justify-center">
                  <svg
                    className="size-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="ms-1 lg:hidden">
              <button
                type="button"
                className="hs-collapse-toggle inline-flex size-9 items-center justify-center gap-x-2 rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                id="main-navbar-collapse"
                aria-expanded="false"
                aria-controls="main-navbar"
                aria-label="Toggle navigation"
                data-hs-collapse="#main-navbar"
              >
                <svg
                  className="hs-collapse-open:hidden size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6"></line>
                  <line x1="3" x2="21" y1="12" y2="12"></line>
                  <line x1="3" x2="21" y1="18" y2="18"></line>
                </svg>
                <svg
                  className="hs-collapse-open:block hidden size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            id="main-navbar"
            className="hs-collapse ms-auto hidden grow basis-full overflow-hidden transition-all duration-300 lg:order-2 lg:block lg:w-auto lg:basis-auto"
            aria-labelledby="main-navbar-collapse"
          >
            <div className="mt-5 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:justify-end">
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./index.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./docs/index.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Documentation
              </a>
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./examples.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                  <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                </svg>
                Examples
              </a>
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium !text-blue-600 text-gray-800 hover:text-blue-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:!text-blue-500 dark:text-neutral-200 dark:hover:text-blue-400 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./templates.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <line x1="3" x2="21" y1="9" y2="9"></line>
                  <line x1="9" x2="9" y1="21" y2="9"></line>
                </svg>
                Templates
              </a>
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./plugins.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                </svg>
                Plugins
              </a>
              <a
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                href="./figma.html"
              >
                <svg
                  className="me-3 block size-4 shrink-0 lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                </svg>
                Figma
              </a>
              <a
                className="@@if(link=='text-gray:4ext-blue-500 dark:hover:text-blue-500} inline-flex items-center gap-x-3 rounded-lg p-2 text-sm font-medium text-gray-800 hover:text-blue-600 focus:text-blue-600 focus:outline-none sm:hidden dark:text-blue-500"
                href="./pro/index.html"
              >
                <svg
                  className="block size-4 text-violet-500 md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
                <span className="bg-gradient-to-tl from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Preline Pro
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Lancez votre projet sans effort avec THE Boilerplate Next.js !
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
            Template de configuration d&apos;un projet Next.Js avec Typescript,
            ESLint, Prettier, Husky, Docker, scopes de commit personnalisés et
            Lint Staged.
          </p>
          <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
            <Link
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Vers le template
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border px-8 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href="https://github.com/drondiodev/nextjs14cicd"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 size-5"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              Ajouter une étoile sur GitHub
            </Link>
          </div>

          {/* Principales caractéristiques */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Principales caractéristiques
            </h2>
            <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
              <li>
                <strong>Technologies de base :</strong> Next.js 14 avec App
                Router, TypeScript, React
              </li>
              <li>
                <strong>Outils de développement :</strong> ESLint et Prettier,
                Husky et Lint-Staged, Commitizen
              </li>
              <li>
                <strong>Styles :</strong> Tailwind CSS
              </li>
              <li>
                <strong>Déploiement et CI/CD :</strong> Docker, GitHub Actions
              </li>
              <li>
                <strong>Autres fonctionnalités :</strong> Configuration
                personnalisée des scopes de commit, Polices personnalisées,
                Configuration de métadonnées pour le SEO
              </li>
            </ul>
          </div>

          {/* Cible potentielle */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Cible potentielle
            </h2>
            <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
              <li>
                <strong>Développeurs React/Next.js :</strong> Démarrage rapide
                avec les meilleures pratiques
              </li>
              <li>
                <strong>Équipes de développement :</strong> Standardisation des
                pratiques et amélioration de la collaboration
              </li>
              <li>
                <strong>Startups et entreprises :</strong> Base solide pour de
                nouveaux projets web
              </li>
              <li>
                <strong>Développeurs freelance :</strong> Point de départ rapide
                pour projets clients
              </li>
            </ul>
          </div>

          {/* Avantages clés */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Avantages clés
            </h2>
            <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
              <li>Gain de temps sur la configuration initiale</li>
              <li>
                Amélioration de la qualité du code grâce aux outils de linting
                et de formatage
              </li>
              <li>
                Facilitation de la collaboration avec des commits standardisés
              </li>
              <li>Préparation pour le déploiement avec Docker</li>
              <li>Intégration continue avec GitHub Actions</li>
            </ul>
          </div>
        </div>
        <div className="px-3 py-16 pb-16 pt-0">
          <div className="mx-auto max-w-screen-lg">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center text-xl font-semibold">
                <svg
                  className="mr-1 size-8 stroke-current stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0h24v24H0z" stroke="none"></path>
                  <rect x="3" y="12" width="6" height="8" rx="1"></rect>
                  <rect x="9" y="8" width="6" height="12" rx="1"></rect>
                  <rect x="15" y="4" width="6" height="16" rx="1"></rect>
                  <path d="M4 20h14"></path>
                </svg>
                SaaS Template
              </div>
              <ul className="[&amp;_a:hover]:opacity-100 [&amp;_a]:opacity-60 mt-4 flex gap-x-8 text-lg max-sm:flex-col">
                <li>
                  <a href="/sign-up">Produit</a>
                </li>
                <li>
                  <a href="/sign-up">Docs</a>
                </li>
                <li>
                  <a href="/sign-up">Blog</a>
                </li>
                <li>
                  <a href="/sign-up">Communauté</a>
                </li>
                <li>
                  <a href="/sign-up">Entreprise</a>
                </li>
              </ul>
              <ul className="text-muted-foreground [&amp;_svg:hover]:text-primary [&amp;_svg:hover]:opacity-100 [&amp;_svg]:size-5 [&amp;_svg]:fill-current [&amp;_svg]:opacity-60 mt-4 flex flex-row gap-x-5">
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.293 3.295A3.303 3.303 0 013.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="text-muted-foreground mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm max-md:flex-col">
                <div>
                  © Copyright 2024 SaaS Template Designé by{' '}
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://creativedesignsguru.com"
                  >
                    Creative Designs Guru
                  </a>
                  .
                </div>
                <ul className="[&amp;_a:hover]:opacity-100 [&amp;_a]:opacity-60 flex gap-x-4 font-medium">
                  <li>
                    <a href="/sign-up">Conditions d&apos;utilisation</a>
                  </li>
                  <li>
                    <a href="/sign-up">Politique de confidentialité</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
