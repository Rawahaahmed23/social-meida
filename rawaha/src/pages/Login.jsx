

import { useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login',{
      method:"POST",
         credentials: "include",
       headers:{
            "Content-Type":"application/json"
        },body: JSON.stringify(formData)
    })


    const data =await response.json()
    if(response.ok){
      setFormData({
          email: "",
    password: "",
      })
      Navigate('/Home')
    }
    
    // Add login logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full space-y-6">
        {/* Main Login Card */}
        <Card className="border border-gray-300">
          <CardHeader className="text-center pb-4">
            <div className="text-4xl font-bold text-gray-900 mb-8">Insta</div>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Phone number, username, or email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-sm"
                required
              />

              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-sm"
                required
              />

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2"
              >
                Log in
              </Button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <Button variant="ghost" className="w-full text-blue-900 font-semibold text-sm">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </Button>

            <div className="text-center">
              <Link href="#" className="text-blue-900 text-sm">
                Forgot password?
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Sign Up Card */}
        <Card className="border border-gray-300">
          <CardContent className="text-center py-6">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500 font-semibold">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Get App Section */}
        <div className="text-center space-y-4">
          <p className="text-sm">Get the app.</p>
          <div className="flex justify-center space-x-2">
            <img src="/app-store-download-button.png" alt="Download on App Store" className="h-10" />
            <img src="/google-play-download-button.png" alt="Get it on Google Play" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
