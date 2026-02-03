import DetailContent from "./content";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const id = (await searchParams)?.id;
  return <>{id && <DetailContent />}</>;
};

export default page;
