import { Sidebar } from "@/components/sidebar"
import { Stories } from "@/components/stories"
import Feed from "@/components/feed"
import { CreatePost } from "@/components/create-post"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <Stories />
          <CreatePost />
          <Feed />
        </div>
      </main>
    </div>
  )
}



