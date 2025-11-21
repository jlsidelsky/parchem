import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/parchem.svg"
                alt="Parchem"
                className="h-7 w-auto brightness-0 invert"
              />
              <span className="text-xl font-semibold">Parchem</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Your trusted partner for bulk and specialty chemicals. Delivering
              excellence since 1999.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86667 17.1933H0.258334V5.73163H3.86667V17.1933ZM2.06 4.1433C1.6507 4.141 1.25125 4.0175 0.912068 3.78839C0.572886 3.55928 0.309173 3.23483 0.154211 2.85599C-0.000751972 2.47715 -0.0400192 2.06089 0.0413643 1.65976C0.122748 1.25862 0.321135 0.890577 0.611489 0.602082C0.901842 0.313587 1.27115 0.117568 1.6728 0.0387615C2.07445 -0.0400449 2.49045 0.00189455 2.86829 0.159286C3.24612 0.316678 3.56887 0.582468 3.7958 0.923113C4.02272 1.26376 4.14366 1.66399 4.14333 2.0733C4.14719 2.34733 4.09585 2.61934 3.99235 2.87311C3.88885 3.12687 3.73532 3.3572 3.5409 3.55037C3.34649 3.74353 3.11518 3.89558 2.86076 3.99745C2.60633 4.09932 2.334 4.14892 2.06 4.1433ZM17.1667 17.2033H13.56V10.9416C13.56 9.09497 12.775 8.52497 11.7617 8.52497C10.6917 8.52497 9.64167 9.33163 9.64167 10.9883V17.2033H6.03333V5.73997H9.50333V7.3283H9.55C9.89833 6.6233 11.1183 5.4183 12.98 5.4183C14.9933 5.4183 17.1683 6.6133 17.1683 10.1133L17.1667 17.2033Z"
                    fill="#ffffff"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-base mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/catalog"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Quick Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Supplier Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=415+Huguenot+Street,+New+Rochelle,+New+York+10801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  415 Huguenot Street,
                  <br />
                  New Rochelle, New York 10801
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <Link
                    href="tel:+19146546800"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-primary-foreground/60">Main: </span>1
                    (914) 654-6800
                  </Link>
                  <Link
                    href="tel:+18002823982"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-primary-foreground/60">
                      Toll-free:{" "}
                    </span>
                    1-800-282-3982
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <Link
                  href="mailto:info@parchem.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@parchem.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Parchem. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
