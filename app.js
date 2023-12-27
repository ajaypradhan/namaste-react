import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          -img
 *          - name, start rating, cuisine, delivery card
 * Footer
 *  - Copyright
 *  - ContactInformation
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ol>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ol>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={props.resLogo}
        alt=""
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          resLogo="https://slurrp.club/wp-content/uploads/2021/10/DSC_0037-2.jpg"
          cuisine="Biryani, North Indian"
        />
        <RestaurantCard
          resName="KFC"
          resLogo="https://content.jdmagicbox.com/comp/bangalore/g1/080pxx80.xx80.220629101042.t1g1/catalogue/kfc-varthur-bangalore-fried-chicken-delivery-restaurants-fbr0bo40nk.jpg"
          cuisine="Fast food"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
