import type { IMenuItem } from "@/app/types/menu.type";
import styles from "./Menu.module.css";

interface IMenuProps {
  items: IMenuItem[];
  title?: string;
}

const Menu = ({ items, title }: IMenuProps) => {
  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      <ul>
        {items.map((item) => (
          <li>
            <a href="" className={styles.link}>
              {item?.icon && <item.icon />}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
