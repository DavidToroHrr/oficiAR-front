
"use client";

import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../assets/white-logo.svg";
export default function FooterComponent() {
  return (
    <Footer bgDark className="rounded-none">
        {/* Contenedor principal: flex-col para apilar logo -> links -> copyright */}
        <div className="flex flex-col w-full justify-center items-center">

            {/* 1. SECCIÓN DEL LOGO: Eliminamos el pl-5 para un centrado perfecto */}
            <div className="w-full pt-10 flex justify-center items-center">
                <img src={logo} alt="OficiAR Logo" className="h-10 w-auto object-contain" />
            </div>

            {/* 2. SECCIÓN DE ENLACES Y COPYRIGHT: Cambiamos a flex-col y limpiamos errores */}
            <div className="w-full flex flex-col">
                
                {/* Los Links (Grid) */}
                <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
                    <div>
                        <FooterTitle title="Company" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Brand Center</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="help center" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Discord Server</FooterLink>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">Facebook</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="legal" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Licensing</FooterLink>
                            <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>

                {/* El Copyright (Barra inferior gris) */}
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="OficiAR" year={2026} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="#" icon={BsGithub} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>

            </div>

        </div>
    </Footer>
);
}
