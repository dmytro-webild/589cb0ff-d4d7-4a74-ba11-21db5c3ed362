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
          name: "Experience",          id: "experience"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Gallery",          id: "gallery"},
        {
          name: "Reviews",          id: "reviews"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="MOAI"
      button={{
        text: "Reserve Table",        href: "#reserve"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="MOAI KITCHEN"
      description="Where Dining Becomes An Experience. Luxury global dining inspired by atmosphere, flavour and unforgettable moments."
      buttons={[
        {
          text: "Reserve Table",          href: "#reserve"},
        {
          text: "Explore Menu",          href: "#menu"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/ozote-steam-applied-lamb-cooked-dough_114579-2134.jpg",          imageAlt: "Cinematic interior view"},
        {
          id: "2",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636816075-uafbsnel.png",          imageAlt: "Signature craft cocktails"},
        {
          id: "3",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636796918-j9qxd5jn.png",          imageAlt: "Exotic stone sculptures"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sushi-green-plate_23-2149013622.jpg",          imageAlt: "Fusion culinary creations"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-decorative-heart-books-cozy-things-blurred-background-with-bokeh-concept-valentine-s-day_169016-9688.jpg",          imageAlt: "Unforgettable family moments"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/tree-pot-decoration-table_1339-4874.jpg",          imageAlt: "Water garden stream feature"},
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "4.6 Star Dining",        "3000+ Guests Served",        "Luxury Experience",        "Indoor Seating",        "Outdoor Seating",        "Signature Cocktails",        "Global Cuisine"]}
      title="Trusted by Thousands"
      description="Delivering exceptional luxury experiences daily."
    />
  </div>

  <div id="experience" data-section="experience">
      <TextAbout
      useInvertedBackground={false}
      title="Not Just A Restaurant, But An Experience"
      buttons={[
        {
          text: "View Gallery",          href: "#gallery"},
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
          id: "m1",          name: "Smoked Paprika Chicken",          price: "Signature",          variant: "Gourmet",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779635955604-oqr0p5i8.png"},
        {
          id: "m2",          name: "Prawns In Hot Yellow Curry ",          price: "Appetizer",          variant: "Comfort ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636506304-4ow9fhrs.png"},
        {
          id: "m3",          name: "Farm Fresh Pizza",          price: "Specialty",          variant: "Balanced",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636357324-doq8bnyh.png"},
        {
          id: "m4",          name: "Deep Scarlet ",          price: "Signature",          variant: "Modern Twist",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636602280-batucq4d.png"},
        {
          id: "m5",          name: "Signature Cocktails",          price: "Bar",          variant: "Crafted",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636699645-chfseejm.png"},
        {
          id: "m6",          name: "Deconstructed Tiramisu",          price: "Dessert",          variant: "Rich",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cake-slice-with-cream-fresh-apricots-inside-pink-plate-light-desk_140725-20416.jpg"},
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
          title: "Exceptional Service",          description: "Friendly recommendations and attentive staff.",          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636936658-paqillip.png"},
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779636908544-v1q25wc7.png"},
        },
        {
          title: "Memorable Atmosphere",          description: "Luxury meets comfort in every corner.",          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637163422-ajwovxol.png"},
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637194950-us4tauin.png"},
        },
        {
          title: "Global Flavours",          description: "Asian, Italian and contemporary dishes.",          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637232349-wk4rx2jg.png"},
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637267460-n8luawoq.png"},
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
          id: "t1",          name: "Sarah Johnson",          handle: "@sarahj",          testimonial: "Absolutely amazing. Stylish ambience, outstanding food and memorable experience.",          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg"},
        {
          id: "t2",          name: "Michael Chen",          handle: "@mchen",          testimonial: "The cocktails were unique and amazing. Definitely coming back.",          imageSrc: "http://img.b2bpic.net/free-photo/watching-funny-video-internet-with-coworkers-cafe-terrace-with-tasty-food_8353-10265.jpg"},
        {
          id: "t3",          name: "Emily Rodriguez",          handle: "@erod",          testimonial: "Perfect for family evenings and special memories. Truly unique space.",          imageSrc: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg"},
        {
          id: "t4",          name: "David Kim",          handle: "@dkim",          testimonial: "Best ambience in the city. The water streams are mesmerizing.",          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg"},
        {
          id: "t5",          name: "Alex Smith",          handle: "@alexs",          testimonial: "Exceptional service and the menu is simply world class.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5625.jpg"},
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
          id: "g1",          value: "Deep",          title: "Flavour Dishes ",          description: "A Culinary experience",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637508301-adcrp0c6.png"},
        {
          id: "g2",          value: "Craft",          title: "Drinks",          description: "Artisan cocktails.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637823490-x3d5mpz8.png"},
        {
          id: "g3",          value: "Exotic",          title: "Ambience",          description: "Island inspired architecture.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EAqaBeXcSKYiSGd9lfaxim6rEK/uploaded-1779637958947-cy76u023.png"},
      ]}
      title="The Moai Aesthetic"
      description="Visual highlights of our unique space."
    />
  </div>

  <div id="reserve" data-section="reserve">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
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
        {
          title: "Navigation",          items: [
            {
              label: "Experience",              href: "#experience"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Reservations",              href: "#reserve"},
          ],
        },
        {
          title: "Follow Us",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Twitter",              href: "#"},
          ],
        },
        {
          title: "Location",          items: [
            {
              label: "Financial District",              href: "#"},
            {
              label: "Hyderabad",              href: "#"},
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
