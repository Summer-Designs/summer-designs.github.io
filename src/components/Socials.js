import React from "react";
import { TbBrandLinkedin, TbBrandInstagram, TbBrandTwitter, TbBrandDribbble } from "react-icons/tb";

export default function Socials() {
	const socialLinks = [
		["Linkedin", <TbBrandLinkedin className="text-3xl" />, "/dashboard"],
		["Dribble", <TbBrandDribbble className="text-3xl" />, "/projects"],
		["Twitter", <TbBrandTwitter className="text-3xl" />, "/reports"],
		["Instagram", <TbBrandInstagram className="text-3xl" />, "/team"],
	];

	return (
		<div className="grid grid-cols-2 gap-4">
			{socialLinks.map(([title, icon, url]) => (
				<a href={url} className="h-28 flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-3xl body-text">
					{icon} {title}
				</a>
			))}
		</div>
	);
}
