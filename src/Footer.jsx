import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Heading from "./Heading";
import Input from "./Input";

function Footer() {
  const handleChange = () => {};
  return (
    <div className=" text-rose-600 py-3 justify-center bg-black">
      <Heading>
        For any suggestion or feedback you may contact me by the provided
        whatsapp and gmail
      </Heading>
      <div className="flex flex-col sm:flex-row items-center justify-center space-x-4 my-4">
        <div className="flex items-center space-x-4 mb-2">
          <div className="text-3xl">
            <FaWhatsappSquare />
          </div>
          <div className="h-10 w-40">
            <Input value="7543214321" onChange={handleChange} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-3xl">
            <SiGmail />
          </div>
          <div className="h-10 w-48">
            <Input value="sendresp@gmail.com" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
