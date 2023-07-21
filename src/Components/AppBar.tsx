function AppBar() {
  return (
    <div className="flex p-3 justify-between h-[3rem]">
      <div id="website-details" className="flex">
        <img src="logo.png" alt="Logo" className="w-10 h-8 rounded-full m-2" />
        <span className="text-main-color text-xl font-bold ml-3 pt-1">
          SkillSafari
        </span>
      </div>
      <div id="website-details" className="flex">
        <img
          src="search.svg"
          alt="search icon"
          className="w-7 h-8 rounded-full m-2 mobile:block hidden"
        />
        <img
          src="bell.svg"
          alt="notification icon"
          className="w-7 h-8 rounded-full m-2 mobile:block hidden"
        />
        <img
          src="profilephoto.jpg"
          alt="profile photo"
          className="w-7 h-8 rounded-full m-2"
        />
        <span className="text-main-color text-xl font-bold mx-2 pt-1">
          Asbar
        </span>
      </div>
    </div>
  );
}
export default AppBar;
