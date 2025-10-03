import { RightSideBar, SideBar } from "@/widgets";
import { type PropsWithChildren } from "react";

import styles from "./MainLayout.module.css";

const MainLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <main className={styles.main}>{children}</main>
      <RightSideBar />
    </div>
  );
};

export default MainLayout;
