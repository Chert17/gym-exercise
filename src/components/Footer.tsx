import React, { FC } from 'react';

import Logo from 'assets/images/Logo-1.png';

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col p-6 bg-[#fffdba]">
      <img src={Logo} alt="logo" />
      <p className="text-center mt-2">Made with ❤️ by Chert</p>
    </div>
  );
};

export default Footer;
