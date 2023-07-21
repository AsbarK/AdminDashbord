import { Link } from "react-router-dom";

import { menu } from "../data";

function NavBar() {
  return (
    <>
      <div className=" min-h-screen m-3 border-2 border-dark-bg border-r-soft-bg p-1">
        <NavItem />
      </div>
    </>
  );
}

function NavItem() {
  return (
    <div>
      {menu.map((ele) => {
        return (
          <div key={ele.id}>
            <span className="mr-1 ">{ele.title}</span>
            <div className="my-2">
              {ele.listItems.map((li) => {
                return (
                  <Link
                    key={li.id}
                    to={li.url}
                    className="flex hover:bg-soft-bg rounded-xl"
                  >
                    <img
                      src={li.icon}
                      alt={li.title}
                      className="w-9 rounded-full p-2"
                    />
                    <span className="text-main-color text-xl font-bold ml-3 pt-1">
                      {li.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default NavBar;
