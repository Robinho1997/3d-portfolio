import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import anglerImg from "../assets/anglers-catch-diary.png";
import sneakerImg from "../assets/sneaker-shop.png";
import hotelImg from "../assets/hotel.png";
import laptopImg from "../assets/laptop.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open( demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={laptopImg}
                alt="demo"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag,index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  return (
    <div id="works">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("works.headerSmall")}</p>
        <h2 className={styles.sectionHeadText}>{t("works.headerBig")}.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("works.p")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        <ProjectCard
          name={`${t("works.angler.name")}`}
          description={`${t("works.angler.description")}`}
          image={anglerImg}
          source_code_link={"https://github.com/Robinho1997/fangtagebuch"}
          demo_link={"https://fangtagebuch.netlify.app/"}
          tags={["Firebase", "React"]}
        />
        <ProjectCard
          name={`${t("works.hotel.name")}`}
          description={`${t("works.hotel.description")}`}
          image={hotelImg}
          source_code_link={"https://github.com/Robinho1997/info-hotel-qr-code"}
          demo_link={"https://infoseite-hotel-am-helmwartsturm.netlify.app/"}
          tags={["JavaScript", "HTML", "CSS"]}
        />
        <ProjectCard
          name={`${t("works.shop.name")}`}
          description={`${t("works.shop.description")}`}
          image={sneakerImg}
          source_code_link={
            "https://github.com/Robinho1997/sneakers-e-commerce-site"
          }
          demo_link={"https://e-commerce-sneaker-shop.netlify.app/"}
          tags={["React", "JSX", "CSS"]}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
