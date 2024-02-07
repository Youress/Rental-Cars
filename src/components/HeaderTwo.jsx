import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useSearchContext } from "../Context/SearchContext";

const HeaderTwo = () => {
  const search = useSearchContext();
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };
  return (
    <header className="bg-white text-black flex items-stretch min-h-20 sm:px-8 lg:px-20 shadow-xl">
      <div className="flex justify-between items-center mx-auto w-[100%] px-4 ">
        <div className=" flex items-center">
          <div className="mdx:hidden">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 570"
                height="38"
                width="66.66666666666666"
              >
                <title>SIXT</title>
                <path
                  d="M1000,64.3486862v84.5219345h-95.2709351v252.7862091h-99.5255127V148.8706207h-74.5170898 l-65.0908813,92.5158997l127.5218506,160.2667694H669.3632202l-69.3630371-94.046936l-72.9190063,94.046936l-213.0421143,0.00354 V190.5054321h97.5005188v203.3267822l125.5004578-152.445694l-51.6677246-63.997345 c7.6235046-2.5435333,16.0619202-5.8243561,23.2832642-8.8723755 c23.7313232-10.0188751,44.5698853-25.2941437,63.2211914-40.5835037l28.1234131,40.1813431l75.8929443-103.7659531H1000z M134.3661499,410c97.6028442-0.440979,161.247345-30.2647705,161.247345-110.5075073 c0-143.5592499-199.9646301-82.3382568-199.9646301-138.7579498c0-19.3815918,21.1101761-27.1850281,52.5779114-27.1850281 c38.5479431,0,88.2718964,12.9645538,126.8304138,25.4528809v-81.449234 C243.035614,68.3632965,197.4109497,57.910511,147.9374847,57.910511c-111.4317169,0-147.8100891,52.4192009-147.937088,109.1599121 c-0.3210258,144.0284271,196.6414948,82.6945648,196.6414948,138.6450653c0,18.8383179-20.8843994,27.3014221-62.6779022,27.3331909 c-41.137352,0-85.1145477-9.9836121-130.2947083-24.8884583v81.4316101C28.4518681,399.6565552,67.6136551,410,134.3661499,410"
                  fill="currentColor"
                ></path>
                <path
                  d="M392.2088318,78.2566071c-22.76474,2.9633179-53.3857727,2.9492111-78.1648254,2.7375565 v81.8302383h46.2702332c63.235321,0,216.3617249-13.6207428,262.1486511-162.8244019h-97.69104 C495.9676514,56.7865753,446.7869873,71.2751541,392.2088318,78.2566071"
                  fill="currentColor"
                  className="text-primebrand"
                ></path>
                <path
                  d="M982.13 565.653a18.76 18.76 0 0 1-.753-3.012 36.607 36.607 0 0 1-.404-3.542l-.78-12.045c-.25-3.597-.979-6.581-2.178-8.95-1.204-2.372-3.027-4.235-5.474-5.588-1.04-.575-2.253-1.045-3.576-1.448 1.48-.478 2.864-1.058 4.115-1.781 2.823-1.635 4.989-3.87 6.494-6.705 1.508-2.833 2.26-6.222 2.26-10.164 0-4.45-1.033-8.301-3.094-11.555-2.06-3.251-5.128-5.772-9.198-7.56-4.07-1.79-9.056-2.684-14.954-2.684H920.08v77.61h14.818v-30.167h18.722c2.85 0 5.131.386 6.846 1.157 1.712.773 2.996 2.073 3.857 3.898s1.346 4.347 1.454 7.56l.322 8.204c.017.31.037.622.054.94.017.319.044.623.082.913.125 1.581.345 2.984.657 4.21.315 1.227.76 2.321 1.332 3.284h15.197a10.561 10.561 0 0 1-1.29-2.575zm-21.519-40.78c-1.918.89-4.186 1.334-6.806 1.334h-18.908V502.88h18.237c2.834 0 5.254.405 7.263 1.212 2.007.809 3.549 2.053 4.627 3.734 1.074 1.681 1.613 3.783 1.613 6.308 0 2.672-.525 4.905-1.573 6.705-1.05 1.797-2.535 3.142-4.453 4.033zm-112.685-34.254-28.859 77.61h15.035l6.352-17.822H873.1l6.458 17.821h15.438l-29.666-77.61h-17.404zm-3.09 47.496 6.158-17.275c.932-2.763 1.837-5.441 2.718-8.04a522.563 522.563 0 0 0 2.42-7.33c.155-.482.31-1.013.464-1.503.18.536.363 1.11.542 1.639l2.515 7.372c.881 2.57 1.803 5.226 2.773 7.97l6.22 17.167h-23.81zm-62.013 1.364h14.98c-.77 6.359-2.816 11.836-6.13 16.432-3.319 4.596-7.501 8.094-12.548 10.492-5.05 2.397-10.53 3.597-16.448 3.597-7.066 0-13.363-1.65-18.895-4.946-5.534-3.299-9.855-8.017-12.963-14.158-3.112-6.14-4.667-13.306-4.667-21.5 0-8.211 1.545-15.38 4.64-21.502 3.09-6.12 7.432-10.821 13.018-14.1 5.585-3.28 12.025-4.92 19.325-4.92 5.897 0 11.218 1.072 15.963 3.216 4.742 2.143 8.704 5.345 11.886 9.606 3.183 4.26 5.359 9.478 6.524 15.655H782.42c-.882-3.56-2.271-6.49-4.17-8.789-1.9-2.297-4.148-3.973-6.737-5.027-2.593-1.054-5.44-1.581-8.54-1.581-4.339 0-8.125 1.068-11.351 3.202-3.227 2.136-5.725 5.26-7.49 9.374-1.766 4.116-2.65 9.07-2.65 14.865 0 5.815.897 10.784 2.69 14.906 1.793 4.126 4.308 7.26 7.545 9.402 3.236 2.145 7.022 3.216 11.364 3.216 3.155 0 6.127-.63 8.917-1.894 2.786-1.262 5.145-3.202 7.073-5.819 1.925-2.614 3.176-5.858 3.752-9.727zm-193.073-48.86h56.834v13.134h-42.013v18.285h38.22v12.836h-38.22v20.22h41.691v13.134H589.75v-77.61zm-45.201 77.61v-33.355h-35.658v33.354h-14.95V490.62l14.95-.001v31.42h35.658V490.62l14.95-.001.001 77.61h-14.95zm-138.059-77.61h63.004v13.161h-24.316v64.448h-14.953V503.78H406.49v-13.16zm-134.712 0h63.004v13.161h-23.816v64.448h-14.954V503.78h-24.234v-13.16zm-36.911 0h14.335v77.61H232.93l-24.45-39.406a362.858 362.858 0 0 1-4.92-8.229 322.157 322.157 0 0 1-4.575-8.135c-.241-.445-.44-.84-.67-1.27.006.167.018.34.025.508.125 3.206.215 6.203.27 8.992.053 2.79.089 5.465.108 8.026v39.513h-14.472v-77.61h16.381l26.735 43.329c1.435 2.38 2.91 4.973 4.424 7.779 1.06 1.964 2.19 4.115 3.351 6.35a354.662 354.662 0 0 1-.177-5.191 272.38 272.38 0 0 1-.093-8.883v-43.383zm-137.795 0h56.834v13.134h-42.013v18.285h38.22v12.836h-38.22v20.22h41.691v13.134H97.072v-77.61zM64.97 562.64a36.602 36.602 0 0 1-.404-3.542l-.781-12.045c-.25-3.597-.976-6.581-2.178-8.95-1.201-2.372-3.026-4.235-5.473-5.588-1.04-.575-2.254-1.045-3.577-1.448 1.48-.478 2.864-1.058 4.114-1.781 2.825-1.635 4.989-3.87 6.495-6.705 1.507-2.833 2.261-6.222 2.261-10.164 0-4.45-1.032-8.301-3.094-11.555-2.063-3.251-5.128-5.772-9.199-7.56-4.07-1.79-9.056-2.684-14.955-2.684H3.67v77.61h14.821v-30.167h18.72c2.851 0 5.134.386 6.845 1.157 1.714.773 3 2.073 3.86 3.898.862 1.825 1.345 4.347 1.453 7.56l.322 8.204c.019.31.037.622.054.94.019.319.044.623.082.913.125 1.581.344 2.984.659 4.21.313 1.227.757 2.321 1.33 3.284h15.197a10.683 10.683 0 0 1-1.291-2.575 18.58 18.58 0 0 1-.752-3.012zm-20.765-37.768c-1.92.89-4.187 1.334-6.805 1.334H18.49V502.88h18.236c2.834 0 5.253.405 7.263 1.212 2.008.809 3.55 2.053 4.627 3.734 1.074 1.681 1.613 3.783 1.613 6.308 0 2.672-.525 4.905-1.574 6.705-1.05 1.797-2.532 3.142-4.45 4.033z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-primegray rounded-md md:min-w-96 font-roboto">
          <div className="py-2 px-4">
            <div className="font-bold text-xs">
              <span>{search.destination}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" font-normal text-[12px]">
                <span>{formatDate(search.checkIn)}</span>
                <span className="mx-2">|</span>
                <span>{formatDate(search.checkOut)}</span>
              </div>
              <div className="mdx:ml-4 mb-2">
                <MdModeEdit className="text-[25px] mdx:text-[20px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div>
              <div>
                <TbWorld className="text-[20px]" />
              </div>
            </div>
            <div>
              <div className="line-black mdx:hidden">
                <span className="font-bold text-black">EN | $ </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaUser />
            </div>
            <div className="line-black mdx:hidden">
              <span className="font-bold text-black">Log in | Register</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;