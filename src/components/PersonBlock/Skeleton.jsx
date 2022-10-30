import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './skeleton.module.scss';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={380}
    height={500}
    viewBox="0 0 380 500"
    backgroundColor="#f3f1f1"
    foregroundColor="#ecebeb"
    className={styles.skeleton}>
    <rect x="0" y="11" rx="0" ry="0" width="380" height="380" />
    {/* <rect x="-1" y="273" rx="0" ry="0" width="380" height="130" /> */}
    <rect x="0" y="413" rx="30" ry="30" width="383" height="60" />
  </ContentLoader>
);

export default Skeleton;
