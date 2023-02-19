import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="hidden md:grid grid-cols-4 items-center content-center gap-8 p-14 bg-zinc-100 dark:bg-neutral-700 dark:text-zinc-200">
      <div className="space-y-1">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 my-0 dark:filter dark:contrast-0"
        />
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          nobis harum vitae nulla distinctio, in suscipit cum vel cupiditate?
          Atque.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold underline">Top Categories</h2>
        <ul>
          <li>
            <Link to="#" className="text-sm hover:underline">
              Single Sofas
            </Link>
          </li>
          <li>
            <Link to="#" className="text-sm hover:underline">
              Double Sofa
            </Link>
          </li>
          <li>
            <Link to="#" className="text-sm hover:underline">
              ArmChair
            </Link>
          </li>
          <li>
            <Link to="#" className="text-sm hover:underline">
              Table
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold underline">Useful Links</h2>
        <ul>
          <li>
            <Link to="home" className="text-sm hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="shop" className="text-sm hover:underline">
              Shop
            </Link>
          </li>
          <li>
            <Link to="cart" className="text-sm hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <Link to="Login" className="text-sm hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold underline">Contact Us</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-start gap-2">
            <MapPinIcon className="w-6 h-6" />
            <p className="text-sm">US, New York, 102 street, Oak Furn</p>
          </li>
          <li className="flex items-center justify-start gap-2">
            <PhoneIcon className="w-6 h-6" />
            <p className="text-sm">+0012548769</p>
          </li>
          <li className="flex items-center justify-start gap-2">
            <EnvelopeIcon className="w-6 h-6" />
            <p className="text-sm">ali.pourzadii@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
