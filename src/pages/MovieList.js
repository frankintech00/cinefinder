import { Card } from "../components";

export const MovieList = () => {
  return (
    <main>
      <section className="mx-auto max-w-7xl py-7">
        <div className="flex flex-wrap justify-start other:justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
