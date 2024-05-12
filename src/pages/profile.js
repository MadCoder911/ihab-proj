const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  if (!userInfo) {
    return (
      <div className="profilebg flex items-center justify-center">
        <p className="font-bold text-white text-[30px]">
          You are not logged in
        </p>
        ;
      </div>
    );
  } else
    return (
      <div className="profilebg flex items-center justify-center">
        <div className="container">
          <p>Name: {userInfo.name}</p>
          <p>Username: {userInfo.username}</p>
          <p>Subscribtion: {userInfo.subscribtion}</p>
          <button
            className="bg-white rounded-md p-2"
            onClick={() => {
              localStorage.removeItem("userData");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
};
export default Profile;
