import { heighestRatedUsers } from "../data";

function HeighestRated() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <img
          src="rating.svg"
          alt="rating logo"
          className="w-10 h-10 rounded-full mx-1 object-cover stroke-blue-600"
        />
        <div className="text-main-color text-2xl font-bold my-5 ">
          Top Rated Users
        </div>
      </div>

      <div className="flex flex-col flex-wrap">
        {heighestRatedUsers.map((user) => {
          return (
            <User
              key={user.id}
              img={user.img}
              username={user.username}
              email={user.email}
              rating={user.rating}
            />
          );
        })}
      </div>
    </>
  );
}
export default HeighestRated;
type Props = {
  img: string;
  username: string;
  email: string;
  rating: string;
};
function User(props: Props) {
  return (
    <div className="flex justify-between items-center my-1 hover:bg-dark-bg rounded-2xl m-1 gap-2 p-1">
      <div className="flex items-center gap-2">
        <img
          src={props.img}
          alt={props.username}
          className="w-10 h-10 rounded-full mx-1 object-cover"
        />
        <div className="flex flex-col gap-1 items-start">
          <span className="text-soft-color text-lg font-bold ">
            {props.username}
          </span>
          <span className="text-soft-color text-sm font-bold">
            {props.email}
          </span>
        </div>
      </div>
      <div
        className="text-lg font-bold  mr-2"
        style={{
          color: Number(props.rating) > 3 ? "yellow" : "tomato",
        }}
      >
        {props.rating}
      </div>
    </div>
  );
}
