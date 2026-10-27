import { Monitor, Cpu, Shield, Network, Server, Printer } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function ITSupport() {
  return (
    <ServicePageTemplate
      seo={pageSeo.itSupport}
      serviceName="IT Support Services"
      icon={Monitor}
      h1Title="Business IT Support & 24/7 Remote Support Services"
      h1Subtitle="Reliable, SLA-backed business IT support, remote support, workstation diagnostics, IT backup support, and enterprise IT infrastructure operations across Gurugram, Delhi, Noida, Jaipur, Bhiwadi, Dharuhera, Rewari, Chandigarh, Neemrana, and Behror."
      overviewText="S'K ONE Tech Support provides dedicated business IT support and 24/7 remote support designed to eliminate costly employee downtime. Whether your workforce operates on-premise or remotely, our certified engineers troubleshoot desktop OS bottlenecks, configure business email servers, provide enterprise IT backup support (backupsupport), and resolve network dropouts with an average emergency response time under 30 minutes across Gurugram, Delhi, Noida, Jaipur, Bhiwadi, Dharuhera, Rewari, Neemrana, and Behror."
      featuresTitle="Comprehensive Business IT Support Deliverables"
      features={[
        {
          title: "Workstation & Desktop Support",
          desc: "Complete hardware diagnostics, operating system patching (Windows 11/10 & macOS), disk defragmentation, driver updates, and thermal paste servicing."
        },
        {
          title: "Instant 24/7 Remote Support Helpdesk",
          desc: "Instant remote support diagnostics via secure encrypted sessions. Fast resolution of system crashes, user permissions, and network access issues."
        },
        {
          title: "Enterprise IT Backup Support (Backupsupport)",
          desc: "Automated daily workstation and server backup solutions, immutable cloud snapshot replication, and rapid disaster recovery to prevent business data loss."
        },
        {
          title: "Business Software & OS Troubleshooting",
          desc: "Resolving software crashes, ERP/CRM client connectivity, Microsoft Office 365 migrations, Google Workspace provisioning, and license compliance."
        },
        {
          title: "On-Site Emergency Dispatch",
          desc: "Rapid field engineer deployment across Gurugram, Delhi, Noida, Jaipur, Bhiwadi, Dharuhera, Rewari, Chandigarh, Neemrana, and Behror for physical hardware failures."
        },
        {
          title: "Endpoint Security & Anti-Malware",
          desc: "Deployment of business-grade endpoint detection and response (EDR), removal of spyware, ransomware shielding, and USB port restrictions."
        }
      ]}
      specifications={[
        { label: "Supported OS", value: "Windows 11/10, macOS, Ubuntu Linux" },
        { label: "SLA Response", value: "< 30 Minutes for P1 Critical Outages" },
        { label: "Coverage", value: "Gurugram, Delhi, Noida, Jaipur, Bhiwadi, Dharuhera, Rewari, Neemrana, Behror" },
        { label: "Support Types", value: "Remote Support & On-Premise Dispatch" }
      ]}
      processSteps={[
        {
          title: "Incident Intake & Triage",
          desc: "Ticket received via phone, portal, or automated monitor and classified by urgency severity (P1 to P3)."
        },
        {
          title: "Diagnostic Root Cause",
          desc: "Engineers run telemetry diagnostics to isolate hardware faults, software conflicts, or network drops."
        },
        {
          title: "Resolution & Patching",
          desc: "Fix applied either remotely or on-site, followed by testing and user verification."
        },
        {
          title: "Documentation & Close",
          desc: "Incident log updated with root cause details to prevent repeat occurrences."
        }
      ]}
      faqs={[
        {
          q: "What is the typical response time for critical IT support tickets?",
          a: "For Priority 1 (P1) critical business emergencies where systems or teams cannot work, our SLA guarantees an engineer response within 30 minutes."
        },
        {
          q: "Do you offer on-site physical support or only remote helpdesk?",
          a: "We provide both. Routine software glitches are resolved instantly via remote secure access, while hardware failures, network cabling, and server issues receive on-site dispatch across Gurugram, Delhi, Noida, Jaipur, Bhiwadi, Dharuhera, Rewari, Chandigarh, Neemrana, Behror, and Delhi NCR."
        },
        {
          q: "Can you support hybrid and work-from-home (WFH) employees?",
          a: "Yes. We configure secure corporate VPN tunnels, zero-trust cloud credentials, and remote endpoint monitoring for remote teams."
        },
        {
          q: "How does pricing work for business IT support?",
          a: "We offer both flexible monthly per-workstation AMC plans and incident-based retainer models tailored to your team size."
        }
      ]}
      relatedServices={[
        {
          title: "Managed IT Services",
          path: "/managed-it-services",
          desc: "Proactive 24/7 infrastructure monitoring, automatic backups, and ongoing IT management."
        },
        {
          title: "Network Support",
          path: "/network-support",
          desc: "Cisco switches, routers, firewall routing, and high-speed office Wi-Fi setup."
        },
        {
          title: "Computer Repair",
          path: "/computer-repair",
          desc: "Component-level repairs, SSD upgrades, motherboard soldering, and RAM servicing."
        },
        {
          title: "IT Annual Maintenance (AMC)",
          path: "/annual-maintenance-contract",
          desc: "Preventative maintenance contracts with unlimited breakdown support."
        }
      ]}
    />
  );
}
