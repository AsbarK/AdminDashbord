function Footer() {
  return (
    <>
      <div className="flex flex-col border-2 border-main-bg border-t-soft-bg justify-center items-center">
        <div className="text-main-color text-xl font-bold mt-2 p-2 flex items-center">
          <span className="m-2 text-soft-color">Hi, This is</span>{" "}
          <span className="text-purple-400 border-2 border-dark-bg border-b-soft-color">
            K Mohammed Asbar
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="m-2 text-main-color text-xl">Connect:</span>
          <a href="https://linkedin.com/in/asbar-k-786asbar">
            <img
              src="linkedin.svg"
              alt="linkdin logo"
              className="w-10 rounded-xl mt-2"
            />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdGzlwnbWXXNGldNLZXsBRrlgVCMrrMWWsMkqwfQdqRVJQBkZgtBclPVPDFRtPvnbmhpj">
            <img
              src="gmail.svg"
              alt="gmail logo"
              className="w-10 rounded-xl mt-2"
            />
          </a>
          <a href="https://github.com/AsbarK/">
            <img
              src="github.svg"
              alt="github logo"
              className="w-10 rounded-xl mt-2"
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
