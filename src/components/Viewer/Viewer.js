import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

const Viewer = ({ docToLoad }) => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: docToLoad,
        loadAsPDF: true,
      },
      viewer.current,
    ).then(instance => {
      instance.enableFeatures([
        'ThumbnailMultiselect',
        'MultipleViewerMerging',
      ]);
      instance.enableElements(['documentControl']);
      instance.openElements(['leftPanel']);
    });
  }, []);

  return <div className="webviewer" ref={viewer}></div>;
};

export default Viewer;
