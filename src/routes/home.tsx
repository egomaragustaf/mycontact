import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "../graphql/queries/contact";
import { ContactProps } from "../types/contact";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery(GET_CONTACT_LIST, {});

  return (
    <div>
      <h1>Hello Ego!</h1>
      <ul>
        {data?.contact.map((contact: ContactProps) => {
          return (
            <li key={contact?.id}>
              <Link to={`/${contact?.id}`}>{contact?.first_name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
