"use client";

import styles from "./page.module.css";

// Components
import Searchform from "@/components/examples/examples-1/searchform";
import Slider from "@/components/slider/slider";
import Navbar from "@/components/examples/examples-1/navbar";

const Carshow = () => {
  const imageProps = [
    {
      src: "/assets/examples/examples-1/car-2.jpg",
      alt: "test",
      width: 2000,
      height: 1333,
      id: 1,
    },
    {
      src: "/assets/examples/examples-1/car-2.jpg",
      alt: "test",
      width: 2000,
      height: 1333,
      id: 2,
    },
    {
      src: "/assets/examples/examples-1/car-2.jpg",
      alt: "test",
      width: 2000,
      height: 1333,
      id: 3,
    },
    {
      src: "/assets/examples/examples-1/car-2.jpg",
      alt: "test",
      width: 2000,
      height: 1333,
      id: 4,
    },
  ];

  console.log(imageProps.map((x) => x.id))

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.containerHeader}>
        <header>
          <Slider img={imageProps} />
        </header>
      </div>
      <div className={styles.searchboxContainer}>
        <Searchform/>
      </div>
      <main className={styles.main}>
        <section className={styles.sect_1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          maxime, consequuntur culpa, quam natus aspernatur repellat amet at
          dolorum, dicta repudiandae. Recusandae et reprehenderit odio. Fugiat
          magnam voluptatem repellendus esse. Est, expedita quibusdam, ipsum
          quidem adipisci rerum provident labore culpa eaque commodi magnam
          cumque quisquam unde aliquam tempora! Et neque fuga quisquam ea
          beatae? Ipsam quia fugit suscipit aliquid similique! Excepturi,
          doloribus odit labore quas perferendis, nihil nemo sint reiciendis et
          laudantium inventore provident officiis, odio eveniet magnam eius
          atque consectetur quod animi reprehenderit. Ullam rem inventore atque
          dolorem saepe. Voluptas aspernatur inventore ea unde ab maxime quia
          nihil molestias id necessitatibus odio quo praesentium sequi,
          laboriosam expedita ipsa quis labore odit consectetur minima, vitae
          asperiores ipsum quaerat? Necessitatibus, perferendis? Eius dolore, ab
          nihil soluta minima reiciendis rem possimus facilis cumque enim
          necessitatibus culpa aliquid porro sed debitis tenetur magnam quas
          reprehenderit, aperiam nulla corrupti quo! Voluptate rerum sint vitae.
          Omnis non, commodi qui dolorum placeat enim maxime quo voluptatibus
          tenetur consectetur temporibus quod neque perspiciatis animi saepe
          similique vitae consequatur a. Nihil cum soluta possimus reiciendis
          enim, incidunt repellat! Similique placeat sapiente, voluptatum earum
          rem, iste explicabo cumque at eaque quod quo quasi nemo aperiam velit
          repellendus iure? Asperiores sed quaerat aliquam eveniet aut officia
          deleniti architecto repudiandae molestiae. Pariatur culpa quisquam
          saepe fuga quaerat, animi omnis deserunt nam, in placeat minus
          corrupti iste sapiente enim asperiores? A dolores atque architecto
          assumenda accusamus alias quidem soluta nihil non maiores? Ipsa
          tempore excepturi rerum! Tempora sit reprehenderit illo veniam
          aspernatur exercitationem quam commodi aliquam voluptatem incidunt
          iure, esse blanditiis assumenda temporibus eaque praesentium, qui
          quidem? Ipsum assumenda quasi eos fuga! Deleniti, dolor modi?
          Consectetur reiciendis recusandae dolorem vero iusto, voluptas sint
          libero nobis laboriosam optio adipisci autem rerum, rem fuga ipsam
          asperiores amet itaque commodi, aut inventore nisi cupiditate porro?
          Eaque sit non magnam, quaerat rem soluta ut accusamus consequuntur
          odit aliquam quis tenetur optio accusantium minima fugit rerum tempore
          cum veritatis dignissimos eos nam, aliquid delectus! Quas, aperiam
          necessitatibus. Libero culpa tenetur vel omnis consectetur optio,
          minus accusantium quo nihil assumenda voluptate eligendi ipsum sed
          earum quaerat similique sunt commodi nobis cumque eveniet aspernatur
          beatae exercitationem? Ducimus, recusandae maxime. Molestiae natus
          nulla eum consectetur harum? Ipsa expedita nemo autem vitae libero
          officiis ut itaque soluta maxime saepe, error animi minus eos non
          debitis adipisci perspiciatis iusto. Aliquid, voluptatibus ducimus!
          Cumque quia voluptas fuga ipsa culpa nobis ad reiciendis hic corporis
          doloremque? Nesciunt debitis aliquid mollitia. Adipisci, veniam aut
          architecto expedita sapiente eius, ex dolorum dicta pariatur fuga
          obcaecati eos! Ex qui eius eos assumenda animi id voluptate quidem a
          sapiente magnam vero sequi repudiandae repellendus sunt, quia tempore.
          Rem quia eaque dolores non aspernatur minus ea doloremque maiores aut.
          Quo veniam tenetur quasi corrupti ullam eum, quia voluptatibus magnam,
          aliquid, aliquam perferendis sint delectus a rerum asperiores quam
          minus facilis? Maiores officia, mollitia veritatis quo excepturi
          aliquid non quae! Assumenda similique, eveniet soluta maiores,
          molestias facilis vel impedit voluptate aspernatur inventore
          perferendis eos adipisci, error architecto id rerum libero ipsum alias
          laudantium ducimus distinctio voluptatem nihil! Consequatur, obcaecati
          ipsam. Dolorum quaerat recusandae est ullam dolores unde cum
          accusantium deleniti provident porro atque consectetur eveniet
          expedita reiciendis quo obcaecati sit aliquid ex exercitationem,
          perferendis illum aperiam vitae. Distinctio, illum vero. Nisi sapiente
          quam eos repudiandae quia. Quae mollitia adipisci quod cumque amet
          incidunt, quibusdam cupiditate, optio architecto necessitatibus, a
          neque obcaecati unde suscipit. Nihil quam totam voluptatem dolorum,
          dolor quis! Adipisci, aliquam eveniet doloremque aliquid recusandae
          distinctio harum quia, quam temporibus architecto reiciendis libero
          voluptas enim debitis laborum nemo eos cumque? Saepe nesciunt
          praesentium a expedita laudantium nisi, dolores aliquam? Reprehenderit
          maxime ipsum, repellendus veniam, tenetur illo est minima mollitia
          praesentium ullam laudantium commodi dolores aspernatur tempore,
          architecto similique maiores consectetur iste! Quo, modi vero
          praesentium alias repellendus maiores culpa! At exercitationem autem
          nihil iste eius harum? Cupiditate, fuga! Dignissimos hic ratione
          minima, ipsa iste voluptate dolorum expedita ipsum saepe deleniti
          consectetur nulla accusantium corporis cum excepturi deserunt
          exercitationem impedit? Doloribus, eveniet vero. Numquam ipsum
          consectetur, at possimus amet natus veritatis dolore similique atque
          labore qui reprehenderit nostrum vitae impedit omnis, voluptates
          corrupti. Amet natus perferendis impedit dolore dolorem sunt.
          Cupiditate impedit a cumque, accusamus dolores beatae magnam delectus
          molestias rerum in at unde sequi repudiandae molestiae ea saepe
          excepturi totam dolor voluptatem aut sint, vero sed perspiciatis!
          Dicta, placeat! Unde beatae in autem rem aut iusto repellendus fugit
          quod accusantium nisi obcaecati, totam voluptatem odio dolorem dolor
          voluptates, esse veritatis illum veniam corporis! Recusandae enim
          distinctio ad cum labore. Esse sed fugiat animi ducimus ea odio cum,
          labore qui. Maxime aperiam vero, eveniet necessitatibus commodi
          recusandae optio tempore cumque sapiente excepturi minima quis
          incidunt ex, quam earum, illo iste. Asperiores voluptas fugit, nisi
          facere maxime sequi commodi ipsa obcaecati animi facilis quaerat,
          nesciunt cum amet velit voluptatem. Sint aliquid magnam vel ipsum
          temporibus maxime, eveniet neque eum cupiditate. Omnis. Odit cum quod,
          veritatis nemo nostrum mollitia quas suscipit dolorem libero
          reiciendis esse ipsam incidunt quam quidem aperiam hic, culpa omnis
          fugit beatae asperiores? Doloremque adipisci asperiores excepturi unde
          sapiente. Animi similique id ab iure quod sapiente ipsa voluptatum
          facere quia, provident, quis ad? Iure quisquam itaque consequuntur,
          debitis laborum esse omnis voluptatum odit exercitationem! Voluptas
          molestias a voluptatibus at. Laudantium sapiente sunt culpa omnis
          optio ipsa maxime laboriosam consectetur cum explicabo, quibusdam
          expedita voluptatum voluptatibus dolor tempora temporibus quod!
          Exercitationem fuga tenetur, atque impedit rem reiciendis? Libero,
          esse tempore.
        </section>
      </main>
    </div>
  );
};

export default Carshow;
