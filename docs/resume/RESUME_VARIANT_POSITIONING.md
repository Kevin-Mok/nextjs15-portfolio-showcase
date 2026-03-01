# Resume Variant Positioning

This document maps each active resume variant to its intended positioning.

Source of truth:
- `lib/resume-data.ts` (`resumeVariants`)
- `scripts/lib/resume-pdf-variants.mjs` (`resumePdfVariants`)

Canonical active variants: 10

## Positioning Matrix

| Variant ID | Dropdown Label | PDF File | Purpose | What it is trying to sell |
|---|---|---|---|---|
| `web-dev` | Web Development | `kevin-mok-resume-web-dev.pdf` | Frontend/full-stack applications | TypeScript/React/Node developer who can build and ship web features quickly. |
| `aws` | AWS/Cloud | `kevin-mok-resume-aws.pdf` | Infrastructure and cloud operations | Cloud/platform engineer focused on AWS, Kubernetes, Terraform, uptime, and deployment reliability. |
| `python` | Python | `kevin-mok-resume-python.pdf` | Python-centric backend work | Python/Django engineer with backend architecture and data-heavy app experience. |
| `aws-web-dev` | AWS + Web Dev | `kevin-mok-resume-aws-web-dev.pdf` | Cross-functional cloud + web role | Engineer who bridges infrastructure ownership with web product delivery. |
| `aws-python` | AWS + Python | `kevin-mok-resume-aws-python.pdf` | Cloud automation with Python backend depth | Engineer who combines Python backend execution with AWS/Kubernetes operations. |
| `web-dev-django` | Python + Django | `kevin-mok-resume-web-dev-django.pdf` | Django-oriented web/backend positions | Python web engineer with Django strength plus production-facing development history. |
| `it-support` | IT Support | `kevin-mok-resume-it-support.pdf` | Technical support and incident handling | Tier 1/2 support profile focused on triage, troubleshooting, KB writing, and user communication. |
| `it-support-aws` | IT Support + AWS | `kevin-mok-resume-it-support-aws.pdf` | Support roles touching cloud systems | Support engineer who can troubleshoot user issues and operate in AWS/cloud environments. |
| `sales` | Sales | `kevin-mok-resume-sales.pdf` | Customer-facing sales and support operations | Revenue-aware operator with negotiation, dispute handling, and measurable marketplace outcomes. |
| `call-centre` | Call Centre | `kevin-mok-resume-call-centre.pdf` | High-volume call/chat/email support | Call centre candidate with de-escalation, SLA awareness, queue handling, and clear customer communication. |

## Notes

- Default variant in the app is `aws-web-dev` (best broad fit for web dev + devops/cloud + general SWE targeting).
- Recruiter one-liner (HR-safe, short format):
  `Ex-Cloud Engineer Intern @ Red Hat. Full-stack + cloud engineer (TypeScript/React, AWS/Kubernetes). Linux/FOSS advocate. CS @ UofT.`
- `sales` and `call-centre` share similar support language but differ in emphasis:
  - `sales`: sales/owner-operator outcomes first.
  - `call-centre`: support workflow and service operations first.
