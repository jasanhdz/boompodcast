import React from "react";

const channels = () => (
  <style jsx>{`
    header {
      color: #fff;
      background: #8756ca;
      padding: 15px;
      text-align: center;
    }
  `}</style>
);

const Header = () => {
  return <header>Podcast{channels()}</header>;
};

export default Header;
