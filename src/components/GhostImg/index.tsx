import React, { FC } from 'react';
import Ghost1 from '../../assets/ghost-1.svg';
import Ghost2 from '../../assets/ghost-2.svg';
import Ghost3 from '../../assets/ghost-3.svg';
import Ghost4 from '../../assets/ghost-4.svg';
import Ghost5 from '../../assets/ghost-5.svg';
import Ghost6 from '../../assets/ghost-6.svg';
import Ghost7 from '../../assets/ghost-7.svg';
import Ghost8 from '../../assets/ghost-8.svg';
import Ghost9 from '../../assets/ghost-9.svg';

const GhostImg: FC = () => {
  //const ghost = `../../assets/ghost-${Math.floor(Math.random() * 9) + 1}.svg`;
  switch (Math.floor(Math.random() * 9) + 1) {
    case 1:
      return <img src={Ghost1} alt='Ghost' />;
    case 2:
      return <img src={Ghost2} alt='Ghost' />;
    case 3:
      return <img src={Ghost3} alt='Ghost' />;
    case 4:
      return <img src={Ghost4} alt='Ghost' />;
    case 5:
      return <img src={Ghost5} alt='Ghost' />;
    case 6:
      return <img src={Ghost6} alt='Ghost' />;
    case 7:
      return <img src={Ghost7} alt='Ghost' />;
    case 8:
      return <img src={Ghost8} alt='Ghost' />;
    case 9:
      return <img src={Ghost9} alt='Ghost' />;
    default:
      return null;
  }
};

export default GhostImg;
