import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "../graphql/queries/contact";
import { ContactProps } from "../types/contact";
import { Link } from "react-router-dom";
import CardContact from "../components/shared/card-contact";
import Layout from "../components/layout/layout";

export default function Home() {
  const { data } = useQuery(GET_CONTACT_LIST, {});

  return (
    <Layout>
      <h1>Awesome Phonebook</h1>
      <div>
        {data?.contact.map((contact: ContactProps) => {
          return (
            <div key={contact?.id}>
              <Link to={`/contact/${contact?.id}`}>
                <CardContact
                  firstName={contact?.first_name}
                  lastName={contact?.last_name}
                  phoneNumbers={
                    contact?.phones.map((phone) => phone.number) || []
                  }
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
