import { useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  Heart,
  MoreVertical,
  X,
} from "lucide-react";
import { Tabs, Tab, Button, Box } from "@mui/material";

const Discussion = () => {
  const [activeTab, setActiveTab] = useState(0);
  //   const [sortBy, setSortBy] = useState("Latest");

  const forumPosts = [
    {
      id: "1",
      author: {
        name: "James Blessing",
        avatar: "/landing_page/testimonial_1.png",
        learns: "Bassa",
      },
      timeAgo: "7hrs. ago",
      title: "Best way to practice speaking daily?",
      content:
        "Hey Everyone,\nI am struggling to practice speaking Bassa daily.Any Tips?",
      tags: ["#Bassa", "#Speaking practice"],
      replies: 50,
      likes: 32,
      repliedUsers: [
        "/landing_page/testimonial_2.png",
        "/landing_page/testimonial_1.png",
        "/landing_page/testimonial_2.png",
      ],
    },
    {
      id: "1",
      author: {
        name: "James Blessing",
        avatar: "/landing_page/testimonial_2.png",
        learns: "Bassa",
      },
      timeAgo: "7hrs. ago",
      title: "Best way to practice speaking daily?",
      content:
        "Hey Everyone,\nI am struggling to practice speaking Bassa daily.Any Tips?",
      tags: ["#Bassa", "#Speaking practice"],
      replies: 50,
      likes: 32,
      repliedUsers: [
        "/landing_page/testimonial_1.png",
        "/landing_page/testimonial_2.png",
        "/landing_page/testimonial_1.png",
      ],
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6">
      {/* Community Header */}
      <div className="bg-[#FFC3E2] rounded-xl p-6 mb-6 flex flex-col md:flex-row items-center">
        <div className="w-36 h-24 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
          <img
            src="/landing_page/people.png"
            alt="Community illustration"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl font-bold text-[#DD4E38] mb-1">
            Language Learning Community
          </h1>
          <p className="text-[#E95050] mb-4">
            Ask questions, share experiences, and connect with fellow learners!
          </p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#C23925",
              color: "#fff",
              borderRadius: "999px",
            }}
            sx={{ ":hover": { backgroundColor: "#8A3523" } }}
          >
            Start Discussion
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Trending Topics" />
          <Tab label="Language Challenges" />
          <Tab label="Writing Practice" />
          <Tab label="Pronunciation & Listening" />
        </Tabs>
      </Box>

      {/* Sort Options */}
      <div className="mb-6 flex items-center">
        <span className="mr-2 text-gray-700">Sort By</span>
        <div className="relative bg-white">
          <button className="flex items-center border rounded px-3 py-1 text-gray-700 cursor-pointer">
            Latest <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden bg-white"
          >
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{post.author.name}</span>
                    <span className="text-sm text-gray-500">
                      Learns {post.author.learns}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{post.timeAgo}</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="p-4">
              <h2 className="font-medium mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-3 whitespace-pre-line">
                {post.content}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-sm text-gray-600">Tags: </span>
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-sm text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Footer */}
            <div className="px-4 py-3 flex items-center justify-between border-t">
              <div className="flex items-center">
                <button className="flex items-center text-gray-600 mr-6">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{post.replies} Reply</span>
                </button>
                <div className="flex -space-x-2 mr-2">
                  {post.repliedUsers.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar || "/placeholder.svg"}
                      alt="User avatar"
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <button className="flex items-center text-gray-600 mr-4">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>{post.likes} Likes</span>
                </button>
                <button className="text-gray-400">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
