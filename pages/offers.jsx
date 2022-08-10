import Image from "next/image";
import styles from "../styles/Offers.module.css";
import Link from "next/link";
import Special from "../components/Special";

const Offers = () => {
  return (
    <div id="offers">
      <div className={styles.sectiontestimonials} id="testimonials">
        <div className={styles.testimonialscontainer}>
          <span className={styles.subheading}>Testimonials</span>
          <h2 className={styles.headingsecondary}>
            Once you try it, you cant go back
          </h2>

          <div className={styles.testimonials}>
            <figure className={styles.testimonial}>
              <img
                className={styles.testimonialimg}
                alt="Photo of customer Dave Bryson"
                src="img/customers/dave.jpg"
              />
              <blockquote className={styles.testimonialtext}>
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className={styles.testimonialname}>&mdash; Dave Bryson</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                className={styles.testimonialimg}
                alt="Photo of customer Ben Hadley"
                src="img/customers/ben.jpg"
              />
              <blockquote className={styles.testimonialtext}>
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. Its amazing not to worry about food anymore!
              </blockquote>
              <p className={styles.testimonialname}>&mdash; Ben Hadley</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                className={styles.testimonialimg}
                alt="Photo of customer Steve Miller"
                src="img/customers/steve.jpg"
              />
              <blockquote className={styles.testimonialtext}>
                Omnifood is a life saver! I just started a company, so theres no
                time for cooking. I couldnt live without my daily meals now!
              </blockquote>
              <p className={styles.testimonialname}>&mdash; Steve Miller</p>
            </figure>

            <figure className={styles.testimonial}>
              <img
                className={styles.testimonialimg}
                alt="Photo of customer Hannah Smith"
                src="img/cake1.jpg"
              />
              <blockquote className={styles.testimonialtext}>
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className={styles.testimonialname}>&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div className={styles.gallery}>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}></figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/cake1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/gallery/gallery-10.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/gallery/gallery-11.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className={styles.galleryitem}>
            <img
              src="img/gallery/gallery-12.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Offers;
