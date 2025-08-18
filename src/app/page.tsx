"use client";

import VanShowcase from "../../components/Vanshowcase";
import PricingSection from "../../components/PricingSection";
import { FaLine, FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";  // ✅ เพิ่มอันนี้

export default function Home() {
    // ✅ เพิ่ม state และ toggle function
  const [currentLang, setCurrentLang] = useState<"th" | "en">("th");

  const toggleLanguage = () => {
    const newLang = currentLang === "th" ? "en" : "th";
    setCurrentLang(newLang);
  };

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-th][data-en]");
    elements.forEach((el) => {
      const text = el.getAttribute(`data-${currentLang}`);
      if (text && el.textContent !== text) {
        el.textContent = text;
      }
    });

    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.textContent = currentLang === "th" ? "English" : "ไทย";
    }
  }, [currentLang]);

  return (
    // <main className="min-h-screen bg-white text-gray-800 font-sans">
    //   {/* Navbar */}
    //   <nav className="w-full bg-white shadow-md fixed top-0 z-50">
    //     <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    //       {/* โลโก้ + ชื่อบริษัท */}
    //       <div className="flex items-center gap-4 shrink-0">
    //         <img src="/images/logo_van.png" alt="Van Logo" className="h-14 md:h-19" />
    //         <span className="text-lg md:text-xl font-bold tracking-wide">Khong Van Transport</span>
    //       </div>

    //       {/* เมนูด้านขวา */}
    //       <div className="hidden md:flex gap-6 text-gray-500 font-medium text-sm md:text-base">
    //         <a href="#about" className="hover:text-blue-500 transition">บริการ</a>
    //         <a href="#gallery" className="hover:text-blue-500 transition">รถตู้</a>
    //         <a href="#contact" className="hover:text-blue-500 transition">ติดต่อ</a>
    //       </div>
    //     </div>
    //   </nav>
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* โลโก้ + ชื่อบริษัท */}
          <div className="flex items-center gap-4 shrink-0">
            <img src="/images/logo_van.png" alt="Van Logo" className="h-14 md:h-19" />
            <span className="text-lg md:text-xl font-bold tracking-wide">Khong Van 
            </span>
          </div>

          {/* เมนูด้านขวา + ปุ่มภาษา */}
          <div className="hidden md:flex items-center gap-6 text-gray-500 font-medium text-sm md:text-base">
            <a href="#about" className="hover:text-blue-500 transition" data-th="บริการ"  data-en="Services">บริการ</a>
            <a href="#gallery" className="hover:text-blue-500 transition" data-th="รถตู้"  data-en="Vans">รถตู้</a>
            <a href="#contact" className="hover:text-blue-500 transition" data-th="ติดต่อ"  data-en="Contact">ติดต่อ</a>

            {/* ปุ่มเปลี่ยนภาษา */}
            <button
              id="langToggleBtn"
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-100 transition"
            >
              English
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
  <img
    src="/images/van/Van_all.jpg"
    alt="Van All"
    className="absolute inset-0 w-full h-full object-cover z-0"
    style={{ opacity: 0.5 }}
  />
  <div className="relative z-10 w-full min-h-[400px] bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
    <h1
      className="font-comfortaa text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      style={{ textShadow: "2px 2px 8px rgba(150, 148, 148, 0.7)" }}
    >
      Khong Van
    </h1>
    <p
      className="font-kanit text-xl md:text-2xl font-normal mb-2 drop-shadow-lg"
      style={{ textShadow: "1px 1px 6px rgba(150, 148, 148, 0.7)" }}
      data-th="บริการรถตู้ VIP พร้อมคนขับส่วนตัว เดินทางทั่วไทย"
      data-en="VIP van service with private driver, traveling all over Thailand"
    >
      บริการรถตู้ VIP พร้อมคนขับส่วนตัว เดินทางทั่วไทย
    </p>
    <div className="mt-6 flex gap-4">
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-sm md:text-base font-kanit drop-shadow-lg"
        data-th="ติดต่อเรา"
        data-en="Contact Us"
        style={{ textShadow: "1px 1px 6px rgba(150, 148, 148, 0.7)" }}
      >
        ติดต่อเรา
      </a>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-kanit text-4xl font-bold mb-6 text-gray-900" data-th="บริการของเรา" data-en="Our Services">บริการของเรา</h2>
          <p className="font-kanit text-lg text-gray-700 leading-relaxed text-justify-center max-w-3xl mx-auto" data-th="บริการรถตู้ VIP รุ่นใหม่ที่สะอาด สะดวกสบาย พร้อมพนักงานขับรถที่สุภาพ เรียบร้อย ขับขี่อย่างนุ่มนวล งดสูบบุหรี่และดื่มแอลกอฮอล์ขณะปฏิบัติงาน โดยมุ่งเน้นความปลอดภัยและความพึงพอใจของผู้โดยสารเป็นหลัก" data-en="Our new VIP vans are clean, comfortable, and driven by polite and professional drivers. We ensure a smooth ride without smoking or alcohol consumption during work hours, focusing on passenger safety and satisfaction.">
            บริการรถตู้ VIP รุ่นใหม่ที่สะอาด สะดวกสบาย พร้อมพนักงานขับรถที่สุภาพ เรียบร้อย ขับขี่อย่างนุ่มนวล งดสูบบุหรี่และดื่มแอลกอฮอล์ขณะปฏิบัติงาน โดยมุ่งเน้นความปลอดภัยและความพึงพอใจของผู้โดยสารเป็นหลัก
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Van Showcase Section */}
      <VanShowcase />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center px-6">
        <h2 className="font-kanit text-3xl md:text-4xl font-semibold mb-4" data-th="ติดต่อสอบถาม หรือจองรถตู้" data-en="Contact Us">ติดต่อสอบถาม หรือจองรถตู้</h2>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="tel:0616916888"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base md:text-lg"
            data-th="โทรหาเรา" data-en="Call Us"
          >
            <FaPhoneAlt /> โทรหาเรา
          </a>
          <a
            href="https://line.me/ti/p/rH-MUd9DIs"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base md:text-lg"
            data-th="แชทผ่าน LINE" data-en="Chat on LINE"
          >
            <FaLine /> แอด LINE
          </a>
          <a
            href="https://www.facebook.com/share/p/16X2EJk98K/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base md:text-lg"
            data-th="ติดต่อผ่าน Facebook" data-en="Contact on Facebook"
          >
            <FaFacebookF /> Facebook
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 text-sm md:text-base py-10">
        <div className="max-w-6xl mx-auto px-6 grid gap-6 text-center md:text-left md:grid-cols-3">
          {/* Section: Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Khong Van </h3>
            <p
              data-th="32/49 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000"
              data-en="32/49 Nai Mueang Subdistrict, Mueang Khon Kaen District, Khon Kaen 40000, Thailand"
            >
              32/49 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000
            </p>

            <p>
              <span
                data-th="โทรศัพท์:"
                data-en="Phone:"
              >
                โทรศัพท์:
              </span>{" "}
              <a href="tel:0616916888" className="hover:text-white">061-691-6888</a>
            </p>
          </div>

          {/* Section: Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2" data-th="ติดตามเรา" data-en="Follow Us">ติดตามเรา</h3>
            <div className="flex justify-center md:justify-start gap-4 items-center mt-2">
              <a
                href="https://www.facebook.com/share/p/16X2EJk98K/"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href="https://line.me/ti/p/rH-MUd9DIs"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaLine /> LINE
              </a>
            </div>
          </div>

          {/* Section: Copyright */}
          <div className="md:col-span-3 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
            © 2025 Khong Van. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}






