import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-3xl">⚡</div>
            <div className="text-3xl font-bold tracking-tighter text-blue-900">LAVIPCO</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="#gioi-thieu" className="hover:text-orange-500 transition">Giới thiệu</Link>
            <Link href="#linh-vuc" className="hover:text-orange-500 transition">Lĩnh vực</Link>
            <Link href="#du-an" className="hover:text-orange-500 transition">Dự án</Link>
            <Link href="#nhan-su" className="hover:text-orange-500 transition">Nhân sự</Link>
            <Link href="#chung-chi" className="hover:text-orange-500 transition">Chứng chỉ</Link>
          </nav>
          <a href="#lien-he" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-semibold transition">
            Liên hệ ngay
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-none">
                ÁNH SÁNG<br />
                <span className="text-orange-400">LÀM CHO CUỘC SỐNG</span><br />
                RỘNG RÃI HƠN
              </h1>
              <p className="mt-8 text-xl text-blue-100">
                Công ty TNHH Kỹ Nghệ Lâm Việt Phát<br />
                Chuyên thi công chiếu sáng, tín hiệu giao thông &amp; hạ tầng kỹ thuật
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#du-an" className="bg-white text-blue-900 px-10 py-5 rounded-3xl font-semibold text-lg hover:shadow-xl transition">
                  Xem dự án tiêu biểu
                </Link>
                <Link href="#lien-he" className="border-2 border-white px-10 py-5 rounded-3xl font-semibold text-lg hover:bg-white/10 transition">
                  Liên hệ tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NỘI DUNG TỪ CMS SẼ HIỂN THỊ Ở ĐÂY */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Bạn có thể thêm các section động từ Decap CMS sau */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Website đang kết nối với Decap CMS</h2>
          <p className="text-gray-600">Dữ liệu Dự án, Lĩnh vực, Nhân sự, Chứng chỉ sẽ tự động hiển thị khi bạn thêm nội dung trong Admin.</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>© 2025 Công ty TNHH Kỹ Nghệ Lâm Việt Phát (LAVIPCO)</p>
          <p className="mt-2">
            63/23A Liên khu 16-18, Phường Bình Trị Đông, Quận Bình Tân, TP.HCM<br />
            ĐT: 028 6683 0973 • Email: lavipco.co@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}