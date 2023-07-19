function Footer() {
  return (
    <>
      <div className="flex justify-between border-2 border-main-bg border-t-soft-bg">
        <div className="flex">
          <div className="text-soft-color text-lg font-bold mt-2 p-2">
            Author:
          </div>
          <div className="text-main-color text-xl font-bold mt-2 p-2">
            K Mohammed Asbar
          </div>
        </div>

        <a href="https://linkedin.com/in/asbar-k-786asbar">
          <img
            src="linkdin.png"
            alt="linkdin logo"
            className="w-10 rounded-xl mt-2"
          />
        </a>
      </div>
    </>
  );
}
export default Footer;
