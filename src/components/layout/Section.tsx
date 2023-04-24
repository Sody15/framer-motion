import { FC } from "react";

type Props = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const Section: FC<Props> = ({ title, children, className }) => {
  return (
    <div className={className ? "section gap-4 " + className : "section gap-4"}>
      <h3 className="font-semibold text-xl text-teal-600">{title}</h3>
      {children}
    </div>
  );
};

export default Section;
