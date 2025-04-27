import React from "react";
import { MapPin, Twitter, Link, Briefcase } from "lucide-react";

function UserCard({ user }) {
  return (
    <div className="bg-white dark:bg-[#1E2A47] p-6 rounded-2xl shadow-lg space-y-6">
      <div className="flex gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full"
        />
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h2 className="font-bold text-xl">{user.name || "No Name"}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer" // Added rel="noopener noreferrer"
                className="text-blue-500"
              >
                @{user.login}
              </a>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-300 mt-2 md:mt-0">
              Joined {new Date(user.created_at).toLocaleDateString()}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {user.bio || "This profile has no bio"}
          </p>
        </div>
      </div>

      <div className="bg-[#F6F8FF] dark:bg-[#141D2F] rounded-lg p-4 flex justify-around text-center">
        <div>
          <p className="text-xs text-gray-400">Repos</p>
          <p className="font-bold text-lg">{user.public_repos}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Followers</p>
          <p className="font-bold text-lg">{user.followers}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Following</p>
          <p className="font-bold text-lg">{user.following}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="text-gray-400 dark:text-gray-300" />
          {user.location || "Not Available"}
        </div>
        <div className="flex items-center gap-2">
          <Twitter className="text-gray-400 dark:text-gray-300" />
          {user.twitter_username || "Not Available"}
        </div>
        <div className="flex items-center gap-2">
          <Link className="text-gray-400 dark:text-gray-300" />
          {user.blog ? (
            <a
              href={user.blog}
              className="underline"
              target="_blank"
              rel="noopener noreferrer" 
            >
              {user.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="text-gray-400 dark:text-gray-300" />
          {user.company || "Not Available"}
        </div>
      </div>
    </div>
  );
}

export default UserCard;

