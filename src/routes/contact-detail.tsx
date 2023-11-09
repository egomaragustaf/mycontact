import { useQuery } from "@apollo/client";
import { GET_CONTACT_DETAIL } from "../graphql/queries/contact";
import { useParams } from "react-router-dom";
import { Phones } from "../types/contact";

export default function ContactDetail() {
  const { id } = useParams<"id">();
  const { data } = useQuery(GET_CONTACT_DETAIL, {
    variables: { id },
  });

  const contact = data?.contact_by_pk;

  return (
    <div>
      {contact && (
        <div key={contact.id}>
          <h1>
            {contact.first_name} {contact.last_name}
          </h1>
          <ul>
            <li>ID: {contact.id}</li>
            <li>Phone Numbers:</li>
            <ul>
              {contact.phones.map((phone: Phones, index: number) => (
                <li key={index}>{phone.number}</li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}
