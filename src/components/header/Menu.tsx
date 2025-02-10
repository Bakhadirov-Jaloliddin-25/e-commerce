import { useState } from "react";
import styled from "styled-components";
import SlidingMenu from "./SlidingMenu";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <StyledWrapper className="relative">
      <label className="hamburger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
      <div
        className={`absolute bg-white border-x -left-[608px] top-[51px] w-[678px] max-[685px]:-left-[568px] max-[685px]:w-[600px] min-w-[300px] max-[625px]:-left-[538px] max-[635px]:w-[540px] max-[635px]:-left-[538px] max-[616px]:-left-[528px] max-[600px]:-left-[518px] max-[580px]:-left-[256px] max-[580px]:w-[280px] max-[430px]:-left-[386px] max-[430px]:w-[430px] max-[386px]:-left-[344px] max-[386px]:w-[388px] max-[430px]:top-[41px] ${
          isOpen ? "border-b" : ""
        }`}
      >
        <SlidingMenu isOpen={isOpen} setIsOpen={handleCloseMenu} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 2em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Menu;
