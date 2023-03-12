import React from "react";
import "./innovation.scss";

import photo from "../../../assets/photo/Innovation.jpg";

export default function Innovation(params) {
  const lists = [
    {
      title: "Objective of Ethiotel Innovation Program",
      list: [
        "To encourage local solutions and problem-solving practices,",
        "To attract skilled talent, empower startups to build business",
        "To support the development of creative ideas and their commercialization",
        "To create a collaborative environment for tech startups, technology partners and industry players to bring their best and realize digital Ethiopia.",
      ],
    },
    {
      title: "Phase-1",
      list: [
        "It will be implemented starting from February 10 to April 30, 2023.",
        "The program will focus on startups that leverage cloud and mobile financial service capability.",
        "Top 100 winners will be engaged in solving the challenges and limitations they face, ensure their business continuity as well as immediately implement finance and cloud business ideas into action.",
        "  The selected top100 startups will obtain professional, expertise, financial and material support and in collaboration with our technology partner Huawei Technologies shall also receive sponsorship to travel to China and acquire international experiences.",
      ],
    },
    {
      title: "Minimum Eligibility Criteria",
      list: [
        "Company /team profile",
        "Description of products/ solutions roadmap, problems it solves, its impact & business model",
        "Present Market Analysis/ understanding",
        "Forecast cloud and telecom resources requirements",
        "Revenue report & projections",
        "Ethio telecom will engage startups that work on cloud and mobile financial services",
        "The idea/ application should be consumer-centric mobile applications that would leverage mobile network services (voice/data/SMS), telecloud and telebirr.",
        "Tech innovators, youth, students, startups living in Ethiopia are eligible for the program.",
        "Only one entry per project is permitted. Multiple entries from same applicant for one challenge will be disqualified.",
        "Participants will be required to engage in a co-creation process to design effective prototype.",
        "The final number of winners for each project is subject to judges’ panel/Ethio Telecom discretion.",
        "Additional eligibility criteria may be applied for specific challenges",
      ],
    },
    {
      title: "How to Apply",
      list: [
        "Eligible startups can submit their innovative works online via ethiotelinnovation@ethiotelecom.et",
        "Starting from February 12/2023 to March 10/2023.  ",
      ],
    },
    {
      title: "Phase-2",
      list: [
        "It will be implemented from March 20 –Jul 30, 2023.",
        "The program, beyond finance and the technology thematic areas, will emphasis on the implementation of digital contents, solutions, services, analytics, consumer and business applications of selected top 150 startup businesses.",
      ],
    },
    {
      title: "Phase-3",
      list: [
        "The last phase of the innovation program will begin in August 2023.",
        "It will capitalize on institutionalization of the businesses and innovations.",
        "Ethio telecom will establish TechHub center and take best practices from phase 1 & 2 and build R&D center. ethiotelinnovation@ethiotelecom.et",
      ],
    },
  ];

  return (
    <div className="innovation">
      <div className="header">
        <img src={photo} alt="" />
        <h3>ETHIOTEL INNOVATION PROGRAM</h3>
        <p>Empower our Nation’s Technology-based Startups!</p>
      </div>
      <div className="main">
        <div className="wrapper">
          {lists.map((list) => {
            return (
              <div className="info">
                <h4>{list.title}</h4>
                <ul>
                  {list.list.map((lis) => {
                    return <li>{lis}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
