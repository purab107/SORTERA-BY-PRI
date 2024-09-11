import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Bubble from './pages/Bubble';
import Selection from './pages/Selection';
import Insertion from './pages/Insertion';
import Quick from './pages/Quick';
import Merge from './pages/Merge';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component

const AnimatedRoutes = () => {
  const location = useLocation();

  // Define animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  // Faster page transition
  const pageTransition = {
    duration: 0.2, // Reduced duration for faster animation
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path='/documentation'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Documentation />
            </motion.div>
          }
        />
        <Route
          path='/bubblesort'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Bubble />
            </motion.div>
          }
        />
        <Route
          path='/selectionsort'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Selection />
            </motion.div>
          }
        />
        <Route
          path='/insertionsort'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Insertion />
            </motion.div>
          }
        />
        <Route
          path='/quicksort'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Quick />
            </motion.div>
          }
        />
        <Route
          path='/mergesort'
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Merge />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Keep Navbar outside the AnimatePresence to avoid animating it */}
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
