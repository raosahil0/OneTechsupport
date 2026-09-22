import { Shield, Server, Activity, Database, Cloud, Lock } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function ManagedITServices() {
  return (
    <ServicePageTemplate
      seo={pageSeo.managedIT}
      serviceName="Managed IT Services"
      icon={Shield}
      h1Title="Comprehensive Managed IT Services & 24/7 Infrastructure Operations"
      h1Subtitle="Proactive IT management, server monitoring, zero-trust cloud security, automated backup replication, and predictable IT budgeting for forward-thinking enterprises."
      overviewText="Instead of waiting for critical systems to crash before reacting, S'K ONE Managed IT Services acts as your dedicated Chief Information Officer (CIO) and Tier 3 engineering department. We monitor your entire technology estate 24/7/365, proactively identifying failing disks, unpatched security vulnerabilities, and network latency bottlenecks before they impact operations."
      featuresTitle="Enterprise Managed Services Architecture"
      features={[
        {
          title: "24/7/365 Systems & Server Monitoring",
          desc: "Live synthetic transactions, CPU/RAM utilization monitoring, disk health alerts, and instant automated failover triggers across cloud and bare-metal environments."
        },
        {
          title: "Automated Backup & Disaster Recovery (BDR)",
          desc: "Encrypted, immutable off-site backups with automated sandbox restoration tests. RTO under 1 hour and RPO under 15 minutes."
        },
        {
          title: "Patch Management & Vulnerability Mitigation",
          desc: "Staged deployment of OS security rollups and third-party software updates after staging validation, eliminating zero-day risks."
        },
        {
          title: "Cloud & Infrastructure Governance",
          desc: "Full management of AWS, Microsoft Azure, Google Cloud (GCP), and hybrid virtualization (VMware ESXi, Proxmox, Hyper-V)."
        },
        {
          title: "IT Asset & License Lifecycle Management",
          desc: "Centralized tracking of server licenses, Microsoft 365 seats, OEM support warranties, and network appliance subscription renewals."
        },
        {
          title: "Dedicated Strategic IT Roadmapping",
          desc: "Quarterly business reviews (QBRs) and tech stack audits to ensure IT investments align with your enterprise expansion objectives."
        }
      ]}
      specifications={[
        { label: "Uptime SLA", value: "99.9% Availability Commitment" },
        { label: "Cloud Platforms", value: "AWS, Azure, GCP, Hybrid Cloud" },
        { label: "Monitoring", value: "Real-Time Telemetry & SNMP Traps" },
        { label: "Backup Standard", value: "3-2-1 Rule with AES-256 Encryption" }
      ]}
      processSteps={[
        {
          title: "Infrastructure Baseline Audit",
          desc: "Comprehensive scan of all network nodes, server logs, endpoints, and security posture."
        },
        {
          title: "Monitoring Agent Deployment",
          desc: "Installing secure lightweight telemetry agents and centralizing observability logs."
        },
        {
          title: "Proactive Hardening & Maintenance",
          desc: "Patching outdated firmware, segmenting vulnerable subnets, and standardizing security policies."
        },
        {
          title: "Continuous 24/7 Optimization",
          desc: "Weekly trend analysis, automated health scrubbing, and ongoing SLA-backed support."
        }
      ]}
      faqs={[
        {
          q: "What is the difference between break-fix IT support and Managed IT Services?",
          a: "Break-fix IT only responds after an outage occurs, causing costly business downtime. Managed IT services proactively monitors, patches, backs up, and secures your systems 24/7 to prevent failures from occurring in the first place."
        },
        {
          q: "Can S'K ONE collaborate with our existing in-house IT team?",
          a: "Yes. We frequently operate under a Co-Managed IT model where we handle Tier 3 server escalations, 24/7 monitoring, and cybersecurity while your internal staff handles day-to-day employee desktop queries."
        },
        {
          q: "How does managed cloud migration work with your MSP plan?",
          a: "We architect and execute the full migration pipeline—from database schemas and container setups to VPN tunnels—with zero production data loss."
        },
        {
          q: "Are backups verified automatically?",
          a: "Yes. Our automated BDR pipeline boots backup images in isolated test environments daily to verify boot integrity, ensuring restore viability."
        }
      ]}
      relatedServices={[
        {
          title: "IT Support Services",
          path: "/it-support",
          desc: "Day-to-day employee troubleshooting and workstation servicing."
        },
        {
          title: "Server Support",
          path: "/server-support",
          desc: "Windows Server, Linux clusters, Active Directory, and database management."
        },
        {
          title: "Cybersecurity Services",
          path: "/cyber-security",
          desc: "Zero-trust network architecture, penetration testing, and compliance."
        },
        {
          title: "IT Annual Maintenance (AMC)",
          path: "/annual-maintenance-contract",
          desc: "Scheduled on-site maintenance with guaranteed SLA response times."
        }
      ]}
    />
  );
}
