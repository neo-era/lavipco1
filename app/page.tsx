import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">⚡</div>
            <div>
              <span className="text-2xl font-bold text-blue-900">LAVIPCO</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="#gioi-thieu" className="hover:text-blue-600">Giới thiệu</Link>
            <Link href="#linh-vuc" className="hover:text-blue-600">Lĩnh vực</Link>
            <Link href="#du-an" className="hover:text-blue-600">Dự án</Link>
            <Link href="#nhan-su" className="hover:text-blue-600">Nhân sự</Link>
            <Link href="#chung-chi" className="hover:text-blue-600">Chứng chỉ</Link>
          </nav>
          <a href="#lien-he" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Liên hệ ngay
          </a>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              ÁNH SÁNG –<br />
              <span className="text-orange-400">LÀM CHO CUỘC SỐNG</span><br />
              RỘNG RÃI HƠN
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Công ty TNHH Kỹ Nghệ Lâm Việt Phát<br />
              Chuyên thi công chiếu sáng công cộng, tín hiệu giao thông &amp; hạ tầng kỹ thuật
            </p>
            <div className="mt-10 flex gap-4">
              <a href="#du-an" className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition">
                Xem dự án tiêu biểu
              </a>
              <a href="#lien-he" className="border-2 border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                Liên hệ ngay
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
              <div className="text-6xl mb-4">🌟</div>
              <p className="text-2xl font-light">Hơn 10 năm đồng hành cùng hạ tầng Việt Nam</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN CÒN LẠI CÓ THỂ THÊM TIẾP THEO */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Đang tải dữ liệu từ Admin...</h2>
        <p className="text-center text-gray-500">Bạn đã kết nối thành công Decap CMS. Nội dung sẽ tự động hiển thị khi bạn thêm dữ liệu trong Admin.</p>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Công ty TNHH Kỹ Nghệ Lâm Việt Phát • LAVIPCO<br />
            63/23A Liên khu 16-18, Bình Trị Đông, Bình Tân, Tp.HCM
          </p>
        </div>
      </footer>
    </>
  );
}