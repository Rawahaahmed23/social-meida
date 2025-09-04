import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import './index.css'   
import './App.css'
import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {

const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
 <BrowserRouter>
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/" element={<RegisterPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
  </Routes>
 
 </BrowserRouter>
  </QueryClientProvider>
   
  )
}

export default App

