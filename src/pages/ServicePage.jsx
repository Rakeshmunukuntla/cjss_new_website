import { useParams } from "react-router-dom";

export default function ServicePage() {
  const { id } = useParams();
  return <h1>Service: {id}</h1>;
}
