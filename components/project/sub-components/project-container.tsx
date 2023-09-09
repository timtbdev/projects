import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ProjectContainerProps {
  children: ReactNode;
  className?: string;
  category: string;
}

const ProjectContainer: FC<ProjectContainerProps> = ({
  children,
  className = "",
  category,
}) => {
  return (
    <>
      <div
        className={cn(
          "relative px-6 py-4 sm:px-10 sm:py-6",
          category === "Android" && "lg:grid lg:grid-cols-2",
          category === "Web" && "lg:grid lg:grid-cols-1",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default ProjectContainer;
