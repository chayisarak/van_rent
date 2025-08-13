app/page.tsx (Basic Version)

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">บริการรถตู้ VIP พร้อมคนขับ</h1>
        <p className="text-lg text-black-600 mb-6">
          Private Trip | Exclusive Ride | เหมาทริปแบบส่วนตัว
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="tel:0123456789"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            โทรเลย
          </a>
          <a
            href="https://line.me/ti/p/yourlineid"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
            target="_blank"
          >
            แชทผ่าน LINE
          </a>
        </div>
      </section>
    </main>
  );
}



