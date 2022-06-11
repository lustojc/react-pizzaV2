import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={1}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block">
    <circle cx="138" cy="134" r="123" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
    <rect x="4" y="419" rx="6" ry="6" width="97" height="40" />
    <rect x="136" y="411" rx="20" ry="20" width="134" height="52" />
  </ContentLoader>
);

export default Skeleton;
