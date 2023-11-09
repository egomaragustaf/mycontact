export type ContactProps = {
  id: string;
  first_name: string;
  last_name: string;
  phones: Phones[];
};

export type Phones = {
  id: number;
  __typename: string;
  number: string;
};
