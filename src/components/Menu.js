import React from "react";
import MenuItem1 from "../assets/icon/menuitem1.svg";
import MenuItem2 from "../assets/icon/menuitem2.svg";
import MenuItem3 from "../assets/icon/menuitem3.svg";
import MenuItem4 from "../assets/icon/menuitem4.svg";
import MenuItem5 from "../assets/icon/menuitem5.svg";
const Menu = () => {
  const menuItems = [
    { href: "https://app.navigator.exchange/#/dashboard", text: "Dashboard" },
    { href: "https://docs.navigator.exchange/", text: "Perp" },
    { href: "https://docs.navigator.exchange/", text: "Swap" },
    { href: "https://docs.navigator.exchange/", text: "Vaults" },
    { href: "https://docs.navigator.exchange/", text: "Buy" },
    { href: "https://docs.navigator.exchange/", text: "Referrals" },
    { href: "https://docs.navigator.exchange/", text: "Portfolio" },
    {
      href: "https://docs.navigator.exchange/",
      text: "Analytics",
      special: "Contest",
    },
    { href: "https://docs.navigator.exchange/", text: "NFTs" },
    { href: "https://docs.navigator.exchange/", text: "Migrate" },
    {
      text: "Earn",
      dropdown: true,
      items: [
        {
          href: "#/earn",
          text: "Overview",
          icon: MenuItem1,
          desc: "Manage your earning",
        },
        {
          href: "#/earn",
          text: "Stake NAVI & esNAVI",
          icon: MenuItem2,
          desc: "Stake Navigator governance token",
        },
        {
          href: "#/earn",
          text: "Crypto Pool - NLP",
          icon: MenuItem3,
          desc: "Index by crypto asset",
        },
        {
          href: "#/earn",
          text: "Stable Pool - NSLP",
          icon: MenuItem4,
          desc: "Index by stable asset",
        },
        {
          href: "#/earn",
          text: "Vest",
          icon: MenuItem5,
          desc: "Convert esNAVI tokens to NAVI tokens",
        },
      ],
    },
  ];
  return (
    <div className="App-header-links">
      {menuItems.map((item, index) => (
        <div className="App-header-links-item" key={index}>
          {item.dropdown ? (
            <div className="App-header-dropdown">
              <span className="More">
                {item.text}
                <svg
                  className="arrow-menu arrow-icon-tab-header"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#828899"
                >
                  <path
                    className="arrow-menu-path"
                    d="M7.66536 11.3333L11.4181 5.83333L3.91259 5.83333L7.66536 11.3333Z"
                    fill="#828899"
                  ></path>
                </svg>
                <div className="show-dropdown">
                  <div className="show-dropdown-menu">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        className="menu-item-container"
                        href={subItem.href}
                        key={subIndex}
                      >
                        <div className="menu-item">
                          <img src={subItem.icon} alt="" />
                          <div className="wrap">
                            <span>{subItem.text}</span>
                            <span className="desc">{subItem.desc}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </span>
            </div>
          ) : (
            <a
              href={item.href}
              className={`link-underline ${item.special ? "item-special" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
              {item.special && <span className="special">{item.special}</span>}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
export default Menu;
