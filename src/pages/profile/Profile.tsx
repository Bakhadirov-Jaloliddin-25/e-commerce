import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../redux";
import { useCheckTokenQuery } from "../../redux/api/customer-api";
import { clearToken } from "../../redux/features/token-slice";
import { useEffect } from "react";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const token = useSelector((state: RootState) => state.token.access_token);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useCheckTokenQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (error && token) {
      dispatch(clearToken());
    }
  }, [error, dispatch, token]);

  const navigate = useNavigate();

  if (!token) {
    return <Navigate replace to={"/sign-in"} />;
  }

  if (isLoading) {
    return (
      <div className="h-[55vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container flex flex-col py-6 md:py-10 font-poppins">
      <div className="flex justify-between pb-12 ">
        <div className="flex gap-4">
          <p
            onClick={() => navigate("/")}
            className="opacity-50 cursor-pointer hover:opacity-90 duration-150 text-sm"
          >
            Home
          </p>
          <span className="text-sm">/</span>
          <p className="text-sm">My Account</p>
        </div>
        <p className="text-sm">
          Welcome! <span className="text-red-500">{data?.firstName}</span>
        </p>
      </div>
      <div className="flex">
        <aside className="w-full md:w-1/4 md:pr-8 pb-6">
          <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
          <ul className="space-y-2 text-gray-500">
            <li className="text-red-500 font-semibold pl-6">My Profile</li>
            <li className="pl-6">Address Book</li>
            <li className="pl-6">My Payment Options</li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2 text-gray-500">
            <li className="pl-6">My Returns</li>
            <li className="pl-6">My Cancellations</li>
          </ul>
          <Link to="/wishlist">
            <h2 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h2>
          </Link>
        </aside>
        <div className="max-w-6xl w-[870px] mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-3/4 mt-6 md:mt-0">
              <h2 className="text-xl font-semibold text-red-500 mb-6">
                Edit Your Profile
              </h2>
              <form className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      value={data?.firstName || ""}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      value={data?.lastName || ""}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      value={data?.email || ""}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Address</label>
                    <input
                      type="text"
                      value={
                        data?.address
                          ? `${data.address.address}, ${data.address.state}, ${data.address.country}`
                          : ""
                      }
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-4">
                  <p>Password Changes</p>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 outline-none"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-500"
                  >
                    Cancel
                  </button>
                  <button className="bg-red-500 text-white px-5 py-4 rounded">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
