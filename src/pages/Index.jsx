import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const Index = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Product</h1>
        <p className="text-xl mb-8">The best solution for your business needs</p>
        <Button size="lg" variant="primary">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$10/month</p>
              <ul className="mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$20/month</p>
              <ul className="mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">$30/month</p>
              <ul className="mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="max-w-2xl mx-auto">We are a company dedicated to providing the best SaaS solutions for your business. Our mission is to help you achieve your goals with our innovative products.</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Name" {...form.register("name")} />
          <Input placeholder="Email" {...form.register("email")} />
          <Input placeholder="Subject" {...form.register("subject")} />
          <Textarea placeholder="Message" {...form.register("message")} />
          <Button type="submit" variant="primary">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Index;