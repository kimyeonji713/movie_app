import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>RE:MOVE | {title}</title>
    </Helmet>
  );
};
