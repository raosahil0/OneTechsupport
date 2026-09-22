import { Network, Wifi, Shield, Server, ArrowRight, Cable, Activity } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function NetworkSupport() {
  return (
    <ServicePageTemplate
      seo={pageSeo.network}
      serviceName="Network Support Services"
      icon={Network}
      h1Title="Enterprise Network Support, Cisco Routing & Corporate Wi-Fi Engineering"
      h1Subtitle="High-speed LAN architecture, Cisco switch configuration, Fortinet firewall management, bandwidth QoS prioritization, and dead-zone-free corporate Wi-Fi deployment."
      overviewText="Network latency, packet dropouts, and Wi-Fi dead zones paralyze business workflows and video conferences. S'K ONE Tech Support engineers design, install, secure, and troubleshoot enterprise networks. From structured Cat6A fiber cabling and managed PoE switches to next-generation firewalls and redundant ISP load balancing, we ensure your network infrastructure remains lightning-fast and impenetrable."
      featuresTitle="Enterprise Network Infrastructure Deliverables"
      features={[
        {
          title: "Cisco & Managed Switch Configuration",
          desc: "VLAN design, 802.1Q trunking, Spanning Tree Protocol (STP) loop prevention, and port security on Cisco Catalyst, Aruba, and Ubiquiti UniFi switches."
        },
        {
          title: "Next-Gen Firewall Deployment & UTM",
          desc: "Configuring Fortinet FortiGate, Sophos, Cisco Meraki, and pfSense appliances for deep packet inspection, IPS/IDS, and content filtering."
        },
        {
          title: "Corporate Wi-Fi Design & Dead-Zone Elimination",
          desc: "Predictive RF heat-mapping, seamless 802.11ax (Wi-Fi 6/6E) access point roaming, guest portal isolation, and WPA3 Enterprise authentication."
        },
        {
          title: "Multi-WAN Failover & SD-WAN Routing",
          desc: "Dual ISP bonding and automated sub-second failover to ensure VoIP and cloud applications never drop during primary line ISP outages."
        },
        {
          title: "Site-to-Site & Remote Worker VPNs",
          desc: "IPsec tunnels connecting branch offices (Delhi, Gurugram, Jaipur) with hardware crypto accelerators and WireGuard client VPNs for telecommuters."
        },
        {
          title: "Structured Cabling & Server Rack Cleanups",
          desc: "Cat6/Cat6A and single/multi-mode fiber terminations, patch panel labeling, cable management dress-downs, and rack thermal airflow optimization."
        }
      ]}
      specifications={[
        { label: "Switch Brands", value: "Cisco, Aruba, Meraki, Ubiquiti" },
        { label: "Firewall Standards", value: "Fortinet, Sophos, pfSense, Palo Alto" },
        { label: "Wireless Protocols", value: "Wi-Fi 6/6E, WPA3 Enterprise, 802.1X" },
        { label: "Cabling Standards", value: "TIA/EIA-568-C Cat6A & Fiber Optic" }
      ]}
      processSteps={[
        {
          title: "Packet & RF Spectrum Audit",
          desc: "Analyzing traffic congestion, RF interference, packet jitter, and firewall rule bottlenecks."
        },
        {
          title: "Topology & VLAN Re-Architecture",
          desc: "Segmenting voice, video, guest, and corporate data to guarantee bandwidth Quality of Service (QoS)."
        },
        {
          title: "Hardware Staging & Cutover",
          desc: "Configuring equipment off-hours to prevent mid-day business interruption during network upgrades."
        },
        {
          title: "Telemetry & Performance Testing",
          desc: "Running throughput saturation benchmarks and enabling SNMP bandwidth monitors."
        }
      ]}
      faqs={[
        {
          q: "How do you eliminate office Wi-Fi drops during video conferences?",
          a: "We conduct RF spectrum analysis to locate interference and channel overlaps, deploy enterprise Wi-Fi 6 access points with seamless 802.11k/v/r roaming, and implement QoS prioritizing Zoom and Teams traffic."
        },
        {
          q: "Can you set up automatic backup internet if our primary fiber line goes down?",
          a: "Yes. We configure multi-WAN failover on dual-WAN firewalls that automatically shifts corporate traffic to a secondary ISP or 5G backup within seconds of primary line packet loss."
        },
        {
          q: "What firewall brands do your engineers support?",
          a: "We actively support and configure Fortinet FortiGate, Cisco Meraki, Sophos XGS, SonicWall, Ubiquiti Gateway, and pfSense/OPNsense systems."
        },
        {
          q: "Do you provide structured network cabling for new office setups?",
          a: "Yes. We handle end-to-end Cat6/Cat6A cabling, server rack assembly, patch panel punching, cable dressing, and Fluke certification testing."
        }
      ]}
      relatedServices={[
        {
          title: "Server Support",
          path: "/server-support",
          desc: "Active Directory, DHCP, DNS, and file server architecture."
        },
        {
          title: "Cybersecurity Services",
          path: "/cyber-security",
          desc: "Zero-trust network segmentation and penetration auditing."
        },
        {
          title: "Managed IT Services",
          path: "/managed-it-services",
          desc: "24/7 network node uptime and bandwidth monitoring."
        },
        {
          title: "IT Support Services",
          path: "/it-support",
          desc: "Workstation network adapter troubleshooting and setup."
        }
      ]}
    />
  );
}
