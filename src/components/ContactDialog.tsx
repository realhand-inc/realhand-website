import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

type ContactDialogProps = {
  trigger: React.ReactNode;
};

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleOpenChange = (open: boolean) => {
    if (open) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden">
        <ScrollArea className="max-h-[85vh]">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative min-h-[240px] lg:min-h-full">
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage:
                    "url(https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/f435378f-17fa-4815-abff-68a2f5757633/WechatIMG988.jpg?format=2500w)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/20 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10 p-8 text-white md:p-10">
                <div className="grid gap-4">
                 
                  
                </div>

                <img
                  src="https://images.squarespace-cdn.com/content/68d1d70b0893e90df94a3d16/1abc0009-2397-4b84-a2ce-b88b27b05d9d/CES_2026.png?content-type=image%2Fpng"
                  alt="CES 2026 announcement"
                  className="w-full rounded-xl  bg-white/5 p-2"
                  loading="lazy"
                  decoding="async"
                />

                
              </div>
            </div>

            <div className="relative z-10 grid gap-8 p-8 md:p-10">
              <div className="grid gap-2">
                <h3 className="text-2xl font-display font-semibold text-foreground">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Share the basics and our team will reach out with next steps.
                </p>
              </div>

              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-3">
                  <Label className="text-sm font-medium text-foreground">
                    Name <span className="text-muted-foreground">(required)</span>
                  </Label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName" className="text-sm text-muted-foreground">
                        First Name
                      </Label>
                      <Input id="firstName" name="firstName" placeholder="First Name" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName" className="text-sm text-muted-foreground">
                        Last Name
                      </Label>
                      <Input id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email <span className="text-muted-foreground">(required)</span>
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="Email" required />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-muted-foreground">(required)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" variant="hero" className="w-full sm:w-auto" disabled={status === "sending"}>
                    {status === "sending" ? "SENDING..." : "SEND"}
                  </Button>
                  {status === "success" && (
                    <span className="text-sm text-emerald-600">Message sent. We will reply soon.</span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-destructive">Something went wrong. Please try again.</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
