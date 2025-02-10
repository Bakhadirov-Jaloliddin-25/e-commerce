import styled from "styled-components";

const CheckoutBtn = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        Pay
        <svg viewBox="0 0 576 512" className="svgIcon">
          <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 380px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: 2px solid white; /* Oq border */
    border-radius: 2px;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: 0.6s;
  }

  .svgIcon {
    width: 16px;
  }

  .svgIcon path {
    fill: white;
  }

  .Btn::before {
    width: calc(100% + 40px);
    aspect-ratio: 1/1;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 3px;
    left: -20px;
    top: 50%;
    transform: translate(-150%, -50%);
    transition-duration: 0.7s;
    mix-blend-mode: difference;
  }

  .Btn:hover::before {
    transform: translate(0, -50%);
  }

  .Btn:active {
    transform: translateY(4px);
    transition-duration: 0.3s;
  }
`;

export default CheckoutBtn;
