import ButtonLogin from "@/components/ButtonLogin";
export default function Home() {
  const isLoggedin = true;
  const name = "Sergio";
  return (
    <main>
      <section className="bg-base-200 ">
        <div className="max-w-3xl mx-auto  flex justify-between  items-center px-8 py-2">
          <div className="font-bold">Saas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Features</a>
          </div>

          <div>
            <ButtonLogin isLoggedin={isLoggedin} name={name} />
          </div>
        </div>
      </section>
      <section className=" text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6  ">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 text-lg">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <div className=" mt-8">
          <ButtonLogin isLoggedin={isLoggedin} name={name} />
        </div>
      </section>
    </main>
  );
}
