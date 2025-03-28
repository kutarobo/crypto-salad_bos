type TMenu = { key: string; name: string; link: string };
const SideBar = () => {
  const tmpMenus: TMenu[] = [
    { key: "first", name: "첫번째", link: "/one" },
    { key: "second", name: "두번째", link: "/two" },
    { key: "third", name: "세번째", link: "/three" },
  ];

  return (
    <section>
      <ul>
        {tmpMenus.map((menu: TMenu) => {
          return <li id={menu.key}>{menu.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default SideBar;
