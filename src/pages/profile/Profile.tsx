import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { RootState } from "../../redux";
import { useCheckTokenQuery } from "../../redux/api/customer-api";

const Profile = () => {
  const token = useSelector((state: RootState) => state.token.access_token);
  const { data, isLoading } = useCheckTokenQuery(undefined, {
    skip: !token,
  });

  if (isLoading) return <p>Loading...</p>;
  return !token ? (
    <Navigate replace to={"/sign-in"} />
  ) : (
    <div className="container p-6 md:p-10 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        <nav className="text-gray-500 mb-6 text-sm md:text-base">
          <Link to="/" className="text-gray-400">
            Home
          </Link>{" "}
          / <span className="text-gray-900">My Account</span>
        </nav>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
            <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
            <ul className="space-y-2 text-gray-500">
              <li className="text-red-500 font-semibold">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
            <ul className="space-y-2 text-gray-500">
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>

            <Link to="/wishlist">
              <h2 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h2>
            </Link>
          </aside>

          {/* Profile Form */}
          <div className="w-full pl-10 md:w-3/4 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold text-red-500 mb-6">
              Edit Your Profile
            </h2>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={data?.firstName || ""}
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={data?.lastName || ""}
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    value={data?.email || ""}
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    disabled
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
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    disabled
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Password Changes
              </h3>
              <div className="space-y-4 mb-6">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                  disabled
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                  disabled
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                  disabled
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button className="text-gray-500">Cancel</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
