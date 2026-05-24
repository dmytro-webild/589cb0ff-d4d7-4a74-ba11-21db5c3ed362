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
        { name: "Experience", id: "experience" },
        { name: "Menu", id: "menu" },
        { name: "Gallery", id: "gallery" },
        { name: "Reviews", id: "reviews" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MOAI"
      button={{ text: "Reserve Table", href: "#reserve" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "rotated-rays-animated" }}
      title="MOAI KITCHEN"
      description="Where Dining Becomes An Experience. Luxury global dining inspired by atmosphere, flavour and unforgettable moments."
      buttons={[
        { text: "Reserve Table", href: "#reserve" },
        { text: "Explore Menu", href: "#menu" },
      ]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/ozote-steam-applied-lamb-cooked-dough_114579-2134.jpg", imageAlt: "Cinematic interior view" },
        { id: "2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636816075-uafbsnel.png", imageAlt: "Signature craft cocktails" },
        { id: "3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779638119230-ins1tr7c.png", imageAlt: "Exotic stone sculptures" },
        { id: "4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779638471997-jptjljiw.png", imageAlt: "Fusion culinary creations" },
        { id: "5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779638731199-guyo2h4g.png", imageAlt: "Unforgettable family moments" },
        { id: "6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779638595260-0to7tair.png", imageAlt: "Water garden stream feature" },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={["4.6 Star Dining", "3000+ Guests Served", "Luxury Experience", "Indoor Seating", "Outdoor Seating", "Signature Cocktails", "Global Cuisine"]}
      title="Trusted by Thousands"
      description="Delivering exceptional luxury experiences daily."
    />
  </div>

  <div id="experience" data-section="experience" style={{ background: "url('https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779643521235-dark-walnut-slat.jpg'), linear-gradient(to bottom, var(--card), var(--background))", backgroundSize: "cover", backgroundPosition: "center" }}>
      <TextAbout
      useInvertedBackground={false}
      title="Not Just A Restaurant, But An Experience"
      buttons={[{ text: "View Gallery", href: "#gallery" }]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        { id: "m1", name: "Smoked Paprika Chicken", price: "Signature", variant: "Gourmet", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779635955604-oqr0p5i8.png" },
        { id: "m2", name: "Prawns In Hot Yellow Curry ", price: "Appetizer", variant: "Comfort ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636506304-4ow9fhrs.png" },
        { id: "m3", name: "Farm Fresh Pizza", price: "Specialty", variant: "Balanced", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636357324-doq8bnyh.png" },
        { id: "m4", name: "Deep Scarlet ", price: "Signature", variant: "Modern Twist", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636602280-batucq4d.png" },
        { id: "m5", name: "Maamoul Cheesecake", price: "Sushi", variant: "Crafted", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636699645-chfseejm.png" },
        { id: "m6", name: "Kappa Maki Roll ", price: "Sushi", variant: "Rich", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779639019388-mty35g11.png" },
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
        { title: "Exceptional Service", description: "Friendly recommendations and attentive staff.", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636936658-paqillip.png" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636908544-v1q25wc7.png" } },
        { title: "Memorable Atmosphere", description: "Luxury meets comfort in every corner.", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637163422-ajwovxol.png" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637194950-us4tauin.png" } },
        { title: "Global Flavours", description: "Asian, Italian and contemporary dishes.", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637232349-wk4rx2jg.png" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637267460-n8luawoq.png" } },
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
        { id: "t1", name: "Shilpa C ", handle: "@shilpa", testimonial: "Absolutely amazing. Stylish ambience, outstanding food and memorable experience.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779641922180-ddgcu2pn.png" },
        { id: "t2", name: "Lydia Grace ", handle: "@lydia", testimonial: "The cocktails were unique and amazing. Definitely coming back.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779642073514-atngwzoi.png" },
        { id: "t3", name: "Charith Kumar ", handle: "@charith", testimonial: "Perfect for family evenings and special memories. Truly unique space.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779639663903-afvany5k.png" },
        { id: "t4", name: "Sandeep Reddy ", handle: "@sandeep", testimonial: "Best ambience in the city. The water streams are amazing.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779642088153-kr026via.png" },
        { id: "t5", name: "Sneha P ", handle: "@sneha", testimonial: "Exceptional service and the menu is simply world class.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779641974207-0lbpzqs6.png" },
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
        { id: "g1", value: "Deep", title: "Flavour Dishes ", description: "A Culinary experience", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637508301-adcrp0c6.png" },
        { id: "g2", value: "Craft", title: "Drinks", description: "Artisan cocktails.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637823490-x3d5mpz8.png" },
        { id: "g3", value: "Exotic", title: "Ambience", description: "Island inspired architecture.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637958947-cy76u023.png" },
      ]}
      title="The Moai Aesthetic"
      description="Visual highlights of our unique space."
    />
  </div>

  <div id="reserve" data-section="reserve" style={{ backgroundImage: "url('https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779644023451-dark-walnut-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Reserve"
      title="Your Table Is Waiting For You"
      description="Reserve your experience at Moai Kitchen."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779634273331-ahw8s7b0.png"
      mediaAnimation="slide-up"
      buttonText="Reserve Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="MOAI"
      columns={[
        { title: "Navigation", items: [{ label: "Experience", href: "#experience" }, { label: "Menu", href: "#menu" }, { label: "Reservations", href: "#reserve" }] },
        { title: "Follow Us", items: [{ label: "Instagram", href: "#" }, { label: "Twitter", href: "#" }] },
        { title: "Location", items: [{ label: "Financial District", href: "#" }, { label: "Hyderabad", href: "#" }] },
      ]}
      copyrightText="© 2024 MOAI Kitchen. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}