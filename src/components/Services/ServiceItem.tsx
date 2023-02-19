type Props = {
  title?: string;
  icon: any;
  description?: string;
};

const ServiceItem = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-zinc-50 dark:bg-neutral-700 dark:text-zinc-100 p-4 h-full w-full rounded-sm shadow-xl hover:-translate-y-3 transition-transform duration-500 ease-in-out">
      <div>{props.icon}</div>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold">{props.title}</h2>
        <p className="text-xs font-light">{props.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
