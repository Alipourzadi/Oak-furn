import React from "react";
import {
  TruckIcon,
  ArrowUturnLeftIcon,
  LockClosedIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import ServiceItem from "./ServiceItem";

// type Props = {};

const serviceList = [
  {
    title: "Free Shipping",
    icon: <TruckIcon className="w-6 md:w-8" />,
    description: "All the Shippng is on us.",
  },
  {
    title: "Easy Returns",
    icon: <ArrowUturnLeftIcon className="w-6 md:w-8" />,
    description: "Return,Easy like shopping!",
  },
  {
    title: "Secure Payment",
    icon: <LockClosedIcon className="w-6 md:w-8" />,
    description: "Security is our concurn!",
  },
  {
    title: "Back Garantee",
    icon: <ClipboardDocumentCheckIcon className="w-6 md:w-8" />,
    description: "We have you back.",
  },
];

const Services = () => {
  return (
    <div className="inline-grid grid-cols-2 mt-20 px-10 md:py-8 md:px-20 lg:flex w-full items-center justify-center mx-auto gap-8">
      {serviceList.map((service, idx) => (
        <ServiceItem
          key={idx}
          title={service.title}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
