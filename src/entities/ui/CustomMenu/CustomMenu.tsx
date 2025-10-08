import React from "react";

import styles from "./CustomMenu.module.css";
import cn from "classnames";

interface ICustomMenuProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const CustomMenu = ({ children, isOpen }: ICustomMenuProps) => {
  console.log(isOpen);

  return <div className={cn(styles.customMenu, { [styles.isOpen]: isOpen })}>{children}</div>;
};

export default CustomMenu;
