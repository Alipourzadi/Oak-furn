import React, { useEffect, useMemo, useState } from "react";
import ClockImage from "../../assets/images/counter-timer-img.png";

type Props = {};

const Clock = (props: Props) => {
  const [days, setDays] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [second, setSecond] = useState<number>();

  let interval: number;
  const countDown = () => {
    const desitination = new Date("2 April,2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      let diference = desitination - now;
      const days = Math.floor(diference / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((diference % (1000 * 60)) / 1000);

      if (desitination < 0) clearInterval(interval);
      else {
        setDays(days);
        setHour(hour);
        setMinutes(minutes);
        setSecond(second);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-10 md:py-0 bg-zinc-100 dark:bg-neutral-700 dark:text-zinc-100 shadow-md">
      <div className="flex flex-col items-start justify-center gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Limited offer</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            explicabo.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-start justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3>{days}</h3>
              <h3 className="text-xs">Days</h3>
            </div>
            <span>:</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3>{hour}</h3>
              <h3 className="text-xs">Hour</h3>
            </div>
            <span>:</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3>{minutes}</h3>
              <h3 className="text-xs">Minutes</h3>
            </div>
            <span>:</span>
          </div>
          <div className="flex items-start justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3>{second}</h3>
              <h3 className="text-xs">Second</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={ClockImage} alt="single-sofa" />
      </div>
    </div>
  );
};

export default Clock;
