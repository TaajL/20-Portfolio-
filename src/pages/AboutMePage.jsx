import TaajPhoto from "../img/ProfessionalPhoto.jpg"
export default function AboutMePage() {
    return (
      <section>
        <h1>Meet Taaj</h1>
        <figure>
          <img src={TaajPhoto} alt="A picture of Taaj" />
          <figcaption>A picture of Taaj</figcaption>
        </figure>
        <p>Tech is integral to my life, driving both my professional and personal growth. I’m drawn to the digital world, driven by an innate curiosity to understand how things work and resolve the issues that arise. I enjoy diving into the intricacies of coding, always striving to perfect my creations.</p>
        <p>I hold a degree in Business Marketing from Eastern Michigan University and am currently enrolled in Michigan State University's Coding Bootcamp. Here, I am mastering the art of building webpages from scratch and debugging complex issues. This site is a showcase of my most proud accomplishments and the work I've created.</p>
      </section>
    );
  }