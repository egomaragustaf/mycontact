import { useQuery } from "@apollo/client";
import { GET_CONTACT_DETAIL } from "../graphql/queries/contact";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
  const { id } = useParams<"id">();
  const { data } = useQuery(GET_CONTACT_DETAIL, {
    variables: { id },
  });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
