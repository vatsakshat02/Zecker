import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const Header = () => {
  const user = useSelector((store: RootState) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="bg-white/10 backdrop-blur-[40px] border border-white/30 flex justify-between p-4 absolute w-[80%] my-4 rounded-lg left-1/2 -translate-x-1/2 shadow-lg shadow-gray-800">
      <h1 className="text-white font-bold text-xl">Zecker</h1>
      {user && (
        <>
          {" "}
          <nav className="text-white flex gap-4">
            <Link to="/Dashboard">Home</Link>
            <button
              onClick={handleSignOut}
              className="bg-transparent border-none text-white cursor-pointer p-0"
            >
              Sign Out
            </button>
            <Link to="/tasktracker">Task Tracker</Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
