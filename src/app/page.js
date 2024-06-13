import Image from "next/image";
import  "./layout.scss";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/home/Home";
import FairePart from "@/components/fairePart/FairePart";
import Programme from "@/components/programme/Programme";
import Temoignages from "@/components/temoignages/Temoignages";
import Biographie from "@/components/biographie/Biographie";
import Plan from "@/components/plan/Plan";
import FooterContent from "@/components/footer/FooterContent";

export default function Home() {
  return (
    <main className="layout">
      <Navbar/>
      <HomePage/>
      <FairePart/>
      <Programme/>
      <Temoignages/>
      <Biographie/>
      <Plan/>
      <FooterContent/>
    </main>
  );
}
