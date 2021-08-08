import React from 'react';
import NavHeader from './Navs/NavHeader';
import NavTabs from './Navs/NavTabs';
import TopNavbar from './Navs/TopNavbar';
import SurveyTable from './tables/SurveyTable';

function HeroSection() {
  return (
    <div>
      <TopNavbar />
      <NavHeader />
      <NavTabs />
      <SurveyTable />
    </div>
  );
}

export default HeroSection;
