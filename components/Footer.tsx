import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
    return (
        <footer className="relative w-full pt-20 pb-10" id="contact">
            {/* Grid Background */}
            <div className="absolute inset-0 -z-10 w-full h-[100%] overflow-hidden">
                <img
                    src="./footer-grid.svg"
                    alt="grid"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Footer Content */}
            <div className="flex flex-col items-center relative z-10">
                <h1 className="heading lg:max-w-[45vw] w-full text-center">
                    Ready to take your{' '}
                    <span className="text-purple">Digital Presence</span> to the Next Level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your
                    goals.
                </p>

                {/* Magic Button for Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=askabubakarsiddiquii@gmail.com&su=Let%27s%20get%20in%20touch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
                </a>
            </div>

            {/* Footer Bottom */}
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-5">
                <p className="md:text-base text-sm md:font-normal font-light text-center">
                    Copyright © 2024 Abubakar
                </p>

                {/* Social Media Icons */}
                <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
                    {socialMedia.map((profile) => (
                        <a
                            key={profile.id}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img
                                src={profile.img}
                                alt={profile.id}
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
