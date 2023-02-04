import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="138" cy="138" r="122" />
    <rect x="0" y="293" rx="15" ry="15" width="280" height="23" />
    <rect x="0" y="465" rx="0" ry="0" width="95" height="30" />
    <rect x="1" y="334" rx="15" ry="15" width="280" height="88" />
    <rect x="2" y="433" rx="15" ry="15" width="90" height="30" />
    <rect x="138" y="430" rx="25" ry="25" width="140" height="33" />
  </ContentLoader>
);

export default Skeleton;
