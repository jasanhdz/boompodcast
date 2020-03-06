import React from "react";
import Link from "next/link";

const styles = (
  <style jsx>{`
    header {
      color: #fff;
      background: #8756ca;
      padding: 15px;
      text-align: center;
      cursor: pointer;
    }
    header a {
      color: #ffff;
      text-decoration: none;
    }
  `}</style>
);

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>Podcast</a>
      </Link>
      {styles}
    </header>
  );
};

export default Header;
