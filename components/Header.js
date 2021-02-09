import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight : 20
}

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/profile">
        <a style={linkStyle}>Profile</a>
      </Link>
    </div>
  );
};

export default Header;