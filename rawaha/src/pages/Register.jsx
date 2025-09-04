

import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    phone:"",
    password: "",
  })
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    try{
  e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },body: JSON.stringify(formData)
        
      }
    )
    const data= await response.json()
      if (response.ok) {
      
          navigate("/login")
        } else {
          console.error("Registration failed:", data)
    
        }
    
  }
  
    
    catch(error){
    console.log(error);
    
    }
  
   
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
        {/* Main Register Card */}
        <Card className="border border-gray-300">
          <CardHeader className="text-center pb-4">
            <div className="text-4xl font-bold text-gray-900 mb-4">Insta</div>
            <p className="text-gray-600 text-sm font-semibold px-8">
              Sign up to see photos and videos from your friends.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </Button>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Mobile Number or Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-sm"
                required
              />

              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-sm"
                required
              />

              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
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

              <div className="text-xs text-gray-500 text-center px-4 py-2">
                People who use our service may have uploaded your contact information to our app.{" "}
                <Link href="#" className="text-blue-900">
                  Learn More
                </Link>
              </div>

              <div className="text-xs text-gray-500 text-center px-4">
                By signing up, you agree to our{" "}
                <Link href="#" className="text-blue-900">
                  Terms
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-900">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-900">
                  Cookies Policy
                </Link>
                .
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2"
              >
                Sign up
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Login Card */}
        <Card className="border border-gray-300">
          <CardContent className="text-center py-6">
            <p className="text-sm">
              Have an account?{" "}
             <Link to="/login" className="text-blue-500 font-semibold">
  Log in
</Link>
            </p>
          </CardContent>
        </Card>

        {/* Get App Section */}
     
      </div>
    </div>
  )
}
