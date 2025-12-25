import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  url,
  schema,
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dynamic World Education Consultancy" />
      <meta name="robots" content="index, follow" />

      {/* Optional (safe to include) */}
      <meta name="subject" content="Education Consultancy and Career Guidance" />
      <meta
        name="topic"
        content="Online Education, Distance Education, Regular Education, Overseas Education & College Admissions"
      />
      <meta
        name="summary"
        content="Dynamic World helps students get admission in top Indian and overseas universities for Online, Distance, Regular education, MBBS, Engineering, Vocational courses and provides complete career, visa and placement support."
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dynamic World" />
      <meta property="og:url" content={url} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
