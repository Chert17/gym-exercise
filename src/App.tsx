import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, NavBar } from 'components';

const Home = lazy(() => import('./pages/Home'));
const ExerciseDetail = lazy(() => import('./pages/ExerciseDetail'));

function App() {
  return (
    <>
      <div className="w-[320px] md:w-[768px] lg:w-[1024px] px-5 mx-auto">
        <NavBar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default App;
