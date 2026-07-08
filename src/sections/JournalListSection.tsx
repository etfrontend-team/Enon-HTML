import Image from "next/image";
import Link from "next/link";


export default function JournalListSection() {

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
        {
            id: "4",
            date: "10 May 2026",
            title: "What's Growing This Spring",
            image: "/assets/journal-1.jpg",
            href: "/journal/whats-growing-this-spring",
        },
        {
            id: "5",
            date: "20 May 2026",
            title: "Knysna Oyster Season Guide",
            image: "/assets/journal-2.jpg",
            href: "/journal/knysna-oyster-season-guide",
        },
        {
            id: "6",
            date: "10 June 2026",
            title: "Whale Watching in the Garden Route",
            image: "/assets/journal-3.jpg",
            href: "/journal/whale-watching-in-the-garden-route",
        },
    ];



    return (
        <section className="journal-list-section journal-section general-padding">
            <div className="container-fluid-lg">
                <div className="journal-section-header">
                    <div className="pre-heading">
                        <span>Journal</span>
                    </div>
                    <div className="title title-dark-olive">
                        <h2>Follow Our Story</h2>
                    </div>
                </div>
                <div className="journal-list">
                    {
                        JOURNALS.map((journal) => (
                            <Link
                                key={journal.href}
                                href={journal.href}
                                aria-label={`Read journal: ${journal.title}`}
                                className="journal-section-card h-full block col-span-12 576:col-span-6 768:col-span-4"
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
                                    <div className="mt-34">
                                        <Link
                                            href="/"
                                            aria-label="Read all journals"
                                            className="cta-link"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                    <div className="col-span-12 flex justify-center items-center">
                        <button
                            type="button"
                            aria-label="Load more"
                            className="btn btn-dark"
                            onClick={() => { }}
                        >
                            <span className="label-up">Load More</span>
                            <span className="label-up">Load More</span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}