import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Image, Smile, MapPin } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

export function CreatePost() {
  const [postText, setPostText] = useState("")

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <textarea
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full p-3 border-0 resize-none bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 min-h-[80px]"
              rows={3}
            />
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-rose-600"
                >
                  <Image className="w-5 h-5 mr-2" />
                  Photo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-rose-600"
                >
                  <Smile className="w-5 h-5 mr-2" />
                  Feeling
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-rose-600"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Location
                </Button>
              </div>
              <Button
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6"
                disabled={!postText.trim()}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
