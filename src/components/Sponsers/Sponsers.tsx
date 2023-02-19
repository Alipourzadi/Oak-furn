import React from "react";
import sponser1 from "../../assets/images/sponser-01.png";
import sponser2 from "../../assets/images/sponser-02.png";
import sponser3 from "../../assets/images/sponser-03.png";
import sponser4 from "../../assets/images/sponser-04.png";

type Props = {};

const Sponsers = (props: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center pb-20 md:p-4 ">
      <img
        src={sponser2}
        alt="sponser-img-01"
        className="w-16 md:w-20 dark:filter dark:contrast-0"
      />
      <img
        src={sponser1}
        alt="sponser-img-01"
        className="w-16 md:w-28 dark:filter dark:contrast-0"
      />
      <img src={sponser3} alt="sponser-img-01" className="w-16 md:w-20" />
      <img src={sponser4} alt="sponser-img-01" className="w-16 md:w-20" />
    </div>
  );
};

export default Sponsers;
