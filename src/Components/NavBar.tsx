import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    title: "Main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/me",
        icon: "profile.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "users.svg",
      },
      {
        id: 2,
        title: "Courses",
        url: "/courses",
        icon: "courses.svg",
      },
      {
        id: 3,
        title: "Posts",
        url: "/posts",
        icon: "posts.svg",
      },
      {
        id: 4,
        title: "Purchased",
        url: "/purchased",
        icon: "search.svg",
      },
    ],
  },
  {
    id: 3,
    title: "General",
    listItems: [
      {
        id: 1,
        title: "Notes",
        url: "/notes",
        icon: "notes.svg",
      },
      {
        id: 2,
        title: "Forms",
        url: "/forms",
        icon: "forms.svg",
      },
      {
        id: 3,
        title: "Calendar",
        url: "/calendar",
        icon: "calender.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/setting",
        icon: "setting.svg",
      },
    ],
  },
];

function NavBar() {
  return (
    <>
      <div className="w-[15%] min-h-screen m-3 border-2 border-main-bg border-r-soft-bg p-1">
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
