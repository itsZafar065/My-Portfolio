import { getPublicData } from "@/lib/data";
import { PublicHome } from "@/components/public-site";

export default async function HomePage() {
  const data = await getPublicData();
  return <PublicHome data={data} />;
}
