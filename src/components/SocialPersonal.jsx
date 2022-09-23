import {
  FaFacebookF,
  TiSocialInstagram,
  AiFillYoutube,
  AiFillGithub,
} from '../assets/icons';

const data = [
  {
    id: 0,
    icon: <AiFillYoutube />,
    link: 'https://www.youtube.com/channel/UC_7Uz3DpOCwKH0Ky02MbpLA/videos',
  },
  {
    id: 1,
    icon: <AiFillGithub />,
    link: 'https://www.facebook.com/profile.php?id=100007255540779',
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/profile.php?id=100007255540779',
  },
  {
    id: 3,
    icon: <TiSocialInstagram />,
    link: 'https://www.instagram.com/dangthaivi',
  },
];

function SocialPersonal() {
  return (
    <div className="hidden md:flex items-center gap-4">
      {data.map((item) => (
        <a
          key={item.id}
          className="text-[14px] hover:text-green-cyan cursor-pointer transition-all"
          rel="noreferrer"
          href={item.link}
          target="_blank"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialPersonal;
