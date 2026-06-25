"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const suiteOptions = [
    { id: "suite-01", label: "Suite 01", description: "Sleeps max 2 Starting from R10 000 per night", image: "/assets/suits-1.jpg" },
    { id: "suite-02", label: "Suite 02", description: "Sleeps max 4 Starting from R10 680 per night", image: "/assets/suits-2.jpg" },
    { id: "suite-03", label: "Suite 03", description: "Sleeps max 2 Starting from R10 000 per night", image: "/assets/suits-1.jpg" },
    { id: "suite-04", label: "Suite 04", description: "Sleeps max 2 Starting from R10 000 per night", image: "/assets/suits-2.jpg" },
    { id: "suite-05", label: "Suite 05", description: "Sleeps max 2 Starting from R10 000 per night", image: "/assets/suits-1.jpg" },
    { id: "exclusive-use", label: "Exclusive Use", description: "Sleeps 10 POA", image: "/assets/suits-1.jpg" },
];

export default function EnquireForm() {
    const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
    const [imageTop, setImageTop] = useState<number>(0);
    const [selectedSuite, setSelectedSuite] = useState<string>(suiteOptions[0].id);
    const [adults, setAdults] = useState<number>(1);

    const rowRefs = useRef<Record<string, HTMLLabelElement | null>>({});
    const listRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = (id: string) => {
        const row = rowRefs.current[id];
        const list = listRef.current;
        if (row && list) {
            const top = row.offsetTop + row.offsetHeight / 2 - 80; 
            setImageTop(top);
        }
        setHoveredSuite(id);
    };

    const handleMouseLeave = () => {
        setHoveredSuite(null);
    };

    return (
        <section className="section enquire-form">
            <div className="container-fluid">
                <div className="enquire-form-outer-wrapper">
                    <div className="enquire-form-inner-wrapper">
                        <div className="enquire-form-inner-main">

                            {/* Heading group */}
                            <div className="enquire-form__heading-group-main">
                                <div className="enquire-form__heading-group">
                                    <div className="pre-heading">
                                        <span>Enquiry FORM</span>
                                    </div>
                                    <div className="title title-dark-olive">
                                        <h2 className="enquire-form__title">
                                            Your Garden Route Escape Awaits
                                        </h2>
                                    </div>
                                </div>
                                <div className="enquire-form__description-wrapper content content-dark-light">
                                    <p className="enquire-form__description">
                                        Each suite is a private retreat. Set above the Knysna Lagoon in the heart of the Garden Route.
                                    </p>
                                </div>
                            </div>

                            {/* Stay Type Selector */}
                            <form className="enquire-form__stay-type-form">
                                <div className="enquire-form__stay-type-section">

                                    <div className="enquire-form-label ">
                                        Choose Your Stay Type
                                    </div>

                                    <div className="enquire-form__stay-type-body">

                                        {/* Suite list — position:relative so image positions against it */}
                                        <div className="enquire-form__suite-list" ref={listRef}>
                                            {suiteOptions.map((suite) => {
                                                const isChecked = selectedSuite === suite.id;
                                                const isHovered = hoveredSuite === suite.id;
                                                return (
                                                    <label
                                                        key={suite.id}
                                                        htmlFor={suite.id}
                                                        ref={(el) => { rowRefs.current[suite.id] = el; }}
                                                        className={`enquire-form__option-label${isHovered ? " is-hovered" : ""}${isChecked ? " is-checked" : ""}`}
                                                        onMouseEnter={() => handleMouseEnter(suite.id)}
                                                        onMouseLeave={handleMouseLeave}
                                                    >
                                                        <div className="enquire-form__checkbox-wrapper">
                                                            <input
                                                                type="radio"
                                                                id={suite.id}
                                                                name="suite"
                                                                value={suite.id}
                                                                checked={isChecked}
                                                                onChange={() => setSelectedSuite(suite.id)}
                                                                className="enquire-form__checkbox"
                                                                aria-label={`Select ${suite.label}`}
                                                                required
                                                            />
                                                            <span className="enquire-form__checkbox-custom" aria-hidden="true" />
                                                        </div>
                                                        <div className="enquire-form__option-info">
                                                            <span className="enquire-form__option-name">{suite.label}</span>
                                                            <span className="enquire-form__option-desc">{suite.description}</span>
                                                        </div>
                                                    </label>
                                                );
                                            })}

                                            {/* Image floats inside the list, tracking row position */}
                                            <motion.div
                                                key={hoveredSuite}
                                                className="enquire-form__suite-image-wrapper"
                                                aria-hidden="true"
                                                style={{ top: imageTop }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                {(() => {
                                                    const suite = suiteOptions.find((s) => s.id === hoveredSuite);
                                                    return suite ? (
                                                        <div className="enquire-form__suite-image-inner">
                                                            <Image
                                                                src={suite.image}
                                                                alt={`Preview of ${suite.label}`}
                                                                width={210}
                                                                height={160}
                                                                className="enquire-form__suite-image"
                                                            />
                                                        </div>
                                                    ) : null;
                                                })()}
                                            </motion.div>
                                        </div>

                                    </div>
                                </div>
                                {/* Travel Details */}
                                <div className="enquire-form__section">
                                    <div className="enquire-form-label">
                                        <span>Travel Details</span>
                                    </div>
                                    <div className="enquire-form__fields-grid-group">
                                        <div className="enquire-form__fields-grid">
                                            <div className="enquire-form__field-group">
                                                <label htmlFor="arrival-date" className="enquire-form__field-label">
                                                    Arrival Date
                                                </label>
                                                <input
                                                    type="date"
                                                    id="arrival-date"
                                                    name="arrival-date"
                                                    className="enquire-form__input enquire-form__input--date"
                                                    aria-label="Arrival date"
                                                    required
                                                />
                                            </div>

                                            <div className="enquire-form__field-group">
                                                <label htmlFor="departure-date" className="enquire-form__field-label">
                                                    Departure Date
                                                </label>
                                                <input
                                                    type="date"
                                                    id="departure-date"
                                                    name="departure-date"
                                                    className="enquire-form__input enquire-form__input--date"
                                                    aria-label="Departure date"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Flexible dates checkbox — uses common checkbox classes */}
                                        <label htmlFor="flexible-dates" className="enquire-form__checkbox-inline-label">
                                            <div className="enquire-form__checkbox-wrapper">
                                                <input
                                                    type="checkbox"
                                                    id="flexible-dates"
                                                    name="flexible-dates"
                                                    className="enquire-form__checkbox"
                                                    aria-label="My dates are flexible"
                                                />
                                                <span className="enquire-form__checkbox-custom" aria-hidden="true" />
                                            </div>
                                            <span className="enquire-form__checkbox-inline-text">My dates are flexible</span>
                                        </label>
                                        <div className="enquire-form__fields-grid">
                                            <div className="enquire-form__field-group">
                                                <label htmlFor="num-adults" className="enquire-form__field-label">
                                                    Number of Adults (16yrs +)
                                                </label>
                                                <div className="enquire-form__counter">
                                                    <button
                                                        type="button"
                                                        aria-label="Decrease number of adults"
                                                        className="enquire-form__counter-btn"
                                                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="enquire-form__counter-value">{adults}</span>
                                                    <button
                                                        type="button"
                                                        aria-label="Increase number of adults"
                                                        className="enquire-form__counter-btn"
                                                        onClick={() => setAdults((prev) => prev + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="enquire-form__counter-note">*All guests have to be 16 years &amp; over</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Personal Details */}
                                <div className="enquire-form__section">
                                    <div className="enquire-form-label">
                                        <span>Personal Details</span>
                                    </div>
                                    <div className="enquire-form__fields-grid-group">
                                        <div className="enquire-form__fields-grid">
                                            <div className="enquire-form__field-group">
                                                <label htmlFor="first-name" className="enquire-form__field-label">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="first-name"
                                                    className="enquire-form__input"
                                                    aria-label="First name"
                                                    required
                                                />
                                            </div>

                                            <div className="enquire-form__field-group">
                                                <label htmlFor="last-name" className="enquire-form__field-label">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="last-name"
                                                    className="enquire-form__input"
                                                    aria-label="Last name"
                                                    required
                                                />
                                            </div>

                                            <div className="enquire-form__field-group">
                                                <label htmlFor="email" className="enquire-form__field-label">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="enquire-form__input"
                                                    aria-label="Email address"
                                                    required
                                                />
                                            </div>

                                            <div className="enquire-form__field-group">
                                                <label htmlFor="phone" className="enquire-form__field-label">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="enquire-form__input"
                                                    aria-label="Phone number"
                                                    required
                                                />
                                            </div>
                                            <div className="enquire-form__field-group">
                                                <label htmlFor="country" className="enquire-form__field-label">
                                                    Country of Residence
                                                </label>
                                                <div className="enquire-form__select-wrapper">
                                                    <select id="country" name="country" className="enquire-form__select" defaultValue="" required>
                                                        <option value="" disabled></option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="FR">France</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="enquiry-form-sublit-wrapper">
                                    <button className="cta-link" type="submit">
                                    Send Enquiry
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}