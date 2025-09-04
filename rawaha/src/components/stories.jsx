export function Stories() {
  const stories = [
    { id: 1, username: "your_story", avatar: "/diverse-user-avatars.png", isOwn: true },
    { id: 2, username: "alex_photo", avatar: "/man-avatar.png" },
    { id: 3, username: "sarah_travels", avatar: "/diverse-woman-avatar.png" },
    { id: 4, username: "mike_fitness", avatar: "/diverse-user-avatars.png" },
    { id: 5, username: "emma_art", avatar: "/diverse-woman-avatar.png" },
    { id: 6, username: "john_music", avatar: "/man-avatar.png" },
    { id: 7, username: "lisa_food", avatar: "/diverse-woman-avatar.png" },
    { id: 8, username: "david_tech", avatar: "/man-avatar.png" },
    { id: 9, username: "anna_style", avatar: "/diverse-woman-avatar.png" },
    { id: 10, username: "chris_nature", avatar: "/diverse-user-avatars.png" },
  ]

  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-8">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0">
            <div
              className={`relative ${story.isOwn ? "ring-2 ring-muted" : "ring-2 ring-gradient-to-r from-rose-500 to-pink-500"} rounded-full p-1`}
            >
              <img
                src={story.avatar || "/placeholder.svg"}
                alt={story.username}
                className="w-16 h-16 rounded-full object-cover"
              />
              {story.isOwn && (
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              )}
            </div>
            <span className="text-sm text-muted-foreground truncate max-w-[70px] text-center">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
