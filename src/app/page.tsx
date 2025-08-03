import VanShowcase from "../../components/Vanshowcase";
import PricingSection from "../../components/PricingSection";
import { FaLine, FaPhoneAlt, FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* โลโก้ + ชื่อบริษัท */}
          <div className="flex items-center gap-4 shrink-0">
            <img src="/images/logo_van.png" alt="Van Logo" className="h-14 md:h-19" />
            <span className="text-lg md:text-xl font-bold tracking-wide">Khong Van Transport</span>
          </div>

          {/* เมนูด้านขวา */}
          <div className="hidden md:flex gap-6 text-gray-500 font-medium text-sm md:text-base">
            <a href="#about" className="hover:text-blue-500 transition">บริการ</a>
            <a href="#gallery" className="hover:text-blue-500 transition">รถตู้</a>
            <a href="#contact" className="hover:text-blue-500 transition">ติดต่อ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center pt-32 pb-20"
        style={{ backgroundImage: "url('/images/van/van_all.jpg')" }}
      >
        <div className="w-full min-h-[400px] bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-comfortaa text-5xl md:text-6xl font-bold mb-4">
            Khong Van Transport
          </h1>
          <p className="font-kanit text-xl md:text-2xl font-normal">
            บริการรถตู้ VIP พร้อมคนขับส่วนตัว เดินทางทั่วไทย
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-sm md:text-base font-kanit"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-kanit text-4xl font-bold mb-6 text-gray-900">บริการของเรา</h2>
          <p className="font-kanit text-lg text-gray-700 leading-relaxed text-justify-center max-w-3xl mx-auto">
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
        <h2 className="font-kanit text-3xl md:text-4xl font-semibold mb-4">ติดต่อสอบถาม หรือจองรถตู้</h2>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a
            href="tel:0616916888"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-base md:text-lg"
          >
            <FaPhoneAlt /> โทรหาเรา
          </a>
          <a
            href="https://line.me/ti/p/rH-MUd9DIs"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base md:text-lg"
          >
            <FaLine /> แอด LINE
          </a>
          <a
            href="https://www.facebook.com/share/p/16X2EJk98K/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base md:text-lg"
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
            <h3 className="text-white font-semibold text-lg mb-2">Khong Van Transport</h3>
            <p>32/49 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000</p>
            <p>โทรศัพท์: <a href="tel:0616916888" className="hover:text-white">061-691-6888</a></p>
          </div>

          {/* Section: Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">ติดตามเรา</h3>
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
            © 2025 Khong Van Transport. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}






