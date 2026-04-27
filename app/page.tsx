import Link from "next/link";

// Import dữ liệu động từ Decap CMS / Contentlayer
import { allProjects } from "contentlayer/generated";
import { allServices } from "contentlayer/generated";
import { allTeamMembers } from "contentlayer/generated";     // ← Sửa thành allTeamMembers
import { allCertificates } from "contentlayer/generated";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-3xl font-bold text-white bg-blue-700 w-11 h-11 rounded-2xl">⚡</div>
            <div className="text-3xl font-bold tracking-tighter text-blue-900">LAVIPCO</div>
          </div>
          <nav className="hidden gap-8 font-medium text-gray-700 md:flex">
            <Link href="#gioi-thieu" className="transition hover:text-orange-500">Giới thiệu</Link>
            <Link href="#linh-vuc" className="transition hover:text-orange-500">Lĩnh vực</Link>
            <Link href="#du-an" className="transition hover:text-orange-500">Dự án</Link>
            <Link href="#nhan-su" className="transition hover:text-orange-500">Nhân sự</Link>
            <Link href="#chung-chi" className="transition hover:text-orange-500">Chứng chỉ</Link>
          </nav>
          <a href="#lien-he" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-semibold transition shadow-lg">
            Liên hệ ngay
          </a>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="text-white bg-gradient-to-br from-blue-900 to-blue-700 py-28">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-none md:text-7xl">
              ÁNH SÁNG<br />
              <span className="text-orange-400">LÀM CHO CUỘC SỐNG</span><br />
              RỘNG RÃI HƠN
            </h1>
            <p className="text-xl text-blue-100">Công ty TNHH Kỹ Nghệ Lâm Việt Phát</p>
            <div className="flex gap-4">
              <Link href="#du-an" className="px-10 py-5 text-lg font-semibold text-blue-900 transition bg-white rounded-3xl hover:shadow-xl">
                Xem dự án tiêu biểu
              </Link>
              <Link href="#lien-he" className="px-10 py-5 text-lg font-semibold transition border-2 border-white rounded-3xl hover:bg-white/10">
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. DỰ ÁN TIÊU BIỂU - Động từ CMS */}
      <section id="du-an" className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Dự án tiêu biểu</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <div key={project._id} className="overflow-hidden transition border shadow-sm rounded-3xl hover:shadow-xl">
                {project.image && <img src={project.image} alt={project.title} className="object-cover w-full h-56" />}
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold">{project.title}</h3>
                  <p className="font-medium text-orange-500">{project.value}</p>
                  <p className="mt-2 text-sm text-gray-500">{project.client} • {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LĨNH VỰC HOẠT ĐỘNG - Động từ CMS */}
      <section id="linh-vuc" className="py-20 bg-gray-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Lĩnh vực hoạt động</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {allServices.map((service) => (
              <div key={service._id} className="p-8 bg-white shadow-sm rounded-3xl">
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NHÂN SỰ - Động từ CMS */}
      <section id="nhan-su" className="py-20 bg-white">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Nhân sự chủ chốt</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {allTeamMembers.map((person) => (
              <div key={person._id} className="text-center">
                {person.photo && (
                  <div className="w-32 h-32 mx-auto overflow-hidden border-4 border-white shadow-md rounded-2xl">
                    <img src={person.photo} alt={person.name} className="object-cover w-full h-full" />
                  </div>
                )}
                <h3 className="mt-6 font-semibold">{person.name}</h3>
                <p className="text-orange-500">{person.position}</p>
                <p className="text-sm text-gray-500">{person.specialty} • {person.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHỨNG CHỈ - Động từ CMS */}
      <section id="chung-chi" className="py-20 bg-gray-50">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Hồ sơ pháp lý & Chứng chỉ</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allCertificates.map((cert) => (
              <div key={cert._id} className="p-6 bg-white shadow-sm rounded-3xl">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500">Số hiệu: {cert.number}</p>
                <p className="text-sm text-gray-500">Ngày cấp: {cert.date}</p>
                {cert.image && <img src={cert.image} alt={cert.title} className="mt-4 rounded-2xl" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-gray-400 bg-gray-900">
        <div className="px-6 mx-auto text-sm text-center max-w-7xl">
          <p className="mb-2 text-xl font-semibold text-white">LAVIPCO</p>
          <p>© 2025 Công ty TNHH Kỹ Nghệ Lâm Việt Phát</p>
          <p className="mt-4">
            63/23A Liên khu 16-18, Phường Bình Trị Đông, Quận Bình Tân, TP.HCM<br />
            ĐT: 028 6683 0973 • Email: lavipco.co@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}