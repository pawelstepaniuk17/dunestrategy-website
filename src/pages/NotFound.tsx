import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-32 lg:py-48 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Page not found
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The page you are looking for does not exist or has been moved.
              Please check the URL or return to the homepage.
            </p>
            <div className="flex gap-4">
              <Link to="/">
                <Button size="lg">Return to homepage</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
