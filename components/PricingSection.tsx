"use client";
import { FaShuttleVan, FaCarSide } from "react-icons/fa";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-kanit text-3xl font-bold text-blue-800 mb-10" data-th="💰 อัตราค่าบริการ" data-en="💰 Price">
          💰 อัตราค่าบริการ
        </h2>

        <div className="grid md:grid-cols-2 gap-8 font-kanit text-lg">

          {/* Commuter VIP */}
          <div className="border border-blue-200 rounded-xl p-6 shadow-md bg-blue-50">
            <div className="flex items-center gap-3 mb-2">
              <FaShuttleVan color="#2563eb" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">Toyota Commuter VIP</h3>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <span data-th="ค่าบริการเริ่มต้นที่" data-en="Starting service fee at"></span>
                <span className="font-bold text-red-600"> 1,800 – 2,500 </span>
                <span data-th="บาทต่อวัน" data-en="THB per day"></span>
              </li>
              
              <li>
                <span data-th="ระยะเวลาให้บริการ" data-en="Service duration"></span>
                <span data-th="สูงสุด" data-en="Up to"></span>
                <span className="font-bold text-red-600"> 10–12 </span>
                <span data-th="ชั่วโมงต่อวัน" data-en="hours per day"></span>
              </li>

              <li>
                <span data-th="กรณีเกินเวลาที่กำหนด คิดค่าบริการเพิ่มเติม" data-en="In case of overtime, additional fee applies"></span>
                <span className="text-blue-700"> 200 </span>
                <span data-th="บาทต่อชั่วโมง" data-en="THB per hour"></span>
              </li>

              <li>
                <span data-th="หากไม่ได้จัดเตรียมที่พักสำหรับพนักงานขับรถ ขอความกรุณาชำระ" data-en="If accommodation is not provided for the driver, please pay"></span>
                <span className="text-blue-700"> 500 </span>
                <span data-th="บาทต่อคืน" data-en="THB per night"></span>
              </li>

            </ul>
          </div>

          {/* Alphard */}
          <div className="border border-yellow-300 rounded-xl p-6 shadow-md bg-yellow-50">
            <div className="flex items-center gap-3 mb-2">
              <FaCarSide color="#945c64ff" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">Toyota Alphard</h3>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <span data-th="ค่าบริการเริ่มต้นที่" data-en="Starting service fee at"></span>
                <span className="font-bold text-red-600"> 6,000 </span>
                <span data-th="บาทต่อวัน" data-en="THB per day"></span>

              </li>

              <li>
                <span data-th="*ราคาดังกล่าว" data-en="*The above price"></span>
                <strong data-th="ไม่รวม" data-en=" does not include "></strong>
                <span data-th="ค่าน้ำมันและค่าทางด่วน" data-en="fuel and toll fees"></span>
              </li>

              <li>
                <span data-th="ระยะเวลาให้บริการ" data-en="Service duration"></span>
                <span data-th="สูงสุด" data-en="Up to"></span>
                <span className="font-semibold"> 10–12 </span>
                <span data-th="ชั่วโมงต่อวัน" data-en="hours per day"></span>

              </li>
              <li>
                <span data-th="กรณีเกินเวลาที่กำหนด คิดค่าบริการเพิ่มเติม" data-en="In case of overtime, an additional fee applies"></span>
                <span className="text-blue-700"> 200 </span>
                <span data-th="บาทต่อชั่วโมง" data-en="THB per hour"></span>
              </li>

              <li>
                <span data-th="หากไม่ได้จัดเตรียมที่พักสำหรับพนักงานขับรถ ขอความกรุณาชำระ" data-en="If accommodation is not provided for the driver, please pay"></span>
                <span data-th="ค่าที่พัก" data-en="accommodation fee"></span>
                <span className="text-blue-700"> 500 </span>
                <span data-th="บาทต่อคืน" data-en="THB per night"></span>

              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}