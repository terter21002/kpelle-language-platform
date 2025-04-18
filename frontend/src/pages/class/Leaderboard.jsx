import { Button } from "@mui/material";
import MainButton from "../../components/button/MainButton";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  return (
    <main className="min-h-full bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Join Community button */}
        <header className="flex justify-end mb-8">
          <Button
            variant="outlined"
            size="large"
            style={{
              borderRadius: "25px",
              borderColor: "#C23925",
              color: "#C23925",
            }}
          >
            Join Community
          </Button>
        </header>

        {/* Gamification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Leaderboard Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-center text-[#57270E] mb-2">
              Leaderboard Access Awaits!
            </h2>
            <p className="text-center text-[#57270E] mb-6">
              Finish 8 more lessons to start competing and track your ranking
            </p>
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24">
                <img
                  src="/landing_page/leaderboard_badge.png"
                  alt="Leaderboard badge"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/class/leaderboard/view">
                <MainButton title="View Standing" />
              </Link>
            </div>
          </div>

          {/* Daily Quest Card */}
          <div className="bg-white rounded-lg py-6 shadow-sm px-12">
            <h2 className="text-xl font-bold text-center text-[#57270E] mb-2">
              Daily Quest
            </h2>
            <p className="text-center text-[#57270E] mb-6">
              Complete daily quest and earn new rewards
            </p>
            <div className="flex justify-center">
              <div className="relative w-12 h-12">
                <img
                  src="/landing_page/leaderboard_bolt.png"
                  alt="Lightning bolt"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#FFBC02] font-medium">Earn 10 XP</span>
              <div className="flex items-center">
                <span className="text-[#FFBC02] mr-2">1/10</span>
                <div className="relative w-6 h-6">
                  <img
                    src="/landing_page/leaderboard_box.png"
                    alt="Liberia flag"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-3 bg-[#F4F4F4] rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: "10%" }}
              ></div>
            </div>
            <div className="flex justify-center">
              <Link to="/class/leaderboard/view">
                <MainButton title="View Standing" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;
