import IndexContext from "./context/context";

interface Props {
  headline: React.ReactNode;
  popularNews: React.ReactNode;
  recomendation: React.ReactNode;
  ads: React.ReactNode;
}

const IndexLayout = ({
  headline,
  popularNews,
  recomendation,
  ads,
}: Props) => {
  return (
    <IndexContext>
      <main className="flex min-h-screen justify-center flex-col font-san gap-4 bg-white pt-15">
        {headline}
        {popularNews}
        {recomendation}
        {ads}
      </main>
    </IndexContext>
  );
};

export default IndexLayout;
