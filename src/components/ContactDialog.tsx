import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

type ContactDialogProps = {
  trigger: React.ReactNode;
};

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] p-0">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-right bg-contain"
            style={{
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/68d1d70b0893e90df94a3d16/f435378f-17fa-4815-abff-68a2f5757633/WechatIMG988.jpg?format=2500w)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"
            aria-hidden="true"
          />
          <ScrollArea className="max-h-[85vh]">
            <div className="relative z-10 grid gap-8 p-8 md:p-10">
              <div className="rounded-2xl border border-border/60 bg-secondary/40 px-6 py-4 text-center text-sm font-medium tracking-[0.04em] text-foreground">
                Visit us at CES Booth #8119 in Las Vegas January 6-9, 2026
              </div>

              <div className="grid gap-8 lg:max-w-3xl">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-3xl font-display font-semibold text-foreground">Contact Us</h2>
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
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
