import React from 'react';
import StarCanvas from './Stars';
  // Adjust the import path as necessary
  import useIsDesktop from "./customHook"

const StarCanvasWrapper = (props) => {
    const isDesktop = useIsDesktop(768);

    return isDesktop ? <StarCanvas {...props} /> : null;
};

export default StarCanvasWrapper;