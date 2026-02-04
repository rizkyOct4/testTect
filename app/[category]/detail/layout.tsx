import DetailContext from "./context/context";

interface Props {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

const Layout = ({ content, sidebar }: Props) => {
  return (
    <DetailContext>
      <main className="flex min-h-screen justify-center font-san gap-4 bg-white pt-15">
        <section className="w-[70%] h-full">{content}</section>
        <section className="w-[30%] h-full">{sidebar}</section>
      </main>
    </DetailContext>
  );
};

export default Layout;
