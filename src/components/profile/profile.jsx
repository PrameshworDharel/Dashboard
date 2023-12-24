import React from "react";
import Cover from "../../assets/images/cover-01-e8bbef04.png";
import Men from "../../assets/images/user-06-00406fb8.png";
import { IoCameraOutline } from "react-icons/io5";
import { TbMinusVertical } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Profile1 = () => {
  return (
    <>
      <div className="bg-shadow text-Dark w-[1200px] p-10">
        <div className=" flex justify-between ">
          <h1 className="font-bold text-2xl ">Profile</h1>
          <div className="flex ">
            <buttom>Dashboard /</buttom>
            <h1 className="text-secondary ml-2 ">Profile</h1>
          </div>
        </div>
        <div className="mt-5">
          <img src={Cover} alt="Man"></img>
        </div>
        <div className="flex justify-end -translate-y-20 mr-10">
          <button className="flex bg-tertiary px-4 py-1 rounded-sm  ">
            <IoCameraOutline className="mt-1" />
            <h6 className="ml-2">Edit</h6>
          </button>
        </div>
        <div className="bg-primary shadow-xl -translate-y-16 ">
          <div className="flex justify-center -translate-y-32 ">
            <img src={Men} alt="man" className="h-[200px] w-[200px]"></img>
          </div>
          <div className="flex justify-center -translate-y-44 ml-32 ">
            <button className=" bg-tertiary px-3 py-3 rounded-full ">
              <IoCameraOutline />
            </button>
          </div>
          <div className=" -translate-y-36">
            <div className="text-center">
              <h1 className="font-bold text-2xl">Danish Heilium</h1>
              <p className="">Ui/Ux Designer</p>
            </div>

            <div className="flex justify-center shadow-sm bg-primary rounded-sm mt-5  p-3 gap-5 ml-96 mr-72">
              <div className="flex gap-2">
                <h1 className="font-bold">259</h1>
                <p>Posts</p>
              </div>
              <TbMinusVertical className="mt-1.5" />
              <div className="flex gap-2">
                <h1 className="font-bold">129K</h1>
                <p>Followers</p>
              </div>
              <TbMinusVertical className="mt-1.5" />
              <div className="flex gap-2">
                <h1 className="font-bold">2K</h1>
                <p>Following</p>
              </div>
            </div>
            <div className="text-center mt-5">
              <h1 className="font-bold">About Me</h1>
              <p className="text-center mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu
              </p>
              <p>
                condimentum mauris tempus ut. Donec fermentum blandit aliquet.
                Etiam dictum dapibus ultricies. Sed
              </p>
              <p>
                vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed,
                aliquam lacus.
              </p>
            </div>

            <div className=" flex mt-10 justify-center">
              <h1 className="font-bold">Follow me on</h1>
            </div>
            <div className="flex justify-center mt-7 gap-5">
              <button>
                <FaFacebookF />
              </button>
              <button>
                <FaTwitter />
              </button>
              <button>
                <FaLinkedinIn />
              </button>

              <button>
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile1;
