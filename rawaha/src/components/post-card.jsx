import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react"

export function PostCard({ post }) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.profilepic || "/placeholder.svg"}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground cursor-pointer" />
      </div>

      {/* Post Image (agar ho to) */}
      <div className="aspect-square">
        <img
          src={post.img || "/placeholder.svg"}
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 cursor-pointer hover:text-rose-500 transition-colors" />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:text-muted-foreground transition-colors" />
            <Send className="w-6 h-6 cursor-pointer hover:text-muted-foreground transition-colors" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer hover:text-muted-foreground transition-colors" />
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.username}</span>
          <span className="text-sm">{post.des}</span>
        </div>

        {/* Time */}
        <div className="text-xs text-muted-foreground">
          {post.createdat ? new Date(post.createdat).toLocaleString() : "Just now"}
        </div>
      </div>
    </div>
  )
}
