import { Button, Menu, MenuItem } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { useState } from "react";

const ViewLeaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 2,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 3,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 4,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 5,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      rank: 6,
      name: "John Doe",
      xp: 597,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const [periodAnchorEl, setPeriodAnchorEl] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("This week");

  const handlePeriodClick = (event) => {
    setPeriodAnchorEl(event.currentTarget);
  };

  const handlePeriodClose = (period) => {
    if (period) setSelectedPeriod(period);
    setPeriodAnchorEl(null);
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      {/* Filter */}
      <div className="flex justify-end mb-6">
        <Button
          onClick={handlePeriodClick}
          variant="outlined"
          style={{
            borderRadius: "25px",
            borderColor: "#C23925",
            color: "#C23925",
          }}
          endIcon={<ExpandMoreIcon />}
        >
          {selectedPeriod}
        </Button>
        <Menu
          anchorEl={periodAnchorEl}
          open={Boolean(periodAnchorEl)}
          onClose={() => handlePeriodClose(null)}
        >
          {["This week", "This Month", "This Year"].map((period) => (
            <MenuItem key={period} onClick={() => handlePeriodClose(period)}>
              {period}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Badge and Title */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 mb-4">
          <img
            src="/landing_page/leaderboard_badge.png"
            alt="Leaderboard badge"
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#5D2E1A]">Climb the Ranks</h1>
        <p className="text-gray-600 text-center">
          Compete, Connect, and Celebrate Your Language Learning Achievements
        </p>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {leaderboardData.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white rounded-lg border border-gray-100 p-4 shadow-sm"
          >
            <div className="flex items-center">
              <span className="font-bold text-gray-700 mr-3">
                {entry.rank}.
              </span>
              <div className="mr-3">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center">
                  <img
                    src="/landing_page/leaderboard_prize.png"
                    alt="Leaderboard prize"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex items-center justify-center">
                  <img
                    src="/landing_page/leaderboard_avatar.png"
                    alt="Leaderboard avatar"
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{entry.name}</span>
              </div>
            </div>
            <div className="font-bold text-gray-700">{entry.xp} XP</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewLeaderboard;
