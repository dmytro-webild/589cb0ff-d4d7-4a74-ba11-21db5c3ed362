"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Experience",
          id: "experience",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MOAI"
      button={{
        text: "Reserve Table",
        href: "#reserve",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="MOAI KITCHEN"
      description="Where Dining Becomes An Experience. Luxury global dining inspired by atmosphere, flavour and unforgettable moments."
      buttons={[
        {
          text: "Reserve Table",
          href: "#reserve",
        },
        {
          text: "Explore Menu",
          href: "#menu",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/ozote-steam-applied-lamb-cooked-dough_114579-2134.jpg?_wi=1",
          imageAlt: "Cinematic interior view",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bartender-preparing-drink_23-2150346964.jpg?_wi=1",
          imageAlt: "Signature craft cocktails",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/life-style_1122-1851.jpg?_wi=1",
          imageAlt: "Exotic stone sculptures",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sushi-green-plate_23-2149013622.jpg",
          imageAlt: "Fusion culinary creations",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-decorative-heart-books-cozy-things-blurred-background-with-bokeh-concept-valentine-s-day_169016-9688.jpg",
          imageAlt: "Unforgettable family moments",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/tree-pot-decoration-table_1339-4874.jpg",
          imageAlt: "Water garden stream feature",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "4.6 Star Dining",
        "3000+ Guests Served",
        "Luxury Experience",
        "Indoor Seating",
        "Outdoor Seating",
        "Signature Cocktails",
        "Global Cuisine",
      ]}
      title="Trusted by Thousands"
      description="Delivering exceptional luxury experiences daily."
    />
  </div>

  <div id="experience" data-section="experience">
      <TextAbout
      useInvertedBackground={false}
      title="Not Just A Restaurant"
      buttons={[
        {
          text: "View Gallery",
          href: "#gallery",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "m1",
          name: "Smoked Paprika Chicken",
          price: "Signature",
          variant: "Gourmet",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-tasty-dish-with-bacon-beef-white-plate_181624-20789.jpg",
        },
        {
          id: "m2",
          name: "Money Bag Wontons",
          price: "Appetizer",
          variant: "Crispy",
          imageSrc: "http://img.b2bpic.net/free-photo/seared-scallops-with-pea-puree_23-2151942386.jpg",
        },
        {
          id: "m3",
          name: "Asparagus Cream Cheese Sushi",
          price: "Specialty",
          variant: "Balanced",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-fish-selection-it_140725-4418.jpg",
        },
        {
          id: "m4",
          name: "Adana Kebab",
          price: "Signature",
          variant: "Modern Twist",
          imageSrc: "http://img.b2bpic.net/free-photo/cooked-meat-veggies-kebab-black-background_23-2148651057.jpg",
        },
        {
          id: "m5",
          name: "Signature Cocktails",
          price: "Bar",
          variant: "Crafted",
          imageSrc: "http://img.b2bpic.net/free-photo/bar-tender-sprinkles-golden-glitter-into-cocktail-champagne-glass_141793-2004.jpg",
        },
        {
          id: "m6",
          name: "Deconstructed Tiramisu",
          price: "Dessert",
          variant: "Rich",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cake-slice-with-cream-fresh-apricots-inside-pink-plate-light-desk_140725-20416.jpg",
        },
      ]}
      title="Signature Menu Showcase"
      description="Crafted flavours for unforgettable evenings."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Exceptional Service",
          description: "Friendly recommendations and attentive staff.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-water-stream-middle-green-trees-forest_181624-14572.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/profiteroles-chocolate-sauce-inside-white-plate_114579-2410.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/ozote-steam-applied-lamb-cooked-dough_114579-2134.jpg?_wi=2",
          imageAlt: "luxury restaurant immersive interior",
        },
        {
          title: "Memorable Atmosphere",
          description: "Luxury meets comfort in every corner.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/two-men-cafe_23-2147775893.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/restaurant-luxury-interior-design-dark-lightning_114579-2492.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bartender-preparing-drink_23-2150346964.jpg?_wi=2",
          imageAlt: "luxury restaurant immersive interior",
        },
        {
          title: "Global Flavours",
          description: "Asian, Italian and contemporary dishes.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/digital-lavender-style-interior-design_23-2151561232.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/wild-stream-forest_23-2147670098.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/life-style_1122-1851.jpg?_wi=2",
          imageAlt: "luxury restaurant immersive interior",
        },
      ]}
      showStepNumbers={false}
      title="Why Guests Return"
      description="People remember feelings, not just menus."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          handle: "@sarahj",
          testimonial: "Absolutely amazing. Stylish ambience, outstanding food and memorable experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg",
        },
        {
          id: "t2",
          name: "Michael Chen",
          handle: "@mchen",
          testimonial: "The cocktails were unique and amazing. Definitely coming back.",
          imageSrc: "http://img.b2bpic.net/free-photo/watching-funny-video-internet-with-coworkers-cafe-terrace-with-tasty-food_8353-10265.jpg",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          handle: "@erod",
          testimonial: "Perfect for family evenings and special memories. Truly unique space.",
          imageSrc: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          handle: "@dkim",
          testimonial: "Best ambience in the city. The water streams are mesmerizing.",
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg",
        },
        {
          id: "t5",
          name: "Alex Smith",
          handle: "@alexs",
          testimonial: "Exceptional service and the menu is simply world class.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5625.jpg",
        },
      ]}
      title="What Guests Say"
      description="Perfect for special memories and evenings."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "g1",
          value: "Luxury",
          title: "Atmosphere",
          description: "Designed for conversations.",
          imageSrc: "http://img.b2bpic.net/free-photo/yellow-color-cocktail-with-apple-slice_140725-398.jpg",
        },
        {
          id: "g2",
          value: "Craft",
          title: "Drinks",
          description: "Artisan cocktails.",
          imageSrc: "http://img.b2bpic.net/free-photo/water-fountain-village-with-stork-ornament_1268-15687.jpg",
        },
        {
          id: "g3",
          value: "Exotic",
          title: "Design",
          description: "Island inspired architecture.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488544.jpg",
        },
      ]}
      title="The Moai Aesthetic"
      description="Visual highlights of our unique space."
    />
  </div>

  <div id="reserve" data-section="reserve">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Reserve"
      title="Your Table Is Waiting"
      description="Reserve your experience at Moai Kitchen."
      imageSrc="http://img.b2bpic.net/free-photo/front-view-delicious-thanksgiving-meal_23-2148629542.jpg"
      mediaAnimation="slide-up"
      buttonText="Reserve Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="MOAI"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Experience",
              href: "#experience",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reservations",
              href: "#reserve",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "Financial District",
              href: "#",
            },
            {
              label: "Hyderabad",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 MOAI Kitchen. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
