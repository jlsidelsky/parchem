import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuoteSearchCard } from "@/components/quote-search-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Leadership | Parchem - Meet Our Team",
  description:
    "Meet the experienced leadership team at Parchem, dedicated to delivering excellence in specialty chemical distribution.",
};

interface LeadershipMember {
  name: string;
  title: string;
  bio: string;
  linkedinUrl: string;
  image: string;
  education?: string;
  highlights?: string[];
}

const leadershipTeam: LeadershipMember[] = [
  {
    name: "Ephraim Rabin",
    title: "Chairman",
    bio: "Ephraim founded Parchem in 1999 and is an active Chairman. He is responsible for leading the vision of the company and credited with building one of the leading digital platforms for specialty chemicals. Always thinking of innovative ways to extend Parchem's reach and capabilities, Ephraim has developed relationships with marquee manufacturers, suppliers, partners, and customers over his illustrious career and is highly regarded in the industry.",
    linkedinUrl: "https://www.linkedin.com/in/erabin/",
    image: "/ephraim.webp",
    education:
      "B.S. in Management Information Systems and International Marketing from Pace University's Lubin School of Business",
    highlights: [
      "Served as an astronaut on Blue Origin's New Shepard NS-26 mission to space",
      "Trustee at the Washington Institute",
      "Curator at the Mahlstedt Gallery",
      "Enjoys travelling with family",
    ],
  },
  {
    name: "Ilan Slasky",
    title: "CEO",
    bio: "Ilan joined Parchem in 2024 and serves as the company's CEO. He is responsible for all corporate functions, leading the team, engaging with clients, suppliers and partners, and executing on our strategic initiatives. Over the past 30 years, Ilan has an extensive background leading a variety of tech organizations, from private startups to public companies, having taken several of them public, completed lots of M&A and served as President, CEO, COO and CFO.",
    linkedinUrl: "https://www.linkedin.com/in/ilanslaskyparchem/",
    image: "/ilan.webp",
    education:
      "MBA from New York University and bachelor's in Economics from University of Pittsburgh",
    highlights: [
      "Completed several company exits to Microsoft, ATT, Softbank, GE Capital",
      "Several IPOs under his leadership",
      "Active in a variety of not-for-profit organizations",
      "Believes strongly in leading by example and always learning from others",
    ],
  },
  {
    name: "Alyssa Di Maggio",
    title: "Director of Operations",
    bio: "Alyssa serves as Director of Operations, responsible for client services, customer satisfaction, and logistics functions. A 14-year veteran of the company, Alyssa works to improve, maintain, and implement operational systems and practices.",
    linkedinUrl:
      "https://www.linkedin.com/in/alyssa-delvecchio-di-maggio-61030a28/",
    image: "/alyssa.webp",
    education:
      "B.S. in Mass Communications, focusing on Public Relations, from Iona University. Advanced certification in Human Resources.",
    highlights: [
      "14-year veteran of Parchem",
      "Worked across customer service, operations, and logistics departments",
      "Also responsible for human resources",
      "Enjoys spending time with her two young children and assisting with a competitive dance team",
    ],
  },
  {
    name: "Aaron Goldstein",
    title: "Director of Finance",
    bio: "Aaron serves as our Director of Finance and oversees our finance, tax and accounting functions. Aaron joined Parchem in 2014 from PWC where he was serving an international clientele of corporate accounts.",
    linkedinUrl: "https://www.linkedin.com/in/aaron-goldstein-46ba9864/",
    image: "/aaron.webp",
    education: "B.S. in Accounting from Yeshiva University",
    highlights: [
      "Previously served international clientele at PWC",
      "Joined Parchem in 2014",
      "Enjoys traveling to Central America and playing golf",
    ],
  },
  {
    name: "Jacob Klein",
    title: "Director of Quality and Regulatory Affairs",
    bio: "Jacob is the Director of Quality at Parchem, where he has spent over a decade dedicated to improvement and upholding high standards for himself and his team. His background in analytical chemistry and solution-oriented approach led him to refine the company's procedures and develop its Quality Management System.",
    linkedinUrl: "https://www.linkedin.com/in/jacobkleinparchem/",
    image: "/jacob.jpeg",
    education: "B.S. in Chemistry from Union College",
    highlights: [
      "Over a decade at Parchem",
      "Expert in ISO 9001:2015 with a focus on implementing effective solutions",
      "Drives continuous improvement for the organization",
      "Coaches his daughter's soccer team and enjoys golfing with his son",
    ],
  },
  {
    name: "Carol Satriano",
    title: "Director, Strategic Initiatives",
    bio: "Carol serves as our Director of Strategic Initiatives and previously served as Parchem's Operations Manager from 2002-2007. With 25 years of experience in Operations Management, Regulatory Compliance and Business Integration, she leverages her background to assist on a wide range of projects across the organization.",
    linkedinUrl: "https://www.linkedin.com/in/carol-satriano-4285a061/",
    image: "/carol.jpeg",
    education: "B.A. in Economics from the University of Connecticut",
    highlights: [
      "25 years of experience in Operations Management",
      "Previously served as Parchem's Operations Manager from 2002-2007",
      "Lived overseas during a European assignment for several years",
      "Fluent in German",
      "Owns and operates a small horse farm",
    ],
  },
  {
    name: "Will Bedrin",
    title: "Director of Compliance",
    bio: "Will joined Parchem in 2017 and brings a strong scientific background to his role at the company. William joined Parchem as a Compliance Specialist, where his commitment to safety, regulatory standards, and product quality has made him an integral part of the team.",
    linkedinUrl: "https://www.linkedin.com/in/william-bedrin-473399105/",
    image: "/william.jpeg",
    education: "B.A. in Biology from the University of Connecticut",
    highlights: [
      "Joined Parchem in 2017",
      "Gained hands-on experience as a laboratory technician across multiple scientific disciplines",
      "Enjoys playing disc golf and spending time at home with his wife, son, and two dogs",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={getImagePath(
              "/professional-chemical-warehouse-team-with-safety-e.jpg"
            )}
            alt="Leadership Team"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
              Our experienced leadership team brings decades of combined
              expertise in specialty chemicals, operations, finance, and
              regulatory compliance to deliver exceptional value to our
              customers.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executives - Full width, one per row */}
          <div className="space-y-8 mb-16">
            {leadershipTeam
              .filter(
                (member) =>
                  member.title === "Chairman" || member.title === "CEO"
              )
              .map((member, index) => (
                <div
                  key={index}
                  className="transition-all duration-300  group relative overflow-hidden"
                >
                  {/* Subtle gradient overlay for executive cards */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div
                    className={
                      "relative flex flex-col md:flex-row gap-8 items-start "
                    }
                  >
                    {/* Profile Image */}
                    <div className="relative w-full md:w-96 h-80 rounded-xl overflow-hidden shrink-0 shadow-lg">
                      <Image
                        src={getImagePath(member.image)}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay for uniform appearance */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/30" />
                      {/* LinkedIn Button */}
                      <Link
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80 z-10"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.86667 17.1933H0.258334V5.73163H3.86667V17.1933ZM2.06 4.1433C1.6507 4.141 1.25125 4.0175 0.912068 3.78839C0.572886 3.55928 0.309173 3.23483 0.154211 2.85599C-0.000751972 2.47715 -0.0400192 2.06089 0.0413643 1.65976C0.122748 1.25862 0.321135 0.890577 0.611489 0.602082C0.901842 0.313587 1.27115 0.117568 1.6728 0.0387615C2.07445 -0.0400449 2.49045 0.00189455 2.86829 0.159286C3.24612 0.316678 3.56887 0.582468 3.7958 0.923113C4.02272 1.26376 4.14366 1.66399 4.14333 2.0733C4.14719 2.34733 4.09585 2.61934 3.99235 2.87311C3.88885 3.12687 3.73532 3.3572 3.5409 3.55037C3.34649 3.74353 3.11518 3.89558 2.86076 3.99745C2.60633 4.09932 2.334 4.14892 2.06 4.1433ZM17.1667 17.2033H13.56V10.9416C13.56 9.09497 12.775 8.52497 11.7617 8.52497C10.6917 8.52497 9.64167 9.33163 9.64167 10.9883V17.2033H6.03333V5.73997H9.50333V7.3283H9.55C9.89833 6.6233 11.1183 5.4183 12.98 5.4183C14.9933 5.4183 17.1683 6.6133 17.1683 10.1133L17.1667 17.2033Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Header with Name and Title */}
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xl font-semibold text-accent">
                          {member.title}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-base text-muted-foreground leading-relaxed mb-6">
                        {member.bio}
                      </p>

                      {/* Education */}
                      {member.education && (
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                            Education
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {member.education}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Regular Team Members - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam
              .filter(
                (member) =>
                  member.title !== "Chairman" && member.title !== "CEO"
              )
              .map((member, index) => (
                <div
                  key={index}
                  className=" group relative overflow-hidden flex flex-col"
                >
                  <div className="relative flex flex-col">
                    {/* Profile Image */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                      <Image
                        src={getImagePath(member.image)}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay for uniform appearance */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/30" />
                      {/* LinkedIn Button */}
                      <Link
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80 z-10"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.86667 17.1933H0.258334V5.73163H3.86667V17.1933ZM2.06 4.1433C1.6507 4.141 1.25125 4.0175 0.912068 3.78839C0.572886 3.55928 0.309173 3.23483 0.154211 2.85599C-0.000751972 2.47715 -0.0400192 2.06089 0.0413643 1.65976C0.122748 1.25862 0.321135 0.890577 0.611489 0.602082C0.901842 0.313587 1.27115 0.117568 1.6728 0.0387615C2.07445 -0.0400449 2.49045 0.00189455 2.86829 0.159286C3.24612 0.316678 3.56887 0.582468 3.7958 0.923113C4.02272 1.26376 4.14366 1.66399 4.14333 2.0733C4.14719 2.34733 4.09585 2.61934 3.99235 2.87311C3.88885 3.12687 3.73532 3.3572 3.5409 3.55037C3.34649 3.74353 3.11518 3.89558 2.86076 3.99745C2.60633 4.09932 2.334 4.14892 2.06 4.1433ZM17.1667 17.2033H13.56V10.9416C13.56 9.09497 12.775 8.52497 11.7617 8.52497C10.6917 8.52497 9.64167 9.33163 9.64167 10.9883V17.2033H6.03333V5.73997H9.50333V7.3283H9.55C9.89833 6.6233 11.1183 5.4183 12.98 5.4183C14.9933 5.4183 17.1683 6.6133 17.1683 10.1133L17.1667 17.2033Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Header with Name and Title */}
                    <div className="mb-5 w-full">
                      <h3 className="text-xl font-bold text-foreground mb-2 transition-colors text-left">
                        {member.name}
                      </h3>
                      <p className="text-base font-semibold text-accent mb-2 text-left">
                        {member.title}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-base text-muted-foreground leading-relaxed mb-6 text-left">
                      {member.bio}
                    </p>

                    {/* Education */}
                    {member.education && (
                      <div className="w-full text-left">
                        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                          Education
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.education}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src={getImagePath(
              "/abstract-chemical-molecular-structure-pattern.jpg"
            )}
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Connect With Our Team
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ready to discuss your chemical supply chain needs? Get in touch
              with our team today.
            </p>
          </div>
          <QuoteSearchCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}
