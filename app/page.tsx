'use client';
import SiteFooter from '@/components/common/footer/site.footer';
import SiteHeader from '@/components/common/header/site.header';
import { Colors } from '@/utils/colors';
import Image from 'next/image';
import React from 'react';

export default function Home() {
	return (
		<main className="w-11/12 mx-auto">
			<SiteHeader pageName="site" />
			<div className="bg-black flex flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between">
				<div className="sm:w-full md:w-2/3">
					<h1 className="text-9xl text-white  font-extrabold">
            Write. <br /> <span style={{ color: Colors.primary }}>Share.</span>{' '}
            Build
					</h1>
					<p className="text-white w-11/12 md:w-1/2 text-lg mt-3">
            Empowering Developers to Effortlessly Collaborate, Code, and Create
            Together Online!
					</p>
				</div>
				<div>
					<Image
						src={require('@/public/siteGIF.gif')}
						alt="gif image"
						width={500}
						height={500}
					/>
				</div>
			</div>
			<SiteFooter />
		</main>
	);
}
