import { 
  Server, 
  Cloud, 
  Shield, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Globe 
} from 'lucide-react';

export const PROFILE = {
  name: "Santosh Raghuwanshi",
  role: "Infrastructure Engineer | Certified Azure Admin",
  email: "santoshraghuwanshi8@gmail.com",
  phone: "+91 7999317209",
  linkedin: "linkedin.com/in/santoshraghuwanshi-615a3387",
  location: "Pune, Maharashtra, India",
  summary: "Self-Motivated IT Professional with 11+ Years of Experience. Expertise in IT infrastructure, system, and cloud administration. Seeking a dynamic role in a growth-oriented company to leverage skills for mutual success. Proven track record in Linux Administration, Azure/AWS Cloud Infrastructure, and Project Management."
};

export const SKILLS = [
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    items: ["Azure (Certified Admin)", "AWS Administrator", "IAM", "Azure VM", "Storage Services", "Cosmos DB", "Entra ID (Azure AD)", "VNet"]
  },
  {
    category: "System Administration",
    icon: Server,
    items: ["RHEL 6/7/8/9", "Ubuntu", "CentOS", "SuSE", "Solaris 10/11", "OS Hardening", "Patch Management", "User Management"]
  },
  {
    category: "DevOps & Automation",
    icon: Terminal,
    items: ["Puppet", "Ansible", "Bash/Shell Scripting", "CI/CD Pipelines", "Docker (Basic)", "Bitbucket", "Artifactory"]
  },
  {
    category: "Application & Web",
    icon: Globe,
    items: ["Apache", "Tomcat", "Nginx", "Wildfly", "SonarQube", "IBM Connect", "Zimbra Mail Server"]
  },
  {
    category: "Virtualization & Storage",
    icon: Layers,
    items: ["VMware ESXi", "vCenter Server", "Virtual Networking", "GFS2", "EXT4", "LVM"]
  },
  {
    category: "Security & Monitoring",
    icon: Shield,
    items: ["Vulnerability Mgmt", "McAfee OAS", "Sentinel One", "PAM", "ServiceNow", "BMC Remedy", "JIRA", "Splunk (Basic)"]
  }
];

export const EXPERIENCE = [
  {
    company: "Cencora (AmerisourceBergen)",
    role: "Infrastructure Engineer III",
    duration: "Apr 2025 - Present", // Keeping date as per resume provided, acting as 'Current'
    location: "Pune, Maharashtra",
    description: "Leading Linux Server Migration, OS Upgrade, PAM Remediation, and Automation projects.",
    points: [
      "Led end-to-end migration of legacy Linux systems to RHEL, CentOS, SuSE, Ubuntu.",
      "Conducted comprehensive system assessments and hardware compatibility audits.",
      "Implemented robust PAM configurations to enhance system security.",
      "Utilized Puppet for configuration management, reducing manual effort.",
      "Applied security patches and hardened systems for compliance."
    ]
  },
  {
    company: "Zensar Technologies Ltd",
    role: "Technical Specialist",
    duration: "May 2024 - Apr 2025",
    location: "Pune, Maharashtra",
    description: "Worked on Cencora project focusing on Linux OS upgrade and remediation.",
    points: [
      "Evaluated system configurations for Linux OS upgrades.",
      "Troubleshot security vulnerabilities and performance bottlenecks.",
      "Ensured seamless transition to new OS environments with minimal downtime.",
      "Maintained operational continuity during major infrastructure changes."
    ]
  },
  {
    company: "Nice Software Solutions Pvt Ltd",
    role: "Senior Consultant",
    duration: "July 2021 - Apr 2024",
    location: "Pune, Maharashtra",
    description: "AT&T, EDATAMART | Mashreq Bank Project Support.",
    points: [
      "Supported enterprise-scale Big Data and E-Commerce Analytics platforms for AT&T.",
      "Managed 200+ Linux servers across RHEL, CentOS, Ubuntu, and Solaris.",
      "Performed automated provisioning using CI/CD pipelines.",
      "Maintained Red Hat Clusters (Active-Active/Passive) and Oracle DB services.",
      "Automated repetitive tasks using Shell/Bash scripting."
    ]
  },
  {
    company: "DCM Food Labs Ltd",
    role: "Asst. Manager IT & Innovations",
    duration: "Sep 2020 - Aug 2021",
    location: "Bhopal, Madhya Pradesh",
    description: "AWS Services Management and E-Commerce Application Deployment.",
    points: [
      "Led developer team through application lifecycle from design to deployment.",
      "Managed AWS backend services and database integrity.",
      "Integrated Facebook, Google, and Payment Gateway APIs.",
      "Navigated technical challenges with agile problem-solving methodology."
    ]
  },
  {
    company: "E-Herex Technologies Pvt Ltd",
    role: "System and Network Administrator",
    duration: "Jan 2017 - Aug 2020",
    location: "Bhopal, Madhya Pradesh",
    description: "Managed IT infrastructure and Web-Based ERP Systems.",
    points: [
      "Administered Web-Based ERP system and Zimbra Email Server.",
      "Managed Domain Users, Group Policies, and Network Security (Firewalls/VPN).",
      "Handled backup and restoration processes for business continuity.",
      "Provided MIS reports and dashboards for management."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Diploma in Computer Science Engineering",
    school: "Government Polytechnic College Seoni (MP)",
    year: "2012",
    grade: "68.5%"
  }
];