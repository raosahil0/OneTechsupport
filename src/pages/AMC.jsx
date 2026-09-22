import { FileText, Clock, CheckCircle2, Shield, Wrench, RefreshCcw } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function AMC() {
  return (
    <ServicePageTemplate
      seo={pageSeo.amc}
      serviceName="Annual Maintenance Contract (AMC)"
      icon={FileText}
      h1Title="Annual Maintenance Contract (AMC) for Corporate IT Infrastructure"
      h1Subtitle="Fixed-cost comprehensive IT maintenance agreements covering desktop fleets, servers, network switches, printers, and unlimited emergency breakdown support across Delhi NCR."
      overviewText="Unplanned IT breakdowns, fluctuating repair bills, and unresponsive hardware technicians bleed company time and capital. S'K ONE Tech Support Annual Maintenance Contracts (AMC) give your business complete budgeting certainty and guaranteed service level commitments. Our AMC packages combine regular monthly preventative visits with unlimited emergency breakdown calls, spare parts management, and SLA-backed engineer dispatches."
      featuresTitle="Comprehensive IT AMC Contract Deliverables"
      features={[
        {
          title: "Scheduled Preventative Maintenance Visits",
          desc: "Monthly on-site visits to perform internal dust extraction, thermal re-pasting, disk integrity checks, cable tightening, and operating system cleanups."
        },
        {
          title: "Unlimited Emergency Breakdown Support",
          desc: "Zero extra charges for emergency callouts. When a workstation, network switch, or server experiences unexpected failure, our engineers are dispatched on-site immediately."
        },
        {
          title: "Guaranteed SLA Response Times",
          desc: "Strict contractually-binding response times: Under 30 minutes for critical server outages and under 2 hours for workstation faults."
        },
        {
          title: "Comprehensive vs. Non-Comprehensive Options",
          desc: "Flexible contract tiers: Comprehensive (including spare parts, motherboard, PSU, and RAM replacements) or Non-Comprehensive (labor & service only)."
        },
        {
          title: "Network & Server Infrastructure Coverage",
          desc: "Cisco routers, managed switches, Wi-Fi access points, patch panels, and server racks are included in the maintenance inspection perimeter."
        },
        {
          title: "Asset Inventory & Lifecycle Reporting",
          desc: "Complete digital catalog of all tagged serial numbers, hardware specifications, warranty statuses, and recommended upgrade roadmaps."
        }
      ]}
      specifications={[
        { label: "Contract Types", value: "Comprehensive & Non-Comprehensive" },
        { label: "SLA Commitment", value: "30-Min P1 Dispatch, 2-Hour P2 Response" },
        { label: "Visit Frequency", value: "Monthly Preventative + Unlimited Break-Fix" },
        { label: "Asset Coverage", value: "PCs, Laptops, Servers, Switches, Printers" }
      ]}
      processSteps={[
        {
          title: "Site Asset Audit",
          desc: "Our engineers inspect and tag every computer, server, switch, and printer to log initial hardware health."
        },
        {
          title: "SLA Tier Customization",
          desc: "Drafting contract terms tailored to your operating hours, team size, and spare parts preferences."
        },
        {
          title: "Initial System Baseline Tuning",
          desc: "Performing deep cleaning, driver updates, and security patching to stabilize all equipment on day one."
        },
        {
          title: "Ongoing Priority Service",
          desc: "Activating your dedicated dispatch hotline, monthly preventative visits, and health reporting."
        }
      ]}
      faqs={[
        {
          q: "What is the difference between Comprehensive and Non-Comprehensive IT AMC?",
          a: "A Comprehensive AMC covers all labor, service visits, and the cost of replacement hardware components (motherboards, RAM, power supplies, hard drives). A Non-Comprehensive AMC covers all engineer visits, maintenance labor, and diagnostics, while hardware replacement parts are billed at actual cost."
        },
        {
          q: "Are there any limits on how many times we can call for breakdown support?",
          a: "No. Our IT AMC contracts include unlimited emergency breakdown calls. You can call whenever an employee experiences a hardware or software glitch."
        },
        {
          q: "Can you provide a standby replacement computer if a laptop needs lab repair?",
          a: "Yes. Under our comprehensive AMC agreements, we provide temporary standby laptops or workstations so your employee can continue working without disruption while their machine is serviced."
        },
        {
          q: "What regions do your on-site AMC engineers cover?",
          a: "Our field service network covers all major commercial hubs including Delhi NCR, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad, Jaipur, and Neemrana."
        }
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          path: "/managed-it-services",
          desc: "24/7 cloud monitoring, patch management, and automated disaster recovery."
        },
        {
          title: "IT Support Services",
          path: "/it-support",
          desc: "Everyday employee ticketing, software support, and workstation setup."
        },
        {
          title: "Computer Repair",
          path: "/computer-repair",
          desc: "Component-level hardware repairs, NVMe SSD upgrades, and data recovery."
        },
        {
          title: "Network Support",
          path: "/network-support",
          desc: "Cisco switches, routers, and corporate Wi-Fi infrastructure."
        }
      ]}
    />
  );
}
