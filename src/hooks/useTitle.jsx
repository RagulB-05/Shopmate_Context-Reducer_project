import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Shopmate`;
  }, []);
  return null;
};

export default useTitle;
