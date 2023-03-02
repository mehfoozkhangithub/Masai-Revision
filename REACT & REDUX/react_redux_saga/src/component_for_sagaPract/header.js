// import "../App.css";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  return (
    <div className="header">
      <div className="cart-div">
        <div>{result.length}</div>
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/null/external-shopping-cart-sales-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
      </div>
    </div>
  );
};

export default Header;
