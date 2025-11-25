import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="section">
      <div className="section-inner max-w-xl">
        <h1 className="h2 mb-4">Contact</h1>
        <p className="body-lg mb-6">
          Share a little about your space, how you use it, and what you would
          like it to feel like. A small selection of pieces can be suggested in
          response.
        </p>
        <form className="space-y-4">
          <div className="space-y-1 text-sm">
            <label
              htmlFor="name"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em]"
            >
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="email"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em]"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="message"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em]"
            >
              Message
            </label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Attach a link to a photo of your space and share what you have in mind."
            />
          </div>
          <Button type="submit" variant="primary" className="mt-2">
            Send message
          </Button>
        </form>
      </div>
    </main>
  );
}
