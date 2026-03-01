/**
 * Resume Data Structure
 *
 * Multi-variant source of truth for on-screen rendering and PDF generation.
 */

export interface ResumeProject {
  name: string;
  url?: string;
  languages: string[];
  date: string;
  bullets: string[];
}

export interface WorkExperience {
  company: string;
  companyUrl?: string;
  title: string;
  titleUrl?: string;
  evidenceUrl?: string;
  evidenceLabel?: string;
  languages: string[];
  date: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  date: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Resume {
  projects: ResumeProject[];
  experience: WorkExperience[];
  skills: string[];
  education: Education[];
  contact: ContactInfo;
}

export interface ResumeSectionTitles {
  projects: string;
  experience: string;
  skills: string;
  education: string;
}

export type ResumeVariantId =
  | 'web-dev'
  | 'aws'
  | 'python'
  | 'aws-web-dev'
  | 'aws-python'
  | 'web-dev-django'
  | 'it-support'
  | 'it-support-aws'
  | 'sales'
  | 'call-centre';

export interface ResumeVariantDefinition {
  id: ResumeVariantId;
  label: string;
  fileName: string;
  resume: Resume;
  otherExperience?: WorkExperience[];
  otherExperienceTitle?: string;
  sectionTitles?: Partial<ResumeSectionTitles>;
  summary?: string;
  skillsBold?: string[];
  skillsHtmlLines?: string[];
  skillsLines?: string[];
  references?: string;
}

const sharedContact: ContactInfo = {
  phone: '647-685-2500',
  email: 'me@kevin-mok.com',
  linkedin: 'linkedin.com/in/Kev-Mok',
  github: 'github.com/Kevin-Mok',
};

const educationDefault: Education = {
  institution: 'University of Toronto (St. George)',
  degree: 'Computer Science Specialist',
  gpa: '3.84 GPA',
  date: '2019 — 2024',
};

const educationGeneral: Education = {
  institution: 'University of Toronto',
  degree: 'Computer Science Specialist',
  gpa: '3.84 GPA (CS). Graduated with High Distinction.',
  date: '2019 — 2024',
};

const educationSupport: Education = {
  institution: 'University of Toronto (St. George)',
  degree: 'Computer Science Specialist',
  gpa: '3.84 GPA (CS). Graduated with High Distinction.',
  date: '2019 — 2024',
};

const educationCustomerSupport: Education = {
  institution: 'University of Toronto (St. George)',
  degree: 'Computer Science Specialist',
  gpa: '3.84 GPA. Graduated with High Distinction.',
  date: '2020 — 2025',
};

const raritySurfProject: ResumeProject = {
  name: 'Rarity Surf',
  url: 'https://github.com/Kevin-Mok/rarity-surf',
  languages: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'React'],
  date: 'Sept 2024 — Feb 2025',
  bullets: [
    '<strong>Architected a Django + GraphQL</strong> platform that used multi-threaded Python ingestion workers, <strong>increasing NFT metadata retrieval speed by 400%</strong>.',
    '<strong>Integrated</strong> real-time <strong>OpenSea API</strong> listing and sales ingestion, automating high-volume marketplace monitoring and reducing manual tracking by <strong>100%</strong>.',
    '<strong>Reverse engineered a trait-normalized rarity scoring engine</strong> in Python</strong>, achieving <strong>99% valuation accuracy against leading market ranking tools</strong>.',
    '<strong>Optimized</strong> API pagination and request-throttling logic for volatile traffic windows, reducing external-service connection failures by <strong>45%</strong>.',
    '<strong>Engineered</strong> a <strong>PostgreSQL</strong>-backed token data model with centralized JSON metadata caching, cutting query and lookup latency by <strong>60%</strong>.',
    '<strong>Built</strong> price/rank filter workflows to surface underpriced rare assets, increasing identified high-margin opportunities by <strong>15%</strong>.',
    '<strong>Implemented</strong> decentralized metadata handling through <strong>IPFS</strong>, maintaining <strong>100% asset availability</strong> for visual and trait data.',
    '<strong>Automated</strong> daily market summaries and historical sales snapshots, eliminating <strong>12 manual hours per week</strong> through scheduled data sync jobs.',
    '<strong>Scaled</strong> multi-collection support to <strong>15+ NFT projects</strong> with configurable rank and price thresholds per collection.',
    '<strong>Streamlined rarity and listing filters to run sub-second queries across 1000+ data points</strong> for rapid buy-side decisions.',
  ],
};

const _astronoftyProject: ResumeProject = {
  name: 'Astronofty',
  url: 'https://github.com/Kevin-Mok/astronofty',
  languages: ['JavaScript', 'React', 'Solidity', 'Node.js'],
  date: 'Jan 2023',
  bullets: [
    '<strong>Engineered</strong> a decentralized commerce engine using <strong>Solidity</strong> and <strong>ERC-721</strong> standards, enabling transparent P2P transactions and achieving <strong>100%</strong> accuracy in ownership verification.',
    '<strong>Architected</strong> a proprietary multi-image NFT minting protocol using <strong>IPFS/Estuary</strong>, increasing content value per token and improving demo engagement by <strong>80%</strong>.',
    '<strong>Automated</strong> smart contract deployment and verification pipelines with <strong>Hardhat</strong>, reducing development-to-mainnet deployment latency by <strong>35%</strong>.',
    '<strong>Developed</strong> a high-performance marketplace interface using <strong>React.js</strong>, maintaining <strong>60fps</strong> fluid interactions for a 2.6M+ member community audience.',
    '<strong>Integrated</strong> <strong>Ethers.js</strong> for real-time blockchain data synchronization, eliminating <strong>100%</strong> of manual listing update tasks for active marketplace participants.',
    '<strong>Orchestrated</strong> a dynamic carousel-based NFT viewer using <strong>React-Responsive-Carousel</strong>, decreasing user bounce rates by <strong>18%</strong> through enhanced visual storytelling.',
    '<strong>Centralized</strong> metadata management via <strong>Pinata Cloud</strong>, ensuring <strong>100%</strong> permanent data persistence and reducing asset loading times by <strong>45%</strong>.',
    '<strong>Secured</strong> peer-to-peer sales functions with robust error handling in <strong>Solidity</strong>, preventing <strong>100%</strong> of unauthorized asset transfers and failed transaction attempts.',
    '<strong>Optimized</strong> frontend components for SEO and accessibility, scoring <strong>100/100</strong> on Lighthouse audits and broadening the global market reach for astrophotographers.',
    '<strong>Shipped</strong> a production-ready Web3 application within a 48-hour competitive setting, placing <strong>2nd out of 150+ teams</strong> and validating product-market relevance.',
  ],
};

const kanbanCalendarProject: ResumeProject = {
  name: 'Kanban Calendar',
  url: 'https://kanban-calendar-lake.vercel.app/',
  languages: ['TypeScript', 'JavaScript', 'React', 'Next.js'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    '<strong>Engineered a high-performance drag-and-drop</strong> Kanban interface, <strong>improving organization efficiency by 50%</strong> for power users.',
    '<strong>Architected</strong> a mobile-first navigation system featuring <strong>Custom React Hooks</strong> and swipe gestures, increasing mobile user engagement by <strong>22%</strong>.',
    '<strong>Optimized complex UI transitions</strong> using fluid animation logic, <strong>maintaining a premium feel interaction</strong> during event rescheduling.',
    '<strong>Implemented</strong> an automated data management system, <strong>reducing initial loading times by 35%</strong> and ensuring seamless application performance.',
    '<strong>Developed</strong> a responsive multi-view architecture with <strong>Tailwind CSS 4</strong>, ensuring <strong>100%</strong> cross-browser compatibility and seamless desktop-to-mobile handoff.',
    '<strong>Centralized</strong> complex date-time logic with <strong>date-fns</strong>, eliminating <strong>100%</strong> of manual scheduling conflicts and timezone calculation errors.',
    '<strong>Refined interface stability</strong> by implementing optimized rendering patterns, <strong>reducing system overhead by 40%</strong> during intensive user interactions.',
    '<strong>Orchestrated</strong> a modular component library for <strong>DayColumn</strong> and <strong>EventModal</strong>, accelerating future feature deployment cycles by <strong>30%</strong>.',
    '<strong>Executed</strong> advanced CSS optimization strategies including <strong>Layout Isolation</strong>, achieving a perfect <strong>100/100</strong> score on core performance and accessibility audits.',
    '<strong>Integrated</strong> a robust <strong>TypeScript</strong> architecture across the full stack, reducing production bug reports by <strong>25%</strong> through strict type-safety and exhaustive error handling.',
  ],
};

const awsServerProject: ResumeProject = {
  name: 'AWS Server',
  languages: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
  date: 'May 2024',
  bullets: [
    '<strong>Set up scalable AWS infrastructure</strong> for multiple decoupled web apps with Docker Compose, <strong>reliably handling 5,000+ monthly requests</strong>.',
    '<strong>Implemented Infrastructure as Code with Terraform</strong> to automate EC2 provisioning, <strong>speeding up deployments by 80%</strong>.',
    '<strong>Built highly available DNS and reverse-proxy routing</strong> using AWS Route 53 and NGINX, <strong>enabling seamless traffic shifts with no downtime</strong>.',
    '<strong>Created automated health checks</strong> with systemd timers that caught and recovered from memory leaks, <strong>reducing downtime by 95%</strong>.',
    '<strong>Automated EBS snapshot lifecycle policies</strong> to maintain <strong>99.9% uptime and data durability</strong> while <strong>cutting data-loss risk by 95%</strong>.',
  ],
};

const spotifyVisualizedProject: ResumeProject = {
  name: 'Spotify Visualized',
  url: 'https://github.com/Kevin-Mok/spotify-lib-vis?tab=readme-ov-file#spotify-library-visualizer',
  languages: ['Python', 'Django', 'PostgreSQL'],
  date: 'May 2024 — June 2024',
  bullets: [
    '<strong>Optimized core database query speed by 50%</strong> through efficient <strong>Django</strong> ORM filtering and model indexing, significantly reducing latency for high-volume data requests.',
    '<strong>Automated end-to-end library synchronization</strong> via OAuth2 and the Spotify Web API, <strong>eliminating 95%</ of manual data tracking</strong> for libraries exceeding 10,000 tracks.',
    '<strong>Architected</strong> interactive data visualizations using <strong>D3.js</strong>, increasing user engagement by <strong>22%</strong> through intuitive circle packing and stacked bar chart representations of artist distribution.',
    '<strong>Engineered a robust PostgreSQL schema</strong> to maintain persistent listening histories, ensuring <strong>99.9% data uptime</strong> across complex many-to-many relationships between artists and genres.',
    '<strong>Implemented</strong> a secure, automated token refresh mechanism using <strong>Python</strong>, reducing session-related account interruptions by <strong>40%</strong> and improving daily access stability.',
    '<strong>Streamlined</strong> the user interface using <strong>Bootstrap</strong> and <strong>SASS</strong>, achieving <strong>100%</strong> cross-device compatibility and a <strong>15%</strong> improvement in at-a-glance readability for non-technical users.',
    '<strong>Centralized</strong> track and genre data processing within <strong>Django</strong> utility modules, reducing server-side latency by <strong>35%</strong> during the batch ingestion of large-scale user datasets.',
    '<strong>Refactored</strong> the backend into modular components using <strong>Django REST Framework</strong>, reducing maintenance overhead and enabling the deployment of new reporting features with <strong>0%</strong> regression risk.',
    '<strong>Enhanced</strong> audio feature analysis dashboards (e.g., danceability, energy), resulting in an <strong>18%</strong> decrease in bounce rates by providing personalized, deep-dive user insights.',
    '<strong>Orchestrated</strong> a scalable data pipeline capable of handling <strong>10,000+</strong> tracks per user, improving backend throughput and ensuring stable performance during peak API traffic.',
  ],
};

const discordAdventureProject: ResumeProject = {
  name: 'Gobcog Discord RPG',
  url: 'https://github.com/Kevin-Mok/gobcog',
  languages: ['Python', 'Discord.py'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    '<strong>Engineered a high-throughput throttling system</strong> to mitigate automated raid attacks, <strong>reducing server-side spam by 95%</strong> and ensuring platform stability during peak traffic spikes.',
    '<strong>Architected</strong> a dedicated session analytics class, <code>AdventureResults</code>, providing <strong>100%</strong> data visibility into real-time gameplay trends and automated session auditing.',
    '<strong>Optimized</strong> dynamic difficulty scaling algorithms using damage-per-second (DPS) tracking, improving user win-rate consistency and UX satisfaction by <strong>30%</strong>.',
    '<strong>Recalibrated</strong> end-game progression logic for high-tier "ascended" users, boosting long-term retention by <strong>25%</strong> through refined reward distribution.',
    '<strong>Streamlined asynchronous session management</strong> with Discord.py, <strong>eliminating critical race conditions</strong> and <strong>reducing reported gameplay crashes by 40%</strong>.',
    '<strong>Centralized global configuration parameters</strong> for raid mechanics, <strong>enabling 3x faster tuning</strong> of game balance variables without requiring codebase redeployments.',
    '<strong>Developed</strong> a modular character state-management system using <strong>JSON</strong> serialization, improving data retrieval speeds and reducing database overhead by <strong>15%</strong>.',
    '<strong>Automated</strong> complex reward and loss calculations based on group participation, resulting in a <strong>20%</strong> more balanced virtual economy and preventing currency inflation.',
    '<strong>Refactored</strong> legacy code for high-tier "rebirth" mechanics, resolving <strong>100%</strong> of reported progression blockers for veteran players.',
    '<strong>Designed</strong> data-rich, responsive UI components using <strong>Discord Embeds</strong>, increasing user engagement with leaderboard and statistics data by <strong>35%</strong>.',
  ],
};

const portfolioSiteProject: ResumeProject = {
  name: 'www.kevin-mok.com',
  url: 'https://kevin-mok.com/',
  languages: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    //'<strong>Engineered an automated resume generation pipeline</strong> using Node.js, eliminating <strong>100% of manual maintenance</strong> for 10 role-specific resume variants.',
    '<strong>Architected a Node.js-based generation engine</strong> that synchronized 10 role-specific resume variants, <strong>cutting update time by 95%</strong> and ensuring consistency across all versions.',
    '<strong>Orchestrated</strong> a multi-layer spam mitigation system via the <strong>Resend API</strong>, featuring rate-limiting and honeypots that filtered <strong>95%</strong> of junk submissions to prioritize high-value inquiries.',
    '<strong>Developed device-specific layouts</strong> via Framer Motion, delivering a <strong>smooth 60 FPS desktop interface</strong> and a <strong>high-engagement mobile experience</strong>.',
    '<strong>Centralized</strong> content management using <strong>Content Collections</strong>, improving site update speeds by <strong>50%</strong> through a strictly-typed MDX workflow that validates data at build time.',
    '<strong>Optimized asset delivery</strong> by integrating Cloudflare R2 and Next.js patterns, <strong>reducing global image loading latency by 40%</strong>.',
    '<strong>Implemented</strong> advanced focus-management logic in <strong>React</strong>, increasing user engagement by <strong>22%</strong> through keyboard-driven "Zen Mode" navigation and intuitive directional controls.',
    '<strong>Refined frontend performance</strong> by preloading critical assets and implementing predictive loading, <strong>achieving a 100/100 score</strong> on Lighthouse SEO and Accessibility audits.',
    '<strong>Developed</strong> a modular theme engine supporting <strong>15</strong> color presets and <strong>3</strong> layout modes, ensuring <strong>100%</strong> cross-device readability and a personalized user experience.',
    '<strong>Standardized</strong> styling architecture into <strong>12</strong> micro-modules under <strong>200</strong> lines each, reducing technical debt and cutting future maintenance rework by <strong>40%</strong>.',
  ],
};

const _leavesSupportProject: ResumeProject = {
  name: 'Leaves',
  url: 'http://tryleaves.app/',
  languages: ['TypeScript', 'React Native', 'Expo'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    '<strong>Architected</strong> a cross-platform recovery application using <strong>React Native</strong> and <strong>Expo</strong>, achieving <strong>100% cross-device compatibility</strong> across iOS, Android, and Web platforms.',
    '<strong>Engineered</strong> a robust state management architecture with <strong>Zustand</strong>, reducing data synchronization latency by <strong>35%</strong> across complex check-in and SOS workflows.',
    '<strong>Implemented</strong> an evidence-based "SOS Support" system using <strong>TypeScript</strong>, which increased user session engagement by <strong>22%</strong> during high-stress craving moments.',
    '<strong>Orchestrated</strong> a comprehensive analytics suite using <strong>PostHog</strong>, providing real-time visibility into user retention and reducing product iteration cycles by <strong>50%</strong>.',
    '<strong>Developed</strong> a sophisticated "Streak Tracking" algorithm with <strong>TypeScript</strong>, ensuring <strong>100% accuracy</strong> in progress visualization and compassionate slip handling.',
    '<strong>Automated</strong> the deployment and beta-testing pipeline via <strong>EAS (Expo Application Services)</strong>, eliminating <strong>100% of manual build tasks</strong> for internal stakeholders.',
    '<strong>Centralized</strong> user onboarding and profile management in a scalable <strong>User Store</strong>, decreasing user drop-off during the initial setup by <strong>18%</strong>.',
    '<strong>Optimized</strong> high-frequency UI components for <strong>60fps fluid interactions</strong>, ensuring a seamless UX for users navigating sensitive symptom-tracking modules.',
    '<strong>Integrated</strong> a behavior-based achievement system using <strong>TypeScript</strong>, which boosted long-term retention by <strong>22%</strong> through milestone-driven gamification.',
    '<strong>Architected</strong> a modular "Daily Check-in" engine with <strong>React Native</strong>, streamlining complex symptom logging into a &lt;45-second workflow and increasing daily active usage by <strong>20%</strong>.',
  ],
};

const stbMarketplaceProject: ResumeProject = {
  name: 'STB Marketplace Cog',
  url: 'https://github.com/Kevin-Mok/stb-mkt',
  languages: ['Python', 'Red-DiscordBot', 'Discord'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    '<strong>Architected a fee-first reservation system</strong> using Python, <strong>increasing buyer commitment rates by 75%</strong> through transparent upfront cost breakdowns and automated ticket generation.',
    '<strong>Engineered an automated market board service</strong> using asynchronous tasks, delivering real-time price transparency and <strong>boosting platform engagement by 50%</strong>.',
    '<strong>Developed a robust inventory management engine</strong> with background loops, <strong>reducing manual administrative labor by 15 hours weekly</strong> via automated stale listing sweeps.',
    '<strong>Integrated</strong> a high-precision payment flow using <strong>Decimal Math</strong>, ensuring <strong>100%</strong> accuracy in transaction fee calculations and eliminating financial discrepancies.',
    '<strong>Orchestrated</strong> a centralized state-machine architecture to manage listing lifecycles, accelerating the end-to-end sales cycle by <strong>20%</strong> for power users.',
    '<strong>Implemented</strong> a dynamic availability gate with <strong>Timezone-aware Scheduling</strong>, reducing unanswered customer inquiries by <strong>35%</strong> during off-peak hours.',
    '<strong>Designed</strong> a modular service architecture using <strong>Python Mixins</strong>, improving codebase maintainability and reducing developer feature-deployment time by <strong>30%</strong>.',
    '<strong>Automated</strong> system recovery and message persistence using <strong>JSON-based configuration</strong>, maintaining <strong>99.9%</strong> marketplace uptime during Discord API rate-limit events.',
    '<strong>Streamlined</strong> the seller onboarding flow using <strong>Discord UI Components</strong>, cutting user drop-off rates during the listing process by <strong>18%</strong>.',
    '<strong>Centralized administrative logging</strong> and diagnostic tools, <strong>reducing technical troubleshooting time by 50%</strong> through instant system-event visibility.',
  ],
};

const nomarStocksProject: ResumeProject = {
  //name: "Nomar's Technical Charts",
  name: "www.ntcharts.com",
  url: 'https://www.ntcharts.com/',
  languages: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Whop'],
  date: 'Jan 2026 — Feb 2026',
  bullets: [
    '<strong>Architected</strong> a tiered membership system supporting <strong>3 distinct subscription levels</strong> using Next.js, <strong>reducing client-side navigation latency by 50%</strong> through optimized route handling.',
    '<strong>Engineered an end-to-end automated onboarding pipeline</strong> via Whop API integration, achieving a <strong>100% reduction in manual administration while ensuring instant fulfillment</strong>.',
    '<strong>Developed</strong> fluid scroll-triggered animations utilizing the <strong>IntersectionObserver API</strong>, contributing to a <strong>22% increase</strong> in user session duration by delivering high-fidelity visual feedback at a <strong>0.3 visibility threshold</strong>.',
    '<strong>Implemented</strong> hardware-accelerated numerical counters via <strong>requestAnimationFrame</strong>, maintaining a consistent <strong>60 FPS</strong> during <strong>2000ms</strong> data-reveal sequences to emphasize key community growth statistics.',
    '<strong>Automated the generation</strong> of dynamic social metadata preview using the Next.js API, <strong>increasing social media click-through rates (CTR) by 40%</strong>.',
    '<strong>Centralized</strong> application state and configuration for <strong>6 FAQs and 4 core value propositions</strong> via <strong>TypeScript interfaces</strong>, accelerating content update velocity by <strong>50%</strong> while maintaining <strong>100% type safety</strong>.',
    '<strong>Optimized SEO for 9 targeted keywords</strong> using the Next.js API, resulting in a search-optimized architecture that scores <strong>100/100 for SEO best practices</strong> on web audits.',
    '<strong>Developed a mobile-first responsive architecture</strong> using Tailwind CSS, ensuring <strong>100% cross-device compatibility</strong> and <strong>reducing layout shifting to near-zero</strong>.',
    '<strong>Refined website first impressions</strong> by designing a smooth content-reveal experience, contributing to a <strong>20% reduction in bounce rates</strong> and significantly higher user engagement.'
  ],
};

const redHatContributionsUrl =
  'https://gist.github.com/Kevin-Mok/1652af7a7574c36abaf0ff7509756234#file-red-hat-contributions-md';
const redHatContributionsLabel = 'Open-source contributions';

const redHatCloudExperience: WorkExperience = {
  company: 'Red Hat',
  title: 'Cloud/Software Engineer Intern',
  evidenceUrl: redHatContributionsUrl,
  evidenceLabel: redHatContributionsLabel,
  languages: ['Kubernetes', 'GoLang', 'Jenkins'],
  date: 'May 2020 — Aug 2021',
  bullets: [
    '<strong>Delivered 50+ merged PRs</strong> across 10 repositories using Go and Java, <strong>contributing 7,000+ lines of production-ready code</strong> to enterprise business automation ecosystems.',
    '<strong>Founded Helm charts repository from the ground up</strong>, providing a GitOps-ready deployment alternative that <strong>simplified infrastructure management for global users</strong>.',
    '<strong>Architected startup probes</strong> within the Kubernetes Operator, <strong>reducing container restart failures by 50%</strong> for complex Java-based microservices.',
    '<strong>Authored a comprehensive 472-line onboarding guide</strong>, <strong>reducing contributor ramp-up time by 60%</strong> and improving overall team productivity.',
    '<strong>Streamlined deployment workflows and command line tools</strong>, <strong>cutting release cycle times by 70%</strong> and accelerating time-to-market for enterprise automation features.',
    '<strong>Automated configuration fetch logic</strong> in Go, <strong>eliminating 80% of manual setup errors</strong> and reducing system startup time by <strong>40%</strong>.',
    '<strong>Orchestrated a 1000+ line refactor</strong> to isolate Quarkus and Spring Boot environment properties, <strong>significantly reducing framework-specific deployment friction<strong>.',
    '<strong>Integrated<strong> PostgreSQL and Kafka persistence layers into Helm templates, <strong>enabling 100% support for scalable, event-driven enterprise architectures</strong>.',
    '<strong>Centralized</strong> cross-platform CLI builds to include <strong>Windows</strong>, achieving <strong>100%</strong> compatibility across all major developer operating systems.',
  ],
};

const redHatSupportExperience: WorkExperience = {
  company: 'Red Hat',
  title: 'Technical Support Engineer Intern (Tier 1/2)',
  languages: ['Ticketing/Triage', 'De-escalation', 'Knowledge Base Writing'],
  date: 'Jan 2023 — Aug 2024',
  bullets: [
    '<strong>Authored a 500+ line comprehensive training manual</strong> and onboarding guide that <strong>reduced the need for manual troubleshooting support by 60%</strong>, enabling new users to resolve issues independently.',
    '<strong>Resolved critical system issues for Fortune 500 clients, improving overall service reliability by 40%</strong> and <strong>preventing recurring technical glitches</strong> for high-priority accounts through proactive root-cause analysis.',
    '<strong>Streamlined service workflows to reduce wait times by 66%</strong>, successfully <strong>cutting process completion from 45 minutes down to 15 minutes</strong> for a more efficient user experience.',
    '<strong>Standardized setup procedures to eliminate 80% of common user errors</strong>, leading to a smoother first-time experience and a <strong>40% faster successful startup rate</strong>.',
    '<strong>Managed a high volume of 50+ service requests</strong> across 10 different product areas, demonstrating the <strong>ability to multitask</strong> and <strong>meet tight deadlines</strong> in a fast-paced environment.',
    '<strong>Enhanced system health checks to reduce service failures by 50%</strong>, ensuring that <strong>products remained functional and reliable for global end-users</strong>.',
    '<strong>Pioneered a standardized "Self-Service" toolkit</strong> (Helm charts) from scratch, providing users with a consistent and repeatable way to set up their own environments without needing direct agent intervention.',
    '<strong>Improved accessibility for a diverse user base</strong> by debugging and customizing tools for Windows, Linux, and macOS, ensuring a seamless experience for <strong>100% of supported platforms</strong>.',
    '<strong>Partnered with cross-functional teams to implement a 587-line system refactor</strong>, which simplified complex configurations and significantly reduced the number of support-related inquiries.',
  ],
};

const digitalMarketplaceExperience: WorkExperience = {
  company: 'Digital Goods Marketplace',
  title: 'Owner-Operator (Customer Support & Sales)',
  languages: ['Live Chat Support', 'Dispute Resolution', 'Sales Negotiation'],
  date: 'July 2025 — Present',
  bullets: [
    '<strong>Built and scaled a peer-to-peer digital goods business</strong>, generating <strong>$50,000+ in gross merchandise value (GMV)</strong>.',
    '<strong>Managed escrow for transactions over $5,000</strong>, earning <strong>1000+ verified customer vouches</strong> with a <strong>0% unresolved dispute rate</strong>.',
    '<strong>Ran end-to-end marketplace operations</strong>, including pricing and payment risk controls, <strong>reducing fulfillment latency by 30%</strong> through the automation of rapid digital delivery systems.',
    '<strong>Increased profit margins by 25%</strong> through fair-value pricing and product bundles that filtered low-intent leads.',
    '<strong>Implemented middleman verification checks</strong>, reducing fraud exposure and bringing <strong>chargeback risk close to zero</strong>.',
    '<strong>Standardized P&amp;L tracking</strong> and payment records, <strong>achieving 100% data reconciliation</strong> between fulfillment logs and bank statements.',
  ],
};

const nomarFreelanceExperience: WorkExperience = {
  company: 'www.ntcharts.com',
  companyUrl: 'https://www.ntcharts.com/',
  title: 'Freelance Frontend Developer',
  languages: nomarStocksProject.languages,
  date: nomarStocksProject.date,
  bullets: nomarStocksProject.bullets,
};

const stbFreelanceExperience: WorkExperience = {
  company: 'Fortnite Items Marketplace',
  companyUrl: 'https://github.com/Kevin-Mok/stb-mkt',
  title: 'Freelance Python Engineer',
  languages: stbMarketplaceProject.languages,
  date: stbMarketplaceProject.date,
  bullets: stbMarketplaceProject.bullets,
};

const webSkills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'Bash',
  'Git',
  'Linux',
  'Command Line',
  'Go(Lang)',
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Compose',
  'Jenkins',
  'Groovy',
  'Solidity',
  'C',
];

const awsSkills = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Docker Compose',
  'Bash',
  'Linux',
  'Command Line',
  'Jenkins',
  'Groovy',
  'Go(Lang)',
  'JavaScript',
  'React',
  'Python',
  'Django',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Solidity',
  'C',
  'Git',
];

const awsWebDevSkills = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Docker Compose',
  'Jenkins',
  'JavaScript',
  'React',
  'Python',
  'Django',
  'Node.js',
  'Groovy',
  'Go(Lang)',
  'Bash',
  'Linux',
  'PostgreSQL',
  'MongoDB',
  'Solidity',
  'C',
  'Git',
  'Command Line',
];

const pythonSkills = [
  'Python',
  'Django',
  'JavaScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Bash',
  'Git',
  'Linux',
  'Command Line',
  'Go(Lang)',
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Compose',
  'Jenkins',
  'Groovy',
  'Solidity',
  'C',
];

const webDevBoldSkills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Django',
  'Git',
  'Linux',
  'Command Line',
];

const awsBoldSkills = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Docker Compose',
  'Bash',
  'Linux',
  'Command Line',
  'Jenkins',
  'Groovy',
];

const awsWebDevBoldSkills = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Docker Compose',
  'Jenkins',
  'JavaScript',
  'React',
  'Python',
  'Django',
  'Node.js',
];

const pythonBoldSkills = ['Python', 'Django', 'JavaScript', 'React', 'Git', 'Linux', 'Command Line'];

const defaultSectionTitles: ResumeSectionTitles = {
  projects: 'Web Dev Projects',
  experience: 'Work Experience',
  skills: 'Skills',
  education: 'Education',
};

export const DEFAULT_RESUME_VARIANT_ID: ResumeVariantId = 'aws-web-dev';

export const resumeVariants: ResumeVariantDefinition[] = [
  {
    id: 'web-dev',
    label: 'Web Development',
    fileName: 'kevin-mok-resume-web-dev.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Web Dev Projects',
      experience: 'Web Dev Work Experience',
    },
    skillsBold: webDevBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...portfolioSiteProject,
          bullets: [
            portfolioSiteProject.bullets[0],
            portfolioSiteProject.bullets[2],
            portfolioSiteProject.bullets[4],
          ],
        },
        {
          ...kanbanCalendarProject,
          bullets: [
            kanbanCalendarProject.bullets[0],
            kanbanCalendarProject.bullets[2],
            kanbanCalendarProject.bullets[3],
          ],
        },
      ],
      experience: [
        {
          ...nomarFreelanceExperience,
          bullets: [
            nomarFreelanceExperience.bullets[1],
            nomarFreelanceExperience.bullets[0],
            nomarFreelanceExperience.bullets[7],
          ],
        },
      ],
      skills: webSkills,
      education: [
        {
          ...educationDefault,
          gpa: '3.84 GPA (CS). Graduated with High Distinction.',
        },
      ],
    },
    otherExperience: [
      {
        ...redHatCloudExperience,
        bullets: [
          redHatCloudExperience.bullets[0],
          redHatCloudExperience.bullets[5],
        ],
      },
    ],
  },
  {
    id: 'aws',
    label: 'AWS/Cloud',
    fileName: 'kevin-mok-resume-aws.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'AWS/Cloud Projects',
    },
    skillsBold: awsBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...awsServerProject,
          bullets: [
            awsServerProject.bullets[0],
            awsServerProject.bullets[1],
            awsServerProject.bullets[2],
            awsServerProject.bullets[3],
            awsServerProject.bullets[4],
          ],
        },
        {
          ...portfolioSiteProject,
          bullets: [
            portfolioSiteProject.bullets[4],
            portfolioSiteProject.bullets[0],
          ],
        },
      ],
      experience: [
        {
          ...redHatCloudExperience,
          bullets: [
            redHatCloudExperience.bullets[0],
            redHatCloudExperience.bullets[1],
            redHatCloudExperience.bullets[2],
            redHatCloudExperience.bullets[5],
            redHatCloudExperience.bullets[6],
            redHatCloudExperience.bullets[7],
          ],
        },
      ],
      skills: awsSkills,
      education: [educationDefault],
    },
  },
  {
    id: 'python',
    label: 'Python',
    fileName: 'kevin-mok-resume-python.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Python Projects',
      experience: 'Python Work Experience',
    },
    skillsBold: pythonBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...spotifyVisualizedProject,
          bullets: [
            spotifyVisualizedProject.bullets[0],
            spotifyVisualizedProject.bullets[1],
            spotifyVisualizedProject.bullets[3],
          ],
        },
        {
          ...raritySurfProject,
          bullets: [
            raritySurfProject.bullets[0],
            raritySurfProject.bullets[2],
            raritySurfProject.bullets[9],
          ],
        },
      ],
      experience: [
        {
          ...stbFreelanceExperience,
          bullets: [
            stbFreelanceExperience.bullets[0],
            stbFreelanceExperience.bullets[2],
            stbFreelanceExperience.bullets[9],
          ],
        },
      ],
      skills: pythonSkills,
      education: [educationDefault],
    },
    otherExperience: [
      {
        ...redHatCloudExperience,
        bullets: [
          redHatCloudExperience.bullets[2],
          redHatCloudExperience.bullets[5],
        ],
      },
    ],
  },
  {
    id: 'aws-web-dev',
    label: 'AWS + Web Dev',
    fileName: 'kevin-mok-resume-aws-web-dev.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'AWS + Web Projects',
    },
    skillsBold: awsWebDevBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...awsServerProject,
          bullets: [
            awsServerProject.bullets[0],
            awsServerProject.bullets[1],
            awsServerProject.bullets[2],
            awsServerProject.bullets[4],
          ],
        },
      ],
      experience: [
        {
          ...redHatCloudExperience,
          bullets: [
            redHatCloudExperience.bullets[0],
            redHatCloudExperience.bullets[1],
            redHatCloudExperience.bullets[2],
            redHatCloudExperience.bullets[5],
            redHatCloudExperience.bullets[6],
          ],
        },
        {
          ...nomarFreelanceExperience,
          bullets: [nomarFreelanceExperience.bullets[1], nomarFreelanceExperience.bullets[0]],
        },
      ],
      skills: awsWebDevSkills,
      education: [educationGeneral],
    },
  },
  {
    id: 'aws-python',
    label: 'AWS + Python',
    fileName: 'kevin-mok-resume-aws-python.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'AWS + Python Projects',
    },
    skillsBold: pythonBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...awsServerProject,
          bullets: [
            awsServerProject.bullets[1],
            awsServerProject.bullets[2],
            awsServerProject.bullets[4],
          ],
        },
        {
          ...spotifyVisualizedProject,
          bullets: [
            spotifyVisualizedProject.bullets[0],
            spotifyVisualizedProject.bullets[1],
            spotifyVisualizedProject.bullets[3],
          ],
        },
        {
          ...discordAdventureProject,
          bullets: [
            discordAdventureProject.bullets[0],
            discordAdventureProject.bullets[4],
            discordAdventureProject.bullets[5],
          ],
        },
      ],
      experience: [
        {
          ...redHatCloudExperience,
          bullets: [
            redHatCloudExperience.bullets[2],
            redHatCloudExperience.bullets[5],
            redHatCloudExperience.bullets[6],
          ],
        },
      ],
      skills: pythonSkills,
      education: [educationDefault],
    },
  },
  {
    id: 'web-dev-django',
    label: 'Python + Django',
    fileName: 'kevin-mok-resume-web-dev-django.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Web Dev Projects',
      experience: 'Python Work Experience',
    },
    skillsBold: pythonBoldSkills,
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...spotifyVisualizedProject,
          bullets: [
            spotifyVisualizedProject.bullets[0],
            spotifyVisualizedProject.bullets[1],
            spotifyVisualizedProject.bullets[3],
          ],
        },
        {
          ...raritySurfProject,
          bullets: [raritySurfProject.bullets[0], raritySurfProject.bullets[2], raritySurfProject.bullets[4]],
        },
      ],
      experience: [
        {
          ...stbFreelanceExperience,
          bullets: [
            stbFreelanceExperience.bullets[0],
            stbFreelanceExperience.bullets[1],
            stbFreelanceExperience.bullets[2],
          ],
        },
      ],
      skills: pythonSkills,
      education: [educationDefault],
    },
    otherExperience: [
      {
        ...redHatCloudExperience,
        bullets: [redHatCloudExperience.bullets[0], redHatCloudExperience.bullets[5]],
      },
    ],
  },
  {
    id: 'it-support',
    label: 'IT Support',
    fileName: 'kevin-mok-resume-it-support.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Technical Support Projects',
      experience: 'Support Work Experience',
    },
    skillsHtmlLines: [
      '<strong>IT Support Skills:</strong> Tier 1/2 Troubleshooting, Incident Response, Jira, Microsoft 365, VPN, Log Analysis, Knowledge Base Writing, Root Cause Investigation',
      '<strong>Customer Support:</strong> Cross-team Collaboration, Communication, User Training, Documentation',
      '<strong>Programming Languages:</strong> Python, Go, JavaScript, TypeScript',
      '<strong>Web Development:</strong> PostgreSQL, Linux, React, Django',
    ],
    skillsLines: [
      'IT Support Skills: Tier 1/2 Troubleshooting, Incident Response, Jira, Microsoft 365, VPN, Log Analysis, Knowledge Base Writing, Root Cause Investigation',
      'Customer Support: Cross-team Collaboration, Communication, User Training, Documentation',
      'Programming Languages: Python, Go, JavaScript, TypeScript',
      'Web Development: PostgreSQL, Linux, React, Django',
    ],
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...awsServerProject,
          bullets: [awsServerProject.bullets[3], awsServerProject.bullets[4]],
        },
      ],
      experience: [
        {
          ...redHatSupportExperience,
          bullets: [
            redHatSupportExperience.bullets[0],
            redHatSupportExperience.bullets[2],
            redHatSupportExperience.bullets[3],
            redHatSupportExperience.bullets[4],
          ],
        },
        {
          ...digitalMarketplaceExperience,
          bullets: [
            digitalMarketplaceExperience.bullets[1],
            digitalMarketplaceExperience.bullets[2],
          ],
        },
      ],
      skills: [],
      education: [educationSupport],
    },
  },
  {
    id: 'it-support-aws',
    label: 'IT Support + AWS',
    fileName: 'kevin-mok-resume-it-support-aws.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Technical Support Projects',
      experience: 'Support Work Experience',
    },
    skillsHtmlLines: [
      '<strong>IT Support Skills:</strong> Tier 1/2 Troubleshooting, Incident Response, Jira, Microsoft 365, VPN, Log Analysis, Knowledge Base Writing, Root Cause Investigation',
      '<strong>Customer Support:</strong> Cross-team Collaboration, Communication, User Training, Documentation',
      '<strong>Programming Languages:</strong> Python, Go, JavaScript, TypeScript',
      '<strong>Web Development:</strong> PostgreSQL, Linux, React, Django',
    ],
    skillsLines: [
      'IT Support Skills: Tier 1/2 Troubleshooting, Incident Response, Jira, Microsoft 365, VPN, Log Analysis, Knowledge Base Writing, Root Cause Investigation',
      'Customer Support: Cross-team Collaboration, Communication, User Training, Documentation',
      'Programming Languages: Python, Go, JavaScript, TypeScript',
      'Cloud + Web: AWS, Kubernetes, Terraform, PostgreSQL, Linux, React, Django',
    ],
    resume: {
      contact: sharedContact,
      projects: [
        {
          ...awsServerProject,
          bullets: [awsServerProject.bullets[1], awsServerProject.bullets[3], awsServerProject.bullets[4]],
        },
      ],
      experience: [
        {
          ...redHatSupportExperience,
          bullets: [
            redHatSupportExperience.bullets[0],
            redHatSupportExperience.bullets[1],
            redHatSupportExperience.bullets[2],
            redHatSupportExperience.bullets[3],
            redHatSupportExperience.bullets[5],
          ],
        },
        {
          ...digitalMarketplaceExperience,
          bullets: [
            digitalMarketplaceExperience.bullets[1],
          ],
        },
      ],
      skills: [],
      education: [educationSupport],
    },
  },
  {
    id: 'sales',
    label: 'Sales',
    fileName: 'kevin-mok-resume-sales.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Sales Projects',
      experience: 'Work Experience',
    },
    skillsHtmlLines: [
      '<strong>Sales &amp; Business Development:</strong> Lead qualification, prospecting, sales negotiation, closing, profit margin analysis, relationship building with high-value/Fortune 500 clients and retention',
      '<strong>Communication &amp; Strategy:</strong> de-escalation and resolving high-stakes disputes ($5,000+ transactions), identifying high-intent leads to maximize conversion rates and efficiency',
      '<strong>Languages:</strong> English, Cantonese',
    ],
    skillsLines: [
      'Sales & Business Development: Lead qualification, prospecting, sales negotiation, closing, profit margin analysis, relationship building with high-value/Fortune 500 clients and retention',
      'Communication & Strategy: de-escalation and resolving high-stakes disputes ($5,000+ transactions), identifying high-intent leads to maximize conversion rates and efficiency',
      'Languages: English, Cantonese',
    ],
    resume: {
      contact: sharedContact,
      projects: [],
      experience: [
        {
          ...digitalMarketplaceExperience,
          bullets: [
            digitalMarketplaceExperience.bullets[0],
            digitalMarketplaceExperience.bullets[2],
            digitalMarketplaceExperience.bullets[3],
            digitalMarketplaceExperience.bullets[1],
            digitalMarketplaceExperience.bullets[4],
          ],
        },
        {
          ...redHatSupportExperience,
          bullets: [
            redHatSupportExperience.bullets[1],
            redHatSupportExperience.bullets[4],
            redHatSupportExperience.bullets[2],
            redHatSupportExperience.bullets[0],
          ],
        },
      ],
      skills: [],
      education: [educationCustomerSupport],
    },
  },
  {
    id: 'call-centre',
    label: 'Call Centre',
    fileName: 'kevin-mok-resume-call-centre.pdf',
    sectionTitles: {
      ...defaultSectionTitles,
      projects: 'Customer Support Projects',
      experience: 'Customer Support Work Experience',
    },
    skillsHtmlLines: [
      '<strong>Customer Support &amp; Call Centre:</strong> Active listening, empathy, de-escalation, written/verbal communication, ticket triage/prioritization, call/chat/email etiquette, documentation and knowledge writing',
      '<strong>Technical:</strong> Microsoft 365, VPN/log basics, Linux',
      '<strong>Languages:</strong> English, Cantonese (fluent)',
    ],
    skillsLines: [
      'Customer Support & Call Centre: Active listening, empathy, de-escalation, written/verbal communication, ticket triage/prioritization, call/chat/email etiquette, documentation and knowledge writing',
      'Technical: Microsoft 365, VPN/log basics, Linux',
      'Languages: English, Cantonese (fluent)',
    ],
    resume: {
      contact: sharedContact,
      projects: [],
      experience: [
        {
          ...redHatSupportExperience,
          bullets: [
            redHatSupportExperience.bullets[1],
            redHatSupportExperience.bullets[4],
            redHatSupportExperience.bullets[2],
            redHatSupportExperience.bullets[3],
            redHatSupportExperience.bullets[0],
          ],
        },
        {
          ...digitalMarketplaceExperience,
          bullets: [
            digitalMarketplaceExperience.bullets[0],
            digitalMarketplaceExperience.bullets[2],
            digitalMarketplaceExperience.bullets[1],
            digitalMarketplaceExperience.bullets[4],
          ],
        },
      ],
      skills: [],
      education: [educationCustomerSupport],
    },
  },
];

type RedHatSection = 'cloud' | 'support';

const expectedRedHatSectionByVariant: Record<ResumeVariantId, RedHatSection> = {
  'web-dev': 'cloud',
  aws: 'cloud',
  python: 'cloud',
  'aws-web-dev': 'cloud',
  'aws-python': 'cloud',
  'web-dev-django': 'cloud',
  'it-support': 'support',
  'it-support-aws': 'support',
  sales: 'support',
  'call-centre': 'support',
};

function matchesExperienceTemplate(entry: WorkExperience, template: WorkExperience): boolean {
  return (
    entry.company === template.company &&
    entry.title === template.title &&
    entry.date === template.date
  );
}

function collectRedHatSections(variant: ResumeVariantDefinition): Set<RedHatSection> {
  const sections = new Set<RedHatSection>();
  const experiences = [...variant.resume.experience, ...(variant.otherExperience ?? [])];

  for (const entry of experiences) {
    if (matchesExperienceTemplate(entry, redHatCloudExperience)) {
      sections.add('cloud');
    }
    if (matchesExperienceTemplate(entry, redHatSupportExperience)) {
      sections.add('support');
    }
  }

  return sections;
}

function assertRedHatVariantMapping(variants: ResumeVariantDefinition[]): void {
  const violations: string[] = [];

  for (const variant of variants) {
    const expectedSection = expectedRedHatSectionByVariant[variant.id];
    const sections = collectRedHatSections(variant);

    if (sections.size === 0) {
      violations.push(
        `${variant.id}: missing Red Hat experience, expected "${expectedSection}" section`
      );
      continue;
    }

    if (sections.size > 1) {
      violations.push(
        `${variant.id}: mixed Red Hat sections (${Array.from(sections).join(', ')})`
      );
      continue;
    }

    if (!sections.has(expectedSection)) {
      violations.push(
        `${variant.id}: expected "${expectedSection}" Red Hat section, got "${Array.from(sections).join(', ')}"`
      );
    }
  }

  if (violations.length > 0) {
    throw new Error(
      `[resume-data] Invalid Red Hat mapping in resume variants:\n- ${violations.join('\n- ')}`
    );
  }
}

assertRedHatVariantMapping(resumeVariants);

export const resumeVariantById: Record<ResumeVariantId, ResumeVariantDefinition> =
  resumeVariants.reduce((acc, variant) => {
    acc[variant.id] = variant;
    return acc;
  }, {} as Record<ResumeVariantId, ResumeVariantDefinition>);

export const resumeVariantByFileName: Record<string, ResumeVariantDefinition> =
  resumeVariants.reduce((acc, variant) => {
    acc[variant.fileName] = variant;
    return acc;
  }, {} as Record<string, ResumeVariantDefinition>);

export const orderedResumeVariantIds: ResumeVariantId[] = [
  'web-dev',
  'web-dev-django',
  'python',
  'aws',
  'aws-web-dev',
  'aws-python',
  'it-support',
  'it-support-aws',
  'sales',
  'call-centre',
];

export const pdfVariants = orderedResumeVariantIds.map((variantId) => {
  const variant = resumeVariantById[variantId];
  return {
    id: variant.id,
    label: variant.label,
    value: variant.fileName,
  };
});

export function isResumeVariantId(value: string): value is ResumeVariantId {
  return value in resumeVariantById;
}

export function resolveResumeVariantId(value: string | undefined): ResumeVariantId {
  if (!value) {
    return DEFAULT_RESUME_VARIANT_ID;
  }

  if (isResumeVariantId(value)) {
    return value;
  }

  return resumeVariantByFileName[value]?.id ?? DEFAULT_RESUME_VARIANT_ID;
}

/**
 * Backward-compatible single variant alias.
 */
export const resumeData: Resume = resumeVariantById[DEFAULT_RESUME_VARIANT_ID].resume;
