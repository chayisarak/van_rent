// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaWindowClose,} from "react-icons/fa";


// const vans = [
//   {
//     id: 1,
//     name: "Toyota Alphard",
//     type: "Alphard",
//     image: "/images/van/alphard.jpg",
//     gallery: [
//       "/images/van/alphard1.jpg",
//       "/images/van/alphard2.jpg",
//       "/images/van/alphard3.jpg",
//       "/images/van/alphard4.jpg",
//     ],
//     seats: 5,
//     features: [
//       "เบาะหนัง VIP พร้อมที่วางแก้ว",
//       "แอร์ไมโครบัสเย็นทั่วคัน",
//       "ทีวีใหญ่",
//       "เครื่องเสียง Bluetooth",
//       "USB/USB-C ทุกที่นั่ง",
//       "Ambient Light",
//       "ทำความสะอาดทุกเที่ยว",
//       "ประกันภัยชั้น 1",
//     ],
//     description:
//       "Alphard VIP 4-5 ที่นั่ง สำหรับผู้โดยสารระดับพรีเมียม นั่งสบาย หรูหรา เป็นส่วนตัว",
//   },
//   {
//     id: 2,
//     name: "Toyota Commuter VIP",
//     type: "Commuter VIP",
//     image: "/images/van/commutervip.jpg",
//     gallery: [
//       "/images/van/commutervip1.jpg",
//       "/images/van/commutervip2.jpg",
//       "/images/van/commutervip3.jpg",
//     ],
//     seats: 9,
//     features: [
//       "เบาะ VIP 8–9 ที่นั่ง พร้อมที่วางแก้ว",
//       "แอร์ไมโครบัสเย็นทั่วถึง",
//       "ทีวี 24\" รองรับบันเทิง",
//       "เครื่องเสียงรอบคัน Bluetooth",
//       "USB/USB-C ทุกจุด",
//       "Ambient Light",
//       "พื้นที่สัมภาระกว้าง",
//       "ทำความสะอาดทุกเที่ยว",
//       "ประกันภัยชั้น 1",
//     ],
//     description:
//       "Commuter VIP 9 ที่นั่ง เหมาะสำหรับกลุ่มเดินทาง ครอบครัว หรือทีมงาน พร้อมสิ่งอำนวยความสะดวกครบ",
//   },
// ];


// export default function VanShowcase() {
//   const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <section id="van-list" className="bg-gradient-to-b from-white via-blue-50 to-white py-20 relative">
//       <div className="absolute inset-0 bg-[url('/images/van/bg_pattern.png')] bg-cover opacity-10"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <h2 className="text-center font-kanit text-4xl font-bold mb-12 text-gray-800">
//           รถตู้ที่ให้บริการ
//         </h2>

//         <div className="flex flex-wrap justify-center gap-10">
//           {vans.map((van) => (
//             <div
//               key={van.id}
//                className="w-full max-w-sm flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer group"
//                onClick={() => {
//                  setActiveGallery(van.gallery);
//                  setModalOpen(true);
//                }}
//             >
//               <img
//                 src={van.image}
//                 alt={van.name}
//                 className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
//               />
//               <div className="p-6 flex flex-col gap-4 h-full">
//                 <h3 className="text-xl font-kanit font-semibold text-gray-900">{van.name}</h3>
//                 <p className="text-gray-600 text-sm">{van.description}</p>
//                 <ul className="text-sm text-gray-700 list-disc list-inside">
//                   <li className="font-medium">ที่นั่ง: {van.seats} คน</li>
//                   {van.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//                 <div className="flex justify-between items-center pt-4 mt-auto">
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
//                     {van.type}
//                   </span>
//                   <span className="text-blue-600 text-sm font-medium underline underline-offset-4">
//                     ดูรูปเพิ่มเติม
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {modalOpen && activeGallery && (
//         <div
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 md:px-8 z-[999]"
//             onClick={() => setModalOpen(false)}
//         >
//             <div
//             className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 md:p-10 relative overflow-y-auto max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//             >
//             {/* ปุ่มปิดมุมขวาบน */}
//             <button
//                 onClick={() => setModalOpen(false)}
//                 className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl md:text-2xl"
//                 aria-label="ปิด"
//             >
//                 <FaWindowClose className="text-2xl text-gray-500 hover:text-black" />

//             </button>

//             <h3 className="text-2xl font-semibold font-kanit mb-6 text-gray-800">📸 รูปภาพเพิ่มเติม</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {activeGallery.map((src, i) => (
//                 <Image
//                     key={i}
//                     src={src}
//                     alt={`Van Gallery ${i + 1}`}
//                     width={400}
//                     height={300}
//                     className="rounded-lg object-cover w-full h-48"
//                 />
//                 ))}
//             </div>


//             </div>
//         </div>
//         )}
//       </div>
//     </section>
//   );
// }




"use client";
import { useState } from "react";
import Image from "next/image";
import { FaWindowClose } from "react-icons/fa";

type Van = {
  id: number;
  name: string;
  type: string;
  typeEn?: string;
  image: string;
  gallery: string[];
  seats: number;
  features: string[];    // TH
  featuresEn: string[];  // EN (same index as TH)
  description: string;   // TH
  descriptionEn: string; // EN
};

const vans: Van[] = [
  {
    id: 1,
    name: "Toyota Alphard",
    type: "Alphard",
    typeEn: "Alphard",
    image: "/images/van/alphard.jpg",
    gallery: [
      "/images/van/alphard1.jpg",
      "/images/van/alphard2.jpg",
      "/images/van/alphard3.jpg",
      "/images/van/alphard4.jpg",
    ],
    seats: 5,
    features: [
      "เบาะหนัง VIP พร้อมที่วางแก้ว",
      "แอร์ไมโครบัสเย็นทั่วคัน",
      "ทีวีใหญ่",
      "เครื่องเสียง Bluetooth",
      "USB/USB-C ทุกที่นั่ง",
      "Ambient Light",
      "ทำความสะอาดทุกเที่ยว",
      "ประกันภัยชั้น 1",
    ],
    featuresEn: [
      "VIP leather seats with cup holders",
      "Microbus A/C cools entire cabin",
      "Large TV",
      "Bluetooth audio system",
      "USB/USB-C at every seat",
      "Ambient lighting",
      "Cleaned after every trip",
      "First-class insurance",
    ],
    description:
      "Alphard VIP 4-5 ที่นั่ง สำหรับผู้โดยสารระดับพรีเมียม นั่งสบาย หรูหรา เป็นส่วนตัว",
    descriptionEn:
      "Alphard VIP with 4–5 seats for premium passengers — comfortable, luxurious, and private.",
  },
  {
    id: 2,
    name: "Toyota Commuter VIP",
    type: "Commuter VIP",
    typeEn: "Commuter VIP",
    image: "/images/van/commutervip.jpg",
    gallery: [
      "/images/van/commutervip1.jpg",
      "/images/van/commutervip2.jpg",
      "/images/van/commutervip3.jpg",
    ],
    seats: 9,
    features: [
      "เบาะ VIP 8–9 ที่นั่ง พร้อมที่วางแก้ว",
      "แอร์ไมโครบัสเย็นทั่วถึง",
      'ทีวี 24" รองรับบันเทิง',
      "เครื่องเสียงรอบคัน Bluetooth",
      "USB/USB-C ทุกจุด",
      "Ambient Light",
      "พื้นที่สัมภาระกว้าง",
      "ทำความสะอาดทุกเที่ยว",
      "ประกันภัยชั้น 1",
    ],
    featuresEn: [
      "VIP seats (8–9) with cup holders",
      "Microbus A/C cools entire cabin",
      '24" TV for entertainment',
      "Bluetooth surround sound",
      "USB/USB-C at all seats",
      "Ambient lighting",
      "Spacious luggage area",
      "Cleaned after every trip",
      "First-class insurance",
    ],
    description:
      "Commuter VIP 9 ที่นั่ง เหมาะสำหรับกลุ่มเดินทาง ครอบครัว หรือทีมงาน พร้อมสิ่งอำนวยความสะดวกครบ",
    descriptionEn:
      "Commuter VIP with 9 seats — ideal for travel groups, families, or teams, fully equipped for comfort.",
  },
];

export default function VanShowcase() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-white via-blue-50 to-white py-20 relative"
    >
      <div className="absolute inset-0 bg-[url('/images/van/bg_pattern.png')] bg-cover opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2
          className="text-center font-kanit text-4xl font-bold mb-12 text-gray-800"
          data-th="รถตู้ที่ให้บริการ"
          data-en="Available Vans"
        >
          รถตู้ที่ให้บริการ
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {vans.map((van) => (
            <div
              key={van.id}
              className="w-full max-w-sm flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer group"
              onClick={() => {
                setActiveGallery(van.gallery);
                setModalOpen(true);
              }}
            >
              <img
                src={van.image}
                alt={van.name}
                className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-6 flex flex-col gap-4 h-full">
                <h3
                  className="text-xl font-kanit font-semibold text-gray-900"
                  data-th={van.name}
                  data-en={van.name}
                >
                  {van.name}
                </h3>

                <p
                  className="text-gray-600 text-sm"
                  data-th={van.description}
                  data-en={van.descriptionEn}
                >
                  {van.description}
                </p>

                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li
                    className="font-medium"
                    data-th={`ที่นั่ง: ${van.seats} คน`}
                    data-en={`Seats: ${van.seats} people`}
                  >
                    ที่นั่ง: {van.seats} คน
                  </li>

                  {van.features.map((feature, i) => (
                    <li
                      key={i}
                      data-th={feature}
                      data-en={van.featuresEn[i] || feature}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center pt-4 mt-auto">
                  <span
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    data-th={van.type}
                    data-en={van.typeEn || van.type}
                  >
                    {van.type}
                  </span>
                  <span
                    className="text-blue-600 text-sm font-medium underline underline-offset-4"
                    data-th="ดูรูปเพิ่มเติม"
                    data-en="View more photos"
                  >
                    ดูรูปเพิ่มเติม
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && activeGallery && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 md:px-8 z-[999]"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 md:p-10 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl md:text-2xl"
                aria-label="Close"
                title="Close"
              >
                <FaWindowClose className="text-2xl text-gray-500 hover:text-black" />
              </button>

              <h3
                className="text-2xl font-semibold font-kanit mb-6 text-gray-800"
                data-th="📸 รูปภาพเพิ่มเติม"
                data-en="📸 More Photos"
              >
                📸 รูปภาพเพิ่มเติม
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeGallery.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Van Gallery ${i + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-48"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
