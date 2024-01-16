import React, { useEffect } from 'react'
import './App.css';

import { Outlet, useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { setIsMobileView } from './redux/slices/globalSlice/globalSlice';
import { useAppDispatch } from './redux/store';



function App() {
  const pages = useRoutes(routes);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      // setIsMobile(event.matches);
      dispatch(setIsMobileView(event.matches))
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);

  return (
    <>
      <div>{pages}</div>
    </>
  );
}
export default App;
