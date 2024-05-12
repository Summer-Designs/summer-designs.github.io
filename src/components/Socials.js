import React from 'react';
import { TbBrandLinkedin, TbBrandInstagram, TbBrandTwitter, TbBrandDribbble } from 'react-icons/tb';

export default function Socials() {
  const socialLinks = [
    ['Linkedin', <TbBrandLinkedin className="text-3xl" />, 'https://www.linkedin.com/company/summerdesigns/'],
    ['Dribble', <TbBrandDribbble className="text-3xl" />, '#'],
    ['Twitter', <TbBrandTwitter className="text-3xl" />, '#'],
    ['Instagram', <TbBrandInstagram className="text-3xl" />, 'https://www.instagram.com/thesummerdesign/'],
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {socialLinks.map(([title, icon, url]) => (
        <a
          href={url}
          target="/blank"
          className="h-28 md:h-20 flex flex-col md:flex-row items-center justify-center gap-3 p-5 bg-white rounded-3xl body-text"
        >
          {icon} {title}
        </a>
      ))}
    </div>
  );
}
