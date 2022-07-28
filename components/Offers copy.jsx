import Image from "next/image";
import styles from "../styles/Offers.module.css";
import Link from "next/link";

const Hotsale = () => {
  return (
    <div className={styles.container}>
    <section className="featured">
        <div className="container">
            <div className="row">
                <div className="col-md-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                    <div className="title">
                        <h3 className="title-primary">Pistachio Pudding Cake</h3>
                        <h2 className="title-blue">THE BEST OF BAKER'S TREAT.</h2>
                    </div>
                    <p>Our special treat for beloved customers,<i><b>Pistachio Pudding cake</b></i>,is tender,studded
                         with chopped pistachios and glazed with a sweet and shiny white icing.This cake has earned 
                         fame and name to our Baker's Treat. Taste it for once and the love for this cake 
                         remains life long.</p>
                    <div className="media-element d-flex justify-content-between">
                        <div className="media">
                            <i className="fa fa-magic mr-4"></i>
                            <div className="media-body">
                                <h5>special offer</h5>
                                 20% Discount 
                            </div>
                        </div>
                        <div className="media">
                            <i className="fa fa-magic mr-4"></i>
                            <div className="media-body">
                                <h5>Bank offer</h5>
                                10% extra offer on purchase with any credit and debit cards
                            </div>
                        </div>
                    </div>
                    <a href="#SALE" className="btn btn-primary">See More</a>
                </div>
                <div className="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                    <div className="featured-img">
                        <Image className="featured-big" src="assets/images/img1.png" alt="Featured 1"></Image>
                        <Image className="featured-small" src="assets/images/img2.png" alt="Featured 2"></Image>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Offers;
