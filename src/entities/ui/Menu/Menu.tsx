import type { IMenuItem } from "@/app/types/menu.type";
import styles from "./Menu.module.css";

interface IMenuProps {
  items: IMenuItem[];
  title?: string;
  children?: React.ReactNode;
}

const Menu = ({ items, title, children }: IMenuProps) => {
  // if (!items.length) return <></>;

  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <a href={item.link} className={styles.link}>
              {item?.icon && <item.icon />}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};

export default Menu;
