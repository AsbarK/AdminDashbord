import HomePage from "./HomePage";
import NavBar from "./NavBar";

function AdminDashbord() {
  return (
    <>
      <div className="flex ">
        {" "}
        <NavBar />
        <HomePage />
      </div>
    </>
  );
}
export default AdminDashbord;
