import Link from "next/link";
import Image from "next/image";

const Header = ({ toggleSideBar, props }) => {
    return (
        <header className="sticky top-0 z-999 flex w-fulldrop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-2 py-4 shadow-2 md:px-4 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                <button type="button" className="text-white bg-violet-700 inline-flex items-center me-1 dark:bg-violet-600 rounded-r-2xl" onClick={toggleSideBar}>
                <svg width="83" height="59" viewBox="0 0 83 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-2 0H63C74.0457 0 83 8.95431 83 20V39C83 50.0457 74.0457 59 63 59H-2V0Z" fill="#8060DF"/>
                    <path d="M9.99999 42.1174L22.1891 29.9283C22.9455 29.172 22.9455 27.9455 22.1891 27.1891L9.99999 15" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M48.5 27.5C52.228 27.5 55.25 24.4779 55.25 20.75C55.25 17.0221 52.228 14 48.5 14C44.7721 14 41.75 17.0221 41.75 20.75C41.75 24.4779 44.7721 27.5 48.5 27.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38 38.8571C38 35.07 41.0701 32 44.8571 32H52.1429C55.93 32 59 35.07 59 38.8571C59 41.6975 56.6975 44 53.8571 44H43.1429C40.3025 44 38 41.6975 38 38.8571Z" stroke="white" stroke-width="3"/>
                </svg>
                </button>
                    <p className="text-2xl text-gray-100 text-center cursor-pointer font-bold">
                        R123245611231
                    </p>
                </div>
                <div className="flex items-center 2xsm:gap-7">
                    <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9788 36.8906C22.9788 37.4639 22.8322 38.0317 22.5473 38.5615C22.2623 39.0913 21.8447 39.5727 21.3181 39.9782C20.7917 40.3836 20.1666 40.7053 19.4788 40.9248C18.791 41.144 18.0536 41.2571 17.3091 41.2571C16.5645 41.2571 15.8274 41.144 15.1393 40.9248C14.4515 40.7053 13.8265 40.3836 13.3 39.9782C12.7735 39.5727 12.3559 39.0913 12.071 38.5615C11.786 38.0317 11.6394 37.4639 11.6394 36.8906" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        <path d="M30.6456 20.5049C30.8342 22.0817 31.2705 23.6227 31.9417 25.0702L32.442 26.1489C34.3501 30.2637 31.8651 35.0732 27.4051 35.8975L27.1023 35.9535C20.6284 37.1501 13.9899 37.1501 7.51602 35.9535C3.01946 35.1224 0.640577 30.1476 2.81647 26.1259L3.24443 25.3348C4.4129 23.1751 5.02476 20.7583 5.02476 18.3027V15.8052C5.02476 11.6019 7.40382 7.76065 11.167 5.88795C14.4392 4.25957 18.1852 3.95678 21.6389 4.99067" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        <path d="M27.9024 20.1951C33.4792 20.1951 38 15.6743 38 10.0976C38 4.52083 33.4792 0 27.9024 0C22.3257 0 17.8049 4.52083 17.8049 10.0976C17.8049 15.6743 22.3257 20.1951 27.9024 20.1951Z" fill="#ECFF72"/>
                    </svg>
                </div>
            </div>
        </header>
    );
    };

export default Header;
