// Photo configuration for Aegean Lotus website

const EXT = "jpg";

export function photoUrl(filename: string) {
  return `/images/${filename}`;
}

// Hero carousel images
export const heroPhotos = [
  { src: `/images/hero-sea-view.${EXT}`, alt: "Bedroom with panoramic sea view" },
  { src: `/images/hero-bedroom.${EXT}`, alt: "Modern bedroom with living area" },
  { src: `/images/hero-balcony.${EXT}`, alt: "Balcony overlooking the Aegean Sea" },
  { src: `/images/hero-heraklion.${EXT}`, alt: "Heraklion coastline aerial view" },
];

// About section
export const aboutPhoto = {
  src: `/images/about-apartment.${EXT}`,
  alt: "Living area with sofa and sea view",
};

// Apartment wide shot (parallax)
export const apartmentWidePhoto = {
  src: `/images/apartment-wide.${EXT}`,
  alt: "Wardrobe and kitchen area",
};

// Booking background
export const bookingBgPhoto = {
  src: `/images/booking-bg.${EXT}`,
  alt: "Wine and cheese on balcony with sea view",
};

// Gallery - all property photos
export const galleryPhotos = [
  { src: `/images/gallery-1.${EXT}`, alt: "Bedroom headboard with sea art" },
  { src: `/images/gallery-2.${EXT}`, alt: "Modern bathroom with walk-in shower" },
  { src: `/images/gallery-3.${EXT}`, alt: "Desk area with sea view" },
  { src: `/images/gallery-4.${EXT}`, alt: "Bedside through glass divider" },
  { src: `/images/gallery-5.${EXT}`, alt: "Kitchen with modern appliances" },
  { src: `/images/gallery-6.${EXT}`, alt: "Coffee and moka pot on desk" },
  { src: `/images/gallery-7.${EXT}`, alt: "Bathroom vanity with mirror" },
  { src: `/images/gallery-8.${EXT}`, alt: "Bedside espresso and dessert" },
  { src: `/images/gallery-9.${EXT}`, alt: "Kitchen with pull-out shelf" },
  { src: `/images/gallery-10.${EXT}`, alt: "Shelf detail with travel book" },
  { src: `/images/gallery-11.${EXT}`, alt: "Kitchen wall art and oven" },
  { src: `/images/gallery-12.${EXT}`, alt: "Aegean Lotus building entrance" },
  { src: `/images/gallery-13.${EXT}`, alt: "Heraklion waterfront from the sea" },
];
