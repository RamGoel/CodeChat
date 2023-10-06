import React from 'react';
import Image from 'next/image';
const AdsBox = () => {
	const ads = [
		{
			id: 1,
			url: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwji26Kl_aaBAxVAomYCHezTBDEYABABGgJzbQ&gclid=Cj0KCQjwmICoBhDxARIsABXkXlLUWobd8LfPNZH69-0monIqC0vY1Emfv2yGbUlbTZGz9bO-hMxVMaQaAvmSEALw_wcB&ohost=www.google.com&cid=CAESauD2ekObeG6aMRH6fch1Kh4TUnV7UU3Bf2X2_95ZIBrSBVOZPFnmnv_cNJY_0NDt1VCj44rDIlqr41c7swksEu6GuncuW1bhZ9AML2pEXxQEz_49Np0vChjteyHi-YifUvaHI3DEd-bD6K0&sig=AOD64_31G_QIl6vmCOO1Vee-gDSmkYObHA&q&adurl&ved=2ahUKEwim_pil_aaBAxVJwjgGHZIaD64Q0Qx6BAgQEAE',
			banner: 'https://www.thedailymeal.com/img/gallery/10-ways-british-and-american-cadbury-chocolate-is-different/intro-1679529211.jpg',
		},
	];
	return (
		<div className="grid grid-cols-3 my-3 pl-4">
			{ads.map((item) => {
				return (
					<a href={item.url} key={item.id} className="rounded-lg">
						<Image
							src={item.banner}
							alt="banner-image"
							width={300}
							height={200}
							className="rounded-lg"
						/>
					</a>
				);
			})}
		</div>
	);
};

export default AdsBox;
