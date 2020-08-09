import Head from "next/head";
import * as React from "react";
import { useTranslation } from "react-i18next";
import SplashImage from "../images/landingpage-splash-image.jpg";
import Logo from "../images/laser-adventure-logo-1.png";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>DEV - {t("index.page.title")}</title>
        <meta name="description" content={t("index.page.description")}></meta>
      </Head>
      <Navbar />
      <div className="flex flex-col md:h-screen">
        <div className="flex-1 grid items-center ">
          <img
            className="w-1/2 sm:w-1/3 lg:w-1/3 row-start-1 col-start-1 z-10 mx-auto"
            src={Logo}
            alt="Laser adventure splash screen"
          />
          <div
            className="w-screen h-64 md:h-full bg-center bg-cover bg-no-repeat row-start-1 col-start-1"
            style={{
              filter: "grayscale(.9) contrast(.95) brightness(.9)",
              backgroundImage: `url(${SplashImage})`,
            }}
          ></div>
        </div>
      </div>
      <div className="p-6 space-y-10 md:space-y-0 md:flex">
        <div className="space-y-4">
          <h2 className="text-3xl text-blue-500 uppercase font-medium font-heading">Wie zijn we?</h2>
          <p className="font-light">
            Goedkope maar kwalitatieve laserguns huren? Bij ons ben je aan het juiste adres! Vanaf €4,50 per geweer per
            weekend.
          </p>
          <p className="font-light">
            Onze lasergeweren zijn steeds een schot in de roos! Of het nu voor een ledenweekend, een verjaardagsfeestje
            of vrijgezellenparty is, hier moet je zijn.
          </p>

          <p className="font-light">Onze laserguns zijn zeer makkelijk in gebruik en zijn niet schadelijk.</p>

          <p className="font-light">
            Neem gerust contact met ons op om je laserguns te huren, dan helpen we je zo snel mogelijk verder!
          </p>
          <button className="uppercase py-3 px-5 bg-blue-500 text-white rounded hover:bg-blue-700">
            Contacteer ons
          </button>
        </div>
        <div>
          <ul className="space-y-4">
            <ListItem
              title="Makkelijk in gebruik voor jong en oud"
              content="Onze lasergeweren zijn makkelijk te gebruiken en dus uitermate geschikt voor zowel kinderen als volwassenen."
            />
            <ListItem
              title="Veilig in gebruik"
              content="Onze lasergeweren werken met infraroodstralen en zijn bijgevolg niet schadelijk voor de gezondheid of de natuur."
            />
            <ListItem
              title="Zowel voor kleine als grote groepen"
              content="Je kan onze lasergeweren al huren vanaf 2 personen. Grotere groepen tot meer dan 100 deelnemers zijn natuurlijk ook mogelijk!"
            />
            <ListItem
              title="Spelen op eigen locatie"
              content="Een bos, wei, loods of gewoon binnenshuis lasershooten? Het kan allemaal!"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ListItemProps {
  title: string;
  content: string;
}

function ListItem({ title, content }: ListItemProps) {
  return (
    <li>
      <span className="uppercase text-blue-500 font-semibold">{title}</span>
      <br />
      <span className="font-light">
      {content}

      </span>
    </li>
  );
}
