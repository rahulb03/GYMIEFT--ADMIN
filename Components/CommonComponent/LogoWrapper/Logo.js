import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SettingContext from "../../../Helper/SettingContext";

const Logo = () => {
  const { state } = useContext(SettingContext);
  return (
    <Link href="/dashboard">
      {state?.setLightLogo?.original_url?  <Image className="for-white" src={`${state?.setLightLogo?.original_url}`} alt="Light Logo" width={100} height={35} priority />:<h2 className="text-white">FastKart</h2> }
      {/* <Image className="for-white" src={`${state?.setLightLogo?.original_url ? state?.setLightLogo?.original_url : '/assets/images/logo/full-white.png'}`} alt="Light Logo" width={100} height={35} priority /> */}
    </Link>
  );
};

export default Logo;
