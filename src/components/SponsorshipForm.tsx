import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SponsorshipForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    institution: "",
    department: "",
    address1: "",
    address2: "",
    state: "",
    zipCode: "",
    country: "",
    websiteOrLinkedIn: "",
    researchFocus: "",
    publications: "",
    consentAccuracy: false,
    consentDataProcessing: false,
    consentNoGuarantee: false,
    consentPrivacyPolicy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email integration will be added here later
    console.log("Form submitted:", formData);
    alert("Form submitted! Email integration will be configured later.");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, position: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            placeholder="Enter your first name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            placeholder="Enter your last name"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          required
          placeholder="+1 (555) 123-4567"
        />
      </div>

      {/* Position */}
      <div className="space-y-2">
        <Label htmlFor="position">
          Describe your current position <span className="text-destructive">*</span>
        </Label>
        <Select onValueChange={handleSelectChange} required>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professor">Professor</SelectItem>
            <SelectItem value="postdoc">Postdoctoral Researcher</SelectItem>
            <SelectItem value="phd">PhD Student</SelectItem>
            <SelectItem value="master">Master's Student</SelectItem>
            <SelectItem value="researcher">Research Scientist</SelectItem>
            <SelectItem value="engineer">Research Engineer</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Institution */}
      <div className="space-y-2">
        <Label htmlFor="institution">
          Institution / Organization Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleInputChange}
          required
          placeholder="e.g., Stanford University"
        />
      </div>

      {/* Department */}
      <div className="space-y-2">
        <Label htmlFor="department">Department / Lab Name</Label>
        <Input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          placeholder="e.g., Computer Science Department, AI Lab"
        />
      </div>

      {/* Address Section */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">
          Address (required if selected)
        </Label>
        <p className="text-sm text-muted-foreground">
          Your address will only be used to ship our products if your application is selected and
          approved. For more details on how we handle personal information, please refer to our
          CCPA-compliant Privacy Policy listed below or e-mail us at privacy@realhand.com.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address1">Address Line 1</Label>
            <Input
              id="address1"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
              placeholder="Street address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address2">Address Line 2</Label>
            <Input
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit, building, floor, etc."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="e.g., CA"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="e.g., 94301"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="e.g., United States"
            />
          </div>
        </div>
      </div>

      {/* Website or LinkedIn */}
      <div className="space-y-2">
        <Label htmlFor="websiteOrLinkedIn">Website or LinkedIn</Label>
        <Input
          id="websiteOrLinkedIn"
          name="websiteOrLinkedIn"
          type="url"
          value={formData.websiteOrLinkedIn}
          onChange={handleInputChange}
          placeholder="https://linkedin.com/in/yourprofile or https://yourwebsite.com"
        />
      </div>

      {/* Research Focus */}
      <div className="space-y-2">
        <Label htmlFor="researchFocus">
          Research Focus <span className="text-destructive">*</span>
        </Label>
        <p className="text-sm text-muted-foreground">
          Describe your current work in AI, robotics, machine learning, or related fields.
        </p>
        <Textarea
          id="researchFocus"
          name="researchFocus"
          value={formData.researchFocus}
          onChange={handleInputChange}
          required
          placeholder="Describe your research focus..."
          rows={5}
        />
      </div>

      {/* Publications */}
      <div className="space-y-2">
        <Label htmlFor="publications">
          Links to Publications, Projects, or Lab Website (optional)
        </Label>
        <Textarea
          id="publications"
          name="publications"
          value={formData.publications}
          onChange={handleInputChange}
          placeholder="Please provide links to your publications, projects, or lab website..."
          rows={4}
        />
      </div>

      {/* Agreement and Consent */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">
          Agreement and Consent <span className="text-destructive">*</span>
        </Label>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentAccuracy"
              checked={formData.consentAccuracy}
              onCheckedChange={(checked) =>
                handleCheckboxChange("consentAccuracy", checked as boolean)
              }
              required
            />
            <label
              htmlFor="consentAccuracy"
              className="text-sm leading-tight cursor-pointer"
            >
              I confirm that the information provided is accurate to the best of my knowledge.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentDataProcessing"
              checked={formData.consentDataProcessing}
              onCheckedChange={(checked) =>
                handleCheckboxChange("consentDataProcessing", checked as boolean)
              }
              required
            />
            <label
              htmlFor="consentDataProcessing"
              className="text-sm leading-tight cursor-pointer"
            >
              I consent to Realhand Inc. storing and processing my data solely for the purpose of
              evaluating this sponsorship application.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentNoGuarantee"
              checked={formData.consentNoGuarantee}
              onCheckedChange={(checked) =>
                handleCheckboxChange("consentNoGuarantee", checked as boolean)
              }
              required
            />
            <label
              htmlFor="consentNoGuarantee"
              className="text-sm leading-tight cursor-pointer"
            >
              I understand that submitting this form does not guarantee acceptance into the program
              and that I may be asked to submit additional information to be considered.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consentPrivacyPolicy"
              checked={formData.consentPrivacyPolicy}
              onCheckedChange={(checked) =>
                handleCheckboxChange("consentPrivacyPolicy", checked as boolean)
              }
              required
            />
            <label
              htmlFor="consentPrivacyPolicy"
              className="text-sm leading-tight cursor-pointer"
            >
              I have read and agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
              , and I understand that my address will only be used to ship products if my
              application is selected and approved.
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="hero" size="xl" className="w-full">
        Submit Application
      </Button>
    </form>
  );
};

export default SponsorshipForm;
