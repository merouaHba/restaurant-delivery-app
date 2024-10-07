import { FruitsSection, MenuSection, ShowcaseBanner } from '@components/index';
import React from 'react'

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <FruitsSection />
      <MenuSection />
    </div>
  );
}

export default Home