"use client";
import { FaShuttleVan, FaCarSide } from "react-icons/fa";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-kanit text-3xl font-bold text-blue-800 mb-10">
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
                ค่าบริการเริ่มต้นที่ <span className="font-bold text-red-600">1,800 – 2,500 บาทต่อวัน</span>
              </li>
              <li>
                ระยะเวลาให้บริการ <span className="font-semibold">สูงสุด 10–12 ชั่วโมงต่อวัน</span>
              </li>
              <li>
                กรณีเกินเวลาที่กำหนด คิดค่าบริการเพิ่มเติม <span className="text-blue-700">200 บาทต่อชั่วโมง</span>
              </li>
              <li>
                หากไม่ได้จัดเตรียมที่พักสำหรับพนักงานขับรถ ขอความกรุณาชำระ <span className="text-blue-700">ค่าที่พัก 500 บาทต่อคืน</span>
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
                ค่าบริการเริ่มต้นที่ <span className="font-bold text-red-600">6,000 บาทต่อวัน</span>
              </li>
              <li>
                *ราคาดังกล่าว<strong>ไม่รวม</strong>ค่าน้ำมันและค่าทางด่วน
              </li>
              <li>
                ระยะเวลาให้บริการ <span className="font-semibold">สูงสุด 10–12 ชั่วโมงต่อวัน</span>
              </li>
              <li>
                กรณีเกินเวลาที่กำหนด คิดค่าบริการเพิ่มเติม <span className="text-blue-700">200 บาทต่อชั่วโมง</span>
              </li>
              <li>
                หากไม่ได้จัดเตรียมที่พักสำหรับพนักงานขับรถ ขอความกรุณาชำระ <span className="text-blue-700">ค่าที่พัก 500 บาทต่อคืน</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
