![Organization Logo](https://raw.githubusercontent.com/getflytrap/.github/main/profile/flytrap_logo.png)

# Flytrap: Lightweight Error Monitoring for Development Teams

Welcome to Flytrap, the lightweight, self-hosted error monitoring tool built for small to mid-sized development teams. Flytrap is designed to help you focus on what matters most: identifying, diagnosing, and resolving errors quickly and efficiently. By offering a streamlined alternative to traditional error monitoring tools, Flytrap eliminates the bloat of broader observability platforms, prioritizing simplicity, usability, and full data ownership.

## 🚀 What Is Flytrap?

Flytrap is a developer-first tool that:

- Captures frontend and backend errors across frameworks and languages.
- Provides near real-time notifications via email and in-dashboard pop-ups.
- Is fully provisioned through Terraform on your own AWS account.
- Ensures data ownership, privacy and compliance by keeping your error data within your infrastructure.

With Flytrap, you own your data and control your infrastructure, giving you peace of mind while simplifying error tracking and resolution.

For more detailed insights, please refer to our [case study](https://getflytrap.github.io/).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Why Error Monitoring Matters

Silent failures and unhandled errors can degrade user trust, reduce revenue, and hurt your brand’s reputation. Flytrap ensures no error goes unnoticed, equipping your team with the tools to deliver reliable, user-friendly applications.

## 🛠️ Key Features

- **SDKs for Diverse Frameworks:** Flytrap supports React, Vanilla JavaScript, Express, and Flask, offering seamless integration with your tech stack.
- **Near Real-Time Alerts:** Stay updated on errors via WebSocket dashboard pop-ups and email notifications through Amazon SNS.
- **Context-Rich Error Reports:** Detailed error logs include stack traces, session metadata, and more for efficient debugging.
- **Source Map Support:** Resolve errors in minified JavaScript by securely uploading source maps to your AWS S3 bucket.

## 📂 How to Get Started

1. **Provision Your Infrastructure:** Deploy Flytrap in your AWS account using our Terraform script.
2. **Integrate the SDK:** Add Flytrap’s SDK to your applications to begin capturing errors.
3. **Monitor and Resolve:** Use the Flytrap dashboard to track, prioritize, and fix errors with ease.

For detailed setup instructions, visit our [installation guide](https://github.com/getflytrap/flytrap_terraform).

## 🧑‍🤝‍🧑 Meet the Team

Flytrap is built by a passionate team of engineers dedicated to simplifying error monitoring and empowering development teams. Our mission is to create tools that are lightweight, privacy-first, and developer-friendly.

[Rebecca Biancofiore](https://github.com/fenris55) | Software Engineer | Chattanooga, TN  
[Anthony Kovatch](https://github.com/Akovatch) | Software Engineer | New York, NY
[Clarissa Roeder](https://github.com/clarissaroeder) | Software Engineer | Greater Munich Metropolitan Area, Germany  
[Saul Thompson](https://github.com/saulthompson) | Software Engineer | Seattle, WA

## 📊 About Flytrap’s Architecture and Technologies

Flytrap’s architecture leverages modern technologies to ensure scalability, reliability, and efficiency:

- **Backend:** Built with Python (Flask) for its lightweight and modular design.
- **Frontend:** Powered by React for an intuitive and responsive user interface.
- **Database:** PostgreSQL for structured error data and multi-user support.
- **Near Real-Time Updates:** WebSockets and Amazon SNS provide instant developer notifications.
- **Error Processing:** AWS Lambda ensures efficient, scalable error handling with source map integration for unminified stack traces.
- **Infrastructure:** Docker for containerization and Terraform for automated self-hosted deployments on AWS.

## 🔮 The Flytrap Roadmap

Flytrap is constantly evolving to serve developers better. Planned features include:

- **Version/Release Tracking:** Contextualize errors with specific deployments.
- **Error Aggregation:** Identify patterns and group similar errors.
- **CLI Tool:** Simplify infrastructure management with a Flytrap command-line interface.
- **Breadcrumbs:** Provide contextual event logs for more efficient debugging.
- **AI Integration:** Get intelligent recommendations for faster error resolution.

## 📄 Licensing

All repositories within this organization are licensed under the [MIT License](https://opensource.org/licenses/MIT). Each project includes a `LICENSE` file in its root directory outlining the terms of use.

_Flytrap: Streamlined Error Monitoring for Developers._

---

<div align="center">
  🪰🪤🪲🌱🚦🛠️🪴
</div>
