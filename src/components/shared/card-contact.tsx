import { HTMLAttributes } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

interface CardContact extends HTMLAttributes<HTMLDivElement> {
  firstName: string;
  lastName: string;
  phoneNumbers?: string[];
}

export default function ContactCard(props: CardContact) {
  const { firstName, lastName, phoneNumbers, ...otherProps } = props;

  return (
    <Card {...otherProps}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <CardTitle>
            {firstName}
            {lastName && ` ${lastName}`}
          </CardTitle>
          <CardContent>
            {phoneNumbers &&
              phoneNumbers.map((phoneNumber, index) => (
                <li key={index}>{phoneNumber}</li>
              ))}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
