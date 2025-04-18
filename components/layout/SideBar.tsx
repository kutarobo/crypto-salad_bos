"use client";

import { css } from "@emotion/react";

type TMenu = { key: string; name: string; link: string; subMenu?: TMenu[] };

const style = {
  sectionWrapper: css`
    height: 100vh;
    width: 300px;
    background-color: lightGray;
  `,
};

const tmpMenus: TMenu[] = [
  {
    key: "first",
    name: "첫번째",
    link: "#",
    subMenu: [
      { key: "sub11", name: "가나다", link: "/one" },
      { key: "sub12", name: "라마바", link: "/one" },
      { key: "sub13", name: "사아자", link: "/one" },
    ],
  },
  {
    key: "second",
    name: "두번째",
    link: "#",
    subMenu: [
      { key: "sub21", name: "가나다", link: "/two" },
      { key: "sub22", name: "라마바", link: "/two" },
      { key: "sub23", name: "사아자", link: "/two" },
    ],
  },
  {
    key: "third",
    name: "세번째",
    link: "#",
    subMenu: [
      { key: "sub31", name: "가나다", link: "/three" },
      { key: "sub32", name: "라마바", link: "/three" },
      { key: "sub33", name: "사아자", link: "/three" },
    ],
  },
];

interface IMenuItem {
  menu: TMenu;
  children?: React.ReactNode;
}

const MenuItem = ({ menu, children }: IMenuItem) => {
  return (
    <li>
      <a>{menu.name}</a>
      {children}
    </li>
  );
};

const SideBar = () => {
  return (
    <section css={style.sectionWrapper}>
      <ul>
        {tmpMenus.map((menu: TMenu) => {
          return (
            <MenuItem key={menu.key} menu={menu}>
              {menu.subMenu && (
                <ul>
                  {menu.subMenu.map((subMenu: TMenu) => {
                    return <MenuItem key={subMenu.key} menu={subMenu} />;
                  })}
                </ul>
              )}
            </MenuItem>
          );
        })}
      </ul>
    </section>
  );
};

export default SideBar;
