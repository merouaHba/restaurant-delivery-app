import { Footer, NavBar } from '@components/index'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout