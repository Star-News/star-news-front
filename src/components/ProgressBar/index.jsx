import React from "react";
import "../ProgressBar/style.css";

// tela de carregamento
const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <svg
          height="80"
          viewBox="0 0 196 313"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Loader</title>
          <defs>
            <linearGradient id="ttb" y2="1">
              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#E0E0E0">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
            </linearGradient>
          </defs>
          <path
            d="M104.4 285.8C86.8 285.8 69.8 283.8 53.4 279.8C37 275.8 23.5 270.6 12.9 264.2L35.7 212.6C45.7 218.4 56.8 223.1 69 226.7C81.4 230.1 93.4 231.8 105 231.8C111.8 231.8 117.1 231.4 120.9 230.6C124.9 229.6 127.8 228.3 129.6 226.7C131.4 224.9 132.3 222.8 132.3 220.4C132.3 216.6 130.2 213.6 126 211.4C121.8 209.2 116.2 207.4 109.2 206C102.4 204.4 94.9 202.8 86.7 201.2C78.5 199.4 70.2 197.1 61.8 194.3C53.6 191.5 46 187.8 39 183.2C32.2 178.6 26.7 172.6 22.5 165.2C18.3 157.6 16.2 148.2 16.2 137C16.2 124 19.8 112.2 27 101.6C34.4 90.8 45.3 82.2 59.7 75.8C74.3 69.4 92.4 66.2 114 66.2C128.2 66.2 142.2 67.7 156 70.7C169.8 73.7 182.2 78.3 193.2 84.5L171.9 135.8C161.5 130.6 151.4 126.7 141.6 124.1C132 121.5 122.6 120.2 113.4 120.2C106.6 120.2 101.2 120.8 97.2 122C93.2 123.2 90.3 124.8 88.5 126.8C86.9 128.8 86.1 131 86.1 133.4C86.1 137 88.2 139.9 92.4 142.1C96.6 144.1 102.1 145.8 108.9 147.2C115.9 148.6 123.5 150.1 131.7 151.7C140.1 153.3 148.4 155.5 156.6 158.3C164.8 161.1 172.3 164.8 179.1 169.4C186.1 174 191.7 180 195.9 187.4C200.1 194.8 202.2 204 202.2 215C202.2 227.8 198.5 239.6 191.1 250.4C183.9 261 173.1 269.6 158.7 276.2C144.3 282.6 126.2 285.8 104.4 285.8Z"
            fill="white"
          />
          <path
            d="M108.5 83L128.594 144.843H193.62L141.013 183.064L161.107 244.907L108.5 206.686L55.8932 244.907L75.9872 183.064L23.3804 144.843H88.4059L108.5 83Z"
            fill="white"
          />
        </svg>
        <div className="loading-text">Carregando...</div>
      </div>
    </div>
  );
};

export default Loader;
