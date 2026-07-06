import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const JOURNALS = [
  {
    id: "1",
    date: "10 May 2026",
    title: "What's Growing This Spring",
    image: "/assets/journal-1.jpg",
    href: "/journal/whats-growing-this-spring",
  },
  {
    id: "2",
    date: "20 May 2026",
    title: "Knysna Oyster Season Guide",
    image: "/assets/journal-2.jpg",
    href: "/journal/knysna-oyster-season-guide",
  },
  {
    id: "3",
    date: "10 June 2026",
    title: "Whale Watching in the Garden Route",
    image: "/assets/journal-3.jpg",
    href: "/journal/whale-watching-in-the-garden-route",
  },
];

export default function JournalSection() {
  return (
    <section className="journal-section general-padding">
      <div className="container-fluid-lg">
        <div className="journal-section-header">
          <div className="pre-heading">
            <span>Journal</span>
          </div>
          <div className="title title-dark-olive">
            <h2>Follow Our Story</h2>
          </div>
          <Link
            href="/journal"
            aria-label="Read all journals"
            className="cta-link"
          >
            Read all journals
          </Link>
        </div>
      </div>

      <div className="journal-section-track">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={25}
          grabCursor
          loop={false}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            426: { slidesPerView: 1.302 },
            641: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".journal-section-pagination",
            type: "progressbar",
          }}
          className="journal-section-swiper"
          aria-label="Journal articles"
        >
          {JOURNALS.map((journal) => (
            <SwiperSlide key={journal.id} className="journal-section-slide">
              <Link
                href={journal.href}
                aria-label={`Read journal: ${journal.title}`}
                className="journal-section-card h-full block"
              >
                <div className="journal-section-image-wrap">
                  <Image
                    fill
                    sizes="(max-width: 425px) 83vw, (max-width: 640px) 76vw, (max-width: 1024px) 45vw, 33vw"
                    src={journal.image}
                    alt={journal.title}
                    className="journal-section-image"
                  />
                </div>
                <div className="journal-section-card-body">
                  <span className="journal-section-date">{journal.date}</span>
                  <div className="title title-dark-olive">
                    <h6 className="journal-section-title">{journal.title}</h6>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="journal-section-pagination custom-pagination-bar" />
      </div>
    </section>
  );
}
