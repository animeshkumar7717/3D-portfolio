/** @format */

import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2
            className="text-xl md:text-2xl text-left w-full capitalize"
            style={{ color: "#FEFE5B" }}
          >
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            As I embark on my journey in web development, I have mastered a
            diverse skill set of powerful tools and languages, with JavaScript
            at the heart of my craft. I leverage frameworks like React.js and
            Next.js to build seamless and engaging websites that connect users
            across the digital landscape. My expertise extends to the realms of
            Node.js and Express, where I design and develop robust, scalable
            applications using microservices architecture. By embracing the
            principles of Jamstack and utilizing MongoDB, I create and optimize
            databases that ensure each project is fast, secure, and dynamically
            interactive. With a keen eye for design, I strive to make every
            project not only functionally excellent but also visually stunning.
            Join me as I explore new technologies and innovations, continually
            shaping the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5 <sub className="font-semibold text-base">Years Of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=animeshkumar7717&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Animesh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=animeshkumar7717&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Animesh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,androidstudio,angular,apollo,babel,bitbucket,bootstrap,cpp,codepen,css,docker,express,figma,firebase,gatsby,git,github,gitlab,grafana,graphql,html,js,jest,kafka,kali,kubernetes,linux,materialui,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,postman,py,react,redux,redis,regex,stackoverflow,sass,supabase,ts,tailwind,threejs,vercel,vite,vscode,windows,yarn`}
            alt="Animesh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=animeshkumar7717&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Animesh"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/animeshkumar7717/WYSIWYG"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=animeshkumar7717&repo=WYSIWYG&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&description_lines_count=2`}
              alt="Animesh"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
