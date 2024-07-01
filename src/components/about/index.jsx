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
          <h2 className="text-xl md:text-2xl text-left w-full capitalize" style={{ color: '#FEFE5B' }}>
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Embarking on my quest in web development, I have mastered a diverse array of powerful 
            tools and languages, with JavaScript serving as the core of my magic. With dexterity, 
            I wield frameworks like React.js and Next.js to forge seamless gateways (websites) that 
            connect users across the vast expanse of the digital cosmos. My journey also takes me 
            deep into the realms of Node.js and Express, where I craft robust and scalable applications 
            using the microservices architecture.
            
            Harnessing the timeless principles of the Jamstack and backed by the strength of MongoDB, 
            I design and optimize databases to ensure every creation is fast, secure, and dynamically engaging. 
            My keen eye for design ensures that every project I undertake is as visually captivating as it is 
            functionally robust. Join me as I delve into new technologies and spells, continually shaping the 
            future landscape of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">Clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ {" "}
            <sub className="font-semibold text-base">Years Of Experience</sub>
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
