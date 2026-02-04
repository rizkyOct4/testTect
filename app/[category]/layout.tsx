import EachCategoriesContext from "./context/context";

interface Props {
  children: React.ReactNode;
  headline: React.ReactNode;
  popularNews: React.ReactNode;
  recomendation: React.ReactNode;
}

const Layout = ({
  children,
  headline,
  popularNews,
  recomendation,
}: Props) => {
  return (
    <EachCategoriesContext>
      <main className="flex min-h-screen justify-center flex-col font-san gap-4 bg-white pt-15">
        {children}
        {headline}
        {popularNews}
        {recomendation}
      </main>
    </EachCategoriesContext>
  );
};

export default Layout;
