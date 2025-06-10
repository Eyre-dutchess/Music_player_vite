import { AiOutlineHome} from 'react-icons/ai';
import { BsMusicNote, BsMusicPlayer } from 'react-icons/bs';
import { FaPeopleLine } from 'react-icons/fa6';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
    { name: "Discover", to:"/", icon: AiOutlineHome },
    { name: 'Top Artists', to: '/top-artists', icon: FaPeopleLine },
    { name: 'Top Charts', to: '/top-charts', icon: BsMusicNote},
    { name: 'Around Me', to: '/around', icon: BsMusicPlayer },
]