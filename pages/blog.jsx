import React from "react";
import styles from "../styles/blog.module.css";

const blog = () => {
  return (
    <div>
      <section className={styles.sectionhow} id="how">
        <div className={styles.container}>
          <h2 className={styles.headingsecondary}>Christy Cake blogs</h2>
          <span className={styles.subheading}>
            If you bake as much as I do, you’ll know that the work in the
            kitchen counter does not end with getting the cake out of the oven.
            Preserving them is another essential procedure that should be paid
            attention to as well. And thankfully for all of us, there are
            definitely a few simple ways to store and keep your cakes fresh for
            a longer period. Let's see how to maintain cakes to have long
            lasting fun,
          </span>
        </div>

        <div
          className={`${styles.container} ${styles.grid} ${styles.grid2cols} ${styles.gridcenterv}`}
        >
          <div className={styles.steptextbox}>
            <p className={styles.stepnumber}>01</p>
            <h3 className={styles.headingtertiary}>
              Store under cake cover or large bowl
            </h3>
            <p className={styles.stepdescription}>
              If a cake has a fluffy cooked frosting, insert a knife handle
              under an edge of the cake cover so it isn't airtight. The frosting
              can be totally absorbed by the cake when stored in an airtight
              container. If you don't have a cake cover, cakes with creamy
              frostings also can be covered lightly with foil, plastic wrap, or
              wax paper. To keep the frosting from sticking to the protective
              covering, insert several toothpicks halfway into the cake around
              the edges and in the center to support the covering.
            </p>
          </div>

          <div className={styles.stepimgbox}>
            <img
              src="img/blogcake2 (2).png"
              className={styles.stepimg}
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          <div className={styles.stepimgbox}>
            <img
              src="img/blogcake3.png"
              className={styles.stepimg}
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className={styles.steptextbox}>
            <p className={styles.stepnumber}>02</p>
            <h3 className={styles.headingtertiary}>
              FOR A SHORTER TIME PERIOD, REFRIGERATE YOUR CAKE:
            </h3>
            <p className={styles.stepdescription}>
              Of course you refrigerate your food when you planning on eating it
              right away, especially if you have hot, humid days ahead of you.
              If you need to serve it after a long stretch of hours, cover your
              cake with an upturned bowl or a cake keeper before putting it in.
              This is done so that it does not lose moisture or absorb odours
              from the rest of the food in the fridge. Your cake will remain
              fresh in the fridge for maximum of 2-3 days, especially if you
              cover it with a plastic wrap to avoid the cake from drying out.
              The wrap should be sealed around the cake from all sides, so I
              would advise that you do not use it along with the plate or
              carrier on which your cake has been kept.
            </p>
          </div>

          <div className={styles.steptextbox}>
            <p className={styles.stepnumber}>03</p>
            <h3 className={styles.headingtertiary}>
              FOR A LONGER PRESERVATION PERIOD, FREEZE YOUR CAKE:
            </h3>
            <p className={styles.stepdescription}>
              Cake that needs to be kept aside for more than a week must be kept
              in the freezer instead. To do this, use a double layer of the
              plastic wrap to properly seal your cake. Top this off with a
              silver foil to protect it from a potential freezer burn that might
              damage it. Your cake can now stay inside the freezer for as long
              as 4 months if need be, although I would strongly suggest you
              against that long a time. When you get it out of the freezer, make
              sure to thaw it the night before by keeping it in the fridge or at
              room temperature. The cake should be able to retain back its
              moisture gradually and evenly so that it does not end up being
              spongy and wet when taken out for frosting.
            </p>
          </div>
          <div className={styles.stepimgbox}>
            <img
              src="img/blogcake (2).png"
              className={styles.stepimg}
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default blog;
