import personIcon from "/icons/person.svg";

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* heading */}
        <h1 className="text-4xl font-bold text-center mb-10">What Our Clients Say (placeholder reviews)</h1>

        {/* testimonial 1 */}
        <div className="testimonial mb-12">
          <div className="flex ">
            <img src={personIcon} alt="Client Photo" className="rounded-full w-24 h-24 object-cover mr-4" />
            <div>
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam, ad eveniet nihil aliquid
                incidunt at possimus sunt quasi quibusdam officiis officia maiores sed unde ullam repudiandae rerum
                cumque quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugiat porro. Ullam
                perferendis neque dolor dicta iure? Deleniti et aperiam ratione fugiat at omnis, vitae, nesciunt
                corrupti quibusdam, illum non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, saepe
                animi. Vero odit adipisci veniam aut voluptates nihil maxime officiis eveniet sed possimus harum at nemo
                molestiae ullam, laudantium dolore?
              </p>
            </div>
          </div>
        </div>

        {/* testimonial 2 */}
        <div className="testimonial mb-12">
          <div className="flex ">
            <img src={personIcon} alt="Client Photo" className="rounded-full w-24 h-24 object-cover mr-4" />
            <div>
              <p className="text-xl font-semibold">Sarah Lee</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem maiores dolor, quam
                itaque atque repellat repellendus ad. Blanditiis esse nam quae earum veniam assumenda inventore neque
                explicabo totam libero. Distinctio perferendis, corrupti exercitationem dicta id nihil? Neque quam odio
                illo laborum eos, hic rerum explicabo, nulla unde velit recusandae officiis laudantium, voluptatibus
                aperiam distinctio ex! Odit sint error esse. Ratione, incidunt. Ipsam et nesciunt architecto minus
                facilis cupiditate voluptates. Quia distinctio dolorum tempore sequi quasi illum. Nulla sunt cum unde
                magni corporis culpa temporibus accusantium excepturi! Eos, quaerat a!
              </p>
            </div>
          </div>
        </div>

        {/* testimonial 3 */}
        <div className="testimonial mb-12">
          <div className="flex ">
            <img src={personIcon} alt="Client Photo" className="rounded-full w-24 h-24 object-cover mr-4" />
            <div>
              <p className="text-xl font-semibold">Emily Roberts</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ea, obcaecati consequuntur
                exercitationem reprehenderit animi minus, incidunt aliquid beatae aspernatur mollitia similique
                perspiciatis dicta, vel corrupti veniam! Quasi, voluptatum nemo? Minus dicta, alias sequi nesciunt natus
                deleniti eveniet ea. Architecto doloribus cum ratione natus, aperiam iure eius totam fuga saepe quidem
                expedita. Eveniet iusto, quos doloribus praesentium nostrum veritatis aut! Maxime suscipit nihil aliquid
                eos esse dolorem quos quam ex animi non obcaecati quisquam inventore laboriosam tempore consequuntur
                ducimus dolore molestias praesentium, ullam rerum voluptate. Saepe hic ipsa eos repellat? Ducimus rem
                libero, minus possimus reprehenderit repellat temporibus earum provident voluptates amet asperiores
                aperiam veniam neque ab corporis hic nam et aliquam. Sint, mollitia rem. Dignissimos alias illo
                temporibus illum.
              </p>
            </div>
          </div>
        </div>

        {/* testimonial 4 */}
        <div className="testimonial mb-12">
          <div className="flex ">
            <img src={personIcon} alt="Client Photo" className="rounded-full w-24 h-24 object-cover mr-4" />
            <div>
              <p className="text-xl font-semibold">Michael Carter</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id voluptatibus. Explicabo neque
                porro aut, veniam necessitatibus possimus perferendis ex rem id magni eligendi placeat in velit! Ut, ab
                vitae! Molestias voluptatem eaque cum quos amet illo aperiam dolor ipsum magni, eum enim dolorem
                veritatis deserunt, et sapiente consequuntur id adipisci? Sit ducimus corrupti, suscipit illo deleniti
                itaque maiores nihil? Consequuntur unde ut, minus voluptas ratione, fuga velit error facilis laboriosam
                tempora explicabo quisquam expedita nesciunt soluta asperiores repellat debitis dolores? Dicta expedita
                nulla placeat, accusamus nobis ut mollitia distinctio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
