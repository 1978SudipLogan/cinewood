import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { href } from 'react-router-dom';


const navigation = [
    {
      label: "Tv Shows",
      href: "tv",
      icon:<TvIcon/>
    },
    {
      label: "Movies",
      href: "movie",
      icon:<MovieIcon/>
    },
  ];

const mobileNavigation=[{
    label:"Home",
    href:"/",
    icon:<HomeIcon/>
},
...navigation,
{
    label:"Search",
    href:"search",
    icon:<SearchIcon/>
}]

export{navigation,mobileNavigation};