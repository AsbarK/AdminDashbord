import { Link } from "react-router-dom";

import { menu } from "../data";

function NavBar() {
  return (
    <>
      <div className=" sm:min-h-screen my-3 ml-3  p-1 h-[100%]">
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
            <span className="sm:mr-1 sm:text-soft-color sm:inline-block hidden">
              {ele.title}
            </span>
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
                      className="md:w-9 mobile:w-16 mobile:p-2 rounded-full p-3  w-16"
                    />
                    <span className="hidden md:text-main-color md:text-sm md:font-bold md:ml-3 md:pt-1 md:block lg:text-xl">
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
