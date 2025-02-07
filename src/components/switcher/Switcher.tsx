import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input id="input" type="checkbox" />
        <div className="slider">
          <div className="sun-moon"></div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 26px;
  }

  #input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    border-radius: 30px;
    transition: 0.4s;
  }

  #input:checked + .slider {
    background-color: #333;
  }

  .sun-moon {
    position: absolute;
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 6px;
    background-color: #333;
    border-radius: 50%;
    transition: 0.4s;
  }

  #input:checked + .slider .sun-moon {
    transform: translateX(22px);
    background-color: white;
  }
`;

export default Switch;
