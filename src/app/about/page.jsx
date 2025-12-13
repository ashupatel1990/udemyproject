import * as React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import { Menu } from "@/components/Header/Menu/Menu";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
    </div>
  )
}

export default Page;