import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Movie App | {title}</title>
    </Helmet>
  );
};
