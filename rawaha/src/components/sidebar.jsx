import { Home, Search, Compass, Heart, PlusSquare, User, MessageCircle, Bookmark, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Instagram
        </h1>
      </div>

      <nav className="space-y-2">
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Home className="w-6 h-6" />
          <span className="font-medium">Home</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Search className="w-6 h-6" />
          <span className="font-medium">Search</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Compass className="w-6 h-6" />
          <span className="font-medium">Explore</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium">Messages</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Heart className="w-6 h-6" />
          <span className="font-medium">Notifications</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <PlusSquare className="w-6 h-6" />
          <span className="font-medium">Create</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <User className="w-6 h-6" />
          <span className="font-medium">Profile</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Bookmark className="w-6 h-6" />
          <span className="font-medium">Saved</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
          <Settings className="w-6 h-6" />
          <span className="font-medium">Settings</span>
        </a>
      </nav>
    </div>
  )
}
