import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const journalPosts = [
  {
    id: "1",
    image: "/images/journal-lemons.jpg",
    date: "10 May 2026",
    title: "What's growing this spring",
    href: "/journal/whats-growing-this-spring",
  },
  {
    id: "2",
    image: "/images/journal-oysters.jpg",
    date: "20 May 2026",
    title: "Knysna Oyster season guide",
    href: "/journal/knysna-oyster-season-guide",
  },
  {
    id: "3",
    image: "/images/journal-whale.jpg",
    date: "10 June 2026",
    title: "Whale watching in the garden route",
    href: "/journal/whale-watching-garden-route",
  },
];

export default function JournalSection() {
  return (
    <section className="journal-section general-padding" id="journal">
      <div className="container-fluid-lg">
        <div className="journal-header">
          <div className="journal-heading-group">
            <div className="pre-heading">
              <span>Journal</span>
            </div>
            <div className="title title-dark-olive">
              <h2>Follow our Story</h2>
            </div>
          </div>
          <Link href="/journal" aria-label="Read all journals" className="cta-link">
            Read all journals
          </Link>
        </div>
      </div>

      <div className="journal-cards-wrap">
        <Swiper
          loop={false}
          speed={800}
          spaceBetween={25}
          slidesPerView={3}
          slidesOffsetBefore={106}
          slidesOffsetAfter={106}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              slidesOffsetBefore: 20,
              slidesOffsetAfter: 0,
              spaceBetween: 20,
            },
            426: {
              slidesPerView: "auto",
              slidesOffsetBefore: 35,
              slidesOffsetAfter: 0,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 60,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 3,
              slidesOffsetBefore: 106,
              slidesOffsetAfter: 106,
              spaceBetween: 25,
            },
          }}
          modules={[]}
          aria-label="Journal posts"
          className="journal-swiper"
        >
          {journalPosts.map((post) => (
            <SwiperSlide key={post.id} className="journal-slide">
              <Link
                href={post.href}
                aria-label={`Read journal post: ${post.title}`}
                className="journal-card"
              >
                <div className="journal-card-image-wrap">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={393}
                    height={656}
                    className="journal-card-image"
                  />
                </div>
                <div className="journal-card-content">
                  <div className="journal-card-date">
                    <p>{post.date}</p>
                  </div>
                  <div className="journal-card-title">
                    <p>{post.title}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
