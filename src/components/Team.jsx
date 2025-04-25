import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PavanSir from '../assets/team/pavan-sir.png';
import abhilash from '../assets/team/Abhilash.jpg';
import Abhitha from '../assets/team/Abhitha.jpg';
import Amrutha from '../assets/team/amrutha .jpg';
import AmruthaKM from '../assets/team/Amrutha.jpg';
import Ananya from '../assets/team/AnanyaTY.jpg';
import ankitha from '../assets/team/Ankitha.jpg';
import anusha from '../assets/team/Anusha .jpg';
import anushree from '../assets/team/Anushree.jpg';
import apeksha from '../assets/team/Apeksha.jpg';
import chethen from '../assets/team/ChetanKumar.jpg';
import kountheya from '../assets/team/KOUNTHEYA.jpg';
import manu from '../assets/team/manu.jpg';
import preetham from '../assets/team/Preetham.jpg';
import sindhu from '../assets/team/Sindhu.jpeg';
import siri from '../assets/team/Siri.jpg';
import sowjanya from '../assets/team/sowjanya.jpg';
import subramanya from '../assets/team/Subramanya.jpg';
import sushma from '../assets/team/Sushma.jpeg';
import tarun from '../assets/team/TarunDR.jpeg';
import Tarun from '../assets/team/Tarun.jpg';
import vaishnavi from '../assets/team/Vaishnavi.jpg';
import ssv from '../assets/team/Varaprasad.png';
import vikyath from '../assets/team/Vikyath.jpg';
import viresha from '../assets/team/Viresha.jpg';
import purvika from '../assets/team/NEW/purvikasrao.jpeg';
import sahana from '../assets/team/NEW/SahanaNaik.jpg';
import sanjay from '../assets/team/NEW/Sanjay.jpg';
import sathwik from '../assets/team/NEW/SathwikMC.png';
import Shreyas from '../assets/team/NEW/Shreyas.jpg';
import shruthi from '../assets/team/NEW/ShruthiHiremath.jpg';
import sneha from '../assets/team/NEW/SnehaB.jpg';
import Spoorthi from '../assets/team/NEW/SpoorthiB.jpg';
import vaibhav from '../assets/team/NEW/Vaibhav.jpg';
import vidhathri from '../assets/team/NEW/Vidhathri.jpg';
import Yashaswini from '../assets/team/NEW/Yashaswini.jpg';
import yuvaraj from '../assets/team/NEW/Yuvaraj.jpg';
import manvitha from '../assets/team/NEW/Manvitha.jpg';
import bhoomikad from '../assets/team/NEW/Bhoomika D .jpg';
import dhanya from '../assets/team/NEW/DhanyaR.jpg';
import mukesh from '../assets/team/NEW/MUKESH.jpeg';
import nagapriya from '../assets/team/NEW/Nagapriya.jpg';
import megharaj from '../assets/team/NEW/megharaj.jpg'
import aditya from '../assets/team/NEW/AdityaNH.jpg';
import chinmai from '../assets/team/NEW/chinmai.png'
import chaithra from '../assets/team/NEW/chaithra.jpg'
import Bhoomika from '../assets/team/NEW/BhoomikaMD .jpg';
import Santhosh from '../assets/team/NEW/Santhosh .jpg';
import Tilak from '../assets//team/NEW/TILAK S .jpg'
const Team = () => {
    {/*  {
            name: "Dr Pavan Kumar MP Sir",
            role: "Co-Ordinater",
            designation: "Assistant Professor,Dept. of IS&E, JNNCE.",
            image: PavanSir,
            socialLink: "https://linkedin.com/in/pavankumar"
        },
        {
            name: "Chandrashekar R",
            role: "Developer & Member",
            image: chandrashekar,
            socialLink: "https://www.linkedin.com/in/chandra-shekar6366189346"
        }, */}
    const teamMembers = [

        {
            name: "Abhilash R",
            role: "Member",
            image: abhilash,
            socialLink: "https://www.linkedin.com/in/abhilash-r-b89774304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
            name: "Abhitha B.S",
            role: "Member",
            image: Abhitha,
            socialLink: "http://www.linkedin.com/in/abhitha-b-s-388506316"
        },
        {
            name: "Adithya Naag H",
            role: "Member",
            image: aditya,
            socialLink: "https://www.linkedin.com/in/aditya-naag-h-266666315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        },
        {
            name: "Amrutha H",
            role: "Member",
            image: Amrutha,
            socialLink: "https://www.linkedin.com/in/amrutha-h-naik-054074262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            name: "Amrutha K M",
            role: "Member",
            image: AmruthaKM,
            socialLink: "https://www.linkedin.com/in/amrutha-gowda-54472a315"
        }, {
            name: "Ananya T Y",
            role: "Member",
            image: Ananya,
            socialLink: "https://www.linkedin.com/in/ananya-t-y-gowda-225a5a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Ankitha G",
            role: "Member",
            image: ankitha,
            socialLink: "https://www.linkedin.com/in/ankitha-g-051b18315"
        }, {
            name: "Anusha U S",
            role: "Member",
            image: anusha,
            socialLink: "https://www.linkedin.com/in/anusha-u-s-a1460a298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Anushree D M ",
            role: "Member",
            image: anushree,
            socialLink: "https://www.linkedin.com/in/anu-shree-557aba260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Apeksha KA",
            role: "Member",
            image: apeksha,
            socialLink: "https://www.linkedin.com/in/apeksha-ka-23ab68358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }, {
            name: "Bhoomika D",
            role: "Member",
            image: bhoomikad,
            socialLink: "https://www.linkedin.com/in/bhoomika-rao-16311826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Chaithra R ",
            role: "Member",
            image: chaithra,
            socialLink: "https://www.linkedin.com/in/chaithra-r-245b35337"
        }, {
            name: "Chinmai PS ",
            role: "Member",
            image: chinmai,
            socialLink: "https://www.linkedin.com/in/chinmai-ps-3a26a031a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app    "
        }, {
            name: "Dhanya R",
            role: "Member",
            image: dhanya,
            socialLink: "https://www.linkedin.com/in/dhanya-r-216b58307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Chethan Kumar V",
            role: "Member",
            image: chethen,
            socialLink: "https://www.linkedin.com/in/chetan-kumar-5674002a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
        , {
            name: "Kountheya S Sathish",
            role: "Member",
            image: kountheya,
            socialLink: "https://www.linkedin.com/in/kountheya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Manu M",
            role: "Member",
            image: manu,
            socialLink: "https://www.linkedin.com/in/manu-m-a1b659359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Megharaj S Shet",
            role: "Member",
            image: megharaj,
            socialLink: "https://www.linkedin.com/in/megharaj-shet-774119317"
        }, {
            name: "Mukesh V Naik",
            role: "Member",
            image: mukesh,
            socialLink: "https://www.linkedin.com/in/mukesh-v-naik-a866282a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }, {
            name: "Nagapriya K S",
            role: "Member",
            image: nagapriya,
            socialLink: "https://www.linkedin.com/in/priya-rao-92480730b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Preetham P",
            role: "Member",
            image: preetham,
            socialLink: "https://www.linkedin.com/in/preetham-p-b20372359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Sindhu Bhat V",
            role: "Member",
            image: sindhu,
            socialLink: "https://www.linkedin.com/in/sindhubhatv/"
        }, {
            name: "Siri CK",
            role: "Member",
            image: siri,
            socialLink: "https://www.linkedin.com/in/siri-ck-a999b0328"
        }, {
            name: "Sowjanya M U",
            role: "Member",
            image: sowjanya,
            socialLink: "https://www.linkedin.com/in/sowjanya-mu-3842aa33a"
        }, {
            name: "Subramanya S Gujjar",
            role: "Member",
            image: subramanya,
            socialLink: "www.linkedin.com/in/subramanya-s-gujjar-6776aa260"
        }, {
            name: "Sushma S",
            role: "Member",
            image: sushma,
            socialLink: "http://linkedin.com/in/sushma-shindhe-278015261"
        }, {
            name: "Tarun Dasarahatti Raghavendra",
            role: "Member",
            image: tarun,
            socialLink: "https://www.linkedin.com/in/tarun-dasarahatti-raghavendra-2b1bb2252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        }, {
            name: "Tarun S",
            role: "Member",
            image: Tarun,
            socialLink: "www.linkedin.com/in/tarun-s-18379a247"
        }, {
            name: "Vaishnavi S V",
            role: "Member",
            image: vaishnavi,
            socialLink: "https://www.linkedin.com/in/vaishnavi-s-v-125b67358"
        }, {
            name: "S S Varaprasad",
            role: "Member",
            image: ssv,
            socialLink: "https://linkedin.com/in/rodrigomonchi"
        }, {
            name: "Vikyath MA",
            role: "Member",
            image: vikyath,
            socialLink: "https://linkedin.com/in/rodrigomonchi"
        }, {
            name: "Viresha H T",
            role: "Member",
            image: viresha,
            socialLink: "https://www.linkedin.com/in/viresha-h-t-229861282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Manvitha N Rao",
            role: "Member",
            image: manvitha,
            socialLink: "https://www.linkedin.com/in/manvitha-n-rao-6b15172b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Purvika S Rao",
            role: "Member",
            image: purvika,
            socialLink: "www.linkedin.com/in/purvika-s-rao-"
        }, {
            name: "Sahana Chandrakant Naik",
            role: "Member",
            image: sahana,
            socialLink: "https://www.linkedin.com/in/sahana-naik-b0b9592a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Sanjay M",
            role: "Member",
            image: sanjay,
            socialLink: "https://www.linkedin.com/in/sanjay-m-19a513355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Sathwik MC",
            role: "Member",
            image: sathwik,
            socialLink: "https://www.linkedin.com/in/sathwik-m-c-46556b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Shreyas R",
            role: "Member",
            image: Shreyas,
            socialLink: "https://www.linkedin.com/in/shreyas-r-24bb57340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Shruthi Hiremath ",
            role: "Member",
            image: shruthi,
            socialLink: "https://www.linkedin.com/in/shruthi-hiremath-b969ba268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Sneha B",
            role: "Member",
            image: sneha,
            socialLink: "https://www.linkedin.com/in/sneha-b-49857932b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Spoorthi B",
            role: "Member",
            image: Spoorthi,
            socialLink: "https://www.linkedin.com/in/spoorthi-b6257932b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Vaibhav Rao B N",
            role: "Member",
            image: vaibhav,
            socialLink: "https://www.linkedin.com/in/vaibhav-rao-b-n-206225293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Vidhathri Udupa T G",
            role: "Member",
            image: vidhathri,
            socialLink: "https://www.linkedin.com/in/vidhathri-udupa-312869265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Yashaswini BM",
            role: "Member",
            image: Yashaswini,
            socialLink: "www.linkedin.com/in/yashaswini-bm-aaa42a314"
        }, {
            name: "Yuvaraj MR",
            role: "Member",
            image: yuvaraj,
            socialLink: "https://www.linkedin.com/in/yuvaraj-m-r-11b73b354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }, {
            name: "Bhoomika M D",
            role: "Member",
            image: Bhoomika,
            socialLink: "https://www.linkedin.com/in/bhoomika-raj-9b23b6260"
        }, {
            name: "Santhosh T",
            role: "Member",
            image: Santhosh,
            socialLink: "https://linkedin.com/in/rodrigomonchi"
        }, {
            name: "TILAK S",
            role: "Member",
            image: Tilak,
            socialLink: "https://www.linkedin.com/in/tilak-s-4b2940280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
    ];

    const [showAll, setShowAll] = useState(false);

    const initialDisplayCount = 6;

    const handleExpand = () => {
        setShowAll(!showAll);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                {/*
                     <div className="flex flex-col text-center w-full mb-20">
                     <h1 className="sm:text-3xl text-2xl font-medium title-font  text-white"></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
 </div>
                    </p>*/}


                <div className="flex flex-wrap -m-2">
                    {(showAll ? teamMembers : teamMembers.slice(0, initialDisplayCount)).map((member, index) => (

                        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img
                                    alt="team"
                                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                    src={member.image}
                                />
                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium">{member.name}</h2>
                                    <p className="text-gray-500">{member.role}</p>
                                    <p className="text-gray-500">{member.designation}</p>
                                    <a
                                        href={member.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-500 hover:underline flex items-center mt-2"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 sticky bottom-0">
                    <button
                        onClick={handleExpand}
                        className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>

        </section >
    );
};

export default Team;
