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
  const handleOpenChange = (open: boolean) => {
    if (open) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
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
                  <div className="inline-flex w-fit rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
                    Contact RealHand
                  </div>
                  <h2 className="text-3xl font-display font-semibold md:text-4xl">Let&apos;s build your next hand</h2>
                  <p className="text-sm text-white/80 md:text-base">
                    Tell us about your project, timeline, and any technical requirements. We respond within two business
                    days.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-medium tracking-[0.04em]">
                  Visit us at CES Booth #8119 in Las Vegas January 6-9, 2026
                </div>
              </div>
            </div>

            <div className="relative z-10 grid gap-8 p-8 md:p-10">
              <div className="grid gap-2">
                <h3 className="text-2xl font-display font-semibold text-foreground">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Share the basics and our team will reach out with next steps.
                </p>
              </div>

              <form className="grid gap-5">
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

                <Button type="button" variant="hero" className="w-full sm:w-auto">
                  SEND
                </Button>
              </form>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
